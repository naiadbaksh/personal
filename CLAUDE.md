# naiadbaksh.com — working agreement

This repo is Naiad Baksh's personal portfolio site, live at naiadbaksh.com via GitHub Pages
(custom domain in `CNAME`, deploy workflow in `.github/workflows/`).

Naiad uses he/him. He is a full-stack software engineer in Toronto. The site exists to get him
interviews for mid-level front-end and full-stack roles (Toronto or remote Canada).

## Read before working

1. `PRODUCT.md` — who the site is for, what it must say, what's settled.
2. `docs/direction.md` — the locked visual direction ("Ticket Rail, minimal").
3. `docs/build-plan.md` — the phases, in order, with how to verify each one.
4. `docs/design-reference/TicketRailMinimal.dc.html` — the approved mockup's markup and CSS.
   It's a design-canvas file, not app code: read it for exact values, don't import it.

## How we work: Naiad wants to understand every change

Naiad is learning this codebase deeply enough to walk an interviewer through any part of it.

- Before each change, say in one or two sentences what you're about to do and why.
- Keep changes small enough to review in a minute. One concern per commit.
- After each change, tell him what to look at in the browser (the dev server is running).
- When you use a concept he may not know (a Vite config option, a TypeScript generic, a CSS
  technique), explain it in plain words in one or two sentences, then move on.
- Never paste over his questions with a big rewrite. If he asks "why", answer before continuing.

## Coding rules (Karpathy guidelines)

**Think before coding.** State assumptions. If something has more than one reasonable reading,
ask instead of picking silently. If a simpler approach exists, say so.

**Simplicity first.** Minimum code that solves the problem. No speculative features, no
abstractions for single-use code, no configurability nobody asked for.

**Surgical changes.** Touch only what the task needs. Match the existing style. Don't refactor
what isn't broken. If you notice unrelated dead code, mention it; don't delete it.
Exception: the planned rebuild in `docs/build-plan.md` replaces the old UI on purpose.

**Goal-driven.** For each step, state how we'll check it worked, then check it.

## Design rules (Impeccable)

This is an Experience-mode surface: the work leads, the interface recedes.
Follow `docs/direction.md` exactly. Craft floor, checked on the rendered page:

- Text contrast ≥ 4.5:1 (large text ≥ 3:1), in both light and dark themes.
- No eyebrow/kicker labels above headings. No gradient text. No emoji as icons.
- Monospace is the site's one typeface by design (the receipt-ticket world), not a costume.
- One authored motion moment (rail draws in, tickets drop and settle); everything respects
  `prefers-reduced-motion`.
- Theme the browser surfaces too: selection color, focus rings, link underline offset.
- Every interactive element is a real `<a>` or `<button>`, keyboard reachable, ≥ 44px target.
- Check every page at 375px and 1280px wide before calling it done.

## Facts and content

- Never invent achievements, metrics, employers or dates. Use `[PLACEHOLDER]` and list what's
  missing for Naiad.
- Don't publish his phone number anywhere.
- The "Wednesday" chatbot is hidden for now (not deleted). It will be reworked later.

## Commands

Fill these in after the Vite migration (phase 1):

- `npm run dev` — local server with live reload
- `npm run build` — production build
- `npm run preview` — serve the production build locally
