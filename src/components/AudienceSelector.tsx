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
      "Step-by-step guidance from pre-approval to keys in hand. We'll walk you through every Canada-specific incentive available.",
    tags: 'FHSA · RRSP Plan · Land Transfer Rebate →',
  },
  {
    type: 'refinancing',
    title: 'Refinancing',
    description:
      "Tap into your home equity or lower your monthly payments. We'll find you a better rate than your bank is offering.",
    tags: 'Lower Payments · Debt Consolidation →',
  },
  {
    type: 'investment',
    title: 'Property Investment',
    description:
      'Grow your Canadian portfolio with competitive rental property financing. Access lenders that specialize in investor clients.',
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
    <section className="py-16 sm:py-20 bg-white" id="audience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Who We Help</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">What Brings You Here?</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4 max-w-xl mx-auto">
            Select your situation and we'll show you how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {audiences.map((audience) => (
            <button
              key={audience.type}
              type="button"
              className={`audience-card p-6 text-center${activeType === audience.type ? ' active' : ''}`}
              onClick={() => handleSelect(audience.type)}
            >
              <h3 className="font-display text-lg text-navy-900 font-bold mb-2">{audience.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{audience.description}</p>
              <div className="mt-4 text-xs font-semibold text-gold-600 tracking-wide">{audience.tags}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudienceSelector
