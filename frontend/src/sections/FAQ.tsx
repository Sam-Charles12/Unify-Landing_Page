import { useState } from 'react'

const faqs = [
  {
    question: 'What is Unify?',
    answer: 'Unify is an all-in-one academic platform built for university students in Africa. It brings learning, notifications, GPA tracking, study planning, and opportunities into one clean, mobile-friendly experience.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes — Unify is completely free for students. We believe access to great academic tools should not be a privilege. Create your account and start learning today.',
  },
  {
    question: 'Which universities are supported?',
    answer: 'We are currently live at Lagos State University. We are actively expanding to the University of Lagos, OAU, and other institutions across Nigeria. Sign up and we will notify you when your university goes live.',
  },
  {
    question: 'How do I sign up?',
    answer: 'Simply click "Start Learning" on this page, enter your student details, select your university and faculty, and you are ready to go. Setup takes under three minutes.',
  },
  {
    question: 'Can my university partner with Unify?',
    answer: 'Absolutely. We welcome partnerships with universities and institutions. Reach out to us at partner@unify.africa or click the "Partner With Us" button — our team will be in touch within 48 hours.',
  },
  {
    question: 'How can I join the Unify team?',
    answer: 'We are a mission-driven team building for African students. If you believe in what we are building, we would love to hear from you. Send your story to team@unify.africa.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-24 lg:py-32" id="faq">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-brand-ink leading-tight">
            Questions? We have answers.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === i ? 'border-brand-green/30 bg-brand-green/4' : 'border-brand-surface bg-brand-cream hover:border-brand-green/20'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-semibold text-sm leading-snug pr-4 ${
                    openIndex === i ? 'text-brand-green' : 'text-brand-ink'
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    openIndex === i ? 'bg-brand-green text-white rotate-45' : 'bg-brand-surface text-brand-ink/50'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-ink/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
