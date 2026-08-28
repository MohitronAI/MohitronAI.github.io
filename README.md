# Mohit Portfolio

Premium personal portfolio foundation for an AI and full-stack developer.

## Current stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Lenis (reserved for the smooth-scroll layer)

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
`NEXT_PUBLIC_SITE_URL` to the verified production origin after deployment
to enable absolute canonical, Open Graph, robots, and sitemap URLs. When
it is unset, local metadata remains relative and does not claim a public
domain. `src/app/robots.ts` and `src/app/sitemap.ts` expose the intended
public routes.

## Architecture

The app uses server components by default. Interactive navigation, the Project Explorer, Motion visuals, and smooth scrolling are isolated client components in `src/components/`; page composition and metadata live in `src/app/`. Global design tokens, the shared `.site-container` alignment utility, and responsive styles are defined in `src/app/globals.css`. Case studies are data-driven and use explicit section layouts for text-only, text-plus-visual, and full-width visual compositions.

## Status

The portfolio includes the responsive homepage, interactive five-project explorer, profile sections, verified contact details, and data-driven case studies for DAgreement, NeuralixAI, and Green Model Advisor. Production-readiness validation uses the commands above.
