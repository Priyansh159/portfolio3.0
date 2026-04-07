export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted">
        <span className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Priyansh Rana
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Priyansh159"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-green transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://linkedin.com/in/priyansh159"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-green transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href="mailto:priyanshrana159@gmail.com"
            className="text-green hover:text-green-dark transition-colors"
          >
            priyanshrana159@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
