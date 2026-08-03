export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#06702E' }}>
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Decorative circle */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #027D35, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #B3B6B0, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
          Join 2,400+ students already learning
        </div>

        <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-900 text-white leading-tight mb-6">
          Ready to transform
          <br />
          <span className="italic" style={{ color: '#A8D5B5' }}>the way you learn?</span>
        </h2>

        <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Join students across Nigeria building a smarter, more intentional academic future. Free to join. Takes three minutes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#"
            className="bg-white text-brand-forest font-semibold px-8 py-4 rounded-full hover:bg-brand-cream transition-all duration-200 text-base shadow-xl"
          >
            Start Learning — It&apos;s Free
          </a>
          <a
            href="mailto:hello@unify.africa"
            className="flex items-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-base"
          >
            Contact Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#027D35">
              <path d="M7 1l1.2 3.3L11 4.9l-2.7 2.4.7 3.7L6 9.4l-3 1.6.7-3.7L1 4.9l3.8-.6L7 1z" />
            </svg>
            <span>Free for all students</span>
          </div>
          <div className="w-px h-4 bg-white/15" />
          <span>No credit card required</span>
          <div className="w-px h-4 bg-white/15" />
          <span>Set up in under 3 minutes</span>
        </div>
      </div>
    </section>
  )
}
