# Louise Dove Hair

A single full-viewport editorial hero: full-bleed background, a giant scrolling
name, and a cutout portrait layered on top of it so the letters read behind the
subject. Black/cream, no cards, no scroll.

Built to a pixel-level spec — spacing, z-order, timings and font are all fixed
by that spec; the copy is branded for Louise Dove Hair.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run preview
npm run lint
```

## Layout

| Layer            | z         | Content                          |
| ---------------- | --------- | -------------------------------- |
| BG image         | default   | full-bleed background            |
| Marquee name     | `z-10`    | scrolling “Louise — Dove”        |
| Cream rule       | `z-10`    | horizontal line above the footer |
| Footer           | `sm:z-10` | desktop: under the portrait      |
| Front portrait   | `z-20`    | cutout over the marquee          |
| Header + footer  | `z-30`    | chrome (footer is z-30 on mobile)|
| Mobile drawer    | `z-40`    | backdrop + panel                 |
| Hamburger        | `z-50`    | while the drawer is closed       |

## Entrance animations

Defined in `src/index.css`, applied with per-element `animationDelay`.

| Class           | Duration / easing                    | Delay                |
| --------------- | ------------------------------------ | -------------------- |
| `anim-fade-in`  | 1.2s `ease-out`                      | —                    |
| `anim-rise-in`  | 1.4s `cubic-bezier(.22,1,.36,1)`     | 300ms                |
| `anim-fade-up`  | 0.9s `cubic-bezier(.22,1,.36,1)`     | 500–1550ms, staggered|
| `anim-line`     | 1.1s `cubic-bezier(.76,0,.24,1)`     | 1200ms               |
| `.marquee`      | 30s `linear infinite`                | —                    |

`prefers-reduced-motion: reduce` collapses every animation and transition to
0.01ms with no delay.

## Deploying

Pushing to the default branch builds the site and publishes it to GitHub Pages
via `.github/workflows/deploy-pages.yml`.

Live at **https://besdoth.github.io/Louise-Dove-Hair/**

`vite.config.ts` sets `base: '/Louise-Dove-Hair/'` because the site is served
from a repo subpath. Adding a custom domain later means changing that to `'/'`.

GitHub Pages only serves public repositories on the free plan — a private repo
needs GitHub Pro or above.

## Files

- `src/site.ts` — every string and asset URL the hero renders. **Rebranding the
  page is an edit to this file alone.**
- `src/components/Hero.tsx` — the whole composition.
- `src/index.css` — Tailwind theme (`cream`, `font-hn`), keyframes, reduced motion.
- `index.html` — document title and the Helvetica Neue ME webfont, loaded
  non-render-blocking via the `media="print"` → `onload="this.media='all'"` pattern.

## Note on the spec

The spec asks for both a hamburger that morphs into an X *and* a Lucide `X`
close button, both anchored at `right-6 top-6`. Rendered together they overlap
as one doubled, 7px-offset X. The hamburger therefore drops from `z-50` to
`z-30` while the drawer is open, so the sliding panel covers it and the Lucide
`X` is the single visible close control. Every specified timing is unchanged.
