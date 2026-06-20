# Glow Elite Website

Landing page for Glow Elite Aesthetic Clinic in Barcelona, built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Development

```bash
npm run dev
```

Open http://localhost:3000.

## Production Checks

```bash
npm run lint
npm run build
```

## SEO Configuration

Set the production URL so canonical metadata, Open Graph assets, robots and sitemap resolve to the deployed domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Assets

Published images live in `public/img/optimized`. Original source PNGs are kept in `assets/original-img` so they are not served directly from `public`.
