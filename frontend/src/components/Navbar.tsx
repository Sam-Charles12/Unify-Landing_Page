import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Product', 'How It Works', 'For Universities', 'About']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(251,255,252,0.7)' : 'rgba(251,255,252,0.45)',
        backdropFilter: 'blur(20px) saturate(130%)',
        borderBottom: scrolled ? '1px solid rgba(6,112,46,0.16)' : '1px solid rgba(6,112,46,0.08)',
        boxShadow: scrolled ? '0 16px 40px rgba(6,112,46,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3">
        <div className="glass-card bento-card rounded-2xl px-4 md:px-5 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="14" height="14" rx="3" fill="white" />
              <rect x="5" y="5" width="5" height="5" rx="1.5" fill="#06702E" />
              <rect x="11" y="5" width="2" height="8" rx="1" fill="#06702E" />
            </svg>
          </div>
          <span className="font-display text-xl font-700 text-brand-ink tracking-tight">Unify</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-brand-ink/65 hover:text-brand-green transition-all duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-brand-ink/60 hover:text-brand-ink transition-all duration-200 px-4 py-2">
            Sign in
          </a>
          <a
            href="#"
            className="cta-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:-translate-y-px transition-all duration-300"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-brand-ink hover:bg-brand-surface/60 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="mx-4 mb-3 border border-brand-green/15 rounded-2xl px-6 py-5 flex flex-col gap-4 glass-card" style={{ background: 'rgba(255,255,255,0.82)' }}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-brand-ink/70 hover:text-brand-green transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="cta-primary text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2 transition-colors duration-200"
          >
            Start Learning
          </a>
        </div>
      </div>
    </nav>
  )
}
