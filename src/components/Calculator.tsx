import { useEffect, useState } from 'react'

function formatCurrency(v: number) {
  return '$' + Math.round(v).toLocaleString('en-CA')
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
  const [amount, setAmount] = useState(500000)
  const [rate, setRate] = useState(5.24)
  const [years, setYears] = useState(25)
  const [result, setResult] = useState({ monthly: 0, totalPaid: 0, totalInterest: 0 })

  useEffect(() => {
    setResult(calcPayment(amount, rate, years))
  }, [amount, rate, years])

  const handleAmountChange = (val: number) => {
    setAmount(val)
  }

  const handleRateChange = (val: number) => {
    setRate(val)
  }

  const amountInRange = amount >= 50000 && amount <= 2000000
  const rateInRange = rate >= 0.5 && rate <= 10

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2">Free Tool</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Mortgage Payment Calculator</h2>
          <div className="gold-line mx-auto mt-4"></div>
          <p className="text-navy-600 mt-4">Estimate your monthly mortgage payment in seconds.</p>
        </div>

        <div className="bg-navy-50 rounded-2xl p-6 sm:p-10 border border-navy-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-2">Loan Amount</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-500 font-semibold">$</span>
                <input
                  type="number"
                  className="calc-input pl-8"
                  value={amount}
                  onChange={(e) => handleAmountChange(parseFloat(e.target.value) || 0)}
                  min={50000}
                  max={5000000}
                  step={10000}
                />
              </div>
              <input
                type="range"
                className="w-full mt-3"
                min={50000}
                max={2000000}
                step={10000}
                value={amountInRange ? amount : 500000}
                onChange={(e) => handleAmountChange(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>$50K</span>
                <span>$2M</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-2">Interest Rate (%)</label>
              <div className="relative">
                <input
                  type="number"
                  className="calc-input pr-8"
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

            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-2">Amortization (Years)</label>
              <select
                className="calc-input"
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

          <div className="bg-navy-900 rounded-xl px-6 py-8 text-center">
            <p className="text-navy-300 text-sm mb-1 font-medium">Estimated Monthly Payment</p>
            <div className="font-display text-5xl text-white font-bold mb-2">
              {formatCurrency(result.monthly)}/mo
            </div>
            <p className="text-navy-400 text-xs">
              Principal + Interest only. Taxes, insurance & CMHC (if applicable) not included.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-navy-400 text-xs mb-1">Total Interest Paid</div>
                <div className="text-white font-semibold">{formatCurrency(result.totalInterest)}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-navy-400 text-xs mb-1">Total Cost</div>
                <div className="text-white font-semibold">{formatCurrency(result.totalPaid)}</div>
              </div>
            </div>
            <a href="#form-section" className="btn-gold mt-6 inline-flex text-sm py-3 px-7">
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
