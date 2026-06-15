import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes('rate')) {
    return 'Current 5-year fixed rates start from 4.89%. Get pre-approved to lock in your rate today.'
  }
  if (lower.includes('apply') || lower.includes('approved')) {
    return 'You can get pre-approved in under 2 minutes — no credit check required. Click the Get Pre-Approved button above.'
  }
  if (lower.includes('contact') || lower.includes('call')) {
    return "You can reach us at (416) 847-2931 or fill out our form and we'll call you within 5 minutes."
  }
  return "Great question — one of our mortgage advisors can answer that directly. Fill out our quick form and we'll be in touch within 5 minutes."
}

const WELCOME_MESSAGE =
  "Hi! I'm here to help with rates, pre-approval, and getting in touch. What can I help you with today?"

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(0)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: nextId.current++, text: WELCOME_MESSAGE, sender: 'bot' }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = { id: nextId.current++, text: trimmed, sender: 'user' }
    const botMsg: Message = {
      id: nextId.current++,
      text: getBotResponse(trimmed),
      sender: 'bot',
    }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-40 md:bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-[0_8px_40px_rgba(19,46,98,0.18)] border border-navy-100 flex flex-col overflow-hidden animate-[fadeUp_0.25s_ease]">
          {/* Header */}
          <div className="bg-navy-800 px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#081532">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Clearpath Mortgage</p>
                <p className="text-navy-300 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-navy-300 hover:text-white transition-colors p-1 rounded"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[260px] max-h-[320px] bg-navy-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-navy-700 text-white rounded-br-sm'
                      : 'bg-white text-navy-800 border border-navy-100 rounded-bl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="px-3 py-3 bg-white border-t border-navy-100 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, pre-approval..."
              className="flex-1 form-input py-2.5 text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-gold-500 hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed text-navy-900 font-bold rounded-lg px-3.5 transition-colors shrink-0"
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(19,46,98,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-navy-700' : 'bg-navy-800 hover:bg-navy-700'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>
    </>
  )
}

export default ChatWidget
