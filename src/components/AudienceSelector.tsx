import { useState } from 'react'
import type { AudienceType } from '../types'

interface AudienceSelectorProps {
  onSelect: (type: AudienceType) => void
}

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
          <div
            className={`audience-card${activeType === 'first-time' ? ' active' : ''}`}
            onClick={() => handleSelect('first-time')}
          >
            <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
                <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" />
              </svg>
            </div>
            <h3 className="font-display text-lg text-navy-900 font-bold mb-2">First Time Buyer</h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              Step-by-step guidance from pre-approval to keys in hand. We'll walk you through every Ontario-specific
              incentive available.
            </p>
            <div className="mt-4 text-xs font-semibold text-gold-600 tracking-wide">
              FHSA · RRSP Plan · Land Transfer Rebate →
            </div>
          </div>

          <div
            className={`audience-card${activeType === 'refinancing' ? ' active' : ''}`}
            onClick={() => handleSelect('refinancing')}
          >
            <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
              </svg>
            </div>
            <h3 className="font-display text-lg text-navy-900 font-bold mb-2">Refinancing</h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              Tap into your home equity or lower your monthly payments. We'll find you a better rate than your bank is
              offering.
            </p>
            <div className="mt-4 text-xs font-semibold text-gold-600 tracking-wide">
              Lower Payments · Debt Consolidation →
            </div>
          </div>

          <div
            className={`audience-card${activeType === 'investment' ? ' active' : ''}`}
            onClick={() => handleSelect('investment')}
          >
            <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="1.8">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <polyline points="7 10 12 7 15 9 21 6" />
              </svg>
            </div>
            <h3 className="font-display text-lg text-navy-900 font-bold mb-2">Property Investment</h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              Grow your Ontario portfolio with competitive rental property financing. Access lenders that specialize in
              investor clients.
            </p>
            <div className="mt-4 text-xs font-semibold text-gold-600 tracking-wide">
              Rental Properties · BRRRR · Multi-Unit →
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudienceSelector
