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
      className="relative flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl border transition-all duration-300"
      style={{
        background: hovered ? '#111e2e' : '#0d1520',
        borderColor: hovered ? `${project.color}44` : '#1a3a2a',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 40px ${project.color}14` : 'none',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <SmallOrb color={project.color} size={44} />
        <span
          className="font-mono text-xs px-2.5 sm:px-3 py-1 rounded-full border"
          style={{
            background: `${project.color}18`,
            color: project.color,
            borderColor: `${project.color}33`,
          }}
        >
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-base sm:text-lg text-white">{project.title}</h3>

      {/* Description */}
      <p className="text-muted text-xs sm:text-sm leading-relaxed flex-1">{project.desc}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-1.5 sm:px-2 py-0.5 rounded bg-surface2 text-muted border border-border"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 sm:gap-3 pt-1">
       {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border font-mono text-xs transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: `${project.color}44`, color: project.color }}
          >
            <Github size={12} />
            GitHub
          </a>
        ) : (
          <span className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-xs border border-border text-muted/50">
            Private Repo
          </span>
        )}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-xs font-bold transition-all duration-200 hover:opacity-90"
            style={{ background: project.color, color: '#000' }}
          >
            <ExternalLink size={12} />
            Live
          </a>
        ) : (
          <span className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono text-xs border border-border text-muted/50">
            No live demo
          </span>
        )}
      </div>
    </div>
  )
}
