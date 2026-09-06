const quickLinks = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Universities", href: "#for-universities" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 relative overflow-hidden"
      style={{
        background: "#f6faf7",
      }}
    >
      <div
        className="absolute -top-20 -left-12 w-80 h-80 rounded-full bg-brand-cobalt/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14 panel-soft rounded-3xl p-8 lg:p-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="14"
                    height="14"
                    rx="3"
                    fill="white"
                  />
                  <rect
                    x="5"
                    y="5"
                    width="5"
                    height="5"
                    rx="1.5"
                    fill="#06702E"
                  />
                  <rect
                    x="11"
                    y="5"
                    width="2"
                    height="8"
                    rx="1"
                    fill="#06702E"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-700 tracking-tight">
                Unify
              </span>
            </div>
            <p className="text-brand-ink/65 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future of university learning across Africa — one
              student at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-brand-green/12 hover:bg-brand-green rounded-lg flex items-center justify-center text-brand-ink/60 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-brand-ink/45 text-xs uppercase tracking-wider mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-brand-ink/70 text-sm hover:text-brand-green transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-brand-ink/45 text-xs uppercase tracking-wider mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@unify.africa"
                  className="text-brand-ink/70 text-sm hover:text-brand-green transition-colors"
                >
                  hello@unify.africa
                </a>
              </li>
              <li>
                <a
                  href="mailto:partner@unify.africa"
                  className="text-brand-ink/70 text-sm hover:text-brand-green transition-colors"
                >
                  partner@unify.africa
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@unify.africa"
                  className="text-brand-ink/70 text-sm hover:text-brand-green transition-colors"
                >
                  team@unify.africa
                </a>
              </li>
            </ul>
          </div>

          {/* CTA mini */}
          <div>
            <p className="text-brand-ink/45 text-xs uppercase tracking-wider mb-5">
              Get Started
            </p>
            <p className="text-brand-ink/70 text-sm leading-relaxed mb-4">
              Free for all students. No credit card needed.
            </p>
            <a
              href="https://unifyhub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-forest transition-colors"
            >
              Start Learning
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-ink/55 text-sm">
            &copy; {new Date().getFullYear()} Unify. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-brand-ink/55 text-sm hover:text-brand-green transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
