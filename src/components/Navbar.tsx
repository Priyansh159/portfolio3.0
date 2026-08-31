import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_ITEMS, RESUME_URL } from '@/data'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToId } from '@/lib/smoothScroll'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ids = NAV_ITEMS.map((n) => n.id)
  const activeId = useScrollSpy(ids, 110)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-sm border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-page mx-auto flex items-center justify-between h-16 sm:h-[4.25rem] px-5 sm:px-8">
        <button onClick={() => scrollTo('top')} className="flex items-center gap-2.5 shrink-0" aria-label="Back to top">
          <span className="w-8 h-8 rounded-full bg-ink text-bg font-display font-bold text-xs flex items-center justify-center">
            PR
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative py-1 text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ${
                  activeId === item.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink border-b border-white/25 hover:border-ink pb-0.5 transition-colors duration-200"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left py-3 text-base font-display font-medium transition-colors duration-200 ${
                    activeId === item.id ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="py-3 text-base font-display font-medium text-ink inline-flex items-center gap-1.5"
              >
                Resume
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
