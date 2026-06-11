import SectionLabel from '@/components/SectionLabel'
import { useInView } from '@/hooks/useInView'
import { QUICK_FACTS } from '@/data'

const TRAITS = ['Problem Solver', 'Clean Code', 'Team Player', 'Continuous Learner']

export default function About() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15)
  return (
    <section id="about" className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionLabel index={1} label="About Me" />
      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-10 md:gap-14 items-start transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — bio */}
        <div>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
  I'm a Full Stack Developer working as a{' '}
  <strong className="text-green font-semibold">
    Software Development Engineer – I (SDE-1) at SAI Computers Private Limited, Meerut
  </strong>
  , since June 2025. I build scalable, user-centric web and mobile
  applications using React, TypeScript, Node.js, Express.js, and PostgreSQL.
</p>
<p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
  Currently, I'm building{' '}
  <strong className="text-white font-semibold">
    SMRITI 3.0
  </strong>{' '}
  (Apr 2026 – Present), an analytics platform for UP power distribution
  companies (PVVNL, DVVNL, UPCL). I work across the stack — building dashboards
  and reporting modules in React/TypeScript alongside Node.js APIs, with secure
  authentication, role-based access control, and multi-tenant architecture.
</p>
<p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
  Previously, I delivered end-to-end features for{' '}
  <strong className="text-white font-semibold">
    DAMRF – Government of Gujarat
  </strong>{' '}
  (a large-scale APMC digitalization project) and designed the system
  architecture and Kafka-based data pipeline for an OCR platform (TPSODL,
  Odisha). I focus on RBAC, REST API design, performance, and shipping clean,
  maintainable solutions in close collaboration with backend and product teams.
</p>
          <div className="flex flex-wrap gap-2">
            {TRAITS.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-green bg-surface2 border border-border px-3 py-1.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Right — quick facts card */}
        <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7">
          <h3 className="font-mono text-sm text-green font-bold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green inline-block animate-pulse" />
            Quick Facts
          </h3>
          <div className="flex flex-col gap-3.5">
            {QUICK_FACTS.map(([key, val]) => (
              <div key={key} className="flex gap-3 items-start">
                <span className="font-mono text-green text-xs sm:text-sm min-w-[90px] sm:min-w-[110px] shrink-0">
                  {key}:
                </span>
                <span className="text-white text-xs sm:text-sm">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
