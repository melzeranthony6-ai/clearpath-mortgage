# ClearPath Mortgage — Implementation Plan

> Prototype goal: look like a real broker website. Phases 1–6 are core; Phase 7 is optional.

## Suggested section order (after Phase 4)
Hero → Rate teaser → Audience → How It Works → Calculator → Mortgage types → Meet Advisor → Testimonials → FAQ → Form → Footer

---

## Phase 1 — Visual Credibility (biggest impact first)
- [x] Replace lender text boxes with grayscale SVG logo placeholders
- [x] Replace testimonial initials with stock headshots
- [x] Add Meet Your Advisor section — headshot, name, title, 3 bullets, Book a Call → #form-section
- [x] Add rate teaser under hero — "5-yr fixed from 4.89%*" with OAC disclaimer
- [x] Polish hero stats row — dividers, tighter spacing
- [x] Add hover lift on audience cards and testimonial cards

## Phase 2 — Form Polish
- [x] Remove alert(), replace with inline errors on contact step
- [x] Add loading spinner + disable submit button while sending
- [x] Standardize copy to "within 5 minutes" everywhere (intro + success state)
- [x] Swap emoji for line icons matching site style
- [x] Add subtle fade/slide transition between form steps

## Phase 3 — Footer & Trust
- [x] Replace phone with believable number — (416) 847-2931
- [x] Add click-to-call tel: link on phone number
- [x] Privacy Policy + Terms open styled modals
- [x] All footer links styled and clickable

## Phase 4 — Content Sections
- [x] FAQ accordion — 5 questions
- [x] Mortgage types row — 3 cards (Fixed, Variable, HELOC)
- [x] Down payment slider on calculator

## Phase 5 — Photography
- [x] Self-host hero image in /public
- [x] Consistent stock photos — advisor, testimonials, section images
- [x] Add images to audience cards and How It Works

## Phase 6 — Mobile & UX
- [x] Sticky mobile CTA bar at bottom (mobile only)
- [x] Phone number visible in navbar on mobile

## Phase 7 — Pages (optional, do last)
- [ ] Add React Router + shared layout
- [ ] /purchase page
- [ ] /refinance page
- [ ] /renewal page
- [ ] Wire navbar links

## Phase 8 — Optional Later
- [ ] Live chat
- [ ] SEO meta tags
- [ ] Analytics
