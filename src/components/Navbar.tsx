import { useEffect, useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm${scrolled ? ' shadow-md' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
                fill="#e0a800"
              />
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-display font-bold text-navy-900 text-lg tracking-tight">ClearPath</span>
            <span className="block text-[10px] font-body text-navy-500 tracking-widest uppercase">Mortgage</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-navy-700">
          <a href="#how-it-works" className="hover:text-navy-900 transition-colors">
            How It Works
          </a>
          <a href="#calculator" className="hover:text-navy-900 transition-colors">
            Calculator
          </a>
          <a href="#testimonials" className="hover:text-navy-900 transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-navy-900 transition-colors">
            FAQ
          </a>
          <a href="#form-section" className="hover:text-navy-900 transition-colors">
            Apply
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 font-semibold text-navy-700 hover:text-navy-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>

        <a href="#form-section" className="btn-gold text-sm py-2.5 px-5 hidden sm:inline-flex">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Get Pre-Approved
        </a>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-navy-50 ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="2.5">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-white border-t border-navy-100 px-4 pb-4`}>
        <div className="flex flex-col gap-3 pt-4 text-sm font-medium text-navy-700">
          <a href="#how-it-works" onClick={closeMobileMenu} className="py-2 border-b border-navy-50">
            How It Works
          </a>
          <a href="#calculator" onClick={closeMobileMenu} className="py-2 border-b border-navy-50">
            Calculator
          </a>
          <a href="#testimonials" onClick={closeMobileMenu} className="py-2 border-b border-navy-50">
            Reviews
          </a>
          <a href="#faq" onClick={closeMobileMenu} className="py-2 border-b border-navy-50">
            FAQ
          </a>
          <a href="#form-section" onClick={closeMobileMenu} className="btn-gold text-center mt-2">
            Get Pre-Approved
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
