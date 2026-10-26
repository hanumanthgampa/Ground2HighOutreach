# G2H Outreach

React, TypeScript, and Vite implementation of the G2H Outreach website. The Tailwind theme retains the original colors, typography, and spacing. The images, text fonts, and Material Symbols icon font are self-hosted from `public/`.

## Development

```sh
npm install
npm run dev
```

The contact form uses Web3Forms. Copy `.env.example` to `.env.local` and set
`VITE_WEB3FORMS_ACCESS_KEY` to the form's Access Key. The Access Key is used in the
browser and is public by design; do not put email passwords or provider secrets in this
variable. `.env.local` is ignored by Git.

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

For a deployed contact form, add `VITE_WEB3FORMS_ACCESS_KEY` to the hosting provider's
environment variables and trigger a fresh production build. Confirm the recipient email
in Web3Forms and complete any required email verification before testing a real submission.

The footer's overview link opens an email request because no overview deck file is included.
Privacy, terms, and security routes are working drafts and are explicitly marked as not
approved for publication. Replace the review checklists with approved content before launch.

Font license notices are included in `public/fonts/`: Inter and Plus Jakarta Sans use the
SIL Open Font License; Material Symbols uses Apache License 2.0.
