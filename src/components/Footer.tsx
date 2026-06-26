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
                <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center shadow shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
                      fill="#e0a800"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">ClearPath Mortgage</div>
                  <div className="text-[10px] text-gray-300 tracking-widest uppercase">
                    Licensed Canadian Mortgage Broker
                  </div>
                </div>
              </div>
              <p className="text-navy-400 text-sm leading-relaxed max-w-xs">
                Helping Canadian families find better mortgage rates since 2018. Licensed, transparent, and always
                working for you, not the banks.
              </p>
              <p className="text-navy-400 text-xs mt-5">
                SSL Secured · FSRA Licensed · PIPEDA Compliant
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-navy-400">
                <li>
                  <a href="#form-section" className="hover:text-[#0ea5e9] transition-colors">
                    Get Pre-Approved
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-[#0ea5e9] transition-colors">
                    Mortgage Calculator
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#0ea5e9] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#0ea5e9] transition-colors">
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Contact Us</h4>
              <ul className="space-y-3 text-sm text-navy-400">
                <li>
                  <span className="text-navy-300">Phone:</span>{' '}
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-[#0ea5e9] transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <span className="text-navy-300">Email:</span>{' '}
                  <a href="mailto:info@clearpathmortgage.ca" className="hover:text-[#0ea5e9] transition-colors">
                    info@clearpathmortgage.ca
                  </a>
                </li>
                <li>
                  <span className="text-navy-300">Hours:</span> Mon–Fri: 8am–8pm EST
                  <br />
                  Sat: 9am–5pm EST
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center sm:text-left">
            <p className="text-navy-400 text-xs leading-relaxed max-w-4xl mx-auto sm:mx-0 mb-3">
              <strong className="text-navy-300">FSRA Licence #12345 · Brokerage #67890</strong> · ClearPath Mortgage is
              licensed by FSRA. All mortgage rates are subject
              to lender approval and may change without notice. OAC. This website is for informational purposes only
              and does not constitute financial advice. Rates shown are for illustrative purposes.
            </p>
            <p className="text-navy-500 text-xs">
              © 2026 ClearPath Mortgage Inc. All rights reserved. ·{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-[#0ea5e9] transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>{' '}
              ·{' '}
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-[#0ea5e9] transition-colors underline-offset-2 hover:underline"
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
          purposes and to facilitate contact with a licensed Canadian mortgage broker.
        </p>
        <p>
          Rate quotes, calculator results, and other information on this site are estimates only and do not constitute
          a mortgage commitment. Actual rates and terms are subject to lender approval, credit assessment, and property
          appraisal. OAC.
        </p>
        <p>
          ClearPath Mortgage is licensed by FSRA. Mortgage broker services are provided in accordance with applicable
          regulations. Nothing on this site constitutes financial, legal, or tax advice.
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
