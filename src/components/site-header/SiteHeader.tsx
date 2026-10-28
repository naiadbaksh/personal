import ThemeToggle from "../theme-toggle/ThemeToggle";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Links are min-h-11 (44px) for touch targets; the mockup's text position is unchanged.
const link = "inline-flex min-h-11 items-center no-underline";
const slash = (
  <span aria-hidden="true" className="text-faint">
    /
  </span>
);

// Below 640px: NB and the toggle share the first row, the section links take the second.
// From 640px: one row, as in the mockup. CSS order only; the Tab order stays NB, links, toggle.
export default function SiteHeader() {
  return (
    <>
      {/* Off-screen until focused. Not sr-only: the old Font Awesome CSS has an unlayered
          .sr-only that focus:not-sr-only cannot undo. */}
      <a
        href="#main-content"
        className="fixed -top-16 left-3 z-50 rounded-full bg-ink px-4 py-2.5 text-bg no-underline focus:top-3"
      >
        Skip to main content
      </a>
      <header className="mx-auto flex max-w-[768px] flex-wrap items-center gap-x-1.5 px-6 py-5 text-[13px]">
        {/* #top scrolls to the top of the page, even before the intro has that id. */}
        <a href="#top" className={`${link} order-1 font-extrabold`}>
          <span className="rounded-full bg-panel px-2.5 py-1 leading-none">NB</span>
          <span className="sr-only">, back to top</span>
        </a>
        <nav
          aria-label="Main"
          className="order-3 -ml-2 flex w-full items-center gap-1.5 sm:order-2 sm:ml-0 sm:w-auto"
        >
          {sections.map(({ href, label }, i) => (
            <span key={href} className="contents">
              {i === 0 ? <span className="hidden sm:inline">{slash}</span> : slash}
              <a href={href} className={`${link} px-2`}>
                {label}
              </a>
            </span>
          ))}
        </nav>
        <div className="order-2 ml-auto sm:order-3">
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
