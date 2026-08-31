import { forwardRef } from 'react'

// Pinned to the bottom of the viewport on a LOWER stacking layer than the
// page. Fully opaque, never animates, never moves — <main> simply scrolls
// up off it and uncovers the name that was sitting behind all along.
const NameReveal = forwardRef<HTMLDivElement>(function NameReveal(_props, ref) {
  return (
    <div ref={ref} aria-hidden="true" className="fixed inset-x-0 bottom-0 z-0 bg-bg">
      <div className="max-w-page mx-auto px-5 sm:px-8 pt-6 pb-7 sm:pb-10">
        <p
          className="font-display font-bold text-ink leading-[0.8] whitespace-nowrap select-none text-center"
          style={{ fontSize: 'clamp(40px, 10vw, 210px)' }}
        >
          Priyansh Rana
        </p>
      </div>
    </div>
  )
})

export default NameReveal
