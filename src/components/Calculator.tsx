import { useEffect, useMemo, useState } from 'react'

function formatCurrency(v: number) {
  return '$' + Math.round(v).toLocaleString('en-CA')
}

function formatAmountInput(v: number) {
  return Math.round(v).toLocaleString('en-CA')
}

function parseAmountInput(raw: string) {
  const digits = raw.replace(/\D/g, '')
  return digits ? parseInt(digits, 10) : 0
}

function calcPayment(amount: number, annualRate: number, years: number) {
  const r = Math.pow(1 + annualRate / 200, 1 / 6) - 1
  const n = years * 12

  let monthly: number
  let totalPaid: number
  let totalInterest: number

  if (annualRate === 0) {
    monthly = amount / n
    totalPaid = amount
    totalInterest = 0
  } else {
    monthly = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    totalPaid = monthly * n
    totalInterest = totalPaid - amount
  }

  return { monthly, totalPaid, totalInterest }
}

function Calculator() {
  const [homePrice, setHomePrice] = useState(625000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [rate, setRate] = useState(5.24)
  const [years, setYears] = useState(25)

  const loanAmount = useMemo(
    () => Math.round(homePrice * (1 - downPaymentPercent / 100)),
    [homePrice, downPaymentPercent]
  )

  const result = useMemo(() => calcPayment(loanAmount, rate, years), [loanAmount, rate, years])

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val)
  }

  const handleRateChange = (val: number) => {
    setRate(val)
  }

  const homePriceInRange = homePrice >= 100000 && homePrice <= 2500000
  const rateInRange = rate >= 0.5 && rate <= 10
  const downPaymentInRange = downPaymentPercent >= 5 && downPaymentPercent <= 35

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white overflow-x-hidden sm:overflow-x-visible">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Free Tool</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Mortgage Payment Calculator</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4">Estimate your monthly mortgage payment in seconds.</p>
        </div>

        <div className="bg-navy-50 rounded-2xl p-4 sm:p-10 border border-navy-100 w-full min-w-0 max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 w-full min-w-0">
            <div className="w-full min-w-0">
              <label className="block text-sm font-semibold text-navy-800 mb-2">Home Price</label>
              <div className="flex w-full min-w-0 rounded-lg border-[1.5px] border-[#d1d5db] bg-white overflow-hidden focus-within:border-[#2d559a] focus-within:shadow-[0_0_0_3px_rgba(45,85,154,0.12)]">
                <span className="flex items-center px-3.5 text-navy-500 font-semibold bg-navy-50 border-r border-[#d1d5db] shrink-0">
                  $
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  className="flex-1 px-3.5 py-2.5 text-[15px] outline-none bg-white min-w-0"
                  value={formatAmountInput(homePrice)}
                  onChange={(e) => handleHomePriceChange(parseAmountInput(e.target.value))}
                  aria-label="Home price"
                />
              </div>
              <input
                type="range"
                className="w-full mt-3"
                min={100000}
                max={2500000}
                step={25000}
                value={homePriceInRange ? homePrice : 625000}
                onChange={(e) => handleHomePriceChange(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>$100K</span>
                <span>$2.5M</span>
              </div>
            </div>

            <div className="w-full min-w-0">
              <label className="block text-sm font-semibold text-navy-800 mb-2">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="flex w-full min-w-0 rounded-lg border-[1.5px] border-[#d1d5db] bg-white px-3.5 py-2.5 text-[15px] text-navy-700 font-semibold">
                {formatCurrency(homePrice * (downPaymentPercent / 100))}
              </div>
              <input
                type="range"
                className="w-full mt-3"
                min={5}
                max={35}
                step={1}
                value={downPaymentInRange ? downPaymentPercent : 20}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value, 10))}
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>5%</span>
                <span>35%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 w-full min-w-0">
            <div className="w-full min-w-0">
              <label className="block text-sm font-semibold text-navy-800 mb-2">Loan Amount</label>
              <div className="calc-input bg-navy-100 border-navy-200 text-navy-800 font-semibold">{formatCurrency(loanAmount)}</div>
            </div>

            <div className="w-full min-w-0">
              <label className="block text-sm font-semibold text-navy-800 mb-2">Interest Rate (%)</label>
              <div className="relative w-full min-w-0">
                <input
                  type="number"
                  className="calc-input pr-8 min-w-0 w-full"
                  value={rate}
                  onChange={(e) => handleRateChange(parseFloat(e.target.value) || 0)}
                  min={0.5}
                  max={15}
                  step={0.05}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-500 font-semibold">%</span>
              </div>
              <input
                type="range"
                className="w-full mt-3"
                min={0.5}
                max={10}
                step={0.05}
                value={rateInRange ? rate : 5.24}
                onChange={(e) => handleRateChange(parseFloat(parseFloat(e.target.value).toFixed(2)))}
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>0.5%</span>
                <span>10%</span>
              </div>
            </div>

            <div className="w-full min-w-0">
              <label className="block text-sm font-semibold text-navy-800 mb-2">Amortization (Years)</label>
              <select
                className="calc-input w-full min-w-0"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value) || 25)}
              >
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={25}>25 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>
          </div>

          <div className="bg-navy-900 rounded-xl px-4 py-6 sm:px-6 sm:py-8 text-center w-full min-w-0 max-w-full">
            <p className="text-navy-300 text-sm mb-1 font-medium">Estimated Monthly Payment</p>
            <div className="font-display text-3xl sm:text-5xl text-white font-bold mb-2 break-words">
              {formatCurrency(result.monthly)}/mo
            </div>
            <p className="text-navy-400 text-xs">
              Principal + Interest only. Taxes, insurance & CMHC (if applicable) not included.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 text-sm w-full min-w-0">
              <div className="bg-white/5 rounded-lg p-3 min-w-0">
                <div className="text-navy-400 text-xs mb-1">Total Interest Paid</div>
                <div className="text-white font-semibold break-words">{formatCurrency(result.totalInterest)}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 min-w-0">
                <div className="text-navy-400 text-xs mb-1">Total Cost</div>
                <div className="text-white font-semibold break-words">{formatCurrency(result.totalPaid)}</div>
              </div>
            </div>
            <a href="#form-section" className="btn-gold mt-6 inline-flex text-sm py-3 px-7 max-w-full">
              Get My Best Rate →
            </a>
          </div>

          <p className="text-center text-xs text-navy-400 mt-4">
            * This calculator provides an estimate only. Contact us for a personalized rate quote. OAC.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Calculator
