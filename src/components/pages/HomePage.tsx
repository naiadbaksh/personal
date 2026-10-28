import SiteHeader from "../site-header/SiteHeader";
import Intro from "../intro/Intro";
import Work from "../work/Work";

export default function HomePage() {
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
      </main>
    </>
  );
}
