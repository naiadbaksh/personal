import { useState } from "react";
import { Link } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  built: string;
  stack: string;
  href: string;
  // Resting tilt, the tilt it drops in from, and its drop delay. Full class names so
  // Tailwind can find them.
  ticketClass: string;
};

const projects: Project[] = [
  {
    id: "thoughtgarden",
    title: "Thought Garden",
    summary: "Synced podcast listening for Spotify Premium users.",
    problem: "Keep podcast playback in sync across listeners’ devices.",
    built: "A Django REST API and React client on the Spotify Web API.",
    stack: "Django REST · React · Spotify API",
    href: "/thoughtgarden",
    ticketClass: "-rotate-[0.5deg] [--tilt-from:-3deg] motion-safe:[animation-delay:350ms]",
  },
  {
    id: "ecommerce",
    title: "eCommerce store",
    summary: "A storefront with accounts, a cart and payments.",
    problem: "Sell a catalogue with sign-in, a persistent cart and checkout.",
    built:
      "A Redux storefront with Firebase auth and data, and Stripe checkout, built from a course project and extended.",
    stack: "React · Redux · Firebase · Stripe",
    href: "/ecommerce",
    ticketClass: "rotate-[0.4deg] [--tilt-from:3deg] motion-safe:[animation-delay:450ms]",
  },
  {
    id: "pathfinding",
    title: "Pathfinding Visualizer",
    summary: "Search algorithms, animated on an interactive grid.",
    problem: "Make search algorithms visible and intuitive.",
    built: "A grid that animates search and maze generation step by step.",
    stack: "React · Hooks",
    href: "/pathfindingvisualizer",
    ticketClass: "-rotate-[0.3deg] [--tilt-from:-2deg] motion-safe:[animation-delay:550ms]",
  },
];

export default function Work() {
  // One ticket open at a time; the first is open by default.
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="work" aria-labelledby="work-heading" className="flex flex-col gap-5">
      <h2 id="work-heading" className="text-[15px] font-extrabold">
        Selected work
      </h2>
      <div
        aria-hidden="true"
        className="h-1 origin-left rounded-[2px] bg-rail motion-safe:animate-rail motion-safe:[animation-delay:200ms]"
      />
      <div className="-mt-2.5 flex flex-col gap-4">
        {projects.map((p) => {
          const open = openId === p.id;
          return (
            <article
              key={p.id}
              className={`relative origin-top rounded-[2px] bg-paper pt-2.5 shadow-[0_10px_24px_-16px_rgba(20,23,26,.3)] hover:rotate-0 hover:shadow-[0_18px_34px_-16px_rgba(20,23,26,.28)] motion-safe:animate-drop motion-safe:transition-[rotate,box-shadow] motion-safe:duration-[450ms] motion-safe:ease-settle ${p.ticketClass}`}
            >
              {/* Clip that holds the ticket on the rail. */}
              <span
                aria-hidden="true"
                className="absolute -top-1.5 left-7 h-3 w-6 rounded-[3px] bg-rail"
              />
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${p.id}-details`}
                  onClick={() => setOpenId(open ? null : p.id)}
                  className="grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-3.5 text-left"
                >
                  <span className="text-base font-extrabold">{p.title}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`row-span-2 motion-safe:transition-[rotate] motion-safe:duration-[400ms] motion-safe:ease-settle ${open ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="text-[13px] text-accent-text">{p.summary}</span>
                </button>
              </h3>
              {/* Collapse by animating the row from 1fr to 0fr. visibility: hidden (set at the
                  end of the closing transition) takes the closed details out of the Tab order. */}
              <div
                id={`${p.id}-details`}
                className={`grid motion-safe:transition-[grid-template-rows,opacity,visibility] motion-safe:duration-500 motion-safe:ease-settle ${
                  open ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="flex flex-col gap-3.5 px-5 pt-1 pb-5 text-[13px]">
                    <div className="flex aspect-video items-center justify-center rounded-[2px] bg-panel text-soft">
                      [PLACEHOLDER: screenshot]
                    </div>
                    <dl className="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-4 gap-y-1.5 border-t border-dashed border-line pt-3">
                      <dt className="font-bold">Problem</dt>
                      <dd className="text-soft">{p.problem}</dd>
                      <dt className="font-bold">Built</dt>
                      <dd className="text-soft">{p.built}</dd>
                      <dt className="font-bold">Stack</dt>
                      <dd className="text-soft">{p.stack}</dd>
                    </dl>
                    <Link to={p.href} className="inline-flex min-h-11 items-center gap-1.5 self-start font-bold">
                      Read the case study
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
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
