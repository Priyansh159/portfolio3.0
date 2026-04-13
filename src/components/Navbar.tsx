import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/data'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const ids = NAV_ITEMS.map((n) => n.id)
  const activeId = useScrollSpy(ids)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 md:px-8">
      {/* Logo */}
      <button
        onClick={() => scrollTo('home')}
        className="flex items-center gap-2 sm:gap-3 group"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green rounded-full flex items-center justify-center">
          <span className="text-bg font-mono font-bold text-xs">PR</span>
        </div>
        <span className="font-mono font-bold text-green text-xs sm:text-sm hidden sm:block">
          Priyansh Rana
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`font-mono text-xs transition-colors duration-200 ${
              activeId === item.id
                ? 'text-green'
                : 'text-muted hover:text-green'
            }`}
          >
            {item.label}
          </button>
        ))}
        <a
          href="https://drive.google.com/file/d/1aIEJf1MIiAxCjwQwiq22IezZQC1F3TUG/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs px-4 py-2 border border-green/40 text-green rounded-lg hover:bg-green/10 transition-colors duration-200"
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted hover:text-green transition-colors"
        onClick={() => setMobileOpen((p) => !p)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-14 sm:top-16 left-0 right-0 bg-surface border-b border-border flex flex-col px-4 sm:px-6 py-4 gap-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-sm text-left transition-colors duration-200 ${
                activeId === item.id ? 'text-green' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1f6I2Nx9RKFRWpwoQtuwb1C6L_Ma0Fauw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-green"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  )
}
