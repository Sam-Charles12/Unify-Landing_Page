const stepIllustrations = [
  // Step 01: Profile setup — profile card in layered bento shells
  <svg
    key="s1"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect
      x="12"
      y="12"
      width="56"
      height="56"
      rx="14"
      fill="white"
      fillOpacity="0.82"
      stroke="#06702E"
      strokeOpacity="0.18"
    />
    <rect
      x="20"
      y="22"
      width="22"
      height="5"
      rx="2.5"
      fill="#06702E"
      fillOpacity="0.2"
    />
    <rect x="20" y="31" width="38" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="20" y="38" width="32" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="20" y="45" width="38" height="3" rx="1.5" fill="#D0E3D7" />
    <rect
      x="20"
      y="52"
      width="23"
      height="8"
      rx="4"
      fill="#06702E"
      fillOpacity="0.16"
    />
    <circle cx="56" cy="56" r="9" fill="#06702E" />
    <path
      d="M51 56l3.2 3.2L61 52"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Step 02: Study — content block plus progress arc
  <svg
    key="s2"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect
      x="14"
      y="16"
      width="52"
      height="48"
      rx="12"
      fill="white"
      fillOpacity="0.86"
      stroke="#06702E"
      strokeOpacity="0.18"
    />
    <rect
      x="22"
      y="24"
      width="16"
      height="20"
      rx="4"
      fill="#06702E"
      fillOpacity="0.15"
    />
    <rect
      x="26"
      y="29"
      width="8"
      height="2.5"
      rx="1.25"
      fill="#06702E"
      fillOpacity="0.35"
    />
    <rect
      x="26"
      y="34"
      width="8"
      height="2.5"
      rx="1.25"
      fill="#06702E"
      fillOpacity="0.35"
    />
    <rect x="43" y="25" width="15" height="4" rx="2" fill="#D0E3D7" />
    <rect x="43" y="32" width="11" height="3" rx="1.5" fill="#D0E3D7" />
    <rect x="43" y="38" width="13" height="3" rx="1.5" fill="#D0E3D7" />
    <path
      d="M24 52C30 45 39 43 46 44C54 45 58 49 62 52"
      stroke="#06702E"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="62" cy="52" r="4" fill="#06702E" />
  </svg>,
  // Step 03: Control — dashboard tiles with status pulse
  <svg
    key="s3"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="80" height="80" rx="20" fill="#EAF5EE" />
    <rect
      x="13"
      y="14"
      width="54"
      height="52"
      rx="12"
      fill="white"
      fillOpacity="0.88"
      stroke="#06702E"
      strokeOpacity="0.2"
    />
    <rect
      x="20"
      y="22"
      width="18"
      height="12"
      rx="4"
      fill="#06702E"
      fillOpacity="0.14"
    />
    <rect
      x="42"
      y="22"
      width="18"
      height="12"
      rx="4"
      fill="#06702E"
      fillOpacity="0.22"
    />
    <rect x="20" y="38" width="40" height="9" rx="4.5" fill="#D0E3D7" />
    <rect
      x="20"
      y="51"
      width="26"
      height="9"
      rx="4.5"
      fill="#06702E"
      fillOpacity="0.25"
    />
    <circle cx="58" cy="55" r="6" fill="#06702E" />
    <path
      d="M55 55l2 2 4-4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

const steps = [
  {
    number: "01",
    label: "Set up your profile",
    title: "Choose your university and courses",
    description:
      "Create your academic profile in minutes. Select your institution, faculty, and course load — Unify personalises everything to match your curriculum.",
    detail: "Lagos State University · University of Lagos · and more",
  },
  {
    number: "02",
    label: "Start studying",
    title: "Study smarter with structured weekly learning",
    description:
      "Work through weekly modules, interactive quizzes, and curated resources built around your actual course syllabus. No guesswork — just clear, measurable progress.",
    detail: "Weekly modules · Live quizzes · Resource library",
  },
  {
    number: "03",
    label: "Stay in control",
    title: "Track progress, get updates, grab opportunities",
    description:
      "Monitor your GPA in real time, receive all faculty announcements in one place, and discover scholarships, internships, and competitions matched to your profile.",
    detail: "GPA tracker · Smart alerts · Opportunity feed",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="brand-pill text-xs font-semibold px-4 py-2 mb-6">
            How It Works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight max-w-xl mx-auto">
            Three steps to take control of your academic journey
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden sm:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(224,226,219,0), #027D35, rgba(224,226,219,0))",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center sm:items-start text-center sm:text-left glass-card bento-card rounded-3xl p-6 sm:p-7"
            >
              {/* Illustration */}
              <div className="w-20 h-20 mb-6 relative z-10">
                {stepIllustrations[i]}
              </div>

              <p className="text-[10px] font-semibold text-brand-green uppercase tracking-widest mb-2">
                {step.label}
              </p>
              <h3 className="font-semibold text-lg text-brand-ink mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-brand-ink/55 text-sm leading-relaxed mb-3">
                {step.description}
              </p>
              <p className="text-brand-green text-xs font-medium">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
