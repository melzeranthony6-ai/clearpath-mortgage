import { useState } from 'react'

const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#0ea5e9">
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
      '"As a first-time buyer in Mississauga, I was completely overwhelmed. ClearPath walked me through everything, from the FHSA to the land transfer rebate, and got me a rate 0.4% lower than my bank offered. I closed in 28 days."',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    name: 'Michael K.',
    location: 'Mississauga, ON · First Time Buyer',
  },
  {
    quote:
      '"I\'m self-employed and my bank kept declining me. ClearPath found a lender that understood my income structure and approved me within a week. The whole process was smooth and they explained every step. Highly recommend."',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    name: 'Sandra L.',
    location: 'Hamilton, ON · Self-Employed Refinance',
  },
  {
    quote:
      '"We were renewing our mortgage on a duplex in Ottawa and our bank wouldn\'t budge on rate. ClearPath got us 85 basis points lower through First National. That\'s saving us $340 a month. Unbelievable service."',
    photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
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

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3 mb-16">
          {lenders.map((lender) => (
            <div key={lender.name} className="flex items-center justify-center w-[96px] md:w-[104px] h-[48px] md:h-[52px] rounded-xl bg-[#0d2049] text-white shrink-0">
              <img
                src={lender.logo}
                alt={lender.name}
                className="max-h-[28px] md:max-h-[30px] max-w-[72px] md:max-w-[80px] object-contain bg-white"
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
          <p className="text-navy-800 font-semibold">4.9 out of 5, based on 380+ client reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-full overflow-hidden">
            <img
              src={current.photo}
              alt={current.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
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
