const types = [
  {
    title: 'Fixed Rate',
    description:
      'Lock in your rate for the full term. Predictable payments and peace of mind — ideal if you plan to stay in your home long-term.',
    badge: 'Most popular',
  },
  {
    title: 'Variable Rate',
    description:
      'Rate moves with prime. Often lower to start and great if you expect rates to fall or plan to sell within a few years.',
    badge: 'Lower entry rate',
  },
  {
    title: 'HELOC',
    description:
      'Access your home equity as a revolving line of credit. Perfect for renovations, investments, or consolidating higher-interest debt.',
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
            We help you choose the right product — not just the lowest rate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {types.map((type) => (
            <div
              key={type.title}
              className="bg-white rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              <span className="inline-block text-xs font-semibold text-navy-700 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
                {type.badge}
              </span>
              <h3 className="font-display text-lg text-[#0d2049] font-bold mb-2">{type.title}</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MortgageTypes
