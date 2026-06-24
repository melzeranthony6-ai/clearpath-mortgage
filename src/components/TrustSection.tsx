import { useState } from 'react'

const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#e0a800">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const lenders = [
  { name: 'RBC', logo: '/lenders/rbc.svg' },
  { name: 'TD Bank', logo: '/lenders/td.png' },
  { name: 'Scotiabank', logo: '/lenders/scotiabank.png' },
  { name: 'BMO', logo: '/lenders/bmo.png' },
  { name: 'CIBC', logo: '/lenders/cibc.png' },
  { name: 'First National', logo: '/lenders/first-national.png' },
  { name: 'MCAP', logo: '/lenders/mcap.png' },
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
  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]

  const goPrev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#6b7280] font-semibold text-sm tracking-widest uppercase mb-2">Trusted Partners</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">We Work With Canada's Top Lenders</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {lenders.map((lender) => (
            <div key={lender.name} className="flex items-center justify-center w-[128px] h-[68px] rounded-xl bg-[#0d2049] text-white shrink-0">
              <img
                src={lender.logo}
                alt={lender.name}
                className="max-h-[40px] max-w-[96px] object-contain bg-white"
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

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
          <div className="bg-[#0d2049] flex items-center justify-center p-10 sm:p-14">
            <h3 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight text-center md:text-left">
              Real clients.
              <br />
              Real results.
            </h3>
          </div>

          <div className="bg-white p-10 sm:p-14 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-display text-6xl text-gray-200 leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed -mt-4 mb-8">{current.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <div className="font-semibold text-[#0d2049] text-sm">{current.name}</div>
                  <div className="text-xs text-gray-500">{current.location}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0d2049] hover:bg-gray-50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0d2049] hover:bg-gray-50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <span className="text-xs text-gray-400 ml-2">
                {activeIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
