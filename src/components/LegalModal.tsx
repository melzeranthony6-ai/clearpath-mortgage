import { useEffect } from 'react'

interface LegalModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function LegalModal({ title, isOpen, onClose, children }: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close dialog"
      />
      <div className="relative bg-white rounded-2xl shadow-2xl border border-navy-100 max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-100">
          <h2 id="legal-modal-title" className="font-display text-xl text-navy-900 font-bold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-navy-50 text-navy-600 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto text-sm text-navy-600 leading-relaxed space-y-4">{children}</div>
        <div className="px-6 py-4 border-t border-navy-100 bg-navy-50">
          <button type="button" onClick={onClose} className="btn-navy w-full">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalModal
