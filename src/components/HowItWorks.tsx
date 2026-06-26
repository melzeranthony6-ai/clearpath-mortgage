const steps = [
  {
    num: 1,
    title: 'Apply in Minutes',
    description:
      'Fill out our short form in under 2 minutes. No documents needed yet, no branch visit, and no impact on your credit score.',
  },
  {
    num: 2,
    title: 'Get Approved',
    description:
      "We send your file to 50+ lenders and come back with your best rate. You don't have to call anyone or negotiate anything.",
  },
  {
    num: 3,
    title: 'Get Funded',
    description:
      'We handle everything between approval and closing. You show up, sign, and get your keys.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-semibold text-sm tracking-widest uppercase mb-2">Simple Process</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0d2049]">Three Steps to Your New Mortgage</h2>
          <div className="section-line mx-auto mt-4"></div>
          <p className="text-[#4a5568] mt-4 max-w-xl mx-auto">
            Most people think getting a mortgage is complicated. Here's how we make it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <div key={step.num} className="process-card relative z-10">
              <h3 className="font-display text-lg text-[#0d2049] font-bold mb-3 text-left">{step.num}. {step.title}</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
