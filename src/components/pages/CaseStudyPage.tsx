import { useEffect, type ReactNode } from "react";
import SiteHeader from "../site-header/SiteHeader";
import Contact from "../contact/Contact";
import { projects, type Figure } from "../../content/projects";

const heading = "text-[15px] font-extrabold";

function Section({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <h2 id={id} className={heading}>
        {title}
      </h2>
      {children}
    </section>
  );
}

// Portrait images (the folder trees) stay narrow; the rest fill the column.
function Shot({ figure, eager = false }: { figure: Figure; eager?: boolean }) {
  const portrait = figure.height > figure.width;
  return (
    <figure className="flex flex-col gap-2">
      <img
        src={figure.src}
        width={figure.width}
        height={figure.height}
        alt={figure.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-auto w-full rounded-[2px] border border-line bg-panel ${portrait ? "max-w-[360px]" : ""}`}
      />
      <figcaption className="text-[13px] text-soft">{figure.caption}</figcaption>
    </figure>
  );
}

function Placeholder({ children }: { children: ReactNode }) {
  return <p className="text-soft">[PLACEHOLDER: {children}]</p>;
}

export default function CaseStudyPage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug)!;

  // A client-side route change keeps the old scroll position; start each case study at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.title} | Naiad Baksh`;
    return () => {
      document.title = "Naiad | Software Engineer";
    };
  }, [project]);

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex max-w-[768px] flex-col gap-[88px] px-6 pt-8 pb-24"
      >
        <div className="flex flex-col gap-5">
          <a href="/#work" className="inline-flex min-h-11 items-center gap-1.5 self-start text-[13px] no-underline">
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
            All work
          </a>
          <h1 className="text-[34px] leading-[1.15] font-extrabold tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="text-accent-text">{project.summary}</p>
          <p className="text-[13px] text-soft">{project.stack.join(" · ")}</p>
          <div className="flex flex-wrap gap-2.5 text-[13px] font-bold">
            {project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={
                  i === 0
                    ? "rounded-full bg-ink px-[18px] py-3 text-bg no-underline"
                    : "rounded-full border border-line px-[17px] py-[11px] no-underline"
                }
              >
                {l.label}
              </a>
            ))}
          </div>
          {project.credit && (
            <p className="rounded-[14px] bg-panel px-5 py-4 text-[13px] text-soft">
              {project.credit}
            </p>
          )}
          {project.video ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.video.id}`}
              title={project.video.title}
              loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              className="aspect-video w-full rounded-[2px] border border-line bg-panel"
            />
          ) : (
            project.shot && <Shot figure={project.shot} eager />
          )}
        </div>

        <Section title="What it is">
          {project.overview.map((text) => (
            <p key={text} className="text-soft">
              {text}
            </p>
          ))}
        </Section>

        <Section title="The problem">
          <p className="text-soft">{project.problem}</p>
          <Placeholder>who it is for, and why the problem matters</Placeholder>
        </Section>

        <Section title="Architecture">
          {project.architecture.map((f) => (
            <Shot key={f.src} figure={f} />
          ))}
        </Section>

        <Section title="Code">
          {project.code.map((f) => (
            <Shot key={f.src} figure={f} />
          ))}
        </Section>

        <Section title="Decisions and tradeoffs">
          <Placeholder>two or three key decisions, what you chose instead, and why</Placeholder>
        </Section>

        <Section title="What I'd do differently">
          <Placeholder>what you would change now, with what you know today</Placeholder>
        </Section>

        <Contact />
      </main>
    </>
  );
}
