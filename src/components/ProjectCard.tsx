import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import SmallOrb from './SmallOrb'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: hovered ? '#0e1620' : '#0a121b',
        borderColor: hovered ? `${project.color}40` : '#16241d',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 32px ${project.color}12` : 'none',
      }}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
        style={{ background: project.color, opacity: hovered ? 1 : 0.35 }}
      />

      {/* Header */}
      <div className="flex justify-between items-center">
        <SmallOrb color={project.color} size={36} />
        <span
          className="font-mono text-[11px] px-2.5 py-1 rounded-full"
          style={{ color: project.color, opacity: 0.8 }}
        >
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-base sm:text-lg text-white">{project.title}</h3>

      {/* Description */}
      <p className="text-muted text-xs sm:text-sm leading-relaxed">{project.desc}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded text-muted/70">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 sm:gap-3 pt-1 mt-auto">
        {project.inProgress ? (
          <span
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-xs"
            style={{ background: `${project.color}14`, color: project.color }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: project.color }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: project.color }} />
            </span>
            Currently Working
          </span>
        ) : project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border font-mono text-xs transition-colors duration-200 hover:bg-white/5"
            style={{ borderColor: `${project.color}40`, color: project.color }}
          >
            <Github size={12} />
            Code
          </a>
        ) : (
          <span className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-xs text-muted/35">
            Private repo
          </span>
        )}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-xs font-bold transition-opacity duration-200 hover:opacity-90"
            style={{ background: project.color, color: '#000' }}
          >
            <ExternalLink size={12} />
            Live
          </a>
        ) : !project.inProgress ? (
          <span className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-xs text-muted/35">
            No live demo
          </span>
        ) : null}
      </div>
    </div>
  )
}
