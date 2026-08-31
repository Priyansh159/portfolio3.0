import type { Project, Experience, NavItem, SocialLink } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const PROJECTS: Project[] = [
  {
    slug: 'qlothe',
    title: 'Qlothe',
    blurb: 'An e-commerce platform built for a real apparel brand — catalog, checkout, and payments, end to end.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Razorpay'],
    image: '/projects/qlothe.jpg',
    live: 'https://qlothe.in',
    github: null,
    status: 'shipped',
  },
  {
    slug: 'bluecode-labs',
    title: 'Bluecode Labs',
    blurb: 'Freelance work on a browser-based remote desktop platform — live sessions, with monitoring built in.',
    stack: ['Angular', 'TypeScript', 'WebSockets'],
    image: '/projects/bluecode-labs.jpg',
    live: 'https://ilabs.bluecodesecurity.com/',
    github: null,
    status: 'shipped',
  },
  {
    slug: 'smriti',
    title: 'SMRITI 3.0',
    blurb: 'An analytics platform for electricity distribution teams — dashboards and reports non-technical staff can actually use.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: '/projects/smriti.jpg',
    live: 'https://3.o.smritianalysis.com',
    github: null,
    status: 'shipped',
  },
  {
    slug: 'tournament-tracker',
    title: 'Live Tournament Tracker',
    blurb: 'Live scores that update instantly for everyone watching — built on WebSockets, no polling.',
    stack: ['Next.js', 'NestJS', 'Socket.IO'],
    image: '/projects/tournament-tracker.jpg',
    live: 'https://www.priyansh159.fun/',
    github: 'https://github.com/Priyansh159/tournament-frontend',
    status: 'shipped',
  },
  {
    slug: 'apmc-gamrf',
    title: 'APMC GAMRF (GIL)',
    blurb: 'An online registry and approval system for a state government client — replaced a fully paper-based process.',
    stack: ['React', 'TypeScript', 'REST APIs'],
    image: '/projects/apmc-gamrf.jpg',
    live: 'https://uat-eapmc.thesaicomputers.com/',
    github: null,
    status: 'shipped',
  },
]

export const TECH_GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Socket.IO', 'Prisma', 'Python'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Tools & Infrastructure',
    items: ['Git', 'GitHub', 'Azure DevOps', 'Vercel', 'Razorpay'],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Development Engineer I',
    company: 'SCL',
    period: 'Aug 2025 — Present',
    blurb: 'Building React and TypeScript applications for enterprise and government workflows.',
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Bluecode Labs',
    period: 'May 2026',
    blurb:
      'Built the client-facing frontend for a browser-based remote desktop platform — live sessions and monitoring, in Angular and RxJS. Delivered in 14 days.',
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'SCL',
    period: 'Jun 2025 — Jul 2025',
    blurb: 'Shipped features on a live government project before converting to full-time.',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', val: 'priyanshrana159@gmail.com', href: 'mailto:priyanshrana159@gmail.com', icon: 'mail' },
  { label: 'GitHub', val: 'github.com/Priyansh159', href: 'https://github.com/Priyansh159', icon: 'github' },
  { label: 'LinkedIn', val: 'linkedin.com/in/priyansh159', href: 'https://linkedin.com/in/priyansh159', icon: 'linkedin' },
]

export const RESUME_URL = '/PriyanshRanaResume.pdf'

export const ABOUT_TEXT =
  "I'm a developer from Uttar Pradesh, India who likes building full-stack apps and figuring out the annoying parts after the demo works. I've worked on e-commerce, dashboards, real-time apps, and freelance projects."

// Editorial side-note for the About section — real, specific, current.
export const ABOUT_NOTE = {
  label: 'Currently',
  text: 'Building analytics and workflow systems at SCL, and taking on freelance work on the side.',
}
