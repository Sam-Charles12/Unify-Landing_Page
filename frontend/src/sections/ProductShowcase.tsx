import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookOpen,
  faBolt,
  faStar,
  faCalendarDays,
  faGraduationCap,
  faBriefcase,
  faTrophy,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const tabs: { id: string; label: string; icon: IconDefinition }[] = [
  { id: "dashboard", label: "Dashboard", icon: faHouse },
  { id: "courses", label: "Courses", icon: faBookOpen },
  { id: "quizzes", label: "Quizzes", icon: faBolt },
  { id: "opportunities", label: "Opportunities", icon: faStar },
  { id: "planner", label: "Planner", icon: faCalendarDays },
];

function DashboardView() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-surface h-full flex flex-col">
      <div className="bg-brand-forest px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-white/50 text-xs">Student Dashboard</p>
          <p className="text-white font-semibold">Amara Okafor — Level 300</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-white/60 text-xs">Online</span>
        </div>
      </div>

      <div className="flex-1 p-5 grid grid-cols-2 gap-3 overflow-auto">
        <div className="bg-brand-cream rounded-xl p-4">
          <p className="text-xs text-brand-ink/50 mb-1">Current GPA</p>
          <p className="font-display text-3xl font-700 text-brand-forest">
            3.82
          </p>
          <div className="mt-2 h-1.5 bg-brand-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-green rounded-full"
              style={{ width: "76%" }}
            />
          </div>
          <p className="text-[10px] text-brand-green mt-1">
            ↑ +0.14 this semester
          </p>
        </div>

        <div className="bg-brand-forest/5 rounded-xl p-4">
          <p className="text-xs text-brand-ink/50 mb-1">Study Hours</p>
          <p className="font-display text-3xl font-700 text-brand-ink">24h</p>
          <p className="text-[10px] text-brand-ink/40 mt-1">This week</p>
          <div className="flex gap-0.5 mt-2">
            {[6, 4, 8, 3, 3].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-brand-green rounded-sm"
                style={{ height: `${h * 4}px`, opacity: 0.6 + i * 0.08 }}
              />
            ))}
          </div>
        </div>

        <div className="col-span-2 bg-brand-ink/4 rounded-xl p-4">
          <p className="text-xs font-semibold text-brand-ink mb-3">
            Upcoming Exams
          </p>
          {[
            { name: "Data Structures Final", date: "Nov 18", days: 9 },
            { name: "Calculus II Midterm", date: "Nov 22", days: 13 },
          ].map((exam) => (
            <div
              key={exam.name}
              className="flex items-center justify-between py-1.5"
            >
              <div>
                <p className="text-xs font-medium text-brand-ink">
                  {exam.name}
                </p>
                <p className="text-[10px] text-brand-ink/40">{exam.date}</p>
              </div>
              <span className="text-[10px] font-medium text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                {exam.days}d
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesView() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-surface h-full flex flex-col">
      <div className="px-6 py-5 border-b border-brand-surface flex items-center justify-between">
        <h3 className="font-semibold text-brand-ink">My Courses</h3>
        <span className="text-xs text-brand-ink/40">Semester 1 · 2024</span>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-auto">
        {[
          {
            name: "Data Structures & Algorithms",
            code: "CSC301",
            progress: 68,
            color: "#027D35",
          },
          {
            name: "Calculus II",
            code: "MTH201",
            progress: 52,
            color: "#06702E",
          },
          {
            name: "Digital Systems",
            code: "CSC205",
            progress: 81,
            color: "#027D35",
          },
          {
            name: "Technical Communication",
            code: "ENGL202",
            progress: 40,
            color: "#B3B6B0",
          },
        ].map((c) => (
          <div key={c.code} className="bg-brand-cream rounded-xl p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-xs font-semibold text-brand-ink">{c.name}</p>
                <p className="text-[10px] text-brand-ink/40">{c.code}</p>
              </div>
              <span className="text-xs font-bold" style={{ color: c.color }}>
                {c.progress}%
              </span>
            </div>
            <div className="h-1.5 bg-brand-surface rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${c.progress}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizzesView() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-surface h-full flex flex-col">
      <div className="bg-brand-green px-6 py-5">
        <p className="text-white/70 text-xs">Interactive Quiz</p>
        <p className="text-white font-semibold">Data Structures — Week 8</p>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs text-brand-ink/50 mb-2">Question 3 of 10</p>
          <div className="h-1 bg-brand-surface rounded-full mb-5">
            <div className="h-full bg-brand-green rounded-full w-[30%]" />
          </div>
          <p className="font-semibold text-brand-ink mb-5 text-sm leading-snug">
            What is the time complexity of binary search on a sorted array of n
            elements?
          </p>
          <div className="space-y-2">
            {["O(n)", "O(log n)", "O(n²)", "O(1)"].map((opt, i) => (
              <button
                key={opt}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium transition-all duration-150 ${
                  selected === i
                    ? i === 1
                      ? "bg-brand-green text-white"
                      : "bg-red-50 text-red-600 border border-red-200"
                    : "bg-brand-cream hover:bg-brand-surface text-brand-ink border border-transparent"
                }`}
              >
                <span className="opacity-50 mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>
        {selected !== null && (
          <div
            className={`flex items-start gap-2 text-xs mt-4 ${selected === 1 ? "text-brand-green" : "text-red-500"}`}
          >
            <FontAwesomeIcon
              icon={selected === 1 ? faCheck : faXmark}
              className="mt-0.5 shrink-0"
            />
            <span>
              {selected === 1
                ? "Correct! Binary search halves the search space each step."
                : "Not quite. Think about how binary search eliminates half the array each time."}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const opportunityItems: {
  title: string;
  type: string;
  deadline: string;
  icon: IconDefinition;
  match: string;
}[] = [
  {
    title: "MTN Nigeria Scholarship",
    type: "Scholarship",
    deadline: "Nov 30",
    icon: faGraduationCap,
    match: "High match",
  },
  {
    title: "Google Africa Developer Program",
    type: "Internship",
    deadline: "Dec 15",
    icon: faBriefcase,
    match: "Good match",
  },
  {
    title: "Hack the North 2024",
    type: "Hackathon",
    deadline: "Nov 10",
    icon: faBolt,
    match: "Great fit",
  },
  {
    title: "LASU Innovation Award",
    type: "Competition",
    deadline: "Dec 1",
    icon: faTrophy,
    match: "High match",
  },
];

function OpportunitiesView() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-surface h-full flex flex-col">
      <div className="px-6 py-5 border-b border-brand-surface flex items-center justify-between">
        <h3 className="font-semibold text-brand-ink">Opportunities</h3>
        <span className="bg-brand-green/10 text-brand-green text-[10px] font-semibold px-2.5 py-1 rounded-full">
          4 new
        </span>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-auto">
        {opportunityItems.map((o) => (
          <div
            key={o.title}
            className="bg-brand-cream rounded-xl p-4 flex items-start gap-3"
          >
            <div className="w-8 h-8 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={o.icon}
                className="text-brand-green"
                style={{ fontSize: "0.75rem" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-brand-ink truncate">
                {o.title}
              </p>
              <p className="text-[10px] text-brand-ink/50">
                {o.type} · Deadline {o.deadline}
              </p>
              <span className="inline-flex text-[9px] font-medium text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full mt-1.5">
                {o.match}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlannerView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["8–10AM", "10–12PM", "12–2PM", "2–4PM", "4–6PM"];
  const filled: Record<string, string> = {
    "Mon-0": "CSC301",
    "Mon-2": "MTH201",
    "Tue-1": "CSC205",
    "Tue-3": "ENGL202",
    "Wed-0": "CSC301",
    "Wed-2": "PHY101",
    "Thu-1": "MTH201",
    "Thu-4": "Study",
    "Fri-0": "CSC205",
    "Fri-3": "Review",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-surface h-full flex flex-col">
      <div className="px-6 py-5 border-b border-brand-surface">
        <h3 className="font-semibold text-brand-ink">Weekly Planner</h3>
        <p className="text-xs text-brand-ink/40">Nov 11–15, 2024</p>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-6 gap-1 text-[10px]">
          <div />
          {days.map((d) => (
            <div
              key={d}
              className="text-center font-semibold text-brand-ink/60 py-1"
            >
              {d}
            </div>
          ))}
          {slots.map((slot, si) => (
            <React.Fragment key={slot}>
              <div className="text-brand-ink/30 py-1 pr-1 text-right leading-none">
                {slot}
              </div>
              {days.map((d) => {
                const cell = filled[`${d}-${si}`];
                return (
                  <div
                    key={`${d}-${si}`}
                    className={`rounded-lg py-2 px-1 text-center leading-none ${cell ? "bg-brand-green/15 text-brand-forest font-medium" : "bg-brand-surface/40"}`}
                  >
                    {cell || ""}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const views: Record<string, React.FC> = {
  dashboard: DashboardView,
  courses: CoursesView,
  quizzes: QuizzesView,
  opportunities: OpportunitiesView,
  planner: PlannerView,
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const ActiveView = views[activeTab];

  return (
    <section className="py-24 lg:py-32" id="product">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-kicker mb-4">Product Experience</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 leading-tight max-w-2xl mx-auto">
            One platform, every tool your academic life needs
          </h2>
          <p className="text-brand-ink/55 mt-4 max-w-xl mx-auto leading-relaxed">
            From daily study sessions to tracking your GPA — Unify is the
            academic companion that travels with you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-9">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20 -translate-y-px"
                  : "panel-soft text-brand-ink/70 hover:text-brand-ink"
              }`}
            >
              <FontAwesomeIcon icon={tab.icon} style={{ fontSize: "0.8rem" }} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-5 items-stretch max-w-6xl mx-auto">
          <div
            className="panel-soft rounded-3xl p-4"
            style={{ minHeight: "420px" }}
          >
            <div
              key={activeTab}
              className="animate-fade-in-up h-full"
              style={{ minHeight: "420px" }}
            >
              <ActiveView />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="panel-soft rounded-2xl p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-ink/45 mb-3">
                Active Learning
              </p>
              <p className="font-display text-4xl font-700 text-brand-green">
                92%
              </p>
              <p className="text-sm text-brand-ink/55 mt-2">
                Students complete weekly study plans when reminders and
                resources are unified.
              </p>
            </div>
            <div
              className="rounded-2xl p-5 text-white"
              style={{
                background: "linear-gradient(140deg, #1f6bff, #06702e)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-3">
                Opportunity Radar
              </p>
              <p className="font-display text-3xl font-700">+340</p>
              <p className="text-sm text-white/78 mt-2">
                Scholarships and internships surfaced this month to eligible
                students.
              </p>
            </div>
            <div className="panel-soft rounded-2xl p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-ink/45 mb-3">
                Quick Pulse
              </p>
              <div className="flex gap-2">
                {[66, 80, 58, 88, 72, 93].map((n, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md bg-brand-green/12 overflow-hidden h-20 flex items-end"
                  >
                    <div
                      className="w-full rounded-md"
                      style={{
                        height: `${n}%`,
                        background: i % 2 ? "#06702E" : "#1F6BFF",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
