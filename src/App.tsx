import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AudienceSelector from './components/AudienceSelector'
import LeadForm from './components/LeadForm'
import TrustSection from './components/TrustSection'
import MeetYourAdvisor from './components/MeetYourAdvisor'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import MortgageTypes from './components/MortgageTypes'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
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
    <div className="bg-white text-navy-900 min-h-screen pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <AudienceSelector onSelect={handleAudienceSelect} />
      <HowItWorks />
      <Calculator />
      <MortgageTypes />
      <MeetYourAdvisor />
      <TrustSection />
      <LeadForm preselectedGoal={preselectedGoal} />
      <FAQ />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
