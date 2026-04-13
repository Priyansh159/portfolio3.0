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
  { name: 'Node.js', pct: 75, color: '#68a063' },
  { name: 'Express.js', pct: 75, color: '#999999' },
  { name: 'MongoDB', pct: 70, color: '#4ea94b' },
  { name: 'PostgreSQL', pct: 65, color: '#4169e1' },
  { name: 'Python', pct: 80, color: '#ffd43b' },
  { name: 'TensorFlow / Keras', pct: 60, color: '#ff6f00' },
]

export const TECH_TAGS: string[] = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
  'MongoDB', 'PostgreSQL', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Git', 'REST APIs', 'TensorFlow', 'Keras', 'Vite', 'Three.js',
]

export const EXPERIENCES: Experience[] = [
  {
    role: 'SDE-1',
    company: 'Sai Computers Limited',
    period: 'August 2025 – Present · ~1 year',
    type: 'Full-time',
    desc: 'Building and maintaining full-stack web applications in production. Working with React, Node.js, MongoDB, and TypeScript to deliver scalable features. Collaborating closely with cross-functional teams on architecture decisions, code reviews, and performance optimization.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Sai Computers Limited',
    period: 'June 2025 – July 2025 · 2 months',
    type: 'Internship',
    desc: 'Developed and shipped multiple features across the full stack. Gained hands-on experience with production codebases, REST API design, and modern React patterns. Transitioned to a full-time role based on performance.',
    tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Sign Lang. Recognition',
    tag: 'ML / Python',
    desc: 'LSTM deep learning model using TensorFlow & Keras. Decodes sign language from keypoint sequences for real-time action recognition with high accuracy.',
    github: 'https://github.com/Priyansh159/sign-language-recognition',
    live: null,
    color: '#00ff87',
    tech: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'OpenCV'],
  },
  {
    title: 'iOhmega',
    tag: 'Full Stack',
    desc: 'Sales product website with dynamic product showcases, cart functionality, and credential-based login. Built with HTML, CSS, Bootstrap & JavaScript.',
    github: 'https://github.com/Priyansh159/iOhmega',
    live: 'https://apple-product-rho.vercel.app/',
    color: '#61dafb',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'FoodZone',
    tag: 'React App',
    desc: 'Dynamic food ordering web app with restaurant listings, interactive menus, and seamless cart experience. Fully responsive with smooth navigation.',
    github: 'https://github.com/Priyansh159/FoodZone',
    live: 'https://food-zone-green-six.vercel.app',
    color: '#ff6b6b',
    tech: ['React', 'CSS', 'JavaScript'],
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
