import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBolt,
  faBullhorn,
  faChartLine,
  faCalendarDays,
  faStar,
  faBookOpen,
  faClipboardList,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const features: {
  icon: IconDefinition;
  title: string;
  description: string;
  tag: string;
  accent: string;
  accentBg: string;
}[] = [
  {
    icon: faBook,
    title: "Weekly Learning",
    description:
      "Structured weekly modules aligned to your course syllabus. Never fall behind again.",
    tag: "Learning",
    accent: "#027D35",
    accentBg: "rgba(2,125,53,0.08)",
  },
  {
    icon: faBolt,
    title: "Interactive Quizzes",
    description:
      "Instant-feedback quizzes after each topic so you always know exactly where you stand.",
    tag: "Assessment",
    accent: "#027D35",
    accentBg: "rgba(2,125,53,0.08)",
  },
  {
    icon: faBullhorn,
    title: "Academic Notifications",
    description:
      "All announcements from your faculty and university in one clean feed. No missed deadlines.",
    tag: "Communication",
    accent: "#06702E",
    accentBg: "rgba(6,112,46,0.08)",
  },
  {
    icon: faChartLine,
    title: "GPA Tracker",
    description:
      "Monitor your academic performance in real time and set goals that actually move the needle.",
    tag: "Analytics",
    accent: "#06702E",
    accentBg: "rgba(6,112,46,0.08)",
  },
  {
    icon: faCalendarDays,
    title: "Study Planner",
    description:
      "Intelligent weekly timetable that fits your classes, study blocks, and personal schedule.",
    tag: "Planning",
    accent: "#027D35",
    accentBg: "rgba(2,125,53,0.08)",
  },
  {
    icon: faStar,
    title: "Opportunity Feed",
    description:
      "Scholarships, internships, competitions — surfaced automatically and matched to your profile.",
    tag: "Opportunities",
    accent: "#06702E",
    accentBg: "rgba(6,112,46,0.08)",
  },
  {
    icon: faBookOpen,
    title: "Resource Library",
    description:
      "Course-specific materials, past papers, and lecture notes — organised and always searchable.",
    tag: "Resources",
    accent: "#027D35",
    accentBg: "rgba(2,125,53,0.08)",
  },
  {
    icon: faClipboardList,
    title: "Course Management",
    description:
      "Deadlines, timetables, and academic calendar — managed in one place with zero friction.",
    tag: "Organisation",
    accent: "#06702E",
    accentBg: "rgba(6,112,46,0.08)",
  },
  {
    icon: faGraduationCap,
    title: "Student Dashboard",
    description:
      "Your complete academic picture at a glance — progress, scores, goals, and upcoming events.",
    tag: "Overview",
    accent: "#027D35",
    accentBg: "rgba(2,125,53,0.08)",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <div className="brand-pill text-xs font-semibold px-4 py-2 mb-6">
              Everything You Need
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-700 leading-tight spotlight-title">
              All your academic tools,{" "}
              <span className="italic">finally unified.</span>
            </h2>
          </div>
          <p className="text-brand-ink/50 max-w-sm leading-relaxed lg:text-right text-sm">
            Every capability is built around what students actually need —
            focused on outcomes, not features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4">
          {features.map((f, i) => {
            const sizeClasses = [
              "sm:col-span-3 lg:col-span-4",
              "sm:col-span-3 lg:col-span-4",
              "sm:col-span-6 lg:col-span-4",
              "sm:col-span-3 lg:col-span-3",
              "sm:col-span-3 lg:col-span-3",
              "sm:col-span-6 lg:col-span-6",
              "sm:col-span-3 lg:col-span-4",
              "sm:col-span-3 lg:col-span-4",
              "sm:col-span-6 lg:col-span-4",
            ];
            const isAccent = i === 0 || i === 5 || i === 8;
            const accentBg =
              i === 0
                ? "#1F6BFF"
                : i === 5
                  ? "#055525"
                  : "#06702E";
            return (
              <div
                key={f.title}
                className={`rounded-3xl p-7 group cursor-default transition-all duration-300 hover:-translate-y-1 bento-card ${sizeClasses[i]}`}
                style={{
                  background: isAccent
                    ? accentBg
                    : "rgba(255,255,255,0.84)",
                  border: isAccent
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "1px solid rgba(6,112,46,0.16)",
                  boxShadow: "0 14px 32px rgba(6,112,46,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: isAccent
                      ? "rgba(255,255,255,0.14)"
                      : f.accentBg,
                  }}
                >
                  <FontAwesomeIcon
                    icon={f.icon}
                    style={{
                      color: isAccent ? "rgba(255,255,255,0.92)" : f.accent,
                      fontSize: "1.1rem",
                    }}
                  />
                </div>
                <div
                  className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: isAccent
                      ? "rgba(255,255,255,0.14)"
                      : f.accentBg,
                    color: isAccent ? "rgba(255,255,255,0.72)" : f.accent,
                  }}
                >
                  {f.tag}
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: isAccent ? "white" : "#0C1810" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: isAccent
                      ? "rgba(255,255,255,0.74)"
                      : "rgba(12,24,16,0.58)",
                  }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
