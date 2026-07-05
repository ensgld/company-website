import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { siteContent } from '../data/siteContent.js'

// Mobilde ekran altında sabit "Ara" + "WhatsApp" dönüşüm barı.
// Masaüstünde yüzen WhatsApp butonu gösterilir (Layout içinde), bu bar gizlenir.
function MobileCallBar() {
  const { contactInfo } = siteContent

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white shadow-elevated-lg lg:hidden">
      <a
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-extrabold text-primary-dark no-underline"
        href={contactInfo.phoneHref}
      >
        <Phone aria-hidden="true" size={20} strokeWidth={2.4} />
        Hemen Ara
      </a>
      <a
        className="flex flex-1 items-center justify-center gap-2 bg-whatsapp py-3.5 font-extrabold text-white no-underline"
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp aria-hidden="true" size={20} />
        WhatsApp
      </a>
    </div>
  )
}

export default MobileCallBar
