# =============================================================
# ORDINUL ALBINELOR — Multi-stage Dockerfile pentru Next.js Standalone
# Target: ordinulalbinelor.ro | Node 20 Alpine
# Pattern identic cu v-alert/VA-LEX (production-tested pe Coolify AX42)
# =============================================================

# ─── Etapa 1: Dependinte ────────────────────────────────────
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# ─── Etapa 2: Build ─────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variabile NEXT_PUBLIC_* necesare la build-time (inject in client bundle)
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SITE_URL=https://ordinulalbinelor.ro
ARG NEXT_PUBLIC_SITE_NAME="Ordinul Albinelor"
ARG NEXT_PUBLIC_OPERATOR_NAME="Daniel Vicențiu"
ARG NEXT_PUBLIC_OPERATOR_DPO_EMAIL=staroste@ordinulalbinelor.ro

ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_OPERATOR_NAME=$NEXT_PUBLIC_OPERATOR_NAME
ENV NEXT_PUBLIC_OPERATOR_DPO_EMAIL=$NEXT_PUBLIC_OPERATOR_DPO_EMAIL

RUN npm run build

# ─── Etapa 3: Runner (imagine finala, minimala) ──────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Utilizator non-root pentru securitate
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiem outputul standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
