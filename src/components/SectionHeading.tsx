import Reveal from '@/components/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  /** Set on light (paper) sections so the title stays legible. */
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, light = false }: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 sm:mb-10">
      <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2.5">{eyebrow}</p>
      <h2
        className={`font-display font-bold leading-[1.1] text-balance ${
          light ? 'text-paper-ink' : 'text-ink'
        }`}
        style={{ fontSize: 'clamp(26px, 3.6vw, 40px)' }}
      >
        {title}
      </h2>
    </Reveal>
  )
}
