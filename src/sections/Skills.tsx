import SectionLabel from '@/components/SectionLabel'
import SkillBar from '@/components/SkillBar'
import { useInView } from '@/hooks/useInView'
import { SKILLS, TECH_TAGS } from '@/data'
import { useState } from 'react'

export default function Skills() {
  const [ref, inView] = useInView<HTMLDivElement>(0.1)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const half = Math.ceil(SKILLS.length / 2)

  return (
    <section id="skills" className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionLabel index={4} label="Skills" />

      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-0 mb-10 sm:mb-12">
          <div>
            {SKILLS.slice(0, half).map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 80} />
            ))}
          </div>
          <div>
            {SKILLS.slice(half).map((s, i) => (
              <SkillBar key={s.name} {...s} delay={(i + half) * 80} />
            ))}
          </div>
        </div>

        {/* Tech tag cloud */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              onMouseEnter={() => setHoveredTag(tag)}
              onMouseLeave={() => setHoveredTag(null)}
              className="font-mono text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg border cursor-default transition-all duration-200"
              style={{
                background:
                  hoveredTag === tag ? 'rgba(0,255,135,0.1)' : '#0d1520',
                borderColor:
                  hoveredTag === tag
                    ? 'rgba(0,255,135,0.5)'
                    : '#1a3a2a',
                color: hoveredTag === tag ? '#00ff87' : '#e8f4f0',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
