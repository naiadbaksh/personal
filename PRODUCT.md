# PRODUCT.md — naiadbaksh.com

## What this is

The personal portfolio of Naiad Baksh (he/him), a full-stack software engineer in Toronto.

## Who it's for

Recruiters and hiring managers for mid-level front-end and full-stack roles, in Toronto or
remote in Canada. They skim for under a minute on the first visit. They want to know, fast:
what he builds, with what stack, how well, and how to reach him.

## What the visitor should believe

He is an engineer first: someone who ships real full-stack work in React, TypeScript, Node and
Python. His background in cognitive neuroscience (Western University, 2016) and UX design
(BrainStation) is what sets him apart, because he builds for how people perceive and decide.
He is also a trained chef. That is a personal detail and a visual theme, never the headline
or an origin story ("career changer from the kitchen" is exactly the wrong read).

## One-line pitch

Full-stack engineer in Toronto building fast, thoughtful React and Node apps, from database and
API to the last pixel.

## Page structure (settled)

1. Intro: name, "Software Engineer", pitch, See the work, Résumé (PDF), availability line, photo.
2. Selected work: three projects, each expands to screenshot/clip, Problem, Built, Stack, and a
   link to its case-study page.
3. About: short, stack-first. Neuroscience and UX background. Chef as one line.
4. Experience: work history from his résumé, plus a downloadable PDF.
5. Contact: email, LinkedIn, GitHub. No phone number. No Twitter or Instagram.

## Projects, in order

1. **Thought Garden** — synced podcast playback for Spotify Premium users ("a watch party for
   podcasts"). Django REST, React, Spotify Web API.
2. **eCommerce store** — storefront with OAuth sign-in, persistent cart, Stripe checkout.
   React, Redux, Firebase, Stripe. Note: the old case study says it was built with help from
   course instructors (Yihua Zhang, Andrei Neagoie). Decide with Naiad how to present this
   honestly, or replace it with a new project later.
3. **Pathfinding Visualizer** — animates search and maze-generation algorithms on a grid.
   React with hooks.

The AI Chatbot project comes off the home page while the "Wednesday" chatbot is hidden.
Every demo link must be checked before launch; several point at old Netlify URLs.

## Settled decisions

- Rebuild on Vite + React + TypeScript (Create React App is unmaintained).
- Stay on GitHub Pages with the naiadbaksh.com domain.
- Light and dark themes, following the system setting, with a manual toggle.
- Keep the NB monogram. Drop the purple-blue gradient and stock laptop art.
- Photo: the black-shirt portrait (`public/images/naiad-photo.jpg`) for now; a higher
  resolution version (≥ 800px) is wanted.

## Still needed from Naiad

- Résumé (for Experience and the PDF download).
- Higher-resolution photo.
- Real screenshots or short screen recordings of each project.
- A decision on the eCommerce project's presentation.

## Later

- Rework "Wednesday" the recruiter chatbot (he/him copy, no auto-open, no phone number).
- One new modern project (TypeScript, current React) to show current skills.
- Short demo videos made with Remotion.
