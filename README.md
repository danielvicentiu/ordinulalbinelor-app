# Ordinul Albinelor

Site narativ apicol pentru copii. Newsletter cu double opt-in.

## Stack

- Next.js 14 App Router + TypeScript strict
- TailwindCSS + shadcn/ui
- Supabase (@supabase/ssr) — newsletter subscribers
- Resend + React Email — email transactional
- react-hook-form + zod — validare formular
- sonner — toast notifications

## Dev

```bash
npm install
npm run dev
```

## Env vars necesare

Copiază `.env.local.example` în `.env.local` și completează:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=staroste@ordinulalbinelor.ro
RESEND_FROM_NAME=Ordinul Albinelor
NEXT_PUBLIC_SITE_URL=https://ordinulalbinelor.ro
NEXT_PUBLIC_SITE_NAME=Ordinul Albinelor
NEXT_PUBLIC_OPERATOR_NAME=Daniel Vicențiu
NEXT_PUBLIC_OPERATOR_DPO_EMAIL=staroste@ordinulalbinelor.ro
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Coolify: branch `main`, build command `npm run build`, start `npm run start`.
