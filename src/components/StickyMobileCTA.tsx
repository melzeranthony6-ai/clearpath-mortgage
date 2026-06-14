function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-navy-100 px-4 py-3 shadow-[0_-4px_20px_rgba(19,46,98,0.1)]">
      <a href="#form-section" className="btn-gold w-full justify-center text-sm py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Get Pre-Approved — Free
      </a>
    </div>
  )
}

export default StickyMobileCTA
