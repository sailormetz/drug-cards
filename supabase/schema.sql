-- Run once in the Supabase SQL editor (project → SQL → New query → paste → Run).
-- Creates the entitlements table and locks it down so only the service role can write.

create table if not exists public.entitlements (
  user_id            uuid primary key references auth.users(id) on delete cascade,
  has_paid           boolean not null default false,
  stripe_customer_id text,
  stripe_session_id  text,
  paid_at            timestamptz,
  updated_at         timestamptz not null default now()
);

alter table public.entitlements enable row level security;

-- A signed-in user can read their own entitlement row.
drop policy if exists "users read own entitlement" on public.entitlements;
create policy "users read own entitlement"
  on public.entitlements
  for select
  using (auth.uid() = user_id);

-- No insert / update / delete policies for the anon or authenticated roles.
-- The Stripe webhook writes via the service role key, which bypasses RLS.


-- One-time-use access codes. Codes are inserted manually by the operator;
-- the /api/redeem-code endpoint claims them atomically and upserts entitlements.
create table if not exists public.access_codes (
  code        text primary key,
  used        boolean not null default false,
  used_by     uuid references auth.users(id) on delete set null,
  used_at     timestamptz,
  created_at  timestamptz not null default now()
);

alter table public.access_codes enable row level security;
-- No policies → anon/authenticated cannot read or write directly.
-- Only the service role (via /api/redeem-code) touches this table.
