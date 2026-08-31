import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import HeroWindows from '@/components/artwork/HeroWindows'
import Magnetic from '@/components/Magnetic'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scrollToId } from '@/lib/smoothScroll'

export default function Hero() {
  const reduced = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  const scrollTo = (id: string) => scrollToId(id)

  return (
    <section id="top" className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-page mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-12 items-center">
        <div>
          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="inline-flex items-center gap-2 text-xs font-mono text-muted mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for select freelance work
          </motion.p>

          <motion.h1
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
            className="font-display font-bold text-ink leading-[1.03] text-balance"
            style={{ fontSize: 'clamp(40px, 6.5vw, 76px)' }}
          >
            Hey, I'm Priyansh.
          </motion.h1>

          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease }}
            className="mt-5 text-lg sm:text-xl text-ink max-w-lg leading-snug"
          >
            Full-stack developer building web apps, side projects, and things people actually use.
          </motion.p>

          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-3 text-sm text-muted max-w-md"
          >
            Currently working with React, Next.js, TypeScript, Node.js — and whatever the project needs.
          </motion.p>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo('work')}
                className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full text-sm font-medium hover:bg-accent hover:text-ink transition-colors duration-300"
              >
                See my work
                <ArrowUpRight size={16} />
              </button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-white/25 hover:border-ink pb-1 transition-colors duration-200"
              >
                Let's talk
              </button>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="hidden sm:block"
        >
          <HeroWindows />
        </motion.div>
      </div>
    </section>
  )
}
