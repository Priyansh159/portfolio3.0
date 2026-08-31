import Reveal from '@/components/Reveal'
import AmbientBackdrop from '@/components/AmbientBackdrop'
import { ABOUT_TEXT, ABOUT_NOTE } from '@/data'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 scroll-mt-20 sm:scroll-mt-24"
    >
      <AmbientBackdrop variant="dark" />

      <div className="relative z-10 max-w-page mx-auto px-5 sm:px-8">
        {/* Asymmetric editorial split: the text column stops well short of
            the full width, and the remaining margin carries a marginal
            note rather than a second content block. */}
        <div className="grid lg:grid-cols-12 lg:items-center gap-y-12 lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">About</p>
            <p
              className="font-display font-medium text-ink leading-[1.45] max-w-xl"
              style={{ fontSize: 'clamp(20px, 2vw, 27px)' }}
            >
              {ABOUT_TEXT}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-border pt-5 max-w-xs">
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
                {ABOUT_NOTE.label}
              </p>
              <p className="text-[15px] leading-relaxed text-soft">{ABOUT_NOTE.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
