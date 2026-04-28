EXECUTĂ IMEDIAT ACEST TASK. NU ÎNTREBA NIMIC. NU CERE CONFIRMARE.
Dacă lipsește informație, alege opțiunea cea mai simplă și continuă.

# CC TASK: Ordinul Albinelor W01 — Full Build

## SCOP
Construiește site-ul `ordinulalbinelor.ro` în Next.js 14 App Router, gata pentru deploy pe Coolify. Site STATIC + newsletter signup cu double opt-in. ZERO funcționalități în plus față de ce e specificat.

## FIȘIERE CONTEXT (citește toate înainte să începi)
- `contexts/W01-COPY.md` — TOT copy-ul ceremonial, structurat per pagină. Folosește textele EXACT, fără să le rescrii.
- `contexts/W01-FULL-BUILD.md` — acest fișier (specificația tehnică)

## STACK
- Next.js 14 App Router (NU Pages Router)
- TypeScript strict mode
- TailwindCSS + shadcn/ui
- @supabase/ssr (NU @supabase/auth-helpers-nextjs — depreciat)
- resend SDK + react-email pentru templates
- react-hook-form + zod
- sonner (toast notifications)
- Lucide React pentru iconițe (utilitar, nu pentru ornamente)

## VARIABILE ENV (sunt în `.env.local`, NU le hardcoda)
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_FROM_NAME
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_OPERATOR_NAME
NEXT_PUBLIC_OPERATOR_DPO_EMAIL
```

## SCHEMA DB (deja creată în Supabase prin `schema-supabase.sql`)
Tabel: `newsletter_subscribers`
Coloane:
- `id` uuid PK
- `email` text unique not null (case-insensitive index)
- `prenume_parinte` text not null
- `copii` jsonb default `[]` — format `[{"prenume": string, "varsta": number}]`
- `status` text: `pending` | `confirmed` | `unsubscribed`
- `confirm_token` uuid
- `consimtamant_gdpr` bool
- `consimtamant_data` timestamptz
- `ip_signup` inet
- `user_agent` text
- `source` text default `qr-atelier-clasa-pregatitoare`
- `created_at`, `confirmed_at`, `unsubscribed_at` timestamptz

## TASK COMPLET — implementează TOT în următoarea ordine

### 0. Git workflow
**Pas 0a:** Suntem deja pe branch `main`. Lucrezi DIRECT pe main pentru proiect nou.
**Pas 0b:** La FIECARE etapă majoră (după setup, după components, după pages, după api, după build verify), rulează:
```bash
git add -A && git commit -m "[mesaj scurt]" && git push origin main
```
**Pas 0c:** Configurează git identity dacă nu e deja:
```bash
git config user.email "daniel.vicentiu@gmail.com"
git config user.name "Daniel V"
```

### 1. Setup proiect
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
npm install @supabase/ssr @supabase/supabase-js resend react-email @react-email/components react-hook-form @hookform/resolvers zod sonner
npx shadcn@latest init
npx shadcn@latest add button input label checkbox form sonner card
```

### 2. Configurare globală

**`tailwind.config.ts`:**
- extinde paleta cu CSS vars Ordin
- adaugă fonturi Cardo (titluri) și Inter (corp)

**`app/globals.css`:**
```css
:root {
  --gold: #c9a227;
  --gold-light: #e6c14a;
  --gold-dark: #9a7a14;
  --amber: #d4830c;
  --ivory: #faf6ea;
  --parchment: #f5e9c8;
  --ink: #2d1b0e;
  --ink-soft: #5a4220;
}
```
- background subtil pergament (gradient + grain)
- selection color auriu
- focus styles pe ornamente aurii
- font Cardo pentru `h1, h2, h3` și clase `.ceremonial`
- font Inter pentru body

**`app/layout.tsx`:**
- `<html lang="ro">`
- import Cardo + Inter via `next/font/google`
- favicon SVG hexagon auriu (creează `public/favicon.svg`)
- Header sticky + Footer global
- Toaster (sonner) în root
- Metadata default cu title template: `%s — Ordinul Albinelor`

### 3. Componente

**`components/layout/Header.tsx`:**
- Logo: `<HexagonSeal size={40} />` + text "Ordinul Albinelor" (font Cardo)
- Nav desktop: Acasă / Despre Ordin / Codul / Legenda / Povești / Scrisoare
- Nav mobile: hamburger care deschide drawer Tailwind
- Sticky cu backdrop-blur la scroll

**`components/layout/Footer.tsx`:**
- 3 coloane (desktop), stacked (mobile)
- Coloana 1: logo mic + slogan
- Coloana 2: linkuri (Despre Ordin, Codul, Legenda, Povești, Scrisoare către Staroste)
- Coloana 3: linkuri legale (Confidențialitate)
- Bară jos: `© Ordinul Albinelor 2026 • Pergamente trimise cu drag de la marginea pădurii`

**`components/ornaments/HexagonSeal.tsx`:**
- SVG inline hexagon
- props: `size` (number), `glow` (boolean), `withBee` (boolean default true)
- Hexagon auriu cu gradient + albină stilizată în centru (ovals + linii)

