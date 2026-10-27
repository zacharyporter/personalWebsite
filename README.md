# zacharyporter.net

Personal portfolio site for Zachary Porter — About, Experience, Projects, Blog, and Contact pages, built with Next.js and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page auto-updates as you edit files under `src/`.

## Project structure

- `src/app/` — routes (`/`, `/about`, `/experience`, `/projects`, `/blog`, `/contact`), each an App Router page
- `src/components/` — shared UI (`Nav`, `Footer`, `ProjectCard`, icons)
- `src/data/` — content: `site.ts` (bio/links/skills), `experience.ts` (career timeline), `projects.ts` (project list)
- `public/` — static assets, including the CNAME for the custom domain

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

This site builds as a static export (`output: "export"` in `next.config.ts`) and deploys to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`, publishing to [zacharyporter.net](https://zacharyporter.net).

See [CHANGELOG.md](CHANGELOG.md) for release history.
