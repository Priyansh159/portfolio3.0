import type { ReactNode } from 'react'

interface BrowserFrameProps {
  children: ReactNode
  className?: string
}

// The frame is portfolio chrome, not project content — so it is identical
// on every card regardless of whether the screenshot inside is light or
// dark. The screenshot itself is never recoloured.
export default function BrowserFrame({ children, className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-surface2 border border-border shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="h-7 flex items-center gap-1.5 px-3 border-b border-border shrink-0">
        <span className="w-2 h-2 rounded-full bg-white/[0.14]" />
        <span className="w-2 h-2 rounded-full bg-white/[0.14]" />
        <span className="w-2 h-2 rounded-full bg-white/[0.14]" />
      </div>
      <div className="p-2.5 sm:p-3">{children}</div>
    </div>
  )
}
