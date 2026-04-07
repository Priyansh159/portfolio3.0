import SectionLabel from '@/components/SectionLabel'
import ProjectCard from '@/components/ProjectCard'
import { useInView } from '@/hooks/useInView'
import { PROJECTS } from '@/data'

export default function Projects() {
  const [ref, inView] = useInView<HTMLDivElement>(0.1)

  return (
    <section id="projects" className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionLabel index={3} label="Projects" />

      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://github.com/Priyansh159"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 border border-border text-muted font-mono text-xs sm:text-sm rounded-xl hover:border-green/40 hover:text-green transition-all duration-200"
          >
            View all on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
