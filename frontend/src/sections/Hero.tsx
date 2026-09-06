import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faSchool,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

function FloatCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`animate-float ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function GradeIllustration() {
  return (
    <svg
      viewBox="0 0 132 96"
      width="132"
      height="96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="112"
        height="88"
        rx="22"
        fill="white"
        fillOpacity="0.9"
        stroke="rgba(6,112,46,0.18)"
      />
      <rect x="18" y="20" width="42" height="8" rx="4" fill="#06702E" fillOpacity="0.2" />
      <rect x="18" y="36" width="30" height="5" rx="2.5" fill="#C6DECF" />
      <rect
        x="90"
        y="18"
        width="20"
        height="12"
        rx="6"
        fill="#06702E"
      />
      <text
        x="100"
        y="27.5"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="white"
        fontFamily="Manrope"
      >
        +12%
      </text>
      <rect x="16" y="50" width="84" height="28" rx="10" fill="#EFF8F2" />
      <circle cx="26" cy="60" r="3" fill="#1F6BFF" fillOpacity="0.35" />
      <circle cx="42" cy="52" r="3" fill="#1F6BFF" fillOpacity="0.5" />
      <circle cx="58" cy="66" r="3" fill="#1F6BFF" fillOpacity="0.5" />
      <circle cx="74" cy="56" r="3" fill="#1F6BFF" fillOpacity="0.4" />
      <circle cx="90" cy="64" r="3" fill="#1F6BFF" fillOpacity="0.4" />
      <path
        d="M24 70 C32 60 34 58 40 50 C46 44 52 68 58 62 C63 57 68 44 72 50 C77 58 80 48 84 50"
        stroke="#06702E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="90" cy="50" r="3" fill="#06702E" />
    </svg>
  );
}

function NoticeIllustration() {
  return (
    <svg
      viewBox="0 0 120 110"
      width="120"
      height="110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="106"
        height="98"
        rx="22"
        fill="white"
        fillOpacity="0.9"
        stroke="rgba(255,185,71,0.32)"
      />
      <rect x="16" y="18" width="58" height="8" rx="4" fill="#E8B44C" fillOpacity="0.3" />
      <rect x="16" y="32" width="40" height="5" rx="2.5" fill="#E8B44C" fillOpacity="0.5" />
      <circle cx="90" cy="24" r="12" fill="#16702E" />
      <path
        d="M90 18v7l4 2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="92" cy="21" r="6" fill="#16702E" />
      <rect x="16" y="50" width="52" height="40" rx="10" fill="#FFEFD6" fillOpacity="0.6" />
      <rect x="16" y="58" width="52" height="40" rx="10" fill="#FFEFD6" fillOpacity="0.7" />
      <rect x="16" y="54" width="52" height="36" rx="10" fill="#FFF7E8" />
      <path
        d="M28 72L38 62L46 70L54 64"
        stroke="#06702E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="54" cy="64" r="3" fill="#06702E" />
      <circle cx="78" cy="58" r="3" fill="#1F6BFF" />
      <circle cx="86" cy="72" r="3" fill="#1F6BFF" fillOpacity="0.6" />
      <circle cx="80" cy="84" r="3" fill="#1F6BFF" fillOpacity="0.4" />
    </svg>
  );
}

function ScheduleIllustration() {
  return (
    <svg
      viewBox="0 0 120 112"
      width="120"
      height="112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="106"
        height="104"
        rx="22"
        fill="white"
        fillOpacity="0.9"
        stroke="rgba(31,107,255,0.22)"
      />
      <rect x="16" y="16" width="12" height="18" rx="3" fill="#1F6BFF" fillOpacity="0.35" />
      <rect x="90" y="16" width="12" height="18" rx="3" fill="#1F6BFF" fillOpacity="0.35" />
      <rect
        x="14"
        y="20"
        width="90"
        height="70"
        rx="12"
        fill="white"
        stroke="rgba(31,107,255,0.25)"
      />
      <text
        x="26"
        y="34"
        fontSize="10"
        fontWeight="700"
        fill="#112217"
        fontFamily="Manrope"
      >
        Sep 2025
      </text>
      <g fontSize="7" fontWeight="600" fill="#112217" opacity="0.75" fontFamily="Manrope">
        <text x="22" y="52">M</text>
        <text x="40" y="52">T</text>
        <text x="58" y="52">W</text>
        <text x="76" y="52">T</text>
        <text x="94" y="52">F</text>
      </g>
      <g fontSize="9" fontFamily="Manrope">
        <text x="22" y="68" opacity="0.4">1</text>
        <text x="40" y="68" opacity="0.4">2</text>
        <text x="58" y="68" opacity="0.4">3</text>
        <circle cx="76" cy="64" r="8" fill="#06702E" />
        <text x="76" y="68" textAnchor="middle" fill="white" fontWeight="700">4</text>
        <text x="94" y="68" opacity="0.4">5</text>
        <text x="22" y="84" opacity="0.4">8</text>
        <text x="40" y="84" opacity="0.4">9</text>
        <text x="58" y="84" opacity="0.4">10</text>
        <text x="76" y="84" opacity="0.4">11</text>
        <text x="94" y="84" opacity="0.4">12</text>
      </g>
      <rect x="14" y="88" width="90" height="1" fill="#06702E" opacity="0.12" />
    </svg>
  );
}

function VerifiedIllustration() {
  return (
    <svg
      viewBox="0 0 116 92"
      width="116"
      height="92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="108"
        height="84"
        rx="22"
        fill="white"
        fillOpacity="0.9"
        stroke="rgba(31,107,255,0.2)"
      />
      <circle cx="36" cy="44" r="22" fill="#06702E" />
      <circle cx="36" cy="44" r="16" fill="white" fillOpacity="0.28" />
      <path
        d="M26 44l7 7 12-15"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="70" y="24" width="8" height="14" rx="4" fill="#1F6BFF" fillOpacity="0.25" />
      <rect x="82" y="24" width="8" height="14" rx="4" fill="#1F6BFF" fillOpacity="0.18" />
      <rect x="94" y="36" width="8" height="10" rx="4" fill="#1F6BFF" fillOpacity="0.4" />
      <rect x="70" y="44" width="8" height="30" rx="4" fill="#1F6BFF" fillOpacity="0.35" />
      <rect x="82" y="52" width="8" height="22" rx="4" fill="#1F6BFF" fillOpacity="0.25" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 overflow-hidden flex flex-col items-center">
      <div className="relative max-w-5xl mx-auto px-6 text-center pt-16 pb-10">
        {/* Floating premium illustrations around the headline */}
        <FloatCard
          className="absolute hidden md:block top-8 -left-4 lg:-left-24"
          style={{ animationDuration: "7s" }}
        >
          <GradeIllustration />
        </FloatCard>
        <FloatCard
          className="absolute hidden lg:block top-1/2 -right-6 xl:-right-16 -translate-y-1/2"
          style={{ animationDuration: "8.5s", animationDelay: "1.2s" }}
        >
          <ScheduleIllustration />
        </FloatCard>
        <FloatCard
          className="absolute hidden md:block top-16 right-2 lg:right-12 xl:-right-8"
          style={{ animationDuration: "7.5s", animationDelay: "0.6s" }}
        >
          <NoticeIllustration />
        </FloatCard>
        <FloatCard
          className="absolute hidden md:block bottom-2 -left-6 lg:-left-16"
          style={{ animationDuration: "6.5s", animationDelay: "2s" }}
        >
          <VerifiedIllustration />
        </FloatCard>

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/8 border border-brand-green/20 text-brand-green text-xs font-semibold px-4 py-2 rounded-full mb-10">
          <span className="relative w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-75" />
            <span className="relative block w-2 h-2 rounded-full bg-brand-green" />
          </span>
          Now live · Lagos State University
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-900 leading-[1.02] tracking-tight mb-6 spotlight-title">
          Every student deserves
          <br />a <span className="italic">better</span> way to learn.
        </h1>

        {/* Subtext */}
        <p className="text-brand-ink/55 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Unify brings learning, academic updates, opportunities, and student
          tools into one platform — so you stay informed, prepared, and in
          control.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://unifyhub.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-white font-semibold px-8 py-4 rounded-full text-base shadow-lg shadow-brand-green/25 hover:bg-brand-forest hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Learning — Free
          </a>
          <a
            href="#for-universities"
            className="group flex items-center gap-2 text-brand-ink font-semibold px-8 py-4 rounded-full border-2 border-brand-surface hover:border-brand-green/40 hover:text-brand-green transition-all duration-300 text-base"
          >
            Partner With Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="flex gap-2.5">
            {[
              { tag: "LASU", tone: "rgba(6,112,46,0.18)" },
              { tag: "UNILAG", tone: "rgba(31,107,255,0.14)" },
              { tag: "OAU", tone: "rgba(255,185,71,0.2)" },
            ].map((item) => (
              <span
                key={item.tag}
                className="px-4 py-2 text-[11px] font-semibold tracking-wide rounded-full border"
                style={{
                  background: item.tone,
                  borderColor: "rgba(6,112,46,0.2)",
                }}
              >
                {item.tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-brand-ink/55">
            <strong className="text-brand-ink">2,400+ students</strong> already
            learning
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative w-full border-t border-brand-surface">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-brand-surface text-center">
          {[
            { value: "2,400+", label: "Students enrolled" },
            { value: "48+", label: "Courses available" },
            { value: "91%", label: "Report better focus" },
            { value: "3", label: "Universities reached" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 px-4"
            >
              <p className="font-display text-3xl font-900 text-brand-green">
                {s.value}
              </p>
              <p className="text-xs text-brand-ink/45 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner strip */}
      <div className="w-full border-t border-brand-surface">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-3">
          <p className="text-xs text-brand-ink/35 mr-2 font-medium">
            Trusted at
          </p>
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-brand-surface shadow-sm transition-all duration-200 hover:shadow-md">
            <FontAwesomeIcon
              icon={faLandmark}
              className="text-brand-green"
              style={{ fontSize: "0.8rem" }}
            />
            <span className="text-xs font-semibold text-brand-ink">
              Lagos State University
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-5 py-2.5 border border-brand-surface/60 transition-all duration-200 hover:bg-white hover:shadow-sm">
            <FontAwesomeIcon
              icon={faSchool}
              className="text-brand-ink/35"
              style={{ fontSize: "0.8rem" }}
            />
            <span className="text-xs font-medium text-brand-ink/45">
              University of Lagos — Coming soon
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-5 py-2.5 border border-brand-surface/60 transition-all duration-200 hover:bg-white hover:shadow-sm">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-brand-ink/35"
              style={{ fontSize: "0.8rem" }}
            />
            <span className="text-xs font-medium text-brand-ink/45">
              More expanding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
