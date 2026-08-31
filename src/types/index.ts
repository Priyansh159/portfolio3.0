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

export interface Experience {
  role: string
  company: string
  period: string
  blurb: string
}

export type ProjectStatus = 'shipped' | 'in-development'

export interface Project {
  slug: string
  title: string
  blurb: string
  stack: string[]
  image: string
  live: string | null
  github: string | null
  status: ProjectStatus
}
