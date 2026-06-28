import { useEffect, useRef, useState } from 'react'

const stepIcons = [
  <svg key="clipboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  <svg key="badge" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  <svg key="key" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/></svg>,
]

const steps = [
  {
    num: 1,
    title: 'Apply in Minutes',
    description:
      'Fill out our short form in under 2 minutes. No documents needed yet, no branch visit, and no impact on your credit score.',
  },
  {
    num: 2,
    title: 'Get Approved',
    description:
      "We send your file to 50+ lenders and come back with your best rate. You don't have to call anyone or negotiate anything.",
  },
  {
    num: 3,
    title: 'Get Funded',
    description:
      'We handle everything between approval and closing. You show up, sign, and get your keys.',
  },
]

const STAGGER_DELAYS = [0, 150, 300]

function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, index) => {
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, steps[index].num]))
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-semibold text-sm tracking-widest uppercase mb-2">Simple Process</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0d2049]">Three Steps to Your New Mortgage</h2>
          <div className="section-line mx-auto mt-4"></div>
          <p className="text-[#4a5568] mt-4 max-w-xl mx-auto">
            Most people think getting a mortgage is complicated. Here's how we make it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const isVisible = visibleSteps.has(step.num)

            return (
              <div
                key={step.num}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className={`process-card relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '600ms',
                  transitionTimingFunction: 'ease-out',
                  transitionDelay: `${STAGGER_DELAYS[index]}ms`,
                }}
              >
                <h3 className="font-display text-lg text-[#0d2049] font-bold mb-3 text-left flex items-center gap-2">
                  {stepIcons[index]}
                  {step.num}. {step.title}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed text-left">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
