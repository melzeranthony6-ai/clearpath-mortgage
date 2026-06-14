const types = [
  {
    title: 'Fixed Rate',
    description:
      'Lock in your rate for the full term. Predictable payments and peace of mind — ideal if you plan to stay in your home long-term.',
    badge: 'Most popular',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Variable Rate',
    description:
      'Rate moves with prime. Often lower to start and great if you expect rates to fall or plan to sell within a few years.',
    badge: 'Lower entry rate',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'HELOC',
    description:
      'Access your home equity as a revolving line of credit. Perfect for renovations, investments, or consolidating higher-interest debt.',
    badge: 'Flexible access',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
]

function MortgageTypes() {
  return (
    <section id="mortgage-types" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Products</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Mortgage Options We Compare</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4 max-w-xl mx-auto">
            We help you choose the right product — not just the lowest rate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {types.map((type) => (
            <div
              key={type.title}
              className="bg-navy-50 rounded-2xl border border-navy-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                {type.icon}
              </div>
              <span className="inline-block text-xs font-semibold text-gold-700 bg-gold-100 px-2.5 py-1 rounded-full mb-3">
                {type.badge}
              </span>
              <h3 className="font-display text-lg text-navy-900 font-bold mb-2">{type.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MortgageTypes
