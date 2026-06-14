import { useEffect, useState } from 'react'

interface LeadFormProps {
  preselectedGoal: string | null
}

const totalSteps = 4

const GoalIcon = ({ type }: { type: string }) => {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: '#1a3f7f', strokeWidth: 1.8 }

  switch (type) {
    case 'purchase':
      return (
        <svg {...props}>
          <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" />
        </svg>
      )
    case 'renew':
      return (
        <svg {...props}>
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
        </svg>
      )
    case 'invest':
      return (
        <svg {...props}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    case 'heloc':
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    default:
      return null
  }
}

const EmploymentIcon = ({ type }: { type: string }) => {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#1a3f7f', strokeWidth: 1.8 }

  switch (type) {
    case 'employed':
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      )
    case 'self':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      )
    case 'retired':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        </svg>
      )
    case 'other':
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
      )
    default:
      return null
  }
}

function LeadForm({ preselectedGoal }: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showProgress, setShowProgress] = useState(true)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: '', email: '', phone: '', consent: false })
  const [stepError, setStepError] = useState('')
  const [contactError, setContactError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const goToStep = (step: number) => {
    setStepError('')
    setCurrentStep(step)
  }

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
      setContactError('Please fill in all contact fields.')
      return
    }
    if (!contact.consent) {
      setContactError('Please confirm consent to proceed.')
      return
    }

    setContactError('')
    setIsSubmitting(true)

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
      setContactError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactIntro =
    'No credit impact. No obligation. A mortgage advisor will contact you within 5 minutes during business hours.'

  if (showSuccess) {
    return (
      <section id="form-section" className="py-16 sm:py-20 bg-navy-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Free Pre-Approval</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Apply in Under 2 Minutes</h2>
            <div className="gold-line mx-auto mt-4"></div>
            <p className="text-navy-600 mt-4 text-sm">{contactIntro}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden">
            <div className="px-8 pb-8">
              <div className="text-center py-8 form-step-enter">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-navy-900 font-bold mb-3">You're all set!</h3>
                <p className="text-navy-700 text-base leading-relaxed mb-2">
                  Thank you — we received your request. A licensed advisor will contact you within 5 minutes during
                  business hours.
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
          <p className="text-navy-600 mt-4 text-sm">{contactIntro}</p>
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
              <div key="step-1" className="form-step-enter">
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">What's your mortgage goal?</h3>
                <p className="text-navy-500 text-sm mb-6">We'll match you with the right lenders and products.</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'purchase', title: 'Buy a Home', desc: 'Purchase a new property in Ontario' },
                    { value: 'renew', title: 'Renew or Refinance', desc: 'Get a better rate on your existing mortgage' },
                    { value: 'invest', title: 'Investment Property', desc: 'Finance a rental or investment property' },
                    {
                      value: 'heloc',
                      title: 'Access Home Equity (HELOC)',
                      desc: 'Use your equity for renovations or debt consolidation',
                    },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`option-btn flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-navy-400 transition-colors ${
                        isOptionSelected('goal', opt.value) ? 'border-gold-500 bg-gold-50' : 'border-navy-100'
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
                        <GoalIcon type={opt.value} />
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
              <div key="step-2" className="form-step-enter">
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
                        isOptionSelected('propval', opt.value) ? 'border-gold-500 bg-gold-50' : 'border-navy-100'
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
                  <button className="btn-navy flex-1" onClick={() => goToStep(1)}>
                    ← Back
                  </button>
                  <button className="btn-gold flex-1 justify-center" onClick={() => tryContinue(2)}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div key="step-3" className="form-step-enter">
                <h3 className="font-display text-xl text-navy-900 font-bold mb-1">What's your employment type?</h3>
                <p className="text-navy-500 text-sm mb-6">
                  We work with all income types — including self-employed Canadians.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'employed', title: 'Salaried / Employed', desc: 'T4 employee with regular paycheque' },
                    { value: 'self', title: 'Self-Employed', desc: 'Business owner, contractor, or freelancer' },
                    { value: 'retired', title: 'Retired / Pension Income', desc: 'CPP, OAS, company pension' },
                    { value: 'other', title: 'Other Income Type', desc: 'Rental income, dividends, or blended' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`option-btn flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-navy-400 transition-colors ${
                        isOptionSelected('employment', opt.value) ? 'border-gold-500 bg-gold-50' : 'border-navy-100'
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
                      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <EmploymentIcon type={opt.value} />
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
                  <button className="btn-navy flex-1" onClick={() => goToStep(2)}>
                    ← Back
                  </button>
                  <button className="btn-gold flex-1 justify-center" onClick={() => tryContinue(3)}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div key="step-4" className="form-step-enter">
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
                      onChange={(e) => {
                        setContact({ ...contact, name: e.target.value })
                        setContactError('')
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="jane@email.com"
                      value={contact.email}
                      onChange={(e) => {
                        setContact({ ...contact, email: e.target.value })
                        setContactError('')
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(416) 847-2931"
                      value={contact.phone}
                      onChange={(e) => {
                        setContact({ ...contact, phone: e.target.value })
                        setContactError('')
                      }}
                    />
                  </div>
                  <div className="flex items-start gap-2 mt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-0.5 w-4 h-4 accent-navy-700 cursor-pointer"
                      checked={contact.consent}
                      onChange={(e) => {
                        setContact({ ...contact, consent: e.target.checked })
                        setContactError('')
                      }}
                    />
                    <label htmlFor="consent" className="text-xs text-navy-500 leading-relaxed cursor-pointer">
                      I consent to being contacted by a ClearPath Mortgage advisor. Your information is protected under
                      PIPEDA and will never be sold to third parties.
                    </label>
                  </div>
                </div>
                {contactError && <p className="text-sm text-red-600 mt-4">{contactError}</p>}
                <div className="flex gap-3 mt-6">
                  <button className="btn-navy flex-1" onClick={() => goToStep(3)} disabled={isSubmitting}>
                    ← Back
                  </button>
                  <button
                    className="btn-gold flex-1 justify-center"
                    onClick={submitForm}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Submit Application
                      </>
                    )}
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
