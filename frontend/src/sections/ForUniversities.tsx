import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTowerBroadcast,
  faLightbulb,
  faFolderOpen,
  faGraduationCap,
  faArrowTrendUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const benefits: { icon: IconDefinition; title: string; description: string }[] =
  [
    {
      icon: faTowerBroadcast,
      title: "Better Communication",
      description:
        "Deliver announcements directly to every student — no more relying on WhatsApp chains or notice boards.",
    },
    {
      icon: faLightbulb,
      title: "Improved Engagement",
      description:
        "Track how students interact with your courses and surface insights that inform better teaching.",
    },
    {
      icon: faFolderOpen,
      title: "Centralized Academic Updates",
      description:
        "One place for timetables, exam notices, department news, and faculty announcements.",
    },
    {
      icon: faGraduationCap,
      title: "Enhanced Learning Experience",
      description:
        "Give your students access to structured learning tools that complement classroom education.",
    },
    {
      icon: faArrowTrendUp,
      title: "Future Analytics & Insights",
      description:
        "Understand student performance trends and identify at-risk students before they fall behind.",
    },
  ];

function CampusOpsIllustration() {
  return (
    <div className="glass-card bento-card rounded-3xl p-4 sm:p-6 relative overflow-hidden">
      <svg
        viewBox="0 0 620 420"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="10"
          width="600"
          height="400"
          rx="28"
          fill="#F5FAF7"
          stroke="rgba(6,112,46,0.24)"
        />

        <rect
          x="44"
          y="52"
          width="202"
          height="314"
          rx="20"
          fill="white"
          fillOpacity="0.86"
          stroke="#06702E"
          strokeOpacity="0.18"
        />
        <rect
          x="68"
          y="80"
          width="90"
          height="12"
          rx="6"
          fill="#06702E"
          fillOpacity="0.2"
        />
        <rect x="68" y="102" width="138" height="8" rx="4" fill="#D4E7DA" />
        <rect x="68" y="129" width="154" height="78" rx="12" fill="#EEF8F2" />
        <circle cx="96" cy="168" r="12" fill="#06702E" fillOpacity="0.24" />
        <path
          d="M90 168l4 4 8-9"
          stroke="#06702E"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="116" y="160" width="82" height="10" rx="5" fill="#C6DECF" />
        <rect
          x="68"
          y="222"
          width="154"
          height="58"
          rx="12"
          fill="#06702E"
          fillOpacity="0.09"
        />
        <path
          d="M84 265l21-20 25 10 23-28 45 12"
          stroke="#06702E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="68" y="297" width="108" height="10" rx="5" fill="#D4E7DA" />
        <rect x="68" y="316" width="86" height="10" rx="5" fill="#D4E7DA" />

        <rect
          x="266"
          y="74"
          width="312"
          height="138"
          rx="22"
          fill="white"
          fillOpacity="0.9"
          stroke="#06702E"
          strokeOpacity="0.2"
        />
        <rect
          x="292"
          y="101"
          width="120"
          height="12"
          rx="6"
          fill="#06702E"
          fillOpacity="0.18"
        />
        <rect x="292" y="122" width="172" height="8" rx="4" fill="#D4E7DA" />
        <rect
          x="292"
          y="145"
          width="82"
          height="38"
          rx="10"
          fill="#06702E"
          fillOpacity="0.13"
        />
        <rect
          x="381"
          y="145"
          width="82"
          height="38"
          rx="10"
          fill="#06702E"
          fillOpacity="0.2"
        />
        <rect
          x="470"
          y="145"
          width="82"
          height="38"
          rx="10"
          fill="#06702E"
          fillOpacity="0.28"
        />

        <rect
          x="266"
          y="230"
          width="312"
          height="136"
          rx="22"
          fill="white"
          fillOpacity="0.85"
          stroke="#06702E"
          strokeOpacity="0.2"
        />
        <rect
          x="292"
          y="258"
          width="108"
          height="12"
          rx="6"
          fill="#06702E"
          fillOpacity="0.2"
        />
        <circle cx="305" cy="292" r="9" fill="#06702E" fillOpacity="0.24" />
        <rect x="321" y="286" width="124" height="11" rx="5.5" fill="#D4E7DA" />
        <circle cx="305" cy="322" r="9" fill="#06702E" fillOpacity="0.24" />
        <rect x="321" y="316" width="162" height="11" rx="5.5" fill="#D4E7DA" />

        <rect x="496" y="256" width="56" height="80" rx="14" fill="#06702E" />
        <text
          x="524"
          y="289"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="white"
          fontFamily="Manrope, sans-serif"
        >
          91%
        </text>
        <text
          x="524"
          y="307"
          textAnchor="middle"
          fontSize="8"
          fill="rgba(255,255,255,0.8)"
          fontFamily="Manrope, sans-serif"
        >
          Engage
        </text>

      </svg>

      <div className="absolute top-5 right-5 bg-brand-green/10 rounded-xl px-3 py-2 flex items-center gap-1.5 border border-brand-green/20">
        <FontAwesomeIcon
          icon={faCheck}
          className="text-brand-green"
          style={{ fontSize: "0.6rem" }}
        />
        <p className="text-brand-green text-xs font-medium">
          0 missed messages
        </p>
      </div>
    </div>
  );
}

export default function ForUniversities() {
  return (
    <section className="bg-brand-cream py-24 lg:py-32" id="for-universities">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual left */}
          <div className="relative order-2 lg:order-1">
            <CampusOpsIllustration />
          </div>

          {/* Content right */}
          <div className="order-1 lg:order-2">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">
              For Universities
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight mb-6">
              Empower your students.{" "}
              <span className="italic text-brand-green">
                Elevate your institution.
              </span>
            </h2>
            <p className="text-brand-ink/60 leading-relaxed mb-10">
              Unify helps universities modernize communication, strengthen
              student engagement, and deliver a learning experience that
              actually reflects the quality of your institution.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-green/8 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon
                      icon={b.icon}
                      className="text-brand-green"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-ink text-sm mb-0.5">
                      {b.title}
                    </p>
                    <p className="text-brand-ink/55 text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:partner@unify.africa"
              className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-forest transition-all duration-200 shadow-lg shadow-brand-green/25"
            >
              Partner with Unify
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        </div>
      </div>
    </section>
  );
}
