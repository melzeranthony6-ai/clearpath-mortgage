function Hero() {
  return (
    <section className="hero-bg pt-28 pb-36 sm:pt-36 sm:pb-44 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-300 font-medium mb-6 fade-up">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          FSRA Licensed · Ontario Mortgage Broker
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 fade-up fade-up-delay-1">
          Your Best Rate.
          <br />
          <span className="text-gold-400">Your Home. Faster.</span>
        </h1>

        <p className="text-navy-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-up fade-up-delay-2">
          We shop over 50 lenders so you don't have to. Whether you're buying your first home in Ontario or
          renewing your mortgage, ClearPath gets you approved — and in your home — with confidence.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up"
          style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a href="#form-section" className="btn-gold text-base w-full sm:w-auto justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Get Pre-Approved — It's Free
          </a>
          <a
            href="#calculator"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
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

        <div className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-navy-300">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#e0a800">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>
              <strong className="text-white">4.9/5</strong> Average Rating
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0a800" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>
              <strong className="text-white">1,200+</strong> Families Helped
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0a800" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <span>
              <strong className="text-white">50+</strong> Lenders Compared
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
