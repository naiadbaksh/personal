import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "../site-header/SiteHeader";
import Intro from "../intro/Intro";
import Work from "../work/Work";
import About from "../about/About";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";

export default function HomePage() {
  const { hash } = useLocation();

  // The browser scrolls to a #hash only on a full page load. After a client-side route
  // change (the /about redirect, for example), scroll to it here, once, on mount.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex max-w-[768px] flex-col gap-[88px] px-6 pt-12 pb-24"
      >
        <Intro />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
