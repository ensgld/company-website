import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent.js'

function Footer() {
  const { company, navigation, contactInfo } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-[min(1120px,calc(100%-28px))] py-12 md:w-[min(1120px,calc(100%-40px))]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          {/* Firma */}
          <div className="max-w-[360px]">
            <strong className="block text-lg text-ink">{company.name}</strong>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {company.summary}
            </p>
            <span className="mt-4 inline-flex rounded-md bg-surface px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.06em] text-primary-dark">
              {company.dealerInfo}
            </span>
          </div>

          {/* Hızlı linkler */}
          <nav aria-label="Alt menü">
            <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
              Sayfalar
            </span>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    className="text-[15px] font-bold text-muted no-underline transition hover:text-primary-dark"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* İletişim */}
          <div>
            <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
              İletişim
            </span>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <Phone aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                <a className="font-bold text-ink no-underline hover:text-primary-dark" href={contactInfo.phoneHref}>
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                <a className="font-bold text-ink no-underline hover:text-primary-dark" href={contactInfo.emailHref}>
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                <a
                  className="leading-relaxed no-underline hover:text-primary-dark"
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>

            <div className="mt-4 flex gap-2.5">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-whatsapp text-white no-underline transition hover:bg-whatsapp-dark"
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" size={20} />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white no-underline transition hover:bg-primary-dark"
                href={contactInfo.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram aria-hidden="true" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Tüm hakları saklıdır.
          </p>
          <p>{company.location} · {company.sector}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
