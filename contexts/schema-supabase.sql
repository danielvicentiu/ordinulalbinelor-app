-- ============================================================
-- ORDINUL ALBINELOR — Schema Supabase W01
-- Rulează în Supabase SQL Editor după creare proiect nou
-- Region recomandat: eu-central-1 (Frankfurt)
-- ============================================================

create extension if not exists "pgcrypto";

-- ============================================================
-- TABELA: newsletter_subscribers
-- ============================================================

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  prenume_parinte text not null,
  copii jsonb default '[]'::jsonb,
  -- Format copii: [{"prenume": "Ana", "varsta": 6}, {"prenume": "Mihai", "varsta": 8}]
  status text not null default 'pending' 
    check (status in ('pending', 'confirmed', 'unsubscribed')),
  confirm_token uuid not null default gen_random_uuid(),
  consimtamant_gdpr boolean not null default false,
  consimtamant_data timestamptz,
  ip_signup inet,
  user_agent text,
  source text default 'qr-atelier-clasa-pregatitoare',
  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz
);

-- ============================================================
-- INDEXURI
-- ============================================================

create unique index if not exists idx_newsletter_email_lower 
  on newsletter_subscribers (lower(email));

create index if not exists idx_newsletter_status 
  on newsletter_subscribers (status);

create index if not exists idx_newsletter_token 
  on newsletter_subscribers (confirm_token);

create index if not exists idx_newsletter_created 
  on newsletter_subscribers (created_at desc);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table newsletter_subscribers enable row level security;

-- Doar service_role poate accesa direct (API routes folosesc service key)
drop policy if exists "service_role_all" on newsletter_subscribers;
create policy "service_role_all" 
  on newsletter_subscribers for all 
  to service_role 
  using (true) 
  with check (true);

-- Niciun acces pentru anon sau authenticated direct la tabel
-- API routes server-side fac toate operațiunile

-- ============================================================
-- TRIGGER: auto-set timestamps confirmare/dezabonare
-- ============================================================

create or replace function set_subscriber_timestamps()
returns trigger as $$
begin
  -- pending → confirmed
  if new.status = 'confirmed' and (old.status is null or old.status = 'pending') then
    new.confirmed_at = coalesce(new.confirmed_at, now());
  end if;
  
  -- orice → unsubscribed
  if new.status = 'unsubscribed' and (old.status is null or old.status != 'unsubscribed') then
    new.unsubscribed_at = coalesce(new.unsubscribed_at, now());
  end if;
  
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_set_subscriber_timestamps on newsletter_subscribers;
create trigger trg_set_subscriber_timestamps
  before update on newsletter_subscribers
  for each row execute function set_subscriber_timestamps();

-- ============================================================
-- FUNCȚIE UTILITARĂ: count subscribers per status
-- ============================================================

create or replace function get_newsletter_stats()
returns table (
  total bigint,
  pending bigint,
  confirmed bigint,
  unsubscribed bigint
) 
language sql
security definer
as $$
  select 
    count(*) as total,
    count(*) filter (where status = 'pending') as pending,
    count(*) filter (where status = 'confirmed') as confirmed,
    count(*) filter (where status = 'unsubscribed') as unsubscribed
  from newsletter_subscribers;
$$;

-- ============================================================
-- COMMENT pe tabel pentru documentare
-- ============================================================

comment on table newsletter_subscribers is 
  'Abonați newsletter Ordinul Albinelor. Double opt-in. Operator: Daniel (persoană fizică).';

comment on column newsletter_subscribers.copii is 
  'JSONB array. Format: [{"prenume": "string", "varsta": int 0-18}]. Max 4 copii. Opțional.';

comment on column newsletter_subscribers.source is 
  'Origine signup. ex: qr-atelier-clasa-pregatitoare, organic-web, instagram, etc.';

-- ============================================================
-- VERIFICARE FINALĂ
-- ============================================================

-- Rulează pentru a confirma că totul e ok:
-- select * from newsletter_subscribers limit 1;
-- select get_newsletter_stats();

-- Test insert (șterge după):
-- insert into newsletter_subscribers (email, prenume_parinte, consimtamant_gdpr, consimtamant_data) 
-- values ('test@ordinulalbinelor.ro', 'TestStaroste', true, now());
-- delete from newsletter_subscribers where email = 'test@ordinulalbinelor.ro';
