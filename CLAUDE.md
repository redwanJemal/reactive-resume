# HireGulf

> A free, ad-supported AI resume builder targeting expats and professionals in the Gulf (Saudi, UAE, Qatar, Kuwait, Bahrain, Oman). Forked from [Reactive Resume](https://github.com/AmruthPillai/Reactive-Resume) v5.0.10.

## Architecture

Single-package full-stack TypeScript app (not a monorepo) built with:

- **Framework**: TanStack Start (React 19 + Vite 8 + Nitro SSR)
- **Routing**: TanStack Router (file-based, `src/routes/`)
- **API**: oRPC (type-safe RPC, `src/integrations/orpc/`)
- **Database**: Drizzle ORM + PostgreSQL (`src/integrations/db/`)
- **Auth**: Better Auth — email/password + Google/GitHub OAuth (`src/integrations/auth/`)
- **AI**: Vercel AI SDK — OpenAI, Gemini, Claude, Ollama (`src/integrations/ai/`)
- **i18n**: Lingui with 59 languages including `ar-SA`, RTL detection (`src/utils/locale.ts`)
- **PDF**: Puppeteer + Browserless for server-side rendering
- **Styling**: Tailwind CSS v4 (OKLch color system, `src/styles/globals.css`)
- **State**: Zustand + Zundo (undo/redo)
- **UI**: Radix UI primitives, Phosphor Icons

## Dev Commands

```bash
pnpm dev          # Start dev server (port 3000)
pnpm build        # Production build
pnpm lint         # Biome linter (check + fix)
pnpm typecheck    # TypeScript type checking
pnpm db:generate  # Generate Drizzle migrations
pnpm db:migrate   # Run migrations (auto-runs on dev start)
pnpm db:studio    # Open Drizzle Studio
pnpm lingui:extract  # Extract i18n strings
```

## Prerequisites

Docker must be running with PostgreSQL (and optionally Browserless for PDF export):

```bash
docker compose -f compose.dev.yml up -d postgres browserless
```

Copy `.env.example` to `.env`. Key vars:
- `APP_URL` — dev server URL (default `http://localhost:3000`)
- `PRINTER_APP_URL` — URL Browserless uses to reach the app (use Docker bridge IP, not localhost)
- `PRINTER_ENDPOINT` — WebSocket URL to Browserless
- `DATABASE_URL` — PostgreSQL connection string

## Key File Paths

| Path | Description |
|------|-------------|
| `src/routes/` | File-based routes (TanStack Router) |
| `src/routes/__root.tsx` | Root layout, app title, meta tags |
| `src/routes/_home/` | Landing page sections |
| `src/routes/dashboard/` | User dashboard |
| `src/routes/builder/` | Resume editor |
| `src/schema/resume/data.ts` | Resume data schema (Zod) |
| `src/schema/resume/sample.ts` | Sample resume data |
| `src/components/resume/templates/` | 13 resume templates (React components) |
| `src/integrations/ai/prompts/` | AI system prompts |
| `src/integrations/orpc/router/` | API route handlers |
| `src/integrations/orpc/services/` | Business logic |
| `src/integrations/auth/config.ts` | Auth configuration |
| `src/integrations/db/schema/` | Database schema (Drizzle) |
| `src/styles/globals.css` | Theme colors (OKLch), Tailwind config |
| `src/utils/locale.ts` | Locale loading, RTL detection |
| `locales/*.po` | Translation files (59 languages) |
| `public/logo/` | Brand logos (dark.svg, light.svg) |
| `vite.config.ts` | Vite + PWA manifest config |

## Conventions

- **Color system**: OKLch in CSS custom properties (light/dark themes in `globals.css`)
- **Resume colors**: rgba() format for user-customizable design colors
- **i18n**: Use `<Trans>` and `t` macros from `@lingui/react/macro` / `@lingui/core/macro`
- **RTL**: Use Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `text-end`)
- **Linting**: Biome (not ESLint/Prettier)
- **Package manager**: pnpm (v10)

## HireGulf-Specific

- **Brand colors**: Navy (`#0C2340`) + Gold (`#C8A951`) — Gulf-inspired palette
- **Target audience**: Gulf expats (Saudi, UAE, Qatar, Kuwait, Bahrain, Oman)
- **Monetization**: Free with ads (ad-free PDFs)
- **Priority features**: Arabic UX, Gulf CV fields (nationality, visa status, DOB, marital status), bilingual resumes
- **Deployment**: Coolify on endlessmaker.com server
