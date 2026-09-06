export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,34,23,0.2) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative circle removed for flat look */}

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="panel-soft rounded-4xl px-6 py-12 md:px-12 md:py-14">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-brand-green/8 text-brand-green text-xs font-semibold px-4 py-2 rounded-full mb-10 border border-brand-green/15">
            <span className="w-1.5 h-1.5 bg-brand-green/60 rounded-full animate-pulse" />
            Join 2,400+ students already learning
          </div>

          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-900 leading-tight mb-6 spotlight-title">
            Ready to transform
            <br />
            <span className="italic">the way you learn?</span>
          </h2>

          <p className="text-brand-ink/62 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Join students across Nigeria building a smarter, more intentional
            academic future. Free to join. Takes three minutes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="https://unifyhub.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-xl"
            >
              Start Learning — It&apos;s Free
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-brand-green/22 text-brand-ink font-semibold px-8 py-4 rounded-full hover:bg-white/70 transition-all duration-200 text-base"
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8h12M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-brand-ink/45 text-sm">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#06702E">
                <path d="M7 1l1.2 3.3L11 4.9l-2.7 2.4.7 3.7L6 9.4l-3 1.6.7-3.7L1 4.9l3.8-.6L7 1z" />
              </svg>
              <span>Free for all students</span>
            </div>
            <div className="w-px h-4 bg-brand-ink/15" />
            <span>No credit card required</span>
            <div className="w-px h-4 bg-brand-ink/15" />
            <span>Set up in under 3 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
