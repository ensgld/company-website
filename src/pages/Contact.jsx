import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import DocumentMetadata from '../components/DocumentMetadata.jsx'
import { siteContent } from '../data/siteContent.js'

const contactIconMap = {
  instagram: FaInstagram,
  mail: Mail,
  map: MapPin,
  phone: Phone,
}

function Contact() {
  const { contact } = siteContent
  
  // İletişim formu durum yönetimleri
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Teklif İstiyorum',
    message: ''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  // Bot tuzağı (honeypot): gerçek kullanıcılar bu alanı boş bırakır.
  const [botField, setBotField] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot doluysa gönderimi sessizce yut (spam bot).
    if (botField) {
      setStatus('success')
      return
    }
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Web3Forms erişim anahtarı ortam değişkeninden okunur (.env / Vercel env).
          // Not: Bu anahtar client-side kullanım içindir; asıl koruma Web3Forms
          // panelindeki domain whitelist + captcha ile sağlanır.
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[Hedef Ofis Form] ${formData.subject} - ${formData.name}`,
          message: formData.message,
          from_name: 'Hedef Ofis Web Sitesi'
        })
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Teklif İstiyorum',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Form gönderim hatası:', err)
      setStatus('error')
    }
  }

  return (
    <>
      <DocumentMetadata
        title="İletişim | Hedef Ofis Büro Makineleri"
        description="Fotokopi makinesi, yazıcı satışı, teknik servis, kiralama çözümleri ve sarf malzeme talepleriniz için Kayseri Kocasinan'daki ofisimizden veya telefon/e-posta ile bizimle iletişime geçebilirsiniz."
      />
      <section className="mx-auto w-[min(1120px,calc(100%-28px))] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
        <div className="max-w-[760px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {contact.eyebrow}
          </span>
          <h1 className="mb-[22px] text-[clamp(38px,6vw,64px)] leading-[1.02] tracking-normal text-ink">
            {contact.title}
          </h1>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {contact.description}
          </p>
        </div>

        <div className="rounded-lg border border-line bg-white shadow-elevated">
          {contact.summaryItems.map((item) => (
            <div
              className="border-t border-line px-5 py-4 first:border-t-0"
              key={item.label}
            >
              <span className="mb-1 block text-[12px] font-extrabold uppercase tracking-[0.08em] text-accent">
                {item.label}
              </span>
              <strong className="block text-[16px] leading-snug text-ink">
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[58px] border-t border-line pt-[58px]">
        <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
              {contact.sectionEyebrow}
            </span>
            <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
              {contact.sectionTitle}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base lg:max-w-[520px]">
            {contact.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {contact.details.map((detail) => (
            <article
              className="rounded-lg border border-line bg-white p-6 shadow-card"
              key={detail.label}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
                  {(() => {
                    const Icon = contactIconMap[detail.icon]
                    return Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null
                  })()}
                </span>
                <span className="rounded-md bg-success-soft px-3 py-1 text-xs font-extrabold uppercase tracking-[0.06em] text-success">
                  Aktif
                </span>
              </div>
              <span className="mb-2 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
                {detail.label}
              </span>
              <p className="mb-4 text-[20px] font-extrabold leading-tight text-ink">
                {detail.value}
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                {detail.note}
              </p>
              <a
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark"
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

      {/* İletişim Formu Bölümü */}
      <section className="mt-[58px] border-t border-line pt-[58px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="max-w-[560px]">
            <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
              Hızlı İletişim Formu
            </span>
            <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
              Bize mesajınızı iletin.
            </h2>
            <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
              Yazıcı ve fotokopi makinesi kiralama, satın alma, teknik servis veya toner ihtiyaçlarınız için formu doldurarak bize doğrudan hızlıca mesaj göndebilirsiniz. 
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-ink">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                En geç 2 saat içerisinde talebinize dönüş sağlanır.
              </p>
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-ink">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                Kayseri geneline hızlı yerinde teknik servis desteği.
              </p>
              <p className="flex items-center gap-2.5 text-[15px] font-bold text-ink">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                Sertifikalı Develop bayiliği kalitesiyle ürün danışmanlığı.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-6 shadow-elevated sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-6 text-center" role="status" aria-live="polite">
                <CheckCircle className="mb-4 text-green-600 animate-bounce" size={56} strokeWidth={1.5} />
                <h3 className="mb-2 text-2xl font-black text-ink">Mesajınız Gönderildi!</h3>
                <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                  Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınız başarıyla bize ulaştı. 
                  En kısa sürede sizinle irtibata geçeceğiz.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 font-extrabold text-white hover:bg-primary-dark transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — ekran okuyucu ve kullanıcıdan gizli */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                />
                <div aria-live="polite">
                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-md bg-red-50 p-4 text-accent border border-red-100" role="alert">
                    <AlertTriangle className="shrink-0" size={20} />
                    <div>
                      <strong className="block text-sm font-bold">Gönderim Başarısız!</strong>
                      <span className="text-xs leading-relaxed">Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin veya doğrudan telefon ile bize ulaşın.</span>
                    </div>
                  </div>
                )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-muted">Adınız Soyadınız *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Örn: Ahmet Yılmaz"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-muted">Telefon Numaranız *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Örn: 0555 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-muted">E-posta Adresiniz</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Örn: name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-muted">İletişim Konusu</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="Teklif İstiyorum">Fotokopi / Yazıcı Kiralama Teklifi</option>
                    <option value="Teknik Servis Talebi">Cihaz Arıza & Teknik Servis Desteği</option>
                    <option value="Sarf Malzeme Talebi">Toner / Sarf Malzeme Alımı</option>
                    <option value="Satış ve Ürün Bilgisi">Develop / Yeni Yazıcı Satın Alma</option>
                    <option value="Genel Sorular">Genel Soru / Görüş & İstek</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-muted">Mesajınız *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Talebinizi buraya detaylıca yazabilirsiniz..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark hover:shadow-[0_8px_20px_rgba(23,78,166,0.2)] disabled:opacity-50 transition-all duration-300"
                >
                  {status === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-8 rounded-lg border border-line bg-white p-6 shadow-elevated lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {contact.visitBox.eyebrow}
          </span>
          <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-ink">
            {contact.visitBox.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {contact.visitBox.text}
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <div className="relative">
            <iframe
              className="h-[320px] w-full border-0"
              src={contact.visitBox.embedUrl}
              title="Hedef Ofis Büro Makineleri konumu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 shadow-[0_10px_26px_rgba(18,35,61,0.12)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white">
                <MapPin aria-hidden="true" size={18} strokeWidth={2.4} />
              </span>
              <span>
                <strong className="block text-sm leading-tight text-ink">
                  Hedef Ofis
                </strong>
                <small className="block text-xs font-bold leading-tight text-muted">
                  Kocasinan / Kayseri
                </small>
              </span>
            </div>
          </div>
          <div className="border-t border-line bg-white p-4">
            <p className="text-[15px] font-bold leading-relaxed text-ink">
              Google Maps üzerinde adresi açarak yol tarifi alabilirsiniz.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark"
              href={contact.visitBox.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Haritada Gör
            </a>
          </div>
        </div>
      </section>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-6 rounded-lg border border-line bg-white p-6 shadow-elevated lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {contact.social.eyebrow}
          </span>
          <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-ink">
            {contact.social.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {contact.social.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contact.social.links.map((link) => {
            const Icon = contactIconMap[link.icon]

            return (
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark"
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
    </>
  )
}

export default Contact
