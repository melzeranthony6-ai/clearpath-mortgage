import { useEffect, useState } from 'react'

interface LeadFormProps {
  preselectedGoal: string | null
}

const totalSteps = 4

function LeadForm({ preselectedGoal }: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showProgress, setShowProgress] = useState(true)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: '', email: '', phone: '', consent: false })
  const [stepError, setStepError] = useState('')

  useEffect(() => {
    if (preselectedGoal) {
      setSelectedOptions((prev) => ({ ...prev, goal: preselectedGoal }))
    }
  }, [preselectedGoal])

  const getProgressStepClass = (step: number) => {
    if (step < currentStep) return 'progress-step done'
    if (step === currentStep) return 'progress-step active'
    return 'progress-step pending'
  }

  const getConnectorStyle = (connectorIndex: number) => ({
    background: connectorIndex < currentStep ? 'linear-gradient(90deg,#e0a800,#efc34c)' : '#e2e8f0',
  })

  const handleOptionChange = (group: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [group]: value }))
    setStepError('')
  }

  const isOptionSelected = (group: string, value: string) => selectedOptions[group] === value

  const tryContinue = (fromStep: number) => {
    if (fromStep === 1 && !selectedOptions.goal) {
      setStepError('Please select a mortgage goal to continue.')
      return
    }
    if (fromStep === 2 && !selectedOptions.propval) {
      setStepError('Please select a property value to continue.')
      return
    }
    if (fromStep === 3 && !selectedOptions.employment) {
      setStepError('Please select an employment type to continue.')
      return
    }
    setStepError('')
    setCurrentStep(fromStep + 1)
  }

  const submitForm = async () => {
    if (!contact.name.trim() || !contact.email.trim() || !contact.phone.trim()) {
      alert('Please fill in all contact fields.')
      return
    }
    if (!contact.consent) {
      alert('Please confirm consent to proceed.')
      return
    }

    const nameParts = contact.name.trim().split(/\s+/)
    const firstName = nameParts[0] ?? ''
    const lastName = nameParts.slice(1).join(' ')

    const messageParts = [
      selectedOptions.propval && `Property value: ${selectedOptions.propval}`,
      selectedOptions.employment && `Employment: ${selectedOptions.employment}`,
    ].filter(Boolean)

    try {
      const response = await fetch('https://bermudai.app.n8n.cloud/webhook/clearpath-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: contact.email.trim(),
          phone: contact.phone.trim(),
          service: selectedOptions.goal ?? '',
          message: messageParts.join('; '),
        }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setShowProgress(false)
      setShowSuccess(true)
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  if (showSuccess) {
    return (
      <section id="form-section" className="py-16 sm:py-20 bg-navy-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Free Pre-Approval</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Apply in Under 2 Minutes</h2>
            <div className="gold-line mx-auto mt-4"></div>
            <p className="text-navy-600 mt-4 text-sm">
              No credit impact. No obligation. A mortgage advisor will contact you within 5 minutes.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden">
            <div className="px-8 pb-8">
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-navy-900 font-bold mb-3">You're all set!</h3>
                <p className="text-navy-700 text-base leading-relaxed mb-2">
                  Thank you, we have received your request and will be in touch within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form-section" className="py-16 sm:py-20 bg-navy-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Free Pre-Approval</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Apply in Under 2 Minutes</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4 text-sm">
            No credit impact. No obligation. A mortgage advisor will contact you within 5 minutes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden">
          {showProgress && (
            <div id="progress-bar-wrap" className="px-8 pt-8 pb-4">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((step, index) => (
                  <span key={step} className="contents">
                    <div className={getProgressStepClass(step)}>
                      {step < currentStep ? '✓' : step}
                    </div>
                    {index < totalSteps - 1 && (
                      <div className="h-0.5 flex-1 bg-navy-100" style={getConnectorStyle(index + 1)}></div>
                    )}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-navy-400 font-medium px-1">
                <span>Goal</span>
                <span>Property</span>
                <span>Employment</span>
                <span>Contact</span>
              </div>
            </div>
          )}

          <div className="px-8 pb-8">
            {currentStep === 1 && (
              <div>
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">What's your mortgage goal?</h3>
                <p className="text-navy-500 text-sm mb-6">We'll match you with the right lenders and products.</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'purchase', emoji: '🏠', title: 'Buy a Home', desc: 'Purchase a new property in Ontario' },
                    { value: 'renew', emoji: '🔄', title: 'Renew or Refinance', desc: 'Get a better rate on your existing mortgage' },
                    { value: 'invest', emoji: '📈', title: 'Investment Property', desc: 'Finance a rental or investment property' },
                    { value: 'heloc', emoji: '💳', title: 'Access Home Equity (HELOC)', desc: 'Use your equity for renovations or debt consolidation' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`option-btn flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-navy-400 transition-colors ${
                        isOptionSelected('goal', opt.value)
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-navy-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="goal"
                        value={opt.value}
                        className="hidden"
                        checked={isOptionSelected('goal', opt.value)}
                        onChange={() => handleOptionChange('goal', opt.value)}
                      />
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                        {opt.emoji}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm">{opt.title}</div>
                        <div className="text-xs text-navy-500 mt-0.5">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {stepError && <p className="text-sm text-red-600 mt-4">{stepError}</p>}
                <button className="btn-gold w-full mt-6 justify-center" onClick={() => tryContinue(1)}>
                  Continue →
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">
                  What's your estimated property value?
                </h3>
                <p className="text-navy-500 text-sm mb-6">
                  This helps us identify the right lenders and programs for you.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'under-400k', label: 'Under $400,000' },
                    { value: '400k-700k', label: '$400,000 – $700,000' },
                    { value: '700k-1m', label: '$700,000 – $1,000,000' },
                    { value: 'over-1m', label: 'Over $1,000,000' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`option-btn flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-navy-400 transition-colors ${
                        isOptionSelected('propval', opt.value)
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-navy-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="propval"
                        value={opt.value}
                        className="hidden"
                        checked={isOptionSelected('propval', opt.value)}
                        onChange={() => handleOptionChange('propval', opt.value)}
                      />
                      <div className="font-semibold text-navy-900 text-sm">{opt.label}</div>
                    </label>
                  ))}
                </div>
                {stepError && <p className="text-sm text-red-600 mt-4">{stepError}</p>}
                <div className="flex gap-3 mt-6">
                  <button
                    className="btn-navy flex-1"
                    onClick={() => {
                      setStepError('')
                      setCurrentStep(1)
                    }}
                  >
                    ← Back
                  </button>
                  <button className="btn-gold flex-1 justify-center" onClick={() => tryContinue(2)}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">What's your employment type?</h3>
                <p className="text-navy-500 text-sm mb-6">
                  We work with all income types — including self-employed Canadians.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'employed', emoji: '💼', title: 'Salaried / Employed', desc: 'T4 employee with regular paycheque' },
                    { value: 'self', emoji: '🧾', title: 'Self-Employed', desc: 'Business owner, contractor, or freelancer' },
                    { value: 'retired', emoji: '🏖️', title: 'Retired / Pension Income', desc: 'CPP, OAS, company pension' },
                    { value: 'other', emoji: '📋', title: 'Other Income Type', desc: 'Rental income, dividends, or blended' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`option-btn flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-navy-400 transition-colors ${
                        isOptionSelected('employment', opt.value)
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-navy-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="employment"
                        value={opt.value}
                        className="hidden"
                        checked={isOptionSelected('employment', opt.value)}
                        onChange={() => handleOptionChange('employment', opt.value)}
                      />
                      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 text-lg">
                        {opt.emoji}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm">{opt.title}</div>
                        <div className="text-xs text-navy-500 mt-0.5">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {stepError && <p className="text-sm text-red-600 mt-4">{stepError}</p>}
                <div className="flex gap-3 mt-6">
                  <button
                    className="btn-navy flex-1"
                    onClick={() => {
                      setStepError('')
                      setCurrentStep(2)
                    }}
                  >
                    ← Back
                  </button>
                  <button className="btn-gold flex-1 justify-center" onClick={() => tryContinue(3)}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">How should we reach you?</h3>
                <p className="text-navy-500 text-sm mb-6">
                  A licensed advisor will contact you within 5 minutes during business hours.
                </p>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Jane Smith"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="jane@email.com"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(416) 555-0100"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex items-start gap-2 mt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-0.5 w-4 h-4 accent-navy-700 cursor-pointer"
                      checked={contact.consent}
                      onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-xs text-navy-500 leading-relaxed cursor-pointer">
                      I consent to being contacted by a ClearPath Mortgage advisor. Your information is protected under
                      PIPEDA and will never be sold to third parties.
                    </label>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="btn-navy flex-1" onClick={() => setCurrentStep(3)}>
                    ← Back
                  </button>
                  <button className="btn-gold flex-1 justify-center" onClick={submitForm}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
