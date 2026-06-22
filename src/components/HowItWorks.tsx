const steps = [
  {
    num: 1,
    title: 'Apply in Minutes',
    description:
      'Complete our 4-step online form. No paperwork, no branch visit. Takes under 2 minutes and has no impact on your credit score.',
    badge: 'No credit check',
  },
  {
    num: 2,
    title: 'Get Approved',
    description:
      'Your dedicated advisor shops your file across 50+ lenders — banks, credit unions, and monoline lenders — to find your lowest rate.',
    badge: '50+ lenders compared',
  },
  {
    num: 3,
    title: 'Get Funded',
    description:
      'We coordinate with your lawyer and lender from approval to close. Your keys — or funds — arrive on time, every time.',
    badge: 'End-to-end support',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Simple Process</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Three Steps to Your New Mortgage</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4 max-w-xl mx-auto">
            We've helped over 1,200 Canadian families navigate the mortgage process. Here's how simple we make it.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-10 border border-navy-100 shadow-md">
          <img
            src="/images/how-it-works.jpg"
            alt="Mortgage advisor reviewing documents with clients"
            className="w-full h-48 sm:h-64 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          <div className="hidden sm:block absolute top-[44px] left-[calc(33%-8px)] right-[calc(33%-8px)] h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 z-0"></div>

          {steps.map((step) => (
            <div key={step.num} className="process-card relative z-10">
              <div className="process-num">{step.num}</div>
              <h3 className="font-display text-lg text-navy-900 font-bold mb-3">{step.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
              <div className="mt-4 inline-block text-xs bg-navy-50 text-navy-700 font-semibold px-3 py-1.5 rounded-full border border-navy-100">
                {step.badge}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#form-section" className="btn-gold inline-flex">
            Start My Application →
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
