import { useEffect, useState } from 'react'

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18 gap-2">
        <a href="#" className="flex items-center gap-2 md:gap-3 group shrink-0 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shadow shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
                fill="#e0a800"
              />
            </svg>
          </div>
          <div className="leading-none min-w-0">
            <span className="font-display font-bold text-navy-900 text-base md:text-lg tracking-tight">ClearPath</span>
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
          <a href="#form-section" className="hover:text-navy-900 transition-colors">
            Apply
          </a>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <a
            href="#form-section"
            className="btn-gold inline-flex items-center whitespace-nowrap gap-1 text-[10px] leading-tight py-1 px-2 sm:text-xs sm:py-1.5 sm:px-2.5 md:text-sm md:py-2.5 md:px-5 md:gap-2"
          >
            <svg
              className="shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-[15px] md:h-[15px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Get Pre-Approved
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-50 shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3f7f" strokeWidth="2.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
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
          <a href="#form-section" onClick={closeMobileMenu} className="btn-gold text-center mt-2">
            Get Pre-Approved
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
