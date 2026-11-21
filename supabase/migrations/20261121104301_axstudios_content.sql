begin;

create table public.blog_posts (
  slug text primary key check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 100),
  title text not null check (length(title) between 1 and 160),
  category text not null check (length(category) between 1 and 40),
  summary text not null check (length(summary) between 1 and 300),
  author text not null default 'AxStudios' check (length(author) between 1 and 100),
  content text not null check (length(content) <= 40000),
  image_path text,
  image_alt text not null default '' check (length(image_alt) <= 200),
  cover_source text,
  published_at timestamptz,
  revision uuid not null default gen_random_uuid(),
  deleted_at timestamptz,
  sort_order integer not null default 0
);

create table public.services (
  slug text primary key check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 100),
  title text not null check (length(title) between 1 and 120),
  category text not null check (length(category) between 1 and 40),
  description text not null check (length(description) between 1 and 400),
  features text[] not null default '{}',
  icon text not null default 'Sparkles',
  href text not null default '/contact',
  link_label text,
  sort_order integer not null default 100,
  created_at timestamptz not null default now()
);

create table public.products (
  slug text primary key check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug) <= 100),
  name text not null check (length(name) between 1 and 100),
  description text check (length(description) <= 400),
  image_path text not null,
  image_alt text not null default '' check (length(image_alt) <= 200),
  website text check (website is null or website ~ '^https?://'),
  sample boolean not null default false,
  sort_order integer not null default 10,
  created_at timestamptz not null default now()
);

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(name) between 1 and 150),
  email text not null check (length(email) between 3 and 254),
  company text,
  phone text,
  website text,
  business text not null check (length(business) between 1 and 5000),
  automation text not null check (length(automation) between 1 and 5000),
  interest text,
  project_size text,
  timeline text,
  created_at timestamptz not null default now()
);

create index blog_posts_public_order_idx on public.blog_posts (published_at desc nulls last, sort_order) where deleted_at is null;
create index contact_submissions_created_at_idx on public.contact_submissions (created_at desc);

alter table public.blog_posts enable row level security;
alter table public.services enable row level security;
alter table public.products enable row level security;
alter table public.contact_submissions enable row level security;

revoke all on public.blog_posts, public.services, public.products, public.contact_submissions from anon, authenticated;
grant select on public.blog_posts, public.services, public.products to anon, authenticated;
grant insert, update on public.blog_posts to authenticated;
grant insert on public.services, public.products to authenticated;
grant select on public.contact_submissions to authenticated;
grant all on public.blog_posts, public.services, public.products, public.contact_submissions to service_role;

create policy "Public reads published articles" on public.blog_posts for select to anon, authenticated using (deleted_at is null);
create policy "Public reads services" on public.services for select to anon, authenticated using (true);
create policy "Public reads products" on public.products for select to anon, authenticated using (true);
create policy "Admin reads all articles" on public.blog_posts for select to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin creates articles" on public.blog_posts for insert to authenticated
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin edits articles" on public.blog_posts for update to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin')
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin adds services" on public.services for insert to authenticated
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin adds products" on public.products for insert to authenticated
  with check ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin reads contact submissions" on public.contact_submissions for select to authenticated
  using ((select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('axstudios-media', 'axstudios-media', true, 3145728, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

create policy "Admin lists AxStudios images" on storage.objects for select to authenticated
  using (bucket_id = 'axstudios-media' and (select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');
create policy "Admin uploads AxStudios images" on storage.objects for insert to authenticated
  with check (
    bucket_id = 'axstudios-media'
    and (storage.foldername(name))[1] in ('blogs', 'products')
    and (select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin'
  );
create policy "Admin removes AxStudios images" on storage.objects for delete to authenticated
  using (bucket_id = 'axstudios-media' and (select auth.jwt()->'app_metadata'->>'axstudios_role') = 'admin');

commit;
