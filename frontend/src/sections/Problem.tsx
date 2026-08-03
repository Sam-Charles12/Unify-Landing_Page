import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBullhorn, faRocket, faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const gaps: { icon: IconDefinition; number: string; title: string; description: string; tag: string; bg: string }[] = [
  {
    icon: faBookOpen,
    number: '01',
    title: 'Learning Gap',
    description: 'Students consume notes but rarely know whether they truly understand the material — no feedback loop, no verification.',
    tag: 'No comprehension checks',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: faBullhorn,
    number: '02',
    title: 'Information Gap',
    description: 'Critical announcements are scattered across WhatsApp groups, notice boards, and faculty channels. Missing one can cost you.',
    tag: 'Scattered communication',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: faRocket,
    number: '03',
    title: 'Opportunity Gap',
    description: 'Students miss scholarships, internships, and competitions simply because they never hear about them in time.',
    tag: 'Opportunities lost daily',
    bg: 'rgba(255,255,255,0.10)',
  },
  {
    icon: faCrosshairs,
    number: '04',
    title: 'Attention Gap',
    description: 'Social media competes for attention, making consistent, focused academic work nearly impossible.',
    tag: 'Constant distraction',
    bg: 'rgba(255,255,255,0.06)',
  },
]

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #06702E 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="brand-pill text-xs font-semibold px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 bg-brand-green/70 rounded-full" />
            The Problem
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight">
            University students face{' '}
            <span className="italic text-brand-green">four critical gaps</span>{' '}
            every day.
          </h2>
          <p className="text-brand-ink/60 mt-5 text-lg leading-relaxed">
            We built Unify to understand and close every one of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gaps.map((gap) => (
            <div
              key={gap.title}
              className="glass-card bento-card rounded-3xl p-6 flex flex-col gap-4"
              style={{ background: gap.bg === 'rgba(255,255,255,0.10)' ? 'rgba(239,250,243,0.9)' : undefined }}
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center border border-brand-green/15">
                  <FontAwesomeIcon icon={gap.icon} className="text-brand-green text-2xl" />
                </div>
                <span className="font-display text-5xl font-900 leading-none select-none" style={{ color: 'rgba(6,112,46,0.08)' }}>
                  {gap.number}
                </span>
              </div>
              <div>
                <h3 className="text-brand-ink font-semibold text-lg mb-2">{gap.title}</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed">{gap.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-brand-green/75 bg-brand-green/8 px-3 py-1.5 rounded-full border border-brand-green/15">
                  <span className="w-1 h-1 bg-brand-green/60 rounded-full" />
                  {gap.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-brand-green/15" />
          <p className="text-brand-ink/45 text-sm px-4">Unify addresses every gap above</p>
          <div className="flex-1 h-px bg-brand-green/15" />
        </div>
      </div>
    </section>
  )
}
