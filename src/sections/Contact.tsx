import { useState, type FormEvent } from 'react'
import { Mail, Github, Linkedin, Code2, Twitter, Send } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'
import { useInView } from '@/hooks/useInView'
import { SOCIAL_LINKS } from '@/data'

const ICON_MAP: Record<string, React.ReactNode> = {
  mail: <Mail size={16} />,
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  code: <Code2 size={16} />,
  twitter: <Twitter size={16} />,
}

export default function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionLabel index={5} label="Contact" />

      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-10 md:gap-14 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — links */}
        <div>
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">
            Let's Build Something Together
          </h3>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
            I'm open to job opportunities where I can contribute, learn, and
            grow. Whether you have a project in mind or just want to
            connect — my inbox is always open!
          </p>

          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 bg-surface border border-border rounded-xl hover:border-green/30 hover:bg-surface2 transition-all duration-200 group"
              >
                <span className="text-green group-hover:scale-110 transition-transform shrink-0">
                  {ICON_MAP[link.icon]}
                </span>
                <span className="font-mono text-xs text-green min-w-[65px] sm:min-w-[80px] shrink-0">
                  {link.label}
                </span>
                <span className="text-muted text-xs sm:text-sm truncate">{link.val}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7">
          <h3 className="font-mono text-sm text-green font-bold mb-6 flex items-center gap-2">
            <Send size={14} />
            Send a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3">
              <div className="w-12 h-12 rounded-full bg-green-dim border border-green/30 flex items-center justify-center">
                <span className="text-green text-xl">✓</span>
              </div>
              <p className="font-mono text-green text-sm">Message sent!</p>
              <p className="text-muted text-xs text-center">
                This is a demo form. Reach me directly at priyanshrana159@gmail.com
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {(['name', 'email'] as const).map((field) => (
                <div key={field}>
                  <label className="block font-mono text-xs text-muted mb-1.5 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                    value={form[field]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [field]: e.target.value }))
                    }
                    required
                    className="w-full bg-surface2 border border-border rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-green/40 transition-colors font-head placeholder:text-muted/40"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-xs text-muted mb-1.5">
                  message
                </label>
                <textarea
                  rows={4}
                  placeholder="Say hi, propose a project, or just connect..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  className="w-full bg-surface2 border border-border rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-green/40 transition-colors resize-vertical font-head placeholder:text-muted/40"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green text-bg font-bold font-mono text-sm rounded-lg hover:bg-green-dark transition-colors duration-200 active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
