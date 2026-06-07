import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AudienceSelector from './components/AudienceSelector'
import LeadForm from './components/LeadForm'
import TrustSection from './components/TrustSection'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import type { AudienceType } from './types'

const audienceGoalMap: Record<AudienceType, string> = {
  'first-time': 'purchase',
  refinancing: 'renew',
  investment: 'invest',
}

function App() {
  const [preselectedGoal, setPreselectedGoal] = useState<string | null>(null)

  const handleAudienceSelect = (type: AudienceType) => {
    setPreselectedGoal(audienceGoalMap[type])
    setTimeout(() => {
      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <AudienceSelector onSelect={handleAudienceSelect} />
      <LeadForm preselectedGoal={preselectedGoal} />
      <TrustSection />
      <HowItWorks />
      <Calculator />
      <Footer />
    </>
  )
}

export default App
