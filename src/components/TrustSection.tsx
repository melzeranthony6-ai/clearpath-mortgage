const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#e0a800">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const lenders = [
  { name: 'RBC', logo: '/lenders/rbc.svg' },
  { name: 'TD Bank', logo: '/lenders/td.svg' },
  { name: 'Scotiabank', logo: '/lenders/scotiabank.svg' },
  { name: 'BMO', logo: '/lenders/bmo.svg' },
  { name: 'CIBC', logo: '/lenders/cibc.svg' },
  { name: 'First National', logo: '/lenders/first-national.svg' },
  { name: 'MCAP', logo: '/lenders/mcap.svg' },
  { name: 'Merix', logo: '/lenders/merix.svg' },
]

const testimonials = [
  {
    quote:
      '"As a first-time buyer in Mississauga, I was completely overwhelmed. ClearPath walked me through everything — the FHSA, the land transfer rebate — and got me a rate 0.4% lower than my bank offered. I closed in 28 days."',
    photo: '/images/testimonial-1.jpg',
    name: 'Michael K.',
    location: 'Mississauga, ON · First Time Buyer',
  },
  {
    quote:
      '"I\'m self-employed and my bank kept declining me. ClearPath found a lender that understood my income structure and approved me within a week. The whole process was smooth and they explained every step. Highly recommend."',
    photo: '/images/testimonial-2.jpg',
    name: 'Sandra L.',
    location: 'Hamilton, ON · Self-Employed Refinance',
  },
  {
    quote:
      '"We were renewing our mortgage on a duplex in Ottawa and our bank wouldn\'t budge on rate. ClearPath got us 85 basis points lower through First National. That\'s saving us $340 a month. Unbelievable service."',
    photo: '/images/testimonial-3.jpg',
    name: 'David & Rachel T.',
    location: 'Ottawa, ON · Investment Property',
  },
]

function TrustSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Trusted Partners</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">We Work With Canada's Top Lenders</h2>
          <div className="gold-line mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {lenders.map((lender) => (
            <div key={lender.name} className="lender-logo-box">
              <img
                src={lender.logo}
                alt={lender.name}
                className="h-6 w-auto max-w-[100px] object-contain opacity-70 grayscale"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={24} />
            ))}
          </div>
          <p className="text-navy-800 font-semibold">4.9 out of 5 — Based on 380+ client reviews</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-navy-700 text-sm leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-navy-100"
                />
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-xs text-navy-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
