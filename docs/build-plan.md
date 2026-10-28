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
  broken the old case-study pages, which stay until Phase 4. Delete the old CSS with them,
  and the Font Awesome CDN stylesheet in `index.html` (its unlayered `.sr-only` beats
  Tailwind's `focus:not-sr-only`; until then, don't use `sr-only` on anything that must
  appear on focus).
- `/` renders the new `HomePage.tsx` outside `.legacy`. The old `Home.jsx`, `HeroSection`,
  `Cards` and `Footer` are no longer rendered.
- Preflight is on, plus the base rules deferred from Phase 2 (`body` colours, font, size,
  line height; `color-scheme`). The old case-study pages get the dark page background in
  dark mode until Phase 4 rebuilds them; the branch is not deployed, so that is accepted.
- The `<main>` column is `max-w-[768px]` with `px-6`: Preflight's `border-box` keeps the text
  column at the design's 720px.

Build in this order, one commit each, styled with Tailwind utilities: Nav → Intro (with photo
ticket) → Rail + Project tickets (expand/collapse) → About → Experience → Footer → motion.

Status: **done 2026-10-28** (each section checked at 375px and 1280px, light and dark, by
keyboard, no new console errors). Components are in `src/components/` (`site-header`, `intro`,
`work`, `about`, `experience`, `contact`), composed by `pages/HomePage.tsx`. Notes:

- Below 640px the header puts NB and the toggle on row 1 and the links on row 2 (the
  mockup's wrap left a dangling slash). `ThemeToggle` lives in the header now.
- An old `Button { display: none }` rule inside a media query in `Navbar.css` hid every button
  below 960px; it is scoped to `.legacy` too.
- Experience comes from the résumé: five engineering roles as panels, the two
  non-engineering roles in a small "Other experience" list (Naiad's choice).
- Motion keyframes live in `tailwind.css` `@theme` (`animate-rise/rail/drop`,
  `ease-settle`), always used with `motion-safe:`.
- Open content: the résumé PDF still contains the phone number, so it is not committed;
  project screenshots are `[PLACEHOLDER]`; the photo is 400px.

Note: the self-hosted JetBrains Mono subset has no `→` (U+2192). Decided: "Read the case
study" uses an inline SVG arrow (`aria-hidden`), not the glyph.

**Check after each:** looks right at 375px and 1280px; keyboard can reach and operate
everything; no console errors.

## Phase 4 — Case-study pages

Rebuild `/thoughtgarden`, `/ecommerce`, `/pathfindingvisualizer` in the same world: what it is,
the problem, the architecture (keep the existing diagrams and folder-structure images), key
code decisions and tradeoffs, what he'd do differently, live demo and repo links.
Verify every demo link works; flag dead ones to Naiad.

Status: **done 2026-10-28, with placeholders.** `pages/CaseStudyPage.tsx` renders all three
from `src/content/projects.ts` (the home tickets read the same file). Notes:

- Links checked, all HTTP 200: eCommerce demo `jovial-wozniak-c11748.netlify.app`, Pathfinding
  demo `naiadbaksh.github.io/pathfinding`, Thought Garden YouTube demo `ASBGLWwAu1I`, and the
  repos `naiadbaksh/thought-garden`, `/eCommerce`, `/pathfinding`. Thought Garden has no live
  app link (the old page's commented-out link pointed at a deploy of the same Netlify site as
  the eCommerce demo; unclear what it showed).
- Text is from the old pages, shortened. Alt text was written from the images themselves.
- `[PLACEHOLDER]`: "who it is for" under The problem, Decisions and tradeoffs, and What I'd do
  differently, on all three pages. Naiad writes these.
- Images are WebP copies in `src/images/web/` (max 1440px, q85; 8.4 MB -> 0.96 MB).
- Still legacy: `/about`, `/contact`, `/aichatbot` and their CSS, Font Awesome, and the old
  Google Fonts (now loaded lazily by `src/legacy/LegacyLayout.jsx`, see Phase 5). The old
  case-study components are no longer routed.

## Phase 5 — Content and polish

1. Real Experience entries and the résumé PDF (from Naiad's résumé).
2. Real project screenshots or short clips (lazy-loaded, compressed).
3. Meta: title, description, Open Graph image, favicon from the NB monogram.
4. Run the Vercel Web Interface Guidelines review and an Impeccable `audit` + `polish` pass.
5. Lighthouse: aim for ≥ 95 on performance, accessibility, best practices and SEO.
6. **Check:** Naiad reviews the full site on his phone and laptop.

Status (2026-10-28, partly done):

1. Experience: **done** from the résumé. PDF: **waiting** — the file in `public/` still has
   the phone number, so it is untracked; Naiad replaces it, then it is checked and committed.
2. Screenshots/clips: the case-study images are compressed WebP and lazy-loaded. The home
   tickets show each project's `shot` (**done**): eCommerce and Pathfinding reuse their
   case-study image; Thought Garden uses YouTube's `sd1.jpg` frame of the demo (Naiad's
   choice; it shows third-party podcast art), cropped to 16:9 by `object-cover`. Option:
   `srcset` with 720px copies would save ~130–160 KB on phones.
3. Meta: **done**. Favicon and app icons are the NB monogram (`public/favicon.svg`, light and
   dark). `public/og-image.png` (1200×630) was rendered with headless Chrome from an HTML
   file in the light tokens; link previews work only after deploy (absolute URL).
4. Not run: the Vercel guidelines and Impeccable skills are not installed. Instead, axe-core
   (WCAG 2.2 AA + best practice): 0 violations on `/` and the three case studies, both themes.
5. Lighthouse (mobile, `vite preview`): `/` 99/100/100/100; `/thoughtgarden` 98/100/96/100
   (the 96 is the YouTube embed); `/ecommerce` 98/100/100/100. The old pages now load lazily
   from `src/legacy/LegacyLayout.jsx` with their CSS and external fonts, which removed ~1 s of
   render-blocking CSS from every page.

Also done (2026-10-28, second session, decided with Naiad): unknown paths show
`NotFoundPage.tsx`; `/about` and `/contact` redirect to `/#about` and `/#contact` (`HomePage`
scrolls to the `#hash` on mount); opening a case study sets the URL to `/#<slug>` first, so
"back" returns to that ticket, open. `/aichatbot` is still the old page. The case-study
placeholders are replaced by drafts from the project code (`audience`, `decisions`,
`differently` in `projects.ts`), and the Thought Garden copy now matches the code (one host
player, shared controls). The eCommerce source was restored from the demo's source maps and
pushed to `naiadbaksh/eCommerce`. Remaining: the résumé PDF (still has the phone number),
Naiad's review of the case-study wording, a re-run of Lighthouse, and Naiad's review on phone
and laptop.

## Phase 6 — Ship

Naiad merges `redesign` into `master` (or approves the push). Confirm the GitHub Action
succeeds and naiadbaksh.com shows the new site.

## After launch

- Write `DESIGN.md` from the built site (Impeccable `document`).
- Rework the Wednesday chatbot.
- Plan the new modern project.
