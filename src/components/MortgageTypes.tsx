const types = [
  {
    title: 'Fixed Rate',
    description:
      'Your rate stays the same no matter what happens to the market. Best if you want predictable payments and plan to stay put.',
    badge: 'Most popular',
  },
  {
    title: 'Variable Rate',
    description:
      'Starts lower than fixed and can save you money if rates drop. Makes sense if you have flexibility and a shorter timeline.',
    badge: 'Lower entry rate',
  },
  {
    title: 'HELOC',
    description:
      "Use the equity you've already built to fund renovations, pay off debt, or invest. You only pay interest on what you actually use.",
    badge: 'Flexible access',
  },
]

function MortgageTypes() {
  return (
    <section id="mortgage-types" className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#6b7280] font-semibold text-sm tracking-widest uppercase mb-2">Products</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0d2049]">Mortgage Options We Compare</h2>
          <div className="section-line mx-auto mt-4"></div>
          <p className="text-[#4a5568] mt-4 max-w-xl mx-auto">
            The right mortgage isn't always the lowest rate. We help you understand what fits your situation and why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {types.map((type) => (
            <div
              key={type.title}
              className="bg-[#0d2049] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              <span className="inline-block text-xs font-semibold text-[#0d2049] bg-[#0ea5e9] px-2.5 py-1 rounded-full mb-3">
                {type.badge}
              </span>
              <h3 className="font-display text-lg text-white font-bold mb-2">{type.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MortgageTypes
