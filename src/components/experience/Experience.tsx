// From Naiad's résumé (2026). Newest first.
const roles = [
  { dates: "Oct 2025 – Apr 2026", role: "Full-stack Developer", company: "CBC/Radio-Canada · Contract" },
  { dates: "Feb 2024 – Oct 2025", role: "Software Developer", company: "Peninsula Canada" },
  { dates: "May 2022 – Feb 2024", role: "Software Developer", company: "GALE Partners" },
  { dates: "Nov 2021 – Apr 2022", role: "Software Developer", company: "Vision Capital" },
  { dates: "Sep 2016 – Nov 2017", role: "UX Developer", company: "CYC Labs" },
];

// Non-engineering roles: listed, but kept small.
const other = [
  { years: "2017 – 2020", role: "Team Lead", company: "Peninsula Canada" },
  { years: "2019 – 2020", role: "Recruitment Consultant", company: "Michael Page" },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="flex flex-col gap-3">
      <h2 id="experience-heading" className="mb-2 text-[15px] font-extrabold">
        Experience
      </h2>
      <ol className="flex flex-col gap-3">
        {roles.map((r) => (
          <li
            key={r.dates}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-6 gap-y-1 rounded-[14px] bg-panel px-5 py-[18px] text-[13px]"
          >
            <span className="text-soft">{r.dates}</span>
            <span>
              <span className="font-bold">{r.role}</span>
              <span className="block text-accent-text">{r.company}</span>
            </span>
          </li>
        ))}
      </ol>

      <h3 className="mt-4 text-[13px] font-bold">Other experience</h3>
      <ol className="flex flex-col gap-1 text-[13px] text-soft">
        {other.map((o) => (
          <li key={o.role}>
            {o.role}, {o.company} · <span className="whitespace-nowrap">{o.years}</span>
          </li>
        ))}
      </ol>

      <a
        href="/naiad-baksh-resume.pdf"
        className="mt-2 inline-flex min-h-11 items-center self-start text-[13px] font-bold"
      >
        Full résumé (PDF)
      </a>
    </section>
  );
}
