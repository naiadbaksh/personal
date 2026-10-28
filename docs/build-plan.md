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

1. Self-host JetBrains Mono (woff2 in `src/fonts/`), `font-display: swap`.
2. Create the colour tokens from `docs/direction.md` as CSS custom properties on `:root`, with
   `[data-theme="dark"]` and a `prefers-color-scheme: dark` default.
3. Theme toggle: reads system preference, stores the choice in `localStorage` (wrapped in
   try/catch), sets `data-theme` on `<html>`.
4. Base styles: body type, links, selection, focus rings, reduced-motion media query.
5. **Check:** toggle works, contrast passes in both themes (use browser devtools).

Decide with Naiad: plain CSS modules vs keeping styled-components. Recommendation: CSS modules
plus the custom properties. Fewer dependencies and easy to explain.

## Phase 3 — Home page

Build in this order, one commit each: Nav → Intro (with photo ticket) → Rail + Project
tickets (expand/collapse) → About → Experience → Footer → motion.

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
