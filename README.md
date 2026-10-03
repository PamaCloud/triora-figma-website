# TrioraLabs website

Responsive Next.js App Router implementation of the TrioraLabs landing page in the supplied Figma file.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run typecheck`, `npm run lint`, and `npm run build` to validate changes.

## Structure

- `app/` contains the page, global styles, loading state, and not-found page.
- `components/` contains the reusable page sections, navigation, image loading, and email capture UI.
- `constants/site-content.ts` contains the content collections used to render repeated cards.
- `constants/assets.ts` maps each exported Figma image to its local public path.
- `constants/design-tokens.css` is the source of the Figma-derived color, type, spacing, and radius tokens consumed by Tailwind.
- `hooks/`, `types/`, and `lib/` contain the mobile navigation hook, shared data types, and site metadata.
- `public/images/` contains the exported desktop Figma image assets.

The email capture controls validate the address in the browser and open a prefilled `mailto:` draft; they do not store or transmit submissions to a server.
