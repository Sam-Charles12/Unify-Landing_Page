export default function Vision() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#06702E' }}>
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Large decorative number */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display font-900 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(180px, 25vw, 340px)', color: 'rgba(255,255,255,0.03)' }}
        aria-hidden="true"
      >
        2030
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8">
              Our Vision
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-700 text-white leading-tight mb-8">
              Building the future
              <br />
              of university learning{' '}
              <span className="italic" style={{ color: '#A8D5B5' }}>
                across Africa.
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              We believe every university student — regardless of where they are in Africa — deserves equal access to quality learning, timely information, and meaningful opportunities.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              We&apos;re starting at one campus. But we&apos;re building infrastructure that can empower students across an entire continent.
            </p>

            {/* Quote block */}
            <blockquote className="border-l-2 border-brand-green pl-5">
              <p className="font-display text-lg text-white font-600 italic leading-snug">
                &ldquo;Unify exists to help every university student learn better, stay informed, discover opportunities, and take control of their academic journey — starting today and expanding across Africa tomorrow.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Visual: expansion map */}
          <div className="relative">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">

              {/* Map header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Expansion Roadmap</p>
                  <p className="text-white font-semibold">From Lagos to the continent</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                  <span className="text-[10px] text-white/50">Live now</span>
                </div>
              </div>

              {/* Phase cards */}
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1', label: 'Lagos State University', status: 'Live', active: true, count: '2,400+ students' },
                  { phase: 'Phase 2', label: 'University of Lagos, OAU', status: 'Coming 2025', active: false, count: '~15,000 students' },
                  { phase: 'Phase 3', label: 'Nigeria-wide Expansion', status: 'Coming 2026', active: false, count: '100,000+ students' },
                  { phase: 'Phase 4', label: 'Pan-African Rollout', status: 'Vision 2030', active: false, count: '1M+ students' },
                ].map((p) => (
                  <div
                    key={p.phase}
                    className="flex items-center gap-4 rounded-2xl px-5 py-4"
                    style={{ background: p.active ? 'rgba(2,125,53,0.25)' : 'rgba(255,255,255,0.04)', border: p.active ? '1px solid rgba(2,125,53,0.4)' : '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: p.active ? '#027D35' : 'rgba(255,255,255,0.15)', boxShadow: p.active ? '0 0 10px #027D35' : 'none' }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-white/40 font-medium">{p.phase}</p>
                        <span
                          className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: p.active ? 'rgba(2,125,53,0.4)' : 'rgba(255,255,255,0.08)',
                            color: p.active ? '#A8D5B5' : 'rgba(255,255,255,0.35)',
                          }}
                        >
                          {p.status}
                        </span>
                      </div>
                      <p className="text-white text-sm font-medium truncate">{p.label}</p>
                    </div>
                    <p className="text-white/40 text-[10px] text-right flex-shrink-0">{p.count}</p>
                  </div>
                ))}
              </div>

              {/* Bottom stat */}
              <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                <p className="text-white/40 text-xs">Target by 2030</p>
                <p className="font-display text-2xl font-700 text-white">1M+ <span className="text-sm font-sans font-normal text-white/40">students</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
