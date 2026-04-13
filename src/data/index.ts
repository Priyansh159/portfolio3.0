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
  { name: 'JavaScript', pct: 80, color: '#f7df1e' },
  { name: 'React.js', pct: 80, color: '#61dafb' },
  { name: 'TypeScript', pct: 75, color: '#3178c6' },
  { name: 'Git/Github', pct: 80, color: '#2dba4e' },
  { name: 'Node.js', pct: 75, color: '#68a063' },
  { name: 'Express.js', pct: 75, color: '#999999' },
  { name: 'MongoDB', pct: 70, color: '#4ea94b' },
  { name: 'PostgreSQL', pct: 65, color: '#4169e1' },
  { name: 'Python', pct: 80, color: '#ffd43b' },
]

export const TECH_TAGS: string[] = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
  'MongoDB', 'PostgreSQL', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Git', 'REST APIs', 'TensorFlow', 'Keras', 'Vite', 'Three.js',
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
    title: 'APMC GAMRF (GIL)',
    tag: 'Full Stack / Production (SCL)',
    desc: 'Enterprise-grade system for APMC operations under GIL. Handles registry workflows, data management, reporting, and role-based access with scalable architecture.',
    github: null,
    live: 'https://uat-eapmc.thesaicomputers.com/',
    color: '#00c2ff',
    tech: ['React', 'TypeScript', 'Azure DevOps', 'REST API', 'State Management'],
  },
  {
    title: 'Meghalaya Line Survey',
    tag: 'React Native App (SCL)',
    desc: 'Offline-first HT line survey app with survey creation, pole/transformer capture via camera + AR + GPS, local SQLite storage, and offline SVG map + SLD visualization. Includes validation, reporting, and Android (Kotlin/ARCore) integration for depth and sensors.',
    github: 'https://github.com/Priyansh159/ht-line_survey.git',
    live: null,
    color: '#0d9488',
    tech: [
      'React Native',
      'TypeScript',
      'React Navigation',
      'SQLite',
      'Vision Camera',
      'react-native-svg',
      'Geolocation',
      'ARCore',
      'Kotlin',
    ],
  },
  {
    title: 'AP World Tourism',
    tag: 'Frontend / Production (Freelancing)',
    desc: 'Live tourism website featuring travel packages, destination highlights, and booking interactions. Designed for performance, responsiveness, and real-world client usage.',
    github: 'https://github.com/Priyansh159/apWorld.git',
    live: 'https://www.apworldtourism.in/',
    color: '#ff9f43',
    tech: ['React', 'JavaScript', 'CSS', 'Vercel', 'Responsive Design'],
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
