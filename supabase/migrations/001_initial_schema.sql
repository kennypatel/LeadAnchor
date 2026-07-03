create extension if not exists "uuid-ossp";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role text not null default 'owner',
  created_at timestamptz not null default now()
);

create table if not exists public.companies (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references public.users(id) on delete cascade,
  name text not null,
  industry text not null,
  phone text,
  website text,
  service_area text,
  business_hours jsonb not null default '{}'::jsonb,
  booking_link text,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  phone text,
  email text,
  source text not null,
  service_requested text,
  urgency text not null default 'Normal',
  status text not null default 'New',
  estimated_value numeric(12,2) not null default 0,
  ai_summary text,
  last_message text,
  assigned_to text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  role text not null,
  message text not null,
  channel text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.agent_settings (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  tone text not null default 'Helpful, concise, appointment-focused',
  services text[] not null default '{}',
  faqs jsonb not null default '[]'::jsonb,
  qualification_questions text[] not null default '{}',
  escalation_rules jsonb not null default '[]'::jsonb,
  after_hours_behavior text,
  human_handoff_rules text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  type text not null,
  title text not null,
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  lead_id uuid not null references public.leads(id) on delete cascade,
  appointment_time timestamptz not null,
  status text not null default 'Booked',
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  event_type text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.companies enable row level security;
alter table public.leads enable row level security;
alter table public.conversations enable row level security;
alter table public.agent_settings enable row level security;
alter table public.notifications enable row level security;
alter table public.appointments enable row level security;
alter table public.events enable row level security;

create policy "users manage own profile" on public.users
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "owners manage companies" on public.companies
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy "owners manage company leads" on public.leads
  using (exists (select 1 from public.companies c where c.id = leads.company_id and c.owner_id = auth.uid()))
  with check (exists (select 1 from public.companies c where c.id = leads.company_id and c.owner_id = auth.uid()));

create policy "owners manage conversations" on public.conversations
  using (exists (
    select 1 from public.leads l join public.companies c on c.id = l.company_id
    where l.id = conversations.lead_id and c.owner_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.leads l join public.companies c on c.id = l.company_id
    where l.id = conversations.lead_id and c.owner_id = auth.uid()
  ));

create policy "owners manage agent settings" on public.agent_settings
  using (exists (select 1 from public.companies c where c.id = agent_settings.company_id and c.owner_id = auth.uid()))
  with check (exists (select 1 from public.companies c where c.id = agent_settings.company_id and c.owner_id = auth.uid()));

create policy "owners manage notifications" on public.notifications
  using (exists (select 1 from public.companies c where c.id = notifications.company_id and c.owner_id = auth.uid()))
  with check (exists (select 1 from public.companies c where c.id = notifications.company_id and c.owner_id = auth.uid()));

create policy "owners manage appointments" on public.appointments
  using (exists (select 1 from public.companies c where c.id = appointments.company_id and c.owner_id = auth.uid()))
  with check (exists (select 1 from public.companies c where c.id = appointments.company_id and c.owner_id = auth.uid()));

create policy "owners manage events" on public.events
  using (exists (select 1 from public.companies c where c.id = events.company_id and c.owner_id = auth.uid()))
  with check (exists (select 1 from public.companies c where c.id = events.company_id and c.owner_id = auth.uid()));
