# Aurana Chocolate

## Установка
1. npm install
2. npm run dev

## Деплой на Vercel
- Добавь в Settings → Environment Variables:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY

## Страницы
- `/` — главная (SEO текст, каталог, кнопки заказа, ссылки).
- `/c/[code]` — личный кабинет (Supabase, по умолчанию 200 бонусов).

## Supabase таблица
```sql
create table if not exists public.profiles (
  code text primary key,
  name text,
  points integer default 200,
  tier text default 'Клиент',
  created_at timestamp with time zone default now()
);
```
