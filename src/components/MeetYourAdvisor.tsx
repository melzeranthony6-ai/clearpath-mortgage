function MeetYourAdvisor() {
  const bullets = [
    '15+ years getting approvals the banks said no to',
    'Works for you, not the lender, no hidden incentives',
    'Built a reputation on getting self-employed clients approved',
  ]

  return (
    <section id="advisor" className="py-8 sm:py-12 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-navy-100 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative min-h-[280px] md:min-h-0">
              <img
                src="/images/advisor.jpg"
                alt="James Morrison, Senior Mortgage Advisor"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent md:hidden" />
            </div>

            <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-[#6b7280] font-semibold text-sm tracking-widest uppercase mb-2">Your Advisor</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-1">Meet James Morrison</h2>
              <p className="text-navy-600 font-medium text-sm mb-6">
                Senior Mortgage Advisor · FSRA Licensed · Toronto, ON
              </p>
              <div className="gold-line mb-6" />

              <ul className="space-y-3 mb-8">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-navy-700 text-sm">
                    <svg
                      className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a href="#form-section" className="btn-gold inline-flex self-start text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92z" />
                </svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetYourAdvisor
