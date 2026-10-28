export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="flex flex-col gap-4">
      <h2 id="about-heading" className="text-[15px] font-extrabold">
        About
      </h2>
      <p className="text-soft">
        I work mostly in React, TypeScript, Node and Python, and I care about clean architecture,
        performance and interfaces that feel obvious to use.
      </p>
      <p className="text-soft">
        I studied cognitive neuroscience at Western University and UX design at BrainStation, so I
        design for how people actually perceive and decide. Outside of code, I'm a trained chef.
      </p>
    </section>
  );
}
