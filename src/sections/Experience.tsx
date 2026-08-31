import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import AmbientBackdrop from '@/components/AmbientBackdrop'
import { EXPERIENCES } from '@/data'

export default function Experience() {
  return (
    <section
      id="experience"
      data-cursor-theme="light"
      className="relative overflow-hidden bg-paper text-paper-ink border-y border-black/[0.07] py-14 sm:py-16 scroll-mt-20 sm:scroll-mt-24"
    >
      <AmbientBackdrop variant="light" />

      <div className="relative z-10 max-w-page mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" light />
        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            // from={0.85} + 8px keeps the settle barely-there rather than a
            // full fade-in; rows stay fully visible once revealed.
            <Reveal
              key={exp.role + exp.period}
              delay={i * 90}
              y={8}
              from={0.85}
              duration={0.4}
            >
              {/* Hover: faint background lift plus an accent rule down the
                  left edge, drawn with inset shadow so nothing reflows. */}
              <div className="group grid sm:grid-cols-[150px_1fr] gap-2 sm:gap-8 border-t border-black/12 py-6 px-4 -mx-4 rounded-lg transition-[background-color,box-shadow] duration-200 hover:bg-black/[0.035] hover:shadow-[inset_2px_0_0_0_rgb(var(--accent))]">
                <p className="font-mono text-xs text-paper-muted">{exp.period}</p>
                <div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-paper-ink">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent mb-1.5">{exp.company}</p>
                  <p className="text-sm text-paper-soft">{exp.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
