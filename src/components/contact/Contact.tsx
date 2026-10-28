const links = [
  { href: "mailto:naiadbaksh@gmail.com", label: "naiadbaksh@gmail.com" },
  { href: "https://www.linkedin.com/in/naiad-baksh-91963aa0/", label: "LinkedIn" },
  { href: "https://github.com/naiadbaksh", label: "GitHub" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col gap-3.5 border-t border-dashed border-line pt-7"
    >
      <h2 id="contact-heading" className="text-[15px] font-extrabold">
        Contact
      </h2>
      <nav aria-label="Contact" className="flex flex-wrap gap-x-6 text-[13px]">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="inline-flex min-h-11 items-center">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
