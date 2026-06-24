import { useState } from 'react'

const faqs = [
  {
    question: 'Does applying affect my credit score?',
    answer:
      'No. Our initial form is a soft inquiry only. A hard credit check only happens later, when you choose to proceed with a specific lender, and we always tell you before it happens.',
  },
  {
    question: 'How is a mortgage broker different from my bank?',
    answer:
      'Your bank shows you one product, theirs. We shop 50+ lenders and bring you the best option for your situation. We work for you, not the lender.',
  },
  {
    question: 'Can self-employed people get approved?',
    answer:
      'Yes. We work with lenders who understand self-employed income and know how to structure your file. This is one of our most common approvals.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'Pre-approval can happen within 24 to 48 hours. Full approval timelines depend on the lender and your situation, but we keep you updated at every step.',
  },
  {
    question: 'What documents will I need?',
    answer:
      'For the initial application, nothing. Once we move forward, we\'ll send you a simple list based on your specific situation. No guessing.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-20 bg-navy-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#6b7280] font-semibold text-sm tracking-widest uppercase mb-2">Common Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Frequently Asked Questions</h2>
          <p className="text-navy-600 mt-4">Everything you need to know before you apply.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-navy-100 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-navy-50/50 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy-900 text-sm sm:text-base">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-navy-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-[#374151] leading-relaxed border-t border-navy-50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-navy-600 text-sm mb-4">Still have questions?</p>
          <a href="#form-section" className="btn-gold inline-flex text-sm">
            Talk to an Advisor →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
