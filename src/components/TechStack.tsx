import { Webhook, CreditCard, Cloud } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiAngular, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiSocketdotio, SiPrisma, SiPython,
  SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import Reveal from '@/components/Reveal'
import AmbientBackdrop from '@/components/AmbientBackdrop'

const ICONS: Record<string, IconType | typeof Cloud> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Angular: SiAngular,
  'React Native': SiReact,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  NestJS: SiNestjs,
  'REST APIs': Webhook,
  'Socket.IO': SiSocketdotio,
  Prisma: SiPrisma,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  'Azure DevOps': Cloud,
  Vercel: SiVercel,
  Razorpay: CreditCard,
}

interface TechGroup {
  label: string
  items: string[]
}

export default function TechStack({ groups }: { groups: TechGroup[] }) {
  return (
    <section
      data-cursor-theme="light"
      className="relative overflow-hidden bg-paper text-paper-ink border-y border-black/[0.07] py-14 sm:py-16"
    >
      <AmbientBackdrop variant="light" />

      <div className="relative z-10 max-w-page mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">Tech Stack</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-mono uppercase tracking-wider text-paper-muted mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((name) => {
                    const Icon = ICONS[name]
                    return (
                      <span
                        key={name}
                        // Lifts 2px with an accent-derived border and a hairline
                        // accent shadow — reads as a UI element, not plain text.
                        className="group inline-flex items-center gap-1.5 text-sm text-paper-soft bg-paper-card border border-black/[0.12] rounded-full pl-2.5 pr-3 py-1.5 cursor-default transition-[transform,border-color,background-color,color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:text-paper-ink hover:bg-paper hover:border-accent hover:shadow-[0_2px_10px_-4px_rgb(var(--accent)/0.4)]"
                      >
                        {Icon && (
                          <Icon
                            size={13}
                            className="shrink-0 transition-colors duration-200 group-hover:text-accent"
                          />
                        )}
                        {name}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
