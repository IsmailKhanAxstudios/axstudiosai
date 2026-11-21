begin;

alter table public.services add column revision uuid not null default gen_random_uuid(), add column deleted_at timestamptz;
alter table public.products add column revision uuid not null default gen_random_uuid(), add column deleted_at timestamptz;

drop policy "Public reads services" on public.services;
drop policy "Public reads products" on public.products;
create policy "Public reads active services" on public.services for select to anon, authenticated using (deleted_at is null);
create policy "Public reads active products" on public.products for select to anon, authenticated using (deleted_at is null);
grant update on public.services, public.products to authenticated;

create policy "Admin reads all services" on public.services for select to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin reads all products" on public.products for select to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin edits services" on public.services for update to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin')
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin edits products" on public.products for update to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin')
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');

create table public.case_studies (
  slug text primary key check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 100),
  title text not null check (length(title) between 1 and 100),
  summary text not null check (length(summary) between 1 and 400),
  client_name text check (length(client_name) <= 120),
  challenge text not null check (length(challenge) between 1 and 8000),
  approach text not null check (length(approach) between 1 and 8000),
  results text not null check (length(results) between 1 and 8000),
  image_path text,
  image_alt text not null default '' check (length(image_alt) <= 200),
  service_slug text references public.services(slug) on delete set null,
  product_slug text references public.products(slug) on delete set null,
  created_at timestamptz not null default now(),
  revision uuid not null default gen_random_uuid(),
  deleted_at timestamptz
);

create index case_studies_service_idx on public.case_studies (service_slug);
create index case_studies_product_idx on public.case_studies (product_slug);
create index case_studies_public_order_idx on public.case_studies (created_at desc) where deleted_at is null;
alter table public.case_studies enable row level security;
revoke all on public.case_studies from anon, authenticated;
grant select on public.case_studies to anon, authenticated;
grant insert, update on public.case_studies to authenticated;
grant all on public.case_studies to service_role;

create policy "Public reads active case studies" on public.case_studies for select to anon, authenticated
  using (deleted_at is null);
create policy "Admin reads all case studies" on public.case_studies for select to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin adds case studies" on public.case_studies for insert to authenticated
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin edits case studies" on public.case_studies for update to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin')
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');

alter policy "Admin uploads AxStudios images" on storage.objects with check (
  bucket_id = 'axstudios-media'
  and (storage.foldername(name))[1] in ('blogs', 'products', 'case-studies')
  and (select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin'
);

commit;
