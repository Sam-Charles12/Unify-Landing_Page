import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEarthAfrica, faShield, faHandshake } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const values: { icon: IconDefinition; title: string; description: string }[] = [
  { icon: faBullseye, title: 'Student-First', description: 'Every decision starts with one question: does this help students succeed?' },
  { icon: faEarthAfrica, title: 'African Identity', description: 'We build for our context — our infrastructure, our institutions, our culture.' },
  { icon: faShield, title: 'Trust Through Action', description: 'We demonstrate progress rather than just making promises.' },
  { icon: faHandshake, title: 'Open Partnership', description: 'We work with universities as partners, not as vendors.' },
]

export default function About() {
  return (
    <section className="bg-brand-surface/40 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">About Unify</p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight mb-8">
              We started because{' '}
              <span className="italic text-brand-green">we lived the problem.</span>
            </h2>
            <div className="space-y-4 text-brand-ink/65 leading-relaxed">
              <p>
                The Unify team started as students who were constantly overwhelmed — not by the academics themselves, but by the chaos surrounding them. Missing exam schedules shared only on WhatsApp. Scholarship deadlines passing without anyone noticing. Scattered notes with no way to know if you actually understood the material.
              </p>
              <p>
                We built Unify to be the platform we wished existed — one that brings order to the university experience and puts students back in control of their academic journey.
              </p>
              <p>
                Today we serve students at Lagos State University, with ambitions to reach every major institution across Nigeria and Africa. This is just the beginning.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-brand-green font-semibold text-sm">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              Active and growing — Lagos State University
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-brand-ink/40 uppercase tracking-wider mb-6">Our Values</p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-5 border border-brand-surface">
                  <div className="w-10 h-10 bg-brand-green/8 rounded-xl flex items-center justify-center mb-3">
                    <FontAwesomeIcon icon={v.icon} className="text-brand-green" style={{ fontSize: '1rem' }} />
                  </div>
                  <h3 className="font-semibold text-brand-ink text-sm mb-1.5">{v.title}</h3>
                  <p className="text-brand-ink/50 text-xs leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-brand-forest rounded-2xl p-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Mission</p>
              <p className="text-white font-display text-lg font-600 leading-snug italic">
                &ldquo;To inspire confidence in Unify&apos;s vision while helping every student understand how we are solving the everyday challenges of university life.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
