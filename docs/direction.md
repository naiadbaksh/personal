# Direction: Ticket Rail, minimal (locked)

Approved by Naiad on 2026-10-27. Reference markup: `design-reference/TicketRailMinimal.dc.html`.

## Thesis

A quiet, single-column engineer's site where the projects are paper order tickets hanging from
a thin steel rail. It refuses the usual portfolio template (big gradient hero, grid of
same-size cards) in favour of calm, receipt-like restraint. Influence: caweidmann.dev
(narrow column, one monospace face, soft gray panels, expanding entries).

## World

- **Typeface:** JetBrains Mono only (400, 500, 700, 800). Self-host it (woff2) rather than
  loading from Google Fonts at runtime.
- **Column:** max-width 720px, centered, 24px side padding. Sections separated by ~88px.
- **Base type:** 15px / 1.75. Small text 13px. Name/title 34px, weight 800, -0.02em.
  Section headings are small (15px, 800), not giant.

### Colour tokens

| Token        | Light     | Dark      | Use                                   |
|--------------|-----------|-----------|---------------------------------------|
| `bg`         | `#FFFFFF` | `#121416` | page ground                           |
| `ink`        | `#16191C` | `#ECEEF0` | primary text                          |
| `soft`       | `#4A5158` | `#B4BAC0` | body copy, secondary text             |
| `faint`      | `#A7ADB3` | `#5E656C` | decorative only (nav slashes)         |
| `panel`      | `#F3F4F5` | `#1E2124` | experience rows, image placeholders   |
| `paper`      | `#FFFFFF` | `#1A1D20` | ticket surface                        |
| `line`       | `#D6D9DC` | `#3A4046` | dashed rules, outlines                |
| `rail`       | `#A9B0B7` | `#6E767E` | rail and ticket clips                 |
| `accent`     | `#D9480F` | `#FF6B33` | "Software Engineer", hover, focus     |
| `accentText` | `#1F6F66` | `#7FD3C4` | project summaries, company names      |
| status dot   | `#22A06B` | `#22A06B` | availability indicator                |

Selection: accent background, white text. Focus ring: 2px solid accent, 3px offset.

**In code (Tailwind CSS v4):** each token is a CSS custom property in kebab-case (`--ink`,
`--accent-text`, `--status`) on `:root`, switched by `[data-theme="dark"]` and
`prefers-color-scheme`. `@theme inline` maps each one to a Tailwind colour
(`--color-ink: var(--ink)`), so `text-ink`, `bg-panel`, `border-line` and `text-accent-text`
follow the theme with no `dark:` variants. The typeface is `--font-mono`.

## Components

- **Nav:** `NB` pill (panel background) then Work / About / Experience / Contact separated by
  faint slashes. Theme toggle: 44px round outline button with a half-filled circle icon.
- **Intro:** two columns on desktop (text, then photo ticket), stacked on mobile.
  Buttons are pills: primary = ink background; secondary = 1px outline.
- **Photo ticket:** 240px wide, paper surface, 2px radius, clip on top centre, slight -1.5°
  tilt, dashed rule, caption "ENGINEER · TORONTO, ON".
- **Rail:** 4px tall, rail colour, 2px radius.
- **Project ticket:** paper surface hanging from the rail, clip at top-left, tiny tilt
  (-0.5° / 0.4° / -0.3°). Collapsed row: title (16px, 800) + one-line summary (accentText) +
  chevron. Expanded: 16:9 screenshot, then a dashed rule and a `<dl>` of Problem / Built / Stack,
  then "Read the case study →". The row is a real `<button aria-expanded>`. One ticket open
  at a time; the first is open by default.
- **Experience row:** panel background, 14px radius, dates | role + company.
- **Footer:** dashed top rule, "Contact", email / LinkedIn / GitHub links.

## Motion (the one authored moment)

All ease-out `cubic-bezier(.16, 1, .3, 1)`.

1. Intro text rises in (12px, 0.8s), staggered 80ms.
2. Rail draws in from the left (scaleX 0→1, 1s).
3. Tickets drop onto the rail (from -28px with extra tilt, 0.9s), staggered ~100ms, starting
   at 350ms.
4. Hover: ticket straightens to 0° and its shadow deepens (0.45s).
5. Expand/collapse: animate `grid-template-rows` 0fr↔1fr (0.5s) with an opacity fade;
   chevron rotates 180°.

`prefers-reduced-motion: reduce` turns all of this off.

## Honest risk

Monospace everywhere can feel cold or "terminal costume" if the copy is jargon-heavy. Keep the
copy warm and human; the receipt world earns the typeface, the words must earn the reader.
