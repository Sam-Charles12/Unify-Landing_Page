const stepIllustrations = [
  // Step 01: Profile setup — profile card in layered bento shells
  <svg key="s1" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect x="12" y="12" width="56" height="56" rx="14" fill="white" fillOpacity="0.82" stroke="#06702E" strokeOpacity="0.18" />
    <rect x="20" y="22" width="22" height="5" rx="2.5" fill="#06702E" fillOpacity="0.2" />
    <rect x="20" y="31" width="38" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="20" y="38" width="32" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="20" y="45" width="38" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="20" y="52" width="23" height="8" rx="4" fill="#06702E" fillOpacity="0.16" />
    <circle cx="56" cy="56" r="9" fill="#06702E" />
    <path d="M51 56l3.2 3.2L61 52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Step 02: Study — content block plus progress arc
  <svg key="s2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect x="14" y="16" width="52" height="48" rx="12" fill="white" fillOpacity="0.86" stroke="#06702E" strokeOpacity="0.18" />
    <rect x="22" y="24" width="16" height="20" rx="4" fill="#06702E" fillOpacity="0.15" />
    <rect x="26" y="29" width="8" height="2.5" rx="1.25" fill="#06702E" fillOpacity="0.35" />
    <rect x="26" y="34" width="8" height="2.5" rx="1.25" fill="#06702E" fillOpacity="0.35" />
    <rect x="43" y="25" width="15" height="4" rx="2" fill="#D0E3D7" />
    <rect x="43" y="32" width="11" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="43" y="38" width="13" height="3" rx="1.5" fill="#D0E3D7" />
    <path d="M24 52C30 45 39 43 46 44C54 45 58 49 62 52" stroke="#06702E" strokeWidth="3" strokeLinecap="round" />
    <circle cx="62" cy="52" r="4" fill="#06702E" />
  </svg>,
  // Step 03: Control — dashboard tiles with status pulse
  <svg key="s3" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect x="13" y="14" width="54" height="52" rx="12" fill="white" fillOpacity="0.88" stroke="#06702E" strokeOpacity="0.2" />
    <rect x="20" y="22" width="18" height="12" rx="4" fill="#06702E" fillOpacity="0.14" />
    <rect x="42" y="22" width="18" height="12" rx="4" fill="#06702E" fillOpacity="0.22" />
    <rect x="20" y="38" width="40" height="9" rx="4.5" fill="#D0E3D7" />
    <rect x="20" y="51" width="26" height="9" rx="4.5" fill="#06702E" fillOpacity="0.25" />
    <circle cx="58" cy="55" r="6" fill="#06702E" />
    <path d="M55 55l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
]

const steps = [
  {
    number: '01',
    label: 'Set up your profile',
    title: 'Choose your university and courses',
    description: 'Create your academic profile in minutes. Select your institution, faculty, and course load — Unify personalises everything to match your curriculum.',
    details: ['Lagos State University', 'University of Lagos', 'and more'],
  },
  {
    number: '02',
    label: 'Start studying',
    title: 'Study smarter with structured weekly learning',
    description: 'Work through weekly modules, interactive quizzes, and curated resources built around your actual course syllabus. No guesswork — just clear, measurable progress.',
    details: ['Weekly modules', 'Live quizzes', 'Resource library'],
  },
  {
    number: '03',
    label: 'Stay in control',
    title: 'Track progress, get updates, grab opportunities',
    description: 'Monitor your GPA in real time, receive all faculty announcements in one place, and discover scholarships, internships, and competitions matched to your profile.',
    details: ['GPA tracker', 'Smart alerts', 'Opportunity feed'],
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="how-it-works">
      {/* Decorative dots — very subtle */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #06702E 1.2px, transparent 1.2px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="brand-pill text-xs font-semibold px-4 py-2 mb-6">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-60" />
              <span className="relative block w-1.5 h-1.5 rounded-full bg-brand-green" />
            </span>
            How It Works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight max-w-2xl mx-auto">
            Three steps to take control of your{' '}
            <span className="italic text-brand-green">academic journey</span>
          </h2>
          <p className="text-brand-ink/55 text-lg mt-5 max-w-xl mx-auto">
            From your first sign-in to your next big opportunity — Unify moves
            with you, step by step.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector — desktop only */}
          <div
            className="hidden lg:block absolute top-16 left-[12%] right-[12%] step-track"
            aria-hidden="true"
          >
            <span className="travel-dot" style={{ animationDelay: '0s' }} />
            <span
              className="travel-dot"
              style={{ animationDelay: '1.3s' }}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="how-card group relative flex flex-col items-center text-center glass-card rounded-[26px] px-6 sm:px-7 py-9 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${120 + i * 160}ms` }}
              >
                {/* Ghost number */}
                <span
                  className="absolute -top-4 right-3 font-display font-900 text-[88px] leading-none select-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
                  style={{ color: 'rgba(6,112,46,0.07)' }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Illustration chip — floats */}
                <div
                  className="how-chip w-24 h-24 mb-6 relative flex items-center justify-center animate-float"
                  style={{ animationDuration: `${6 + i}s`, animationDelay: `${i * 0.7}s` }}
                >
                  <span
                    className="absolute inset-0 rounded-full bg-brand-green/8 border border-brand-green/15"
                    aria-hidden="true"
                  />
                  <span className="relative">{stepIllustrations[i]}</span>
                </div>

                {/* Label chip */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green bg-brand-green/8 border border-brand-green/15 rounded-full px-3 py-1.5 mb-4">
                  <span className="w-1 h-1 rounded-full bg-brand-green" />
                  {step.label}
                </span>

                <h3 className="font-semibold text-lg text-brand-ink mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-brand-ink/55 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Detail chips */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-[11px] font-medium text-brand-ink/60 bg-white border border-brand-green/12 rounded-full px-2.5 py-1 transition-colors duration-300 group-hover:border-brand-green/30"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line that grows on hover */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-full bg-brand-green/70 transition-all duration-500 group-hover:w-2/3"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
