# Overnight report — 2026-10-28

Work done on the `redesign` branch while you were away. Nothing was pushed, nothing touched
`master`, and the résumé PDF is still uncommitted. Every change is a small commit
(18 commits, `fd1cd7d` to `8c64adc`), so any one of them can be reverted on its own.

## In one paragraph

Phase 3 (home page) and Phase 4 (case-study pages) are finished, apart from content only you
can write. Phase 5 is partly done: icons and meta, image compression, an accessibility scan
(0 violations) and Lighthouse (performance 98–99, accessibility 100, best practices 96–100,
SEO 100). The site is **not ready to ship** until the four items in "Before you can ship" are
done.

## Before you can ship

1. **Résumé PDF.** `public/naiad-baksh-resume.pdf` still contains your phone number, so it is
   not committed. Until it is, the two "Résumé (PDF)" links would 404 on the live site.
   Remove the number, export again, replace the file, and tell me — I will check it and
   commit it.
2. **Case-study placeholders.** Each case study shows three `[PLACEHOLDER: …]` lines that you
   need to write: who the project is for and why the problem matters; two or three key
   decisions and tradeoffs; what you would do differently now. They live in
   `src/components/pages/CaseStudyPage.tsx` today; when you have text, I will move it into
   `src/content/projects.ts`, one field per project.
3. **Home ticket screenshots.** The three tickets on the home page still show
   `[PLACEHOLDER: screenshot]`. I can reuse the case-study screenshots (eCommerce,
   Pathfinding) and a frame of the Thought Garden video, or you can give me new ones.
4. **Confirm one claim.** The eCommerce ticket says "built from a course project **and
   extended**". If you did not extend it, I will remove "and extended".

## Decisions I made that you may want to change

| Where | What I did | Why |
|---|---|---|
| eCommerce case study | Credit note: "Built as a course project with the help of its instructors, senior engineers Yihua Zhang and Andrei Neagoie." | Your chosen option 1, worded from the old page. |
| Pathfinding case study | Kept "Inspired by Clement Mihailescu's pathfinding visualizer." Dropped the old line saying yours was "more thought-through and elegant". | A comparison with someone else's work reads poorly to a recruiter. Easy to add back. |
| All case studies | Rewrote the old "My Process" text short, in first person, facts only. Added two facts from your own images: 7 algorithms and 4 maze generators (Pathfinding folder tree), and the store's name "Nota Bene" (Redux diagram). | Please read each page once for accuracy. |
| Case-study layout | Back link, title, summary, stack, link pills, credit, demo, then What it is / The problem / Architecture / Code / Decisions and tradeoffs / What I'd do differently / Contact. Code snippets are images with captions (no carousel). | Follows the Phase 4 list in the build plan. |
| Thought Garden | Embeds your YouTube demo (privacy-enhanced `youtube-nocookie.com`). No "live demo" link: the old page had none that worked. | The commented-out old link pointed at a deploy of the eCommerce Netlify site. |
| Page titles | Home: "Naiad Baksh \| Software Engineer". Case studies: "Thought Garden \| Naiad Baksh" and so on. | Was "Naiad \| Software Engineer". |
| Header links | Now `/#work`, `/#about`, … so they also work from case-study pages. The NB link is announced as "NB, home". | On the home page they still jump without a reload. |
| Favicon and app icons | The NB monogram (from `nbLogoBlue.svg`) on a rounded `panel` tile, switching to dark colours in dark mode. Replaces CRA's React-logo icons. | `PRODUCT.md`: keep the NB monogram. |
| Contact footer | Kept inside `<main>` like the mockup. | A real page `<footer>` outside `<main>` is an option later. |

## Things I could not check well

- **The motion.** My test browser rendered very few frames overnight (the window was likely
  covered), so I could only verify the CSS: animation names, delays, start and end states,
  hover straightening, and expand/collapse. Please watch a fresh load of the home page and
  hover/open the tickets, and tell me if anything feels off.
- **Diagrams in dark mode.** The architecture diagrams and folder trees are white images, so
  they are bright boxes on the dark page. Options: leave them, or put them on a light "paper"
  panel so they look intentional.

## What I recommend next (not done; your call)

1. **Old routes.** `/about`, `/contact` and `/aichatbot` are still the old pages. I recommend
   redirecting `/about` to `/#about` and `/contact` to `/#contact`. For `/aichatbot`,
   `PRODUCT.md` already takes the AI Chatbot off the home page; it could stay unlinked until
   Wednesday is reworked, or be removed.
2. **A 404 page.** An unknown path (for example `/foo`) matches no route, so the page is
   completely blank (on GitHub Pages too, after the `404.html` redirect). A small "Page not
   found" page in the new design would fix it.
3. **Back button.** Going back from a case study lands at the top of the home page, not at
   the ticket you opened. Fixable with a little scroll restoration.
4. **Responsive images.** Adding 720px copies and `srcset` would save about 130–160 KB per
   case study on phones. Lighthouse is already 98, so this is optional.
5. **`og:image`.** A 1200×630 share image for LinkedIn and Slack previews (placeholder comment
   in `index.html`).
6. **Dead files.** 69 of 149 files in `src/` are no longer reached from the app: the old home
   page and hero, the old cards, the three old case-study components and their CSS,
   `SignUp.jsx`, `background-info`, `demo-video`, the Bebas Neue fonts, and about 30 old
   images (including `thoughtGarden.png`, 4.6 MB). The Wednesday chatbot files are in this
   list too, but `CLAUDE.md` says to keep them. I did not delete anything. I suggest one
   cleanup commit when the old routes are decided.

## Numbers

- **Lighthouse** (mobile, production build): `/` 99 / 100 / 100 / 100; `/thoughtgarden`
  98 / 100 / 96 / 100 (the 96 comes from the YouTube embed); `/ecommerce` 98 / 100 / 100 / 100.
  Before the lazy-loading change, `/` was 93 for performance.
- **axe-core** (WCAG 2.2 AA + best practice): 0 violations on `/` and all three case
  studies, light and dark.
- **Bundle:** main JS 271 KB → 190 KB. The old pages now load from their own chunk, so their
  JS, CSS, Google Fonts and Font Awesome no longer slow down the new pages. A style hash of
  every element on `/about`, `/contact` and `/aichatbot` is unchanged.
- **Images:** case-study images 8.4 MB → 0.96 MB (WebP copies in `src/images/web/`;
  originals untouched).
- **Links checked (HTTP 200):** both live demos, the YouTube demo, and the three GitHub repos.
- **Clean CI run** on an export of `HEAD`: `npm ci`, type check and build all pass. No phone
  number in any tracked file.

## Housekeeping

- The build plan (`docs/build-plan.md`) has status notes for Phases 3, 4 and 5.
- You asked me to have you clear the chat between phases. Phases 3 and 4 both finished
  tonight while you were away. A good moment now: run `/clear`, then start the next session
  with "Read CLAUDE.md, the build plan and docs/overnight-report.md, then continue Phase 5."
- The dev server is still running at http://localhost:5173.
