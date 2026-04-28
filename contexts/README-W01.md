# README W01 — ordinulalbinelor.ro

## Fișiere în acest folder
1. `README-W01.md` — acest fișier
2. `W01-COPY.md` — tot copy ceremonial per pagină (consumat de CC)
3. `W01-FULL-BUILD.md` — prompt CC complet
4. `schema-supabase.sql` — schema DB Supabase
5. `launch-cc-w01.sh` — script lansare CC pe AX42
6. `qr-card-atelier.svg` — QR card print-ready (placeholder QR de înlocuit)

## Operator GDPR — pre-completat

Toate fișierele conțin deja numele real al operatorului: **Daniel Vicențiu** (persoană fizică). Zero înlocuiri manuale necesare în fișierele de copy/build.

**Singurul lucru de completat în `.env.local`:** valorile reale Supabase + Resend (URL, keys, API key) — sunt placeholders în `env.example`.

## Order of operations

### Pe laptop (L1):
```powershell
mkdir C:\Dev\ordinulalbinelor-app -Force; cd C:\Dev\ordinulalbinelor-app; explorer .
```
Mută cele 6 fișiere descărcate în `C:\Dev\ordinulalbinelor-app\contexts\`.

### Pe AX42 (SSH):
```bash
# 1. Creează repo
gh repo create danielvicentiu/ordinulalbinelor-app \
  --public \
  --description "Ordinul Albinelor — univers narativ apicol pentru copii" \
  --gitignore Node \
  --license MIT

# 2. Clone
mkdir -p ~/workspace/repos && cd ~/workspace/repos
git clone https://github.com/danielvicentiu/ordinulalbinelor-app.git
cd ordinulalbinelor-app

# 3. Setup contexts (din laptop sau direct upload SCP)
mkdir -p contexts
# upload via scp:
# scp /path/local/contexts-w01/*.md /path/local/contexts-w01/*.sh danielv@AX42:~/workspace/repos/ordinulalbinelor-app/contexts/

# 4. Setup .env.local cu valorile reale (Supabase + Resend)
cp contexts/env.example .env.local  # dacă există, altfel scrie manual
nano .env.local

# 5. Lansează CC
chmod +x contexts/launch-cc-w01.sh
contexts/launch-cc-w01.sh

# 6. Monitorizare
tmux attach -t oa-w01
# sau:
tmux capture-pane -t oa-w01 -p | tail -50
```

## Paralel cu CC (poți face acum diseară):

### Cloudflare DNS
1. dash.cloudflare.com → Add Site → ordinulalbinelor.ro → Free
2. Schimbă NS la Spațiul.ro → Cloudflare
3. Records: A `@` și A `www` → IP_AX42 (Proxied)

### Resend
1. Add Domain `ordinulalbinelor.ro` (region EU)
2. Records DNS → Cloudflare (DNS only):
   - MX `send` → `feedback-smtp.eu-west-1.amazonses.com` priority 10
   - TXT `send` → `v=spf1 include:amazonses.com ~all`
   - TXT `resend._domainkey` → DKIM (din dashboard)
   - TXT `_dmarc` → `v=DMARC1; p=none; rua=mailto:staroste@ordinulalbinelor.ro`
3. Verify → API Key → copiezi în .env.local

### Supabase
1. supabase.com → New Project → region eu-central-1 (Frankfurt)
2. SQL Editor → rulezi `schema-supabase.sql`
3. Settings → API → copiezi URL + anon + service_role în .env.local

## Mâine dimineață (înainte atelier)
1. Verifică build CC → push main dacă curat
2. Coolify → conectează repo → env vars → Deploy
3. Test E2E newsletter (signup + confirm + welcome)
4. Foto Staroste reală: încarci foto → editezi `components/ornaments/StarosteBadge.tsx`
5. Generezi QR real (qrencode sau qr-code-monkey.com) → înlocuiești placeholder în SVG
6. Print PDF A6 → printează cardurile
