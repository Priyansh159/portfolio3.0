# Priyansh Rana — Portfolio

Personal portfolio built with **React + TypeScript + Tailwind CSS + Three.js**, scaffolded with Vite.

## Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — lightning-fast dev server & build
- ⚛️ [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/)
- 🌐 [Three.js](https://threejs.org/) — 3D hero canvas & project orbs
- 🎞️ [Framer Motion](https://www.framer.com/motion/) — (pre-installed, ready to use)
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
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── HeroCanvas.tsx   # Three.js 3D canvas
│   ├── SmallOrb.tsx     # Three.js project orbs
│   ├── SkillBar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionLabel.tsx
│   └── Footer.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/
│   └── index.ts      # ✏️ Edit all portfolio content here
├── hooks/
│   ├── useScrollSpy.ts
│   └── useInView.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

All portfolio content lives in **`src/data/index.ts`** — projects, skills, experience, social links. Edit that file to update your info.

To add new projects, find the `PROJECTS` array in `src/data/index.ts` and uncomment the example template at the bottom.

## Deployment

Works out of the box with **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build
# Deploy the `dist/` folder
```
