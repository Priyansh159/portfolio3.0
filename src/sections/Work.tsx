import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import BrowserFrame from '@/components/artwork/BrowserFrame'
import { PROJECTS } from '@/data'
import type { Project } from '@/types'

// Screenshots are all 1200x750 (16:10). Matching that ratio exactly means
// object-cover crops nothing and nothing is distorted.
function Preview({ project }: { project: Project }) {
  return (
    <BrowserFrame className="w-full">
      <img
        src={project.image}
        alt={`${project.title} website screenshot`}
        loading="lazy"
        width={1200}
        height={750}
        className="w-full aspect-[16/10] object-cover object-top rounded-md"
      />
    </BrowserFrame>
  )
}

function CardBody({ project }: { project: Project }) {
  return (
    // flex-1 + mt-auto on the links pins the footer row to the bottom, so
    // a description wrapping to an extra line never changes card height.
    <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink">{project.title}</h3>
        {project.status === 'in-development' && (
          <span className="text-[10px] font-mono uppercase tracking-wide text-accent shrink-0 pt-1.5">
            In progress
          </span>
        )}
      </div>

      <p className="text-[15px] leading-relaxed text-soft max-w-prose">{project.blurb}</p>

      <ul className="flex flex-wrap gap-2 pt-0.5">
        {project.stack.map((t) => (
          <li
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-soft"
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.live || project.github) && (
        <div className="mt-auto flex items-center gap-5 pt-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-ink hover:text-accent transition-colors duration-200"
            >
              Live
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-ink hover:text-accent transition-colors duration-200"
            >
              <Github size={13} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const primary = project.live ?? project.github

  const preview = (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="p-3 sm:p-4"
    >
      <Preview project={project} />
    </motion.div>
  )

  return (
    <article
      data-cursor={primary ? 'view' : undefined}
      className={`group h-full rounded-2xl border border-border bg-surface hover:border-border-strong transition-colors duration-300 overflow-hidden flex ${
        wide ? 'flex-col lg:flex-row lg:items-center' : 'flex-col'
      }`}
    >
      <div className={wide ? 'w-full lg:w-[58%] shrink-0' : 'w-full'}>
        {primary ? (
          <a href={primary} target="_blank" rel="noreferrer" className="block">
            {preview}
          </a>
        ) : (
          preview
        )}
      </div>
      <CardBody project={project} />
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-14 sm:py-16 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-page mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Work" title="A few things I've built" />

        {/* items-stretch (grid default) + h-full on the card makes every
            card in a row share the tallest height in that row. */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {PROJECTS.map((project, i) => {
            const isLastOdd = i === PROJECTS.length - 1 && PROJECTS.length % 2 === 1
            return (
              <Reveal
                key={project.slug}
                delay={i * 60}
                className={`h-full ${isLastOdd ? 'sm:col-span-2' : ''}`}
              >
                <ProjectCard project={project} wide={isLastOdd} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
