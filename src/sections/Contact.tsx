import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Loader2, Mail, Github, Linkedin, FileText } from 'lucide-react'
import Reveal from '@/components/Reveal'
import Magnetic from '@/components/Magnetic'
import SectionHeading from '@/components/SectionHeading'
import { SOCIAL_LINKS, RESUME_URL } from '@/data'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ICON_MAP: Record<string, typeof Mail> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
}

const DIRECT_LINKS = [
  ...SOCIAL_LINKS.map((l) => ({ label: l.label, value: l.val, href: l.href, icon: ICON_MAP[l.icon], external: !l.href.startsWith('mailto') })),
  { label: 'Resume', value: 'Download PDF', href: RESUME_URL, icon: FileText, external: true },
]

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!response.ok) throw new Error('Network response was not ok')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-page mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Contact" title="Got something interesting to build?" />

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
          <Reveal>
            <p className="text-soft mb-8 max-w-md">Drop me a message, or reach out directly.</p>

            {status === 'success' ? (
              <div className="border-t border-border pt-8 max-w-lg">
                <p className="font-display font-semibold text-xl text-ink mb-1.5">Sent.</p>
                <p className="text-sm text-muted">I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 border-t border-border pt-8 max-w-lg"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full bg-transparent border-b border-border pb-2.5 text-ink text-base outline-none focus:border-accent transition-colors placeholder:text-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="w-full bg-transparent border-b border-border pb-2.5 text-ink text-base outline-none focus:border-accent transition-colors placeholder:text-muted"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">Message</label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="What are you building?"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b border-border pb-2.5 text-ink text-base outline-none focus:border-accent transition-colors resize-none placeholder:text-muted"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong — email me directly at priyanshrana159@gmail.com
                  </p>
                )}
                <Magnetic className="self-start">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full text-sm font-medium hover:bg-accent hover:text-ink transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Direct</p>
            <div className="flex flex-col border-t border-border">
              {DIRECT_LINKS.map(({ label, value, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 py-4 border-b border-border"
                >
                  <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-soft group-hover:border-accent group-hover:text-accent transition-colors duration-200 shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs font-mono uppercase tracking-wider text-muted">{label}</span>
                    <span className="block text-sm text-ink truncate">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
