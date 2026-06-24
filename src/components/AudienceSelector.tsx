import { useState } from 'react'
import type { AudienceType } from '../types'

interface AudienceSelectorProps {
  onSelect: (type: AudienceType) => void
}

const audiences: {
  type: AudienceType
  title: string
  description: string
  tags: string
}[] = [
  {
    type: 'first-time',
    title: 'First Time Buyer',
    description:
      "Overwhelmed by the process? We break it down step by step, from your first question to keys in hand, and make sure you don't leave money on the table.",
    tags: 'FHSA · RRSP Plan · Land Transfer Rebate →',
  },
  {
    type: 'refinancing',
    title: 'Refinancing',
    description:
      "Your bank won't tell you when a better rate exists. We check 50+ lenders on your behalf and tell you exactly how much you could save.",
    tags: 'Lower Payments · Debt Consolidation →',
  },
  {
    type: 'investment',
    title: 'Property Investment',
    description:
      'Most lenders make it hard to finance investment properties. We work with lenders who specialize in exactly this and know how to structure your deal.',
    tags: 'Rental Properties · BRRRR · Multi-Unit →',
  },
]

function AudienceSelector({ onSelect }: AudienceSelectorProps) {
  const [activeType, setActiveType] = useState<AudienceType | null>(null)

  const handleSelect = (type: AudienceType) => {
    setActiveType(type)
    onSelect(type)
  }

  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white" id="audience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-semibold text-sm tracking-widest uppercase mb-2">Who We Help</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0d2049]">What Brings You Here?</h2>
          <div className="section-line mx-auto mt-4"></div>
          <p className="text-[#4a5568] mt-4 max-w-xl mx-auto">
            Whether you're buying, refinancing, or self-employed, we've handled situations exactly like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
          {audiences.map((audience) => (
            <button
              key={audience.type}
              type="button"
              className={`audience-card w-full h-full flex flex-col justify-start items-start p-4 text-left !bg-[#0d2049] border-0${activeType === audience.type ? ' active' : ''}`}
              onClick={() => handleSelect(audience.type)}
            >
              <h3 className="font-display text-lg text-white font-bold mb-1 text-left min-h-10 leading-tight">{audience.title}</h3>
              <p className="text-gray-300 text-base leading-snug text-left flex-1">{audience.description}</p>
              <div className="mt-auto pt-2 text-left">
                <span
                  style={{
                    backgroundColor: '#e0a800',
                    color: '#0d2049',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '11px',
                  }}
                >
                  {audience.tags}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudienceSelector
