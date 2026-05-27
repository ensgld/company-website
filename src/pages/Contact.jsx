import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { siteContent } from '../data/siteContent.js'

const contactIconMap = {
  instagram: FaInstagram,
  mail: Mail,
  map: MapPin,
  phone: Phone,
}

function Contact() {
  const { contact } = siteContent

  return (
    <section className="mx-auto w-[min(1120px,calc(100%-28px))] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
        <div className="max-w-[760px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {contact.eyebrow}
          </span>
          <h1 className="mb-[22px] text-[clamp(38px,6vw,64px)] leading-[1.02] tracking-normal text-[#1f2933]">
            {contact.title}
          </h1>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {contact.description}
          </p>
        </div>

        <div className="rounded-lg border border-[#dbe2ea] bg-white shadow-[0_18px_45px_rgba(18,35,61,0.08)]">
          {contact.summaryItems.map((item) => (
            <div
              className="border-t border-[#dbe2ea] px-5 py-4 first:border-t-0"
              key={item.label}
            >
              <span className="mb-1 block text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
                {item.label}
              </span>
              <strong className="block text-[16px] leading-snug text-[#1f2933]">
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[58px] border-t border-[#dbe2ea] pt-[58px]">
        <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
              {contact.sectionEyebrow}
            </span>
            <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
              {contact.sectionTitle}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base lg:max-w-[520px]">
            {contact.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {contact.details.map((detail) => (
            <article
              className="rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_26px_rgba(18,35,61,0.06)]"
              key={detail.label}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#174ea6] text-white">
                  {(() => {
                    const Icon = contactIconMap[detail.icon]
                    return Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null
                  })()}
                </span>
                <span className="rounded-md bg-[#dcfce7] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.06em] text-[#166534]">
                  Aktif
                </span>
              </div>
              <span className="mb-2 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
                {detail.label}
              </span>
              <p className="mb-4 text-[20px] font-extrabold leading-tight text-[#1f2933]">
                {detail.value}
              </p>
              <p className="text-[15px] leading-relaxed text-[#5d6876]">
                {detail.note}
              </p>
              <a
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#174ea6] px-4 font-extrabold text-white visited:text-white no-underline hover:bg-[#0f3674]"
                href={detail.href}
                target={detail.icon === 'map' ? '_blank' : undefined}
                rel={detail.icon === 'map' ? 'noreferrer' : undefined}
              >
                {detail.actionLabel}
              </a>
            </article>
          ))}
        </div>
      </div>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-8 rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_18px_45px_rgba(18,35,61,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {contact.visitBox.eyebrow}
          </span>
          <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {contact.visitBox.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {contact.visitBox.text}
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#dbe2ea] bg-[#eef2f6]">
          <div className="relative">
            <iframe
              className="h-[320px] w-full border-0"
              src={contact.visitBox.embedUrl}
              title="Hedef Ofis Büro Makineleri konumu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-[#dbe2ea] bg-white px-3 py-2 shadow-[0_10px_26px_rgba(18,35,61,0.12)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#c62828] text-white">
                <MapPin aria-hidden="true" size={18} strokeWidth={2.4} />
              </span>
              <span>
                <strong className="block text-sm leading-tight text-[#1f2933]">
                  Hedef Ofis
                </strong>
                <small className="block text-xs font-bold leading-tight text-[#5d6876]">
                  Kocasinan / Kayseri
                </small>
              </span>
            </div>
          </div>
          <div className="border-t border-[#dbe2ea] bg-white p-4">
            <p className="text-[15px] font-bold leading-relaxed text-[#1f2933]">
              Google Maps üzerinde adresi açarak yol tarifi alabilirsiniz.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#174ea6] px-4 font-extrabold text-white visited:text-white no-underline hover:bg-[#0f3674]"
              href={contact.visitBox.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Haritada Gör
            </a>
          </div>
        </div>
      </section>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-6 rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_18px_45px_rgba(18,35,61,0.08)] lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {contact.social.eyebrow}
          </span>
          <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {contact.social.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {contact.social.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contact.social.links.map((link) => {
            const Icon = contactIconMap[link.icon]

            return (
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#174ea6] px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-[#0f3674]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                {Icon ? <Icon aria-hidden="true" size={20} /> : null}
                {link.value}
              </a>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default Contact
