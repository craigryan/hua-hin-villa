# Agent instructions

Canonical project documentation lives in **[CLAUDE.md](./CLAUDE.md)**. Read that file for structure, stack, commands, and conventions.

## TL;DR

- **Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, next-intl. Exact versions: `package.json`.
- **i18n**: English (default, no URL prefix) and Thai (`/th/...`). User-visible strings belong in **`src/messages/en.json`** and **`src/messages/th.json`** with the same keys.
- **Navigation**: Use `Link`, `redirect`, `useRouter`, and `usePathname` from **`@/i18n/navigation`**, not from `next/link` or `next/navigation`, unless you intentionally need locale-unaware behavior.
- **Locale / routing changes**: `src/middleware.ts`, `src/i18n/routing.ts`, `next-intl.config.mjs`.
- **Before finishing**: `npm run lint` and `npm run build`. For UI or copy changes, spot-check **`/`** and **`/th`** (or a Thai subpath).
- **Generic UI**: Use **[shadcn/ui](https://ui.shadcn.com)** for new reusable interactive UI (buttons, form controls, dialogs, menus, etc.): `npx shadcn@latest add …` after init, following the project’s Tailwind v4 + Next.js docs. Full conventions: [CLAUDE.md — shadcn for generic UI](./CLAUDE.md#shadcn-for-generic-ui-components). Do not bring in parallel component libraries for the same job unless the user asks.

## Formatting

Prettier is available (`prettier` in devDependencies). Format changed files as your editor or `npx prettier --write <paths>` allows.
