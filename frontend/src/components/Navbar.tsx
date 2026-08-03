import { useState, useEffect } from "react"

const links = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Universities", href: "#for-universities" },
  { label: "About", href: "#about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState("")

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(1, Math.max(0, y / total)) : 0)
      let current = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 160 <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Ambient toolbar backdrop */}
      <div
        className="absolute inset-0 -z-10 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(251,255,252,0.55)"
            : "rgba(251,255,252,0)",
          backdropFilter: scrolled
            ? "blur(16px) saturate(140%)"
            : "blur(0px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-3 md:px-6 pt-3">
        <div
          className={`glass-card rounded-full pl-4 pr-3 md:pl-5 md:pr-4 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}
          style={{
            boxShadow: scrolled
              ? "0 18px 44px -18px rgba(6,112,46,0.28)"
              : "0 10px 34px -18px rgba(6,112,46,0.16)",
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 bg-brand-green rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="relative z-10"
              >
                <rect x="2" y="2" width="14" height="14" rx="3" fill="white" />
                <rect x="5" y="5" width="5" height="5" rx="1.5" fill="#06702E" />
                <rect x="11" y="5" width="2" height="8" rx="1" fill="#06702E" />
              </svg>
              <span
                className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
            <span className="font-display text-xl font-700 text-brand-ink tracking-tight">
              Unify
            </span>
          </a>

          {/* Desktop links with scrollspy */}
          <div className="hidden md:flex items-center gap-1.5">
            {links.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-brand-green bg-brand-green/8"
                      : "text-brand-ink/60 hover:text-brand-ink hover:bg-brand-green/5"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-brand-green opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="#"
              className="text-sm font-semibold text-brand-ink/60 hover:text-brand-ink transition-all duration-300 px-4 py-2 rounded-full hover:bg-brand-green/5"
            >
              Sign in
            </a>
            <a
              href="#"
              className="cta-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:-translate-y-px hover:shadow-xl hover:shadow-brand-green/25 transition-all duration-300"
            >
              Start Learning
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-brand-ink hover:bg-brand-green/8 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll progress — ultra thin accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brand-green/70 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      {/* Mobile menu — slide down */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "420px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="mx-3 mt-3 mb-3 rounded-2xl px-5 py-4 flex flex-col gap-1 glass-card">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-ink/70 hover:text-brand-green px-3 py-3 rounded-xl hover:bg-brand-green/5 transition-all duration-200"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="cta-primary text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-1 transition-colors duration-200"
          >
            Start Learning
          </a>
        </div>
      </div>
    </nav>
  )
}