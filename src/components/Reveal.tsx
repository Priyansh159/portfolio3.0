import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  /** Starting opacity — raise it (e.g. 0.85) for a subtler settle. */
  from?: number
  duration?: number
  className?: string
  as?: 'div' | 'span'
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  from = 0,
  duration = 0.5,
  className,
  as = 'div',
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.2)
  const reduced = useReducedMotion()
  const Tag = as === 'span' ? motion.span : motion.div

  const hidden = { opacity: from, y }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={reduced ? undefined : hidden}
      animate={inView && !reduced ? { opacity: 1, y: 0 } : reduced ? undefined : hidden}
      transition={{ duration, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
