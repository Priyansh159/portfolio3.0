export interface Project {
  title: string
  tag: string
  desc: string
  github: string | null
  live: string | null
  color: string
  tech: string[]
}

export interface Skill {
  name: string
  pct: number
  color: string
}

export interface Experience {
  role: string
  company: string
  period: string
  type: string
  desc: string
  tech: string[]
}

export interface NavItem {
  label: string
  id: string
}

export interface SocialLink {
  label: string
  val: string
  href: string
  icon: string
}