**`components/ornaments/HoneycombDivider.tsx`:**
- SVG pattern fagure orizontal subtil
- props: `width` (default '100%')

**`components/ornaments/StarosteBadge.tsx`:**
- Insignă circulară cu hexagon central
- Silueta Staroste (SVG simplu — bust + pălărie apicultor + voal)
- Text circular: "STAROSTELE DANIEL" + "PĂSTRĂTORUL CETĂȚII"
- Acceptă prop `photoUrl` opțional — dacă e setat, afișează foto reală în loc de silueta SVG

**`components/ornaments/BeeFlight.tsx`:**
- Animație CSS subtilă albină plutind (pe homepage hero)
- Folosește `@keyframes` pentru float + rotation ușoară

**`components/newsletter/NewsletterForm.tsx`:**
- Câmpuri: email, prenume_parinte, copii dinamic (max 4 perechi prenume + vârstă), checkbox GDPR
- Buton "+ Adaugă încă un copil" — disabled la 4 copii
- Validare zod (vezi `lib/validators.ts`)
- POST `/api/newsletter/signup`
- Pe succes: redirect la `/multumesc`
- Pe eroare: toast Sonner cu mesajul din response
- Loading state pe buton: "Pergamentul pleacă..."

### 4. Pagini — TOATE textele din `contexts/W01-COPY.md`

Fiecare pagină are metadata exportat (title + description din tabelul SEO din COPY.md).

- **`app/page.tsx`** Homepage:
  - Hero cu HexagonSeal mare + BeeFlight animation
  - Secțiune Cine suntem
  - Grid 4 hexagoane pentru Cod
  - Card Prima poveste (cu link)
  - NewsletterForm cu id="newsletter" pentru anchor

- **`app/despre-ordin/page.tsx`**:
  - StarosteBadge mare central (fără foto, va folosi silueta SVG)
  - "Cuvântul Starostelui" — text ceremonial cu drop cap pe primul paragraf
  - "De ce un Ordin?" cu 3 carduri

- **`app/codul-ordinului/page.tsx`**:
  - 4 hexagoane mari "Cei Patru Piloni" cu titlu RO + nume LATIN + text
  - Listă numerotare romană "Cele Șapte Legi"
  - Cartuș Jurământ stilizat (font Cardo italic, fundal pergament, border auriu)
  - Tabel responsive "Cele Zece Ranguri" — pe mobile: cards stacked

- **`app/legenda/page.tsx`**:
  - Text narativ cu drop cap pe primul paragraf
  - HoneycombDivider între secțiuni
  - Sigiliu mic la final

- **`app/povesti/floricica/page.tsx`**:
  - Ilustrație SVG inline (floare 5 petale + albină) — ornamentală, simplă
  - Text narativ
  - CTA jos cu link la `/#newsletter`

- **`app/scrisoare-catre-staroste/page.tsx`**:
  - Pergament stilizat
  - Email afișat mare, clickable mailto

- **`app/confidentialitate/page.tsx`**:
  - Toate secțiunile din COPY.md
  - Operator: folosește `process.env.NEXT_PUBLIC_OPERATOR_NAME` (placeholder substituit la build)
  - Data publicării: dată hardcodată sau din build time

- **`app/multumesc/page.tsx`**:
  - Sigiliu mare central (cu glow animation subtil)
  - Text confirmare pergament trimis

- **`app/confirma/[token]/page.tsx`** (server component):
  - Folosește Supabase service role (server-only) pentru a verifica token
  - Logica:
    1. Fetch row WHERE confirm_token = token
    2. Dacă nu există → render "Stare 3: Token invalid"
    3. Dacă status = 'pending':
       - UPDATE status = 'confirmed' (trigger setează `confirmed_at`)
       - SEND welcome email via Resend (folosind `lib/email-templates/welcome.tsx`)
       - Render "Stare 1: Succes"
    4. Dacă status = 'confirmed' → render "Stare 2: Deja confirmat"
    5. Dacă status = 'unsubscribed' → render "Stare 3: Token invalid"

- **`app/not-found.tsx`**:
  - Sigiliu căzut (rotated)
  - Text 404 din COPY.md

### 5. API routes

**`app/api/newsletter/signup/route.ts`** (POST):
- Body validare cu zod
- Extract IP din `request.headers.get('x-forwarded-for')` (primul IP) sau `x-real-ip`
- Extract user-agent
- Folosește Supabase service role
- Logica:
  1. Lookup `lower(email)` în DB
  2. Dacă există cu status=`confirmed` → return 200 `{ ok: true, message: "Ești deja în Ordin." }`
  3. Dacă există cu status=`pending` → regenerează `confirm_token`, UPDATE row, RE-SEND email confirmare
  4. Dacă există cu status=`unsubscribed` → INSERT nou (sau UPDATE: status=pending, regenerare token, re-send confirm)
  5. Dacă nu există → INSERT nou + SEND email confirmare
