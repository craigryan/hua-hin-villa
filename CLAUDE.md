# CLAUDE.md — Codebase documentation

**Other agents:** See [AGENTS.md](./AGENTS.md) for a short TL;DR and links here.

## Quick reference (TL;DR)

- **Stack**: Next.js 15.x (App Router), React 19, TypeScript 5, Tailwind CSS 4, next-intl. Pin exact versions from **`package.json`**.
- **Locales**: English (`en`, default, no URL prefix) and Thai (`th`, prefix `/th`).
- **Copy**: Add or update keys in **`src/messages/en.json`** and **`src/messages/th.json`** together.
- **Links / routing**: Import `Link`, `redirect`, `useRouter`, `usePathname` from **`@/i18n/navigation`** (see [Navigation rules](#navigation-rules)).
- **Verify**: `npm run lint` and `npm run build` before treating work as complete; check **`/`** and **`/th`** for localized UI.
- **Generic UI**: Use **[shadcn/ui](https://ui.shadcn.com)** for reusable interactive pieces (buttons, forms, dialogs, menus). See [shadcn for generic UI](#shadcn-for-generic-ui-components).

## Project overview

**Hua Hin Villa** is a Next.js property showcase site for a luxury villa rental in Hua Hin, Thailand. It supports English and Thai and covers the main villa, guest house, and rental options.

## Tech stack

- **Framework**: Next.js 15.x with App Router (see `package.json` for the resolved version)
- **UI**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Generic UI**: [shadcn/ui](https://ui.shadcn.com) (Radix-style primitives, Tailwind-first; add via CLI into the repo)
- **Internationalization**: next-intl 4.x
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Testing**: Jest + Playwright (configured; no test files yet)
- **Linting**: ESLint with Next.js configuration
- **Formatting**: Prettier (devDependency)
- **Package manager**: npm

## Available commands

```bash
# Development (Turbopack)
npm run dev

# Production
npm run build
npm run start

# Code quality
npm run lint
npm run lint:fix

# Testing (configured; suites not implemented yet)
npm run test:playwright
npm run test:jest
```

Formatting touched files (optional but encouraged):

```bash
npx prettier --write path/to/file.tsx
```

## Project structure

### Core configuration

- `next.config.ts` — Next.js + next-intl plugin
- `next-intl.config.mjs` — i18n configuration
- `tsconfig.json` — TypeScript; path alias **`@/*`** → `src/*`
- `src/tailwind.config.js` — Tailwind + custom colors
- `eslint.config.mjs` — ESLint
- `postcss.config.mjs` — PostCSS for Tailwind

### Locale routing and middleware

When changing default locale, prefixes, or redirects, inspect:

- `src/middleware.ts` — locale detection and routing
- `src/i18n/routing.ts` — locale list and routing config
- `next-intl.config.mjs` — next-intl wiring

### App and source layout

```
src/
├── app/
│   ├── [locale]/          # Localized routes (en/th)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── contact-us/
│   │   ├── enquiry/
│   │   ├── gallery/
│   │   ├── guest-house/
│   │   ├── location/
│   │   ├── rental-requirements/
│   │   ├── site-options/
│   │   ├── social-media/
│   │   ├── terms-and-conditions/
│   │   ├── the-villa/
│   │   └── [...rest]/     # Catch-all
│   ├── layout.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── manifest.ts
│   ├── sitemap.ts
│   └── robots.txt
├── components/
├── i18n/
│   ├── navigation.ts      # Locale-aware Link, router, etc.
│   ├── request.ts
│   └── routing.ts
├── messages/
│   ├── en.json
│   └── th.json
├── config.ts              # App config (e.g. port, host)
├── i18n.ts
└── middleware.ts
```

### Static assets

```
public/
├── images/          # Property photos; flags in images/flags/
├── videos/          # e.g. beach_pan.mp4
└── …                # SVGs and other static files
```

Place new public images under `public/images/` unless there is a strong reason not to. Keep filenames readable and consistent with existing assets.

### App configuration

- **`src/config.ts`** — Host/port and related app-level constants. Prefer this over scattering magic values when adding server or URL logic.

## Key features and architecture

### Internationalization (i18n)

- **Locales**: `en` and `th`
- **Default locale**: English — URLs without a locale prefix are English
- **Thai**: Prefix `/th` (e.g. `/th/gallery`)
- **Messages**: `src/messages/en.json` and `src/messages/th.json`

### i18n workflow (copy and new strings)

1. Add the same message keys to **`src/messages/en.json`** and **`src/messages/th.json`**.
2. Use `useTranslations` / server message APIs as elsewhere in the app.
3. Run **`npm run build`** to catch missing keys or type issues early.

### Navigation rules

The app uses `createNavigation` from `next-intl`. **Do not** use `next/link` or `next/navigation` for normal in-app links and redirects unless you have a deliberate reason to bypass locale handling.

Import from **`@/i18n/navigation`**:

- `Link`
- `redirect`
- `useRouter`
- `usePathname`
- `getPathname`

Defined in `src/i18n/navigation.ts` from `src/i18n/routing.ts`.

### App Router

- Nested layouts under `src/app`
- Locale segment: `[locale]`
- Catch-all `[...rest]` for unknown paths
- Middleware coordinates locale detection and redirects

### React: Server vs client components

- **Default to Server Components** in `app/` unless you need client-only behavior.
- Add **`'use client'`** when using React hooks, browser APIs, or client-only libraries.
- Prefer small client **leaf** components for interactivity instead of marking large trees as client unnecessarily.

### Styling

- Tailwind utility classes; custom theme in `src/tailwind.config.js`
- **Primary accent**: `#5fc3e7` (and custom slate variants)
- Global styles: `src/app/globals.css`
- Layout: container-centered, responsive breakpoints

### shadcn for generic UI components

Use **[shadcn/ui](https://ui.shadcn.com)** for **new generic, interactive UI**: buttons, text fields, labels, dialogs, dropdowns, selects, sheets, etc. It matches this stack (Tailwind CSS 4, React 19, Next.js App Router). Prefer shadcn over ad-hoc third-party component kits or duplicate primitives for the same roles.

- **Setup and adds**: Follow the official **[Next.js installation](https://ui.shadcn.com/docs/installation/next)** and **[Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4)** documentation. After `shadcn init`, add pieces with `npx shadcn@latest add <component>` (e.g. `button`, `input`, `dialog`).
- **Location**: CLI output usually lands under **`src/components/ui/`** (see root **`components.json`** once initialized). The existing **`cn()`** / utils path may be added by the same flow—follow shadcn’s generated layout.
- **Theming**: Map shadcn CSS variables to the site palette (**primary** should align with **`#5fc3e7`** and existing slate usage) so new controls match the villa brand.
- **i18n**: User-visible strings still come from **`src/messages/en.json`** and **`src/messages/th.json`**; wrap labels and button text with next-intl like the rest of the app.
- **Server vs client**: Many shadcn components are client components; keep interactive islands small and compose them inside pages or domain components as needed.

**Domain-specific components** (hero, carousel, property layouts, navigation chrome) stay in **`src/components/`**; use shadcn primitives inside them when you need standard controls.

### Components

- **Navigation** — client-oriented navigation and back behavior
- **LanguageSwitcher** — locale switching
- **Image / carousel** — property media
- Shared patterns: consistent spacing, typography, and color with existing pages

## Development guidelines

### File organization

- Use the **`@/*`** alias for imports from `src/*` (configured in `tsconfig.json`).
- Shared UI lives in `src/components/`.
- Localized strings live in `src/messages/*.json`, not hard-coded in components (except rare exceptions).
- Routed pages live under `src/app/[locale]/`.

### TypeScript

- Strict mode is enabled.
- Path aliases: `@/*` → `src/*`.

## Agent verification

Before considering a change complete:

1. **`npm run lint`**
2. **`npm run build`**
3. For routes, links, or translations: manually verify **English** (`/`) and **Thai** (`/th/...`) behavior.

## Testing setup

- **Jest** and **Playwright** are configured; test files are not yet added.
- Scripts: `npm run test:jest`, `npm run test:playwright`.

## Deployment

- Intended for **Vercel**.
- Relevant env vars include **`PORT`** and **`VERCEL_PROJECT_PRODUCTION_URL`** (see deployment docs and `src/config.ts` as needed).

## Development server

- Default: **`http://localhost:3000`**
- **`npm run dev`** uses Turbopack.
- Hot reload enabled for typical source edits.

## Git workflow

Do not assume branch or working tree state from this file. Run **`git status`** before starting substantive work and commit in focused units when appropriate.

## Content structure (site)

- Main villa and amenities
- Guest house
- Location and Hua Hin area
- Gallery and media
- Enquiry / contact

## Backlog (do not implement unless requested)

Ideas for later; **not** automatic scope for agents:

- Add Jest / Playwright tests
- Enquiry form validation
- Further image optimization
- Richer per-page SEO metadata
