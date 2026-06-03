-- Create courses table
create table public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert mock data
insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'Code'),
  ('UI/UX Foundations', 40, 'PenTool'),
  ('Database Architecture', 15, 'Database'),
  ('System Design', 90, 'Server');

-- Enable Row Level Security (RLS)
alter table public.courses enable row level security;

-- Create policy to allow public read access (for demo purposes)
create policy "Allow public read access"
  on public.courses
  for select
  to public
  using (true);
