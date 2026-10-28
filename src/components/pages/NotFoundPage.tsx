import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SiteHeader from "../site-header/SiteHeader";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = "Page not found | Naiad Baksh";
    return () => {
      document.title = "Naiad Baksh | Software Engineer";
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex max-w-[768px] flex-col gap-5 px-6 pt-12 pb-24"
      >
        <h1 className="text-[34px] leading-[1.15] font-extrabold tracking-[-0.02em]">
          Page not found
        </h1>
        <p className="text-soft">
          There is no page at <code className="break-all text-ink">{pathname}</code>.
        </p>
        <Link to="/" className="inline-flex min-h-11 items-center gap-1.5 self-start font-bold">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Go to the home page
        </Link>
      </main>
    </>
  );
}
