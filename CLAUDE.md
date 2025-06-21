# CLAUDE.md - Codebase Documentation

## Project Overview
**Hua Hin Villa** is a Next.js 15 property showcase website for a luxury villa rental in Hua Hin, Thailand. The site features bilingual support (English/Thai) and showcases the main villa, guest house, and rental options.

## Tech Stack
- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 4.1.0
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Testing**: Jest + Playwright (configured but no test files present)
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## Available Commands
```bash
# Development (with Turbopack)
npm run dev

# Production build
npm run build
npm run start

# Code quality
npm run lint

# Testing (configured but not implemented)
npm run test:playwright
npm run test:jest
```

## Project Structure

### Core Configuration Files
- `next.config.ts` - Next.js configuration with next-intl plugin
- `next-intl.config.mjs` - Internationalization configuration
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)
- `src/tailwind.config.js` - Tailwind CSS configuration with custom colors
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Localized routes (en/th)
│   │   ├── layout.tsx     # Locale-specific layout with i18n provider
│   │   ├── page.tsx       # Home page
│   │   ├── enquiry/       # Contact/enquiry page
│   │   ├── gallery/       # Photo gallery
│   │   ├── guest-house/   # Guest house details
│   │   ├── location/      # Location information
│   │   ├── site-options/  # Site configuration page
│   │   ├── the-villa/     # Main villa details
│   │   └── [...rest]/     # Catch-all route
│   ├── layout.tsx         # Root layout (minimal)
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 page
│   ├── manifest.ts        # Web app manifest
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.txt         # SEO robots file
├── components/            # React components
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ImageCarousel.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Navigation.tsx
│   └── PropertyOverview.tsx
├── i18n/                  # Internationalization setup
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts         # Route configuration for locales
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── th.json           # Thai translations
├── config.ts             # App configuration (port, host)
├── i18n.ts              # i18n request configuration
└── middleware.ts        # Next.js middleware for i18n routing
```

### Static Assets
```
public/
├── images/              # Property photos
│   ├── flags/          # Language flags (gb.svg, th.svg)
│   └── [various villa and property images]
├── videos/             # Property videos
│   └── beach_pan.mp4
└── [various SVG icons]
```

## Key Features & Architecture

### Internationalization (i18n)
- **Locales**: English (en) and Thai (th)
- **Default locale**: English
- **Routing**: Prefix-based for Thai, no prefix for English
- **Configuration**: Uses next-intl with middleware for automatic locale detection
- **Messages**: JSON-based translation files in `src/messages/`

### App Router Structure
- Uses Next.js 13+ App Router with nested layouts
- Locale-based routing with `[locale]` dynamic segment
- Catch-all route for handling undefined pages
- Middleware handles locale routing and redirection

### Styling
- **Tailwind CSS 4** with custom configuration
- **Custom colors**: Primary (#5fc3e7), custom slate variants
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Responsive**: Container-centered design with custom breakpoints

### Components Architecture
- **Navigation**: Client-side component with back button logic
- **LanguageSwitcher**: Handles locale switching
- **Image components**: For property showcasing
- **Reusable UI components**: Following consistent design patterns

## Development Guidelines

### File Organization
- Use absolute imports with `@/*` alias pointing to `src/*`
- Components are standalone in `/components` directory
- Localized content goes in `/messages` as JSON
- App Router pages follow the `[locale]/` structure

### Styling Conventions
- Use Tailwind utility classes
- Custom styles defined in `tailwind.config.js`
- Global styles in `globals.css`
- Component-specific styles using Tailwind classes

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured for clean imports
- Next.js plugin integrated for optimal type checking

## Testing Setup
- **Jest**: Configured for unit testing (no tests written yet)
- **Playwright**: Configured for e2e testing (no tests written yet)
- Test scripts available but implementation pending

## Deployment
- Configured for Vercel deployment
- Environment variables: PORT, VERCEL_PROJECT_PRODUCTION_URL
- Production optimizations included via Next.js configuration

## Content Structure
The site showcases:
- Main villa with luxury amenities
- Guest house accommodation
- Location benefits (proximity to Hua Hin attractions)
- Photo gallery and virtual tour capabilities
- Contact/enquiry functionality

## Git Repository Status
- Current branch: `main`
- Recent commits focus on language switching and i18n setup
- Repository is clean with no uncommitted changes

## Development Server
- Runs on `http://localhost:3000` by default
- Uses Turbopack for faster development builds
- Hot reloading enabled for all file types

## Notes for Future Development
- Test suites need implementation (Jest/Playwright configured)
- No existing cursor rules or copilot instructions
- Consider adding form validation for enquiry page
- Image optimization could be enhanced
- SEO metadata could be expanded per page