// Two columns from 2 x 280px; stacks below that without a media query.
export default function Intro() {
  return (
    <section
      id="top"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-start gap-10"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-[34px] leading-[1.15] font-extrabold tracking-[-0.02em] motion-safe:animate-rise">
          Naiad Baksh
          <span className="block text-accent">Software Engineer</span>
        </h1>
        <p className="text-soft motion-safe:animate-rise motion-safe:[animation-delay:80ms]">
          Full-stack engineer in Toronto building fast, thoughtful React and Node apps, from
          database and API to the last pixel. A background in cognitive neuroscience and UX design
          shapes how I make interfaces feel effortless.
        </p>
        <div className="flex flex-wrap gap-2.5 text-[13px] font-bold motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
          <a
            href="#work"
            className="rounded-full bg-ink px-[18px] py-3 text-bg no-underline"
          >
            See the work
          </a>
          <a
            href="/naiad-baksh-resume.pdf"
            className="rounded-full border border-line px-[17px] py-[11px] no-underline"
          >
            Résumé (PDF)
          </a>
        </div>
        <p className="flex items-center gap-2.5 text-[13px] text-soft motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-status shadow-[0_0_0_4px_rgba(34,160,107,.18)]"
          />
          Open to full-stack and front-end roles
        </p>
      </div>

      <div className="relative flex justify-center pt-1.5">
        {/* The rail the photo ticket hangs from. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1.5 h-1 origin-left rounded-[2px] bg-rail motion-safe:animate-rail"
        />
        <figure className="relative mt-1.5 flex w-[min(100%,240px)] origin-top -rotate-[1.5deg] flex-col gap-2.5 rounded-[2px] bg-paper px-4 pt-[22px] pb-4 text-xs shadow-[0_10px_24px_-14px_rgba(20,23,26,.3)] [--tilt-from:-4deg] hover:rotate-0 hover:shadow-[0_18px_34px_-16px_rgba(20,23,26,.28)] motion-safe:animate-drop motion-safe:transition-[rotate,box-shadow] motion-safe:duration-[450ms] motion-safe:ease-settle motion-safe:[animation-delay:300ms]">
          <span
            aria-hidden="true"
            className="absolute -top-2 left-1/2 h-3.5 w-7 -translate-x-1/2 rounded-[3px] bg-rail"
          />
          <img
            src="/images/naiad-photo.jpg"
            alt="Portrait of Naiad Baksh"
            width={400}
            height={400}
            className="aspect-square w-full rounded-[2px] bg-panel object-cover"
          />
          <figcaption className="flex justify-between gap-2 border-t border-dashed border-line pt-2 text-soft">
            <span>ENGINEER</span>
            <span>TORONTO, ON</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
