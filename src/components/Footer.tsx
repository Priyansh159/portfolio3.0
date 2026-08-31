import { SOCIAL_LINKS, RESUME_URL } from '@/data'

// In normal document flow, directly below Contact — always visible there,
// no extra scrolling required. The giant name lives separately in
// <NameReveal>, on the layer behind this one.
export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-page mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-muted">&copy; {new Date().getFullYear()} Priyansh Rana</span>
        <div className="flex items-center gap-5 text-xs">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-muted hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors duration-200">
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
