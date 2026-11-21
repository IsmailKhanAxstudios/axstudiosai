begin;

create table public.newsletter_subscribers (
  email text primary key check (email = lower(email) and length(email) between 3 and 254),
  subscribed_at timestamptz not null default now(),
  consent_version text not null
);

alter table public.newsletter_subscribers enable row level security;
revoke all on public.newsletter_subscribers from anon, authenticated;
grant select, insert, delete on public.newsletter_subscribers to service_role;

commit;
