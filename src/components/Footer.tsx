import { useState } from 'react'
import LegalModal from './LegalModal'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

export { PHONE_DISPLAY, PHONE_TEL }

function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <>
      <footer className="bg-navy-900 text-white pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
                      fill="#081532"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">ClearPath Mortgage</div>
                  <div className="text-[10px] text-navy-400 tracking-widest uppercase">
                    Licensed Ontario Mortgage Broker
                  </div>
                </div>
              </div>
              <p className="text-navy-400 text-sm leading-relaxed max-w-xs">
                Helping Ontario families find better mortgage rates since 2018. Licensed, transparent, and always
                working for you — not the banks.
              </p>
              <div className="flex gap-3 mt-5">
                <div className="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  SSL Secured
                </div>
                <div className="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  FSRA Licensed
                </div>
                <div className="trust-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  PIPEDA Compliant
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-navy-400">
                <li>
                  <a href="#form-section" className="hover:text-gold-400 transition-colors">
                    Get Pre-Approved
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-gold-400 transition-colors">
                    Mortgage Calculator
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-gold-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-gold-400 transition-colors">
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gold-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Contact Us</h4>
              <ul className="space-y-3 text-sm text-navy-400">
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92z" />
                  </svg>
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-gold-400 transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:info@clearpathmortgage.ca" className="hover:text-gold-400 transition-colors">
                    info@clearpathmortgage.ca
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Mon–Fri: 8am–8pm EST
                  <br />
                  Sat: 9am–5pm EST
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center sm:text-left">
            <p className="text-navy-400 text-xs leading-relaxed max-w-4xl mx-auto sm:mx-0 mb-3">
              <strong className="text-navy-300">FSRA Licence #12345 · Brokerage #67890</strong> · ClearPath Mortgage is
              licensed by the Financial Services Regulatory Authority of Ontario (FSRA). All mortgage rates are subject
              to lender approval and may change without notice. OAC. This website is for informational purposes only
              and does not constitute financial advice. Rates shown are for illustrative purposes.
            </p>
            <p className="text-navy-500 text-xs">
              © 2026 ClearPath Mortgage Inc. All rights reserved. ·{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>{' '}
              ·{' '}
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
              >
                Terms of Use
              </button>
            </p>
          </div>
        </div>
      </footer>

      <LegalModal title="Privacy Policy" isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)}>
        <p>
          ClearPath Mortgage Inc. ("ClearPath") is committed to protecting your personal information in accordance with
          the Personal Information Protection and Electronic Documents Act (PIPEDA).
        </p>
        <p>
          We collect information you provide through our website forms, including your name, email address, phone
          number, and mortgage-related preferences. This information is used solely to connect you with a licensed
          mortgage advisor and to provide mortgage brokerage services.
        </p>
        <p>
          We do not sell your personal information to third parties. Your data may be shared with lenders and service
          providers only as necessary to process your mortgage application, and always with your consent.
        </p>
        <p>
          You may request access to, correction of, or deletion of your personal information by contacting us at
          info@clearpathmortgage.ca or {PHONE_DISPLAY}.
        </p>
        <p className="text-xs text-navy-400">Last updated: June 2026. This is a demonstration website.</p>
      </LegalModal>

      <LegalModal title="Terms of Use" isOpen={termsOpen} onClose={() => setTermsOpen(false)}>
        <p>
          By using the ClearPath Mortgage website, you agree to these terms. This site is provided for informational
          purposes and to facilitate contact with a licensed Ontario mortgage broker.
        </p>
        <p>
          Rate quotes, calculator results, and other information on this site are estimates only and do not constitute
          a mortgage commitment. Actual rates and terms are subject to lender approval, credit assessment, and property
          appraisal. OAC.
        </p>
        <p>
          ClearPath Mortgage is licensed by FSRA. Mortgage broker services are provided in accordance with applicable
          Ontario regulations. Nothing on this site constitutes financial, legal, or tax advice.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of
          updated terms.
        </p>
        <p className="text-xs text-navy-400">Last updated: June 2026. This is a demonstration website.</p>
      </LegalModal>
    </>
  )
}

export default Footer
