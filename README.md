# katiekim.dev

Redesigned portfolio, on the same stack as the original: [Next.js](https://nextjs.org/)
pages router, Sass, static export to GitHub Pages via `next.config.js` + `CNAME`.

Single-page site: everything (About, Experience, Projects) lives on `pages/index.js`
as anchor-linked sections, and the nav scrolls smoothly to each one instead of
navigating to separate pages. Contact info lives in the footer, which is the
`#contact` scroll target.

## What this covers

- Matches the original visual identity: coral accent, Montserrat family, KK monogram,
  dimmed-first-name hero treatment, footer signature block with social icons.
- Working dark/light toggle. Both themes are CSS custom properties in
  `styles/variables.sass`, switched at runtime via `hooks/useTheme.js`, persisted in
  `localStorage`, defaulting to system preference on first visit.
- Interactive background (`components/BackgroundFX.js`): a dense, translucent grid of
  dots plus a handful of geometric shapes (circle, diamond, plus), both react to
  cursor proximity. No blur, no gradients, solid color only.
- Fixed nav and footer while scrolling.
- Adds the current role at Gorilla (missing from the live site before), groups
  skills by category, fills in the previously-empty Projects section, and adds an
  Experience/Education tab switcher.
- Code split into `components/` (Nav, Logo, Layout, Footer, BackgroundFX),
  `components/sections/` (About, Experience, Projects), and `data/`
  (experience.js, education.js, projects.js), so content edits do not touch layout code.

## Structure

```
components/            Nav, Logo, Layout, Footer, BackgroundFX
components/sections/    AboutSection, ExperienceSection, ProjectsSection
hooks/                   useTheme.js
data/                    experience.js, education.js, projects.js
pages/                   index.js (single page), _app.js
styles/                  one Sass module per component/section, plus variables.sass + globals.sass
```

## Still needs your input

Search for `[bracketed placeholders]`, mainly in `data/experience.js`:

- Start date at Gorilla
- Wipro/Meta end date
- Bullets for Wipro/Meta, Blizzard, and SourceDay roles
- Whether to keep or cut the SourceDay entry

## Getting started

```
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```
npm run build
```

Static output goes to `out/`, ready to deploy to GitHub Pages same as before.
