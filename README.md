# G2H Solutions

React, TypeScript, and Vite implementation of the four G2H Solutions pages. The Tailwind theme retains the original colors, typography, and spacing. The images, text fonts, and Material Symbols icon font are self-hosted from `public/`.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Routes: `/`, `/services`, `/approach`, and `/contact`.

## Deployment

The production build is written to `dist/`. Netlify's SPA fallback is configured in
`public/_redirects`; Vercel's SPA fallback is configured in `vercel.json`. For another
static host, configure unknown page routes to serve `/index.html` while leaving asset
requests unchanged.

The overview buttons open an email request because no overview deck file is included.
Privacy, terms, and security routes are working drafts and are explicitly marked as not
approved for publication. Replace the review checklists with approved content before launch.

Font license notices are included in `public/fonts/`: Inter and Plus Jakarta Sans use the
SIL Open Font License; Material Symbols uses Apache License 2.0.
