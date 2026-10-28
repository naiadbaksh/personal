# Build plan

Work on a branch: `git switch -c redesign`. Never push to `master` until Naiad says so;
pushing `master` deploys the live site (`.github/workflows/` deploys on every push to master).

Each phase ends with a check. Don't start the next phase until the check passes and Naiad has
looked at the result.

## Phase 0 — Get it running as-is

1. `npm ci --legacy-peer-deps`, then `npm start`.
2. **Check:** the current site loads locally and looks like naiadbaksh.com.

Teaching moment: what Create React App is, why it's deprecated, what a dev server does.

## Phase 1 — Move to Vite + TypeScript (no visual changes)

1. Add Vite, `@vitejs/plugin-react`, TypeScript. Move `public/index.html` to the root
   `index.html` with a `<script type="module" src="/src/main.tsx">`.
2. Replace the `react-scripts` scripts with `vite`, `vite build`, `vite preview`.
3. Rename the entry to `main.tsx`; leave existing components as `.js`/`.jsx` for now
   (`allowJs: true`). Convert files to TypeScript gradually, only ones we touch.
4. Upgrade React 17 → 18 (`createRoot`) and React Router 5 → 6 (`Routes`/`element`).
   Do these as separate commits so each is easy to explain.
5. Update `.github/workflows/`: Node 20+, drop `--openssl-legacy-provider` and
   `--legacy-peer-deps` if no longer needed, upload `./dist` instead of `./build`.
6. Keep the GitHub Pages SPA fallback: `public/404.html` redirects to `/?redirect=<path>` and
   `App` reads it. Keep `CNAME` in `public/` so it lands in `dist/`.
7. Hide the Wednesday chatbot (render nothing; keep the component files).
8. Remove the phone number from the chatbot copy (`src/components/chatbot/actionprovider.jsx`).
9. **Check:** `npm run dev` shows the same site; `npm run build && npm run preview` works;
   deep links like `/thoughtgarden` work in preview.

Teaching moments: ES modules and why Vite is fast; what TypeScript adds; React 18's root API;
how the 404.html trick makes client-side routes work on GitHub Pages.

## Phase 2 — Foundations of the new design

1. Install Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`) and add the plugin to
   `vite.config.mjs`. Load only the theme and utilities layers for now, without Preflight, so
   the old UI keeps its look until Phase 3 replaces it.
2. Self-host JetBrains Mono (woff2 in `src/fonts/`), `font-display: swap`. Register it as
   `--font-mono` in `@theme`.
3. Create the colour tokens from `docs/direction.md` as CSS custom properties on `:root`, with
   `[data-theme="dark"]` and a `prefers-color-scheme: dark` default. Map them into Tailwind
   with `@theme inline` (`--color-ink: var(--ink)`), so utilities like `text-ink` and
   `bg-panel` follow the theme without `dark:` variants.
4. Theme toggle: reads system preference, stores the choice in `localStorage` (wrapped in
   try/catch), sets `data-theme` on `<html>`.
5. Base styles in `@layer base`: body type, links, selection, focus rings, reduced-motion
   media query.
6. **Check:** toggle works, contrast passes in both themes (use browser devtools).

Decided with Naiad (2026-10-28): Tailwind CSS v4 instead of CSS modules or styled-components.
The old styled-components files stay until Phase 3 replaces them.

## Phase 3 — Home page

Setup (done 2026-10-28):

- The old pages render inside `LegacyLayout` (`<div class="legacy">` in `App.jsx`), and their
  22 global CSS rules (`*`, `h1`–`h3`, `p`, `main`, `:focus`) are scoped with
  `:where(.legacy)`, so they cannot reach the new markup. Removing them instead would have
  broken the old case-study pages, which stay until Phase 4. Delete the old CSS with them.
- `/` renders the new `HomePage.tsx` outside `.legacy`. The old `Home.jsx`, `HeroSection`,
  `Cards` and `Footer` are no longer rendered.
- Preflight is on, plus the base rules deferred from Phase 2 (`body` colours, font, size,
  line height; `color-scheme`). The old case-study pages get the dark page background in
  dark mode until Phase 4 rebuilds them; the branch is not deployed, so that is accepted.
- The `<main>` column is `max-w-[768px]` with `px-6`: Preflight's `border-box` keeps the text
  column at the design's 720px.

Still to do in the Nav step: move `ThemeToggle` from its temporary spot in `App.jsx` into the
new nav. (Home and About render a second old `Navbar`; the new nav must render once.)

Build in this order, one commit each, styled with Tailwind utilities: Nav → Intro (with photo
ticket) → Rail + Project tickets (expand/collapse) → About → Experience → Footer → motion.

Note: the self-hosted JetBrains Mono subset has no `→` (U+2192), so "Read the case study →"
falls back to the system monospace font. Decide then: an inline SVG arrow, or accept it.

**Check after each:** looks right at 375px and 1280px; keyboard can reach and operate
everything; no console errors.

## Phase 4 — Case-study pages

Rebuild `/thoughtgarden`, `/ecommerce`, `/pathfindingvisualizer` in the same world: what it is,
the problem, the architecture (keep the existing diagrams and folder-structure images), key
code decisions and tradeoffs, what he'd do differently, live demo and repo links.
Verify every demo link works; flag dead ones to Naiad.

## Phase 5 — Content and polish

1. Real Experience entries and the résumé PDF (from Naiad's résumé).
2. Real project screenshots or short clips (lazy-loaded, compressed).
3. Meta: title, description, Open Graph image, favicon from the NB monogram.
4. Run the Vercel Web Interface Guidelines review and an Impeccable `audit` + `polish` pass.
5. Lighthouse: aim for ≥ 95 on performance, accessibility, best practices and SEO.
6. **Check:** Naiad reviews the full site on his phone and laptop.

## Phase 6 — Ship

Naiad merges `redesign` into `master` (or approves the push). Confirm the GitHub Action
succeeds and naiadbaksh.com shows the new site.

## After launch

- Write `DESIGN.md` from the built site (Impeccable `document`).
- Rework the Wednesday chatbot.
- Plan the new modern project.
