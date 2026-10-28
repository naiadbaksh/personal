# Starting the build in Claude Code

1. Clone the repo on your computer (if you haven't):
   `git clone https://github.com/naiadbaksh/personal.git`
2. Unzip this handoff into the repo's root folder, so `CLAUDE.md` and `PRODUCT.md` sit next to
   `package.json`, and the rest goes into `docs/`.
3. Open Claude Code in that folder.
4. Paste this as your first message:

> Read CLAUDE.md, PRODUCT.md, docs/direction.md and docs/build-plan.md. Then start Phase 0 on a
> new branch called `redesign`. Explain each step to me as you go, and start the dev server so I
> can watch changes live in my browser.

Optional, once you're comfortable: install the Impeccable skill in that project so Claude Code
can run its `audit`, `critique` and `polish` commands directly.
