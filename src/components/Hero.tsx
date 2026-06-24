function Hero() {
  return (
    <section className="bg-[#F8F9FA] pt-28 pb-36 sm:pt-36 sm:pb-44 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0d2049] leading-tight mb-5 fade-up fade-up-delay-1">
              Your Best Rate.
              <br />
              <span className="text-[#0d2049]">Your Home. Faster.</span>
            </h1>

            <p className="text-[#4a5568] text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed fade-up fade-up-delay-2">
              We shop over 50 lenders so you don't have to. Whether you're buying your first home in Canada or
              renewing your mortgage, ClearPath gets you approved — and in your home — with confidence.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-[#0d2049] rounded-2xl px-6 py-4 mb-10 fade-up fade-up-delay-2">
              <div className="text-left sm:text-center">
                <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-0.5">Today's Featured Rate</p>
                <p className="text-white font-display text-2xl sm:text-3xl font-bold">
                  5-yr fixed from <span className="text-gold-400">4.89%</span>*
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/20" />
              <p className="text-white/60 text-[10px] sm:text-xs max-w-[200px] text-left sm:text-center leading-relaxed">
                *Rates subject to change. OAC. Based on qualified applicants with 20% down.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center fade-up fade-up-delay-3">
              <a href="#form-section" className="btn-gold text-base w-full sm:w-auto justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Pre-Approved — It's Free
              </a>
              <a
                href="#calculator"
                className="flex items-center gap-2 text-[#0d2049] hover:text-navy-600 text-sm font-medium transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="8" y2="6" />
                  <line x1="12" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="8" y2="10" />
                  <line x1="12" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="16" y2="14" />
                  <line x1="8" y1="18" x2="16" y2="18" />
                </svg>
                Try our mortgage calculator
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-0 mt-14 fade-up fade-up-delay-3">
              <div className="flex items-center gap-2 text-sm text-[#4a5568] px-4 sm:pl-0 sm:pr-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0d2049">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>
                  <strong className="text-[#0d2049]">4.9/5</strong> Average Rating
                </span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2 text-sm text-[#4a5568] px-4 sm:px-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d2049" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>
                  <strong className="text-[#0d2049]">1,200+</strong> Families Helped
                </span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2 text-sm text-[#4a5568] px-4 sm:px-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d2049" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                <span>
                  <strong className="text-[#0d2049]">50+</strong> Lenders Compared
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[480px] fade-up fade-up-delay-2">
            <img
              src="/images/hero.jpg"
              alt=""
              className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-xl z-10"
            />
            <img
              src="/images/audience-buyer.jpg"
              alt=""
              className="absolute left-0 sm:left-4 top-8 w-24 sm:w-28 h-24 sm:h-28 object-cover rounded-xl shadow-lg rotate-2 z-20"
            />
            <img
              src="/images/audience-refinance.jpg"
              alt=""
              className="absolute right-0 sm:right-2 bottom-8 w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-xl shadow-lg -rotate-3 z-20"
            />
            <img
              src="/images/audience-investment.jpg"
              alt=""
              className="absolute left-8 sm:left-16 bottom-4 w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-xl shadow-lg rotate-1 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
