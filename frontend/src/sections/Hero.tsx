import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faSchool, faBookOpen } from '@fortawesome/free-solid-svg-icons'

function HeroIllustration() {
  return (
    <div className="glass-card bento-card rounded-[28px] p-4 sm:p-5 max-w-4xl mx-auto">
      <svg viewBox="0 0 980 420" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="960" height="400" rx="30" fill="url(#panel)" stroke="rgba(6,112,46,0.22)" />

        <g opacity="0.35">
          <path d="M65 330H910" stroke="#06702E" strokeOpacity="0.25" strokeDasharray="5 7" />
          <path d="M65 275H910" stroke="#06702E" strokeOpacity="0.2" strokeDasharray="5 7" />
          <path d="M65 220H910" stroke="#06702E" strokeOpacity="0.15" strokeDasharray="5 7" />
        </g>

        <rect x="80" y="120" width="170" height="210" rx="18" fill="white" fillOpacity="0.86" stroke="#06702E" strokeOpacity="0.18" />
        <rect x="104" y="145" width="80" height="12" rx="6" fill="#06702E" fillOpacity="0.18" />
        <rect x="104" y="168" width="120" height="8" rx="4" fill="#C6DECF" />
        <rect x="104" y="184" width="106" height="8" rx="4" fill="#C6DECF" />
        <rect x="104" y="200" width="126" height="8" rx="4" fill="#C6DECF" />
        <rect x="104" y="230" width="126" height="76" rx="10" fill="#EEF7F1" />
        <path d="M120 272L143 251L160 261L196 236L216 246" stroke="#06702E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="216" cy="246" r="7" fill="#06702E" />

        <rect x="286" y="72" width="406" height="278" rx="24" fill="white" fillOpacity="0.9" stroke="#06702E" strokeOpacity="0.23" />
        <rect x="314" y="102" width="134" height="16" rx="8" fill="#06702E" fillOpacity="0.18" />
        <rect x="314" y="127" width="204" height="10" rx="5" fill="#D4E7DA" />

        <rect x="314" y="160" width="152" height="164" rx="16" fill="#EFF8F2" />
        <rect x="333" y="185" width="112" height="10" rx="5" fill="#D4E7DA" />
        <rect x="333" y="204" width="86" height="10" rx="5" fill="#D4E7DA" />
        <rect x="333" y="229" width="26" height="74" rx="7" fill="#06702E" fillOpacity="0.22" />
        <rect x="367" y="213" width="26" height="90" rx="7" fill="#06702E" fillOpacity="0.35" />
        <rect x="401" y="244" width="26" height="59" rx="7" fill="#06702E" fillOpacity="0.48" />

        <rect x="484" y="160" width="180" height="77" rx="16" fill="#06702E" fillOpacity="0.08" />
        <path d="M508 214L534 192L559 201L590 174L636 182" stroke="#06702E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="590" cy="174" r="6" fill="#06702E" />
        <circle cx="636" cy="182" r="6" fill="#06702E" />

        <rect x="484" y="247" width="180" height="77" rx="16" fill="#06702E" fillOpacity="0.06" />
        <rect x="506" y="270" width="66" height="12" rx="6" fill="#06702E" fillOpacity="0.28" />
        <rect x="506" y="289" width="129" height="9" rx="4" fill="#C6DECF" />

        <rect x="716" y="110" width="184" height="204" rx="20" fill="white" fillOpacity="0.85" stroke="#06702E" strokeOpacity="0.2" />
        <rect x="742" y="138" width="98" height="14" rx="7" fill="#06702E" fillOpacity="0.18" />
        <circle cx="755" cy="176" r="8" fill="#06702E" fillOpacity="0.28" />
        <rect x="772" y="170" width="96" height="10" rx="5" fill="#D4E7DA" />
        <circle cx="755" cy="204" r="8" fill="#06702E" fillOpacity="0.28" />
        <rect x="772" y="198" width="72" height="10" rx="5" fill="#D4E7DA" />
        <circle cx="755" cy="232" r="8" fill="#06702E" fillOpacity="0.28" />
        <rect x="772" y="226" width="86" height="10" rx="5" fill="#D4E7DA" />

        <rect x="742" y="258" width="126" height="34" rx="17" fill="#06702E" />
        <path d="M774 275L790 290L835 251" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

        <defs>
          <linearGradient id="panel" x1="95" y1="35" x2="900" y2="388" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.86" />
            <stop offset="1" stopColor="#E7F4EB" stopOpacity="0.84" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}


export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 overflow-hidden flex flex-col items-center">
      {/* Subtle radial wash */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-130 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(2,125,53,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-16 pb-10">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/8 border border-brand-green/20 text-brand-green text-xs font-semibold px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
          Now live · Lagos State University
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-900 leading-[1.02] tracking-tight mb-6 spotlight-title">
          Every student deserves
          <br />
          a <span className="italic">better</span> way to learn.
        </h1>

        {/* Subtext */}
        <p className="text-brand-ink/55 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Unify brings learning, academic updates, opportunities, and student tools into one platform — so you stay informed, prepared, and in control.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#"
            className="bg-brand-green text-white font-semibold px-8 py-4 rounded-full text-base shadow-lg shadow-brand-green/25 hover:bg-brand-forest hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Learning — Free
          </a>
          <a
            href="#for-universities"
            className="group flex items-center gap-2 text-brand-ink font-semibold px-8 py-4 rounded-full border-2 border-brand-surface hover:border-brand-green/40 hover:text-brand-green transition-all duration-300 text-base"
          >
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mb-8">
          <HeroIllustration />
        </div>

        {/* Trust row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="flex gap-2.5">
            {[
              { tag: 'LASU', tone: 'rgba(6,112,46,0.18)' },
              { tag: 'UNILAG', tone: 'rgba(31,107,255,0.14)' },
              { tag: 'OAU', tone: 'rgba(255,185,71,0.2)' },
            ].map((item) => (
              <span
                key={item.tag}
                className="px-4 py-2 text-[11px] font-semibold tracking-wide rounded-full border"
                style={{ background: `linear-gradient(135deg, ${item.tone}, rgba(255,255,255,0.7))`, borderColor: 'rgba(6,112,46,0.2)' }}
              >
                {item.tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-brand-ink/55">
            <strong className="text-brand-ink">2,400+ students</strong> already learning
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative w-full border-t border-brand-surface">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-brand-surface text-center">
          {[
            { value: '2,400+', label: 'Students enrolled' },
            { value: '48+', label: 'Courses available' },
            { value: '91%', label: 'Report better focus' },
            { value: '3', label: 'Universities reached' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-4">
              <p className="font-display text-3xl font-900 text-brand-green">{s.value}</p>
              <p className="text-xs text-brand-ink/45 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner strip */}
      <div className="w-full border-t border-brand-surface">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-3">
          <p className="text-xs text-brand-ink/35 mr-2 font-medium">Trusted at</p>
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-brand-surface shadow-sm transition-all duration-200 hover:shadow-md">
            <FontAwesomeIcon icon={faLandmark} className="text-brand-green" style={{ fontSize: '0.8rem' }} />
            <span className="text-xs font-semibold text-brand-ink">Lagos State University</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-5 py-2.5 border border-brand-surface/60 transition-all duration-200 hover:bg-white hover:shadow-sm">
            <FontAwesomeIcon icon={faSchool} className="text-brand-ink/35" style={{ fontSize: '0.8rem' }} />
            <span className="text-xs font-medium text-brand-ink/45">University of Lagos — Coming soon</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-5 py-2.5 border border-brand-surface/60 transition-all duration-200 hover:bg-white hover:shadow-sm">
            <FontAwesomeIcon icon={faBookOpen} className="text-brand-ink/35" style={{ fontSize: '0.8rem' }} />
            <span className="text-xs font-medium text-brand-ink/45">More expanding</span>
          </div>
        </div>
      </div>
    </section>
  )
}
