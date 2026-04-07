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
  I'm a passionate Full Stack Developer currently working as an{' '}
  <strong className="text-green font-semibold">
    Software Development Engineer – I (SDE-1) at Sai Computers Limited (SCL), Meerut
  </strong>
  , since June 2025. I specialize in building scalable and user-centric web
  applications using React, TypeScript, Node.js, Express.js, and MongoDB.
</p>

<p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
  Currently, I am contributing to{' '}
  <strong className="text-white font-semibold">
    DAMRF – Government of Gujarat
  </strong>{' '}
  (Feb 2025 – Jan 2026), a large-scale digital transformation project for APMC
  (Agricultural Produce Market Committees). The system replaces traditional
  paper-based workflows with a fully online approval and verification process,
  significantly improving efficiency, transparency, and tracking.
</p>

<p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
  The platform handles a multi-level approval hierarchy including Junior Clerk,
  Cooperative Officer Marketing, District Registrar, Senior Clerk, HOS, Deputy
  Director, and Director, along with multiple modules such as Contract Farming,
  MIS Data Input, GCA, Trader Module, Panel Management, and Schemes.
</p>

<p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
  My role involves frontend development using React & TypeScript, API
  integration, state management, UI/UX enhancements, and performance
  optimization. I also collaborate closely with backend teams to ensure smooth
  system integration and deliver high-quality solutions.
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
