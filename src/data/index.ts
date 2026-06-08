import type { Project, Skill, Experience, NavItem, SocialLink } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export const SKILLS: Skill[] = [
  { name: 'HTML / CSS', pct: 90, color: '#00ff87' },
  { name: 'JavaScript', pct: 85, color: '#f7df1e' },
  { name: 'React.js', pct: 85, color: '#61dafb' },
  { name: 'TypeScript', pct: 80, color: '#3178c6' },
  { name: 'React Native', pct: 75, color: '#00d8ff' },
  { name: 'Node.js', pct: 75, color: '#68a063' },
  { name: 'Git/Github', pct: 80, color: '#2dba4e' },
  { name: 'MongoDB', pct: 70, color: '#4ea94b' },
  { name: 'PostgreSQL', pct: 70, color: '#4169e1' },
  { name: 'Python', pct: 75, color: '#ffd43b' },
]

export const TECH_TAGS: string[] = [
  'React', 'React Native', 'Angular', 'TypeScript', 'JavaScript', 'Node.js',
  'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Python', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Git', 'REST APIs', 'Three.js',
]

export const EXPERIENCES: Experience[] = [
  {
    role: 'SDE-1',
    company: 'Sai Computers Limited (SCL)',
    period: 'August 2025 – Present · ~1 year',
    type: 'Full-time',
    desc: 'Building and maintaining full-stack web applications in production. Working with React, Node.js, MongoDB, and TypeScript to deliver scalable features. Collaborating closely with cross-functional teams on architecture decisions, code reviews, and performance optimization.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Sai Computers Limited (SCL)',
    period: 'June 2025 – July 2025 · 2 months',
    type: 'Internship',
    desc: 'Developed and shipped multiple features across the full stack. Gained hands-on experience with production codebases, REST API design, and modern React patterns. Transitioned to a full-time role based on performance.',
    tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'SMRITI 3.0 — Analytics Platform',
    tag: 'Full Stack / In Development (SCL)',
    desc: 'Analytics platform for PVVNL, DVVNL & UPCL — secure auth, RBAC, dashboards, and reporting modules.',
    github: null,
    live: null,
    inProgress: true,
    color: '#facc15',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'RBAC', 'Analytics'],
  },
  {
    title: 'APMC GAMRF (GIL)',
    tag: 'Full Stack / Production (SCL)',
    desc: 'Enterprise system for APMC operations — registry workflows, reporting, and role-based access at scale.',
    github: null,
    live: 'https://uat-eapmc.thesaicomputers.com/',
    color: '#00c2ff',
    tech: ['React', 'TypeScript', 'Azure DevOps', 'REST API', 'State Management'],
  },
  {
    title: 'Bluecode Labs — Remote Desktop Platform',
    tag: 'Frontend / Production (Freelance)',
    desc: 'Modern Angular 18 client for Apache Guacamole — live remote desktop viewer, session monitoring, and admin console.',
    github: null,
    live: 'https://ilabs.bluecodesecurity.com/',
    color: '#a855f7',
    tech: ['Angular 18', 'TypeScript', 'RxJS', 'Tailwind CSS', 'Three.js', 'Guacamole API', 'WebSocket'],
  },
  {
    title: 'BulkUp — AI Fitness Tracker',
    tag: 'Mobile App (Solo)',
    desc: 'Cross-platform fitness app — barcode food logging, workout tracking, AI coaching, and social accountability.',
    github: 'https://github.com/Priyansh159/bulkup',
    live: null,
    color: '#f97316',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Anthropic Claude', 'iOS', 'Android'],
  },
  {
    title: 'Live Tournament Tracker',
    tag: 'Full Stack / Production (Solo)',
    desc: 'Real-time tournament platform — admins record results, viewers get instant score updates over WebSockets.',
    github: 'https://github.com/Priyansh159/tournament-frontend',
    live: 'https://www.priyansh159.fun/',
    color: '#6366f1',
    tech: ['Next.js', 'NestJS', 'Socket.IO', 'MongoDB', 'JWT', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Railway'],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', val: 'priyanshrana159@gmail.com', href: 'mailto:priyanshrana159@gmail.com', icon: 'mail' },
  { label: 'GitHub', val: 'github.com/Priyansh159', href: 'https://github.com/Priyansh159', icon: 'github' },
  { label: 'LinkedIn', val: 'linkedin.com/in/priyansh159', href: 'https://linkedin.com/in/priyansh159', icon: 'linkedin' },
  { label: 'LeetCode', val: 'leetcode.com/u/Priyansh159', href: 'https://leetcode.com/u/Priyansh159', icon: 'code' },
  { label: 'Twitter / X', val: 'x.com/Priyansh_rana01', href: 'https://x.com/Priyansh_rana01', icon: 'twitter' },
]

export const QUICK_FACTS: [string, string][] = [
  ['Location', 'Meerut, Uttar Pradesh, India'],
  ['Education', 'B.Tech @ MIET Meerut'],
  ['Experience', '~1 Year Professional'],
  ['Current Role', 'SDE-1 @ Sai Computers'],
  ['LeetCode', '100+ Problems Solved'],
]
