import { FaWhatsapp } from 'react-icons/fa'
import { siteContent } from '../data/siteContent.js'

function WhatsAppButton() {
  const { whatsapp } = siteContent

  return (
    <a
      className="fixed bottom-5 right-5 z-50 hidden min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 font-extrabold text-white no-underline shadow-[0_18px_36px_rgba(22,163,74,0.28)] transition hover:bg-whatsapp-dark lg:inline-flex"
      href={whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsapp.label}
    >
      <FaWhatsapp aria-hidden="true" size={23} />
      <span>{whatsapp.label}</span>
    </a>
  )
}

export default WhatsAppButton
