import SectionLabel from '@/components/SectionLabel'
import { useInView } from '@/hooks/useInView'
import { EXPERIENCES } from '@/data'

export default function Experience() {
  const [ref, inView] = useInView<HTMLDivElement>(0.1)

  return (
    <section
      id="experience"
      className="py-20 sm:py-24"
      style={{
        background:
          'linear-gradient(180deg, #050a0f, #0d1520 50%, #050a0f)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionLabel index={2} label="Experience" />

        <div
          ref={ref}
          className={`relative pl-6 sm:pl-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{
              background:
                'linear-gradient(180deg, #00ff87, rgba(0,255,135,0.3), transparent)',
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div
                className="absolute -left-[1.65rem] sm:-left-[2.15rem] top-1.5 w-3 h-3 rounded-full border-2 border-bg"
                style={{ background: '#00ff87' }}
              />

              <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:border-green/20 hover:shadow-[0_0_30px_rgba(0,255,135,0.06)]">
                {/* Role + period */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">{exp.role}</h3>
                    <p className="text-green font-mono text-xs sm:text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="font-mono text-xs text-muted">
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-green bg-green-dim border border-green/20 px-2.5 py-0.5 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted bg-surface2 border border-border px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