- Return JSON `{ ok: true }` sau `{ ok: false, error: "..." }`

### 6. Email templates (React Email)

**`lib/email-templates/confirm.tsx`:**
- Layout React Email
- Header cu HexagonSeal SVG
- Greeting personalizat
- Buton CTA mare auriu
- Footer cu mențiune Ordin
- Folosește textul EXACT din COPY.md

**`lib/email-templates/welcome.tsx`:**
- Similar cu confirm
- Mesaj scurt (vezi COPY.md — "MESAJ SCURT, fără micro-poveste")
- Linkuri spre Floricica și Legenda
- Footer cu link unsubscribe

### 7. Validators

**`lib/validators.ts`:**
```ts
import { z } from "zod";

export const newsletterSignupSchema = z.object({
  email: z.string().email({ message: "Pergamentul nu pleacă spre o adresă pe care nu o înțelegem." }),
  prenume_parinte: z.string().min(2, { message: "Cum să te strige Starostele dacă nu-i spui prenumele?" }),
  copii: z.array(
    z.object({
      prenume: z.string().min(1).optional(),
      varsta: z.number().int().min(0).max(18).optional(),
    })
  ).max(4).optional().default([]),
  consimtamant_gdpr: z.literal(true, {
    errorMap: () => ({ message: "Trebuie să apeși pe sigiliul de încuviințare ca să te primim în Ordin." }),
  }),
});
```

### 8. Sitemap & robots

**`app/sitemap.ts`:**
- Toate rutele publice cu `priority` și `changeFrequency` 

**`app/robots.ts`:**
- allow all
- disallow `/api/`, `/confirma/`
- pointer la sitemap

### 9. Build & test
- `npm run build` trebuie să treacă FĂRĂ erori TS sau ESLint
- `npm run lint` curat
- Verifică toate paginile se randează static (sau dinamic doar `/confirma/[token]`)

## DESIGN GUIDELINES

### Paletă
- Aur auriu (`--gold`) pe titluri și ornamente
- Chihlimbar (`--amber`) pe accente
- Ivory (`--ivory`) ca background principal
- Parchment (`--parchment`) pe carduri
- Ink (`--ink`) pe text corp
- Ink soft (`--ink-soft`) pe text secundar

### Tipografie
- Cardo (Google Font) — toate titlurile, drop caps, jurământul, ornamente
- Inter (Google Font) — corp text, formulare, navigație
- Letter spacing crescut pe titluri majuscule (`tracking-wider`)

### Hexagonul
- Forma centrală a brandului
- Apare ca: logo, divider, badge ranguri, decorațiuni
- Toate hexagoanele au orientare "pointy-top" (varful sus și jos)

### Latina
- DOAR pe ranguri, sigilii, formule ceremoniale
- Întotdeauna în italic
- Maxim 5-6 termeni latini pe tot site-ul

### Engleza
- ZERO. Tot client-facing e în română.
- Excepție: cod, nume tehnice, comentarii dev (în engleză e ok).

## REGULI ABSOLUTE

1. **NU inventa copy.** Folosește exclusiv `W01-COPY.md`. Dacă lipsește un text (microcopy, error message), îl creezi în SPIRITUL paginii (ton corect) și-l marchezi cu `// TODO: confirm copy`.

2. **NU adăuga features.** Site STATIC + newsletter signup. ZERO: comenzi, plăți, membri, login, jocuri, audio, video, comentarii, share buttons, analytics tracking.

3. **NU folosi librării grele inutile.** Toate ornamentele = SVG inline. Animațiile = CSS pure. Fără Framer Motion, GSAP, Three.js, etc.

4. **NU breakuri pe build.** TypeScript strict, ESLint curat, accessibility AA minimum.

5. **DA branding consistent.** Sigiliu hexagonal pe fiecare pagină (header sau decorativ). Vocea corectă per pagină. Latina ocazional.

6. **DA performanță.** Imagini optimizate (deși sunt puține). Fonts cu `display: swap`. Static rendering pentru tot ce nu e `/confirma/[token]`.

## LIVRABILĂ
- Push pe branch `main` direct (proiect mic, fără paralelism)
- Commit-uri logice: `setup`, `globals + layout`, `ornaments`, `pages-static`, `newsletter-form`, `api + email`, `confirm-flow`, `sitemap-seo`, `polish-build`
- README.md scurt cu instrucțiuni dev (`npm install`, `npm run dev`, env vars necessare)

## TODO LIST FORMAT
Dacă întâmpini blocaje:
- NU presupune
- Marchează cu `// TODO: confirm with Daniel — [explicație scurtă]`
- Continuă cu best-guess implementare
- La final, în ultimul commit message, listează TOATE TODO-urile

## DURATA ESTIMATĂ
60-90 min pentru build complet pe AX42 cu Claude CC.

## DUPĂ BUILD
Daniel verifică:
1. `npm run build` local — trece fără erori
2. `npm run start` — site se ridică pe `localhost:3000`
3. Test rapid newsletter (cu env vars de dev sau staging)
4. Push la Coolify pentru deploy producție
