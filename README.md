# Mohit Portfolio

Premium personal portfolio for a software and AI developer.

## Current stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run typecheck
npm run lint
npm run build
```

## SEO configuration

Metadata is generated through the Next.js App Router Metadata API. Set
`NEXT_PUBLIC_SITE_URL` to the verified production origin to enable absolute
canonical, Open Graph, robots, and sitemap URLs. The GitHub Pages workflow
sets it to `https://mohitronai.github.io` for production builds. When it is
unset locally, metadata does not claim a public domain.
`src/app/robots.ts` and `src/app/sitemap.ts` expose the generated public routes.

## Architecture

The app uses server components by default. Interactive navigation, the command palette, and the Project Explorer are isolated client components in `src/components/`; page composition and metadata live in `src/app/`. Global design tokens, the shared `.site-container` alignment utility, and responsive styles are defined in `src/app/globals.css`. Case studies are data-driven and use explicit section layouts for text-only, text-plus-visual, and full-width visual compositions.

## Status

The portfolio includes the responsive homepage, interactive five-project explorer, profile sections, verified contact details, and data-driven case studies for DAgreement, NeuralixAI, and Green Model Advisor. Production-readiness validation uses the commands above.
