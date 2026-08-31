# Priyansh Rana — Portfolio

Personal, dark-by-default developer portfolio built with **React + TypeScript + Tailwind CSS**, scaffolded with Vite.

## Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — lightning-fast dev server & build
- ⚛️ [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/) — near-black/off-white theme, one cobalt accent, Space Grotesk + Inter + IBM Plex Mono
- 🎞️ [Framer Motion](https://www.framer.com/motion/) — viewport reveals, magnetic buttons, custom cursor, all reduced-motion aware
- 🔷 [Lucide React](https://lucide.dev/) — icons

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx           # viewport-triggered reveal wrapper (respects prefers-reduced-motion)
│   ├── ScrollProgress.tsx   # thin top progress bar
│   ├── SectionHeading.tsx   # small eyebrow + short title
│   ├── CustomCursor.tsx     # desktop-only dot + ring cursor, expands over links/cards
│   ├── Magnetic.tsx         # subtle magnetic-pull wrapper for buttons
│   └── artwork/             # BrowserFrame shell (window chrome) that wraps each project's real screenshot
├── sections/                # Page sections, in render order
│   ├── Hero.tsx
│   ├── Work.tsx             # project cards — name, one-line blurb, stack, links
│   ├── About.tsx
│   ├── Experience.tsx       # compact timeline, no bullet essays
│   └── Contact.tsx
├── data/
│   └── index.ts             # ✏️ Edit all portfolio content here
├── hooks/
│   ├── useScrollSpy.ts
│   ├── useInView.ts
│   ├── useReducedMotion.ts
│   └── usePointerFine.ts    # true on desktop mouse input; gates cursor/magnetic effects
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

All copy lives in **`src/data/index.ts`** — projects, experience, technologies, and social links. Keep it short: one line per project, one line per role. That's the whole point of this layout.

Each project card and the hero use a **real screenshot** of the live product (`public/projects/*.jpg`), framed in a small browser-window chrome (`BrowserFrame.tsx`) — not an illustration or mockup. To update one: capture a fresh screenshot of the live site, resize it (`sips -Z 1200 -s format jpeg -s formatOptions 80 in.png --out public/projects/<slug>.jpg` works well), and it's picked up automatically via the `image` field on that project in `src/data/index.ts`.

## A note on the last section

`Contact` needs real content (or reserved height) roughly equal to a viewport's worth, or the browser has nowhere left to scroll to and the section above it peeks out from under the fixed nav when you jump to Contact from the nav. Right now that's satisfied by genuine content — the form, the footer's large wordmark — not padding tricks. If you shorten Contact or the footer significantly, re-test the nav-jump scroll case at a few viewport heights (800/900/1080px) before shipping.

## Deployment

Works out of the box with **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build
# Deploy the `dist/` folder
```
