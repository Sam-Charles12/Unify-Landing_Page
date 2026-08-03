const testimonials = [
  {
    name: "Chukwuemeka Obi",
    role: "Computer Science, Level 300",
    university: "Lagos State University",
    quote:
      "Unify changed how I study. I went from barely scraping through to actually understanding my courses. My GPA jumped from 3.1 to 3.6 in one semester.",
    initials: "CO",
    accent: "#06702E",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Engineering, Level 200",
    university: "Lagos State University",
    quote:
      "I used to miss every opportunity because I heard about it too late. Now I get notified the moment something relevant comes up. I already applied to two scholarships!",
    initials: "AO",
    accent: "#0A8B3D",
    rating: 5,
  },
  {
    name: "Femi Adeyemi",
    role: "Business Administration, Level 400",
    university: "Lagos State University",
    quote:
      "The weekly planner alone is worth it. I finally feel in control of my academic life instead of constantly reacting to things at the last minute.",
    initials: "FA",
    accent: "#055525",
    rating: 5,
  },
];

function TestimonialAvatar({
  initials,
  accent,
}: {
  initials: string;
  accent: string;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className="w-10 h-10 rounded-full border border-brand-green/15"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`g-${initials}`}
          x1="14"
          y1="8"
          x2="66"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#DFF0E5" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="80"
        height="80"
        rx="40"
        fill={`url(#g-${initials})`}
      />
      <circle cx="40" cy="30" r="13" fill={accent} fillOpacity="0.2" />
      <path
        d="M20 62c4-9 12-14 20-14s16 5 20 14"
        fill={accent}
        fillOpacity="0.26"
      />
      <text
        x="40"
        y="36"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={accent}
        fontFamily="Manrope, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}

const stats = [
  { value: "2,400+", label: "Students on platform" },
  { value: "3", label: "Universities reached" },
  { value: "48+", label: "Courses available" },
  { value: "91%", label: "Report better focus" },
];

export default function SocialProof() {
  return (
    <section className="bg-brand-surface/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
            Why Students Love Unify
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight max-w-xl mx-auto">
            Real students. Real results.
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 text-center border border-brand-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-ink/5 hover:border-brand-green/20"
            >
              <p className="font-display text-4xl font-900 text-brand-green mb-2">
                {s.value}
              </p>
              <p className="text-brand-ink/55 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-brand-surface flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-ink/6 hover:border-brand-green/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#027D35"
                  >
                    <path d="M7 1l1.4 3.8L13 5.6l-3.3 2.8.9 4.6L7 10.7l-3.6 2.3.9-4.6L1 5.6l4.6-.8L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-ink/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-surface">
                <TestimonialAvatar initials={t.initials} accent={t.accent} />
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-ink/45">{t.role}</p>
                  <p className="text-[10px] text-brand-green/70">
                    {t.university}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-brand-green font-bold">
                      U
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
