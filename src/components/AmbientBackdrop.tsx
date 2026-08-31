interface AmbientBackdropProps {
  variant?: 'dark' | 'light'
}

// Sits behind a section's content. Purely decorative: aria-hidden, no
// pointer events, and every colour derives from the --accent token so it
// follows the accent system rather than hardcoding a hue.
export default function AmbientBackdrop({ variant = 'dark' }: AmbientBackdropProps) {
  const dark = variant === 'dark'

  // Kept deliberately low — the section stays ~95% flat background.
  const accentAlpha = dark ? 0.075 : 0.05
  const warmAlpha = dark ? 0.05 : 0.045
  const warm = dark ? '255 250 240' : '120 110 90'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ambient-a absolute -top-1/3 -left-1/4 h-[130%] w-[75%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgb(var(--accent) / ${accentAlpha}) 0%, transparent 68%)`,
        }}
      />
      <div
        className="ambient-b absolute -bottom-1/3 -right-1/4 h-[125%] w-[70%] rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(${warm} / ${warmAlpha}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="ambient-grain absolute inset-0"
        style={{ opacity: dark ? 0.035 : 0.028 }}
      />
    </div>
  )
}
