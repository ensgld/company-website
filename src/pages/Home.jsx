import { useEffect, useState } from 'react'
import { BadgeCheck, Copy, Package, Printer, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import machineTypesImage from '../assets/hero/farkli-makine-turleri.png'
import printingHeroImage from '../assets/hero/office-printing-hero.png'
import officeImage from '../assets/hero/ofis-ortami.jpg'
import suppliesImage from '../assets/hero/sarf-malzeme-destegi.png'
import serviceTechnicianImage from '../assets/hero/teknik-servis-elemani.png'
import BrandSupport from '../components/BrandSupport.jsx'
import ServiceProcess from '../components/ServiceProcess.jsx'
import WhyUs from '../components/WhyUs.jsx'
import { siteContent } from '../data/siteContent.js'

const homeIconMap = {
  badge: BadgeCheck,
  copy: Copy,
  package: Package,
  printer: Printer,
  wrench: Wrench,
}

const heroSlideImages = {
  machines: machineTypesImage,
  office: officeImage,
  printing: printingHeroImage,
  service: serviceTechnicianImage,
  supplies: suppliesImage,
}

function Home() {
  const { home } = siteContent
  const [activeSlide, setActiveSlide] = useState(0)
  const activeHeroSlide = home.heroSlides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % home.heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [home.heroSlides.length])

  return (
    <>
      <section className="mx-auto grid min-h-0 w-[min(1120px,calc(100%-28px))] grid-cols-1 items-center gap-11 py-9 pb-[52px] md:w-[min(1120px,calc(100%-40px))] lg:min-h-[calc(100vh-150px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(390px,1.1fr)] lg:pt-6">
        <div className="max-w-[630px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {home.eyebrow}
          </span>
          <h1 className="mb-[22px] text-[clamp(38px,6vw,64px)] leading-[1.02] tracking-normal text-[#1f2933]">
            {home.title}
          </h1>
          <p className="max-w-[590px] text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {home.description}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#174ea6] px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-[#0f3674] sm:w-auto"
              to={home.primaryAction.to}
            >
              {home.primaryAction.label}
            </Link>
            <Link
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-[#dbe2ea] bg-white px-[18px] font-extrabold text-[#0f3674] no-underline sm:w-auto"
              to={home.secondaryAction.to}
            >
              {home.secondaryAction.label}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-lg border border-[#dbe2ea] bg-white shadow-[0_10px_26px_rgba(18,35,61,0.06)] sm:grid-cols-3">
            {home.summaryItems.map((item) => (
              <div
                className="border-t border-[#dbe2ea] px-5 py-4 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0"
                key={item.label}
              >
                <span className="mb-1 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
                  {item.label}
                </span>
                <strong className="block text-sm leading-snug text-[#1f2933]">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div className="order-first lg:order-none">
          <div className="overflow-hidden rounded-lg border border-[#dbe2ea] bg-white shadow-[0_18px_45px_rgba(18,35,61,0.1)]">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#eef2f6]">
              {home.heroSlides.map((slide, index) => (
                <img
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                    index === activeSlide ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                  src={heroSlideImages[slide.key]}
                  alt={slide.alt}
                  key={slide.key}
                />
              ))}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {home.heroSlides.map((slide, index) => (
                  <button
                    className={[
                      'h-2.5 rounded-full border border-white/80 transition-all',
                      index === activeSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50',
                    ].join(' ')}
                    type="button"
                    aria-label={`${index + 1}. hero görselini göster`}
                    aria-pressed={index === activeSlide}
                    key={slide.key}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
            <div className="border-t border-[#dbe2ea] bg-white px-5 py-4">
              <p className="text-[15px] font-bold leading-relaxed text-[#1f2933]">
                {activeHeroSlide.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-28px))] border-t border-[#dbe2ea] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]">
        <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
              {home.highlightsEyebrow}
            </span>
            <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
              {home.highlightsTitle}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base lg:max-w-[520px]">
            Baskı süreçlerinde verimli cihaz seçimi, hızlı teknik destek ve
            satış sonrası süreklilik hedeflenir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-5">
          {home.highlights.map((item, index) => (
            <article
              className="rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_26px_rgba(18,35,61,0.06)]"
              key={item.title}
            >
              <div className="mb-[18px] flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#174ea6] text-white">
                  {(() => {
                    const Icon = homeIconMap[item.icon]
                    return Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null
                  })()}
                </span>
                <span className="rounded-md bg-[#dcfce7] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#166534]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mb-2.5 text-xl leading-tight tracking-normal text-[#1f2933]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ServiceProcess className="mx-auto w-[min(1120px,calc(100%-28px))] border-t border-[#dbe2ea] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]" />

      <WhyUs className="mx-auto w-[min(1120px,calc(100%-28px))] border-t border-[#dbe2ea] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]" />

      <BrandSupport className="mx-auto w-[min(1120px,calc(100%-28px))] border-t border-[#dbe2ea] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]" />

      <section className="mx-auto w-[min(1120px,calc(100%-28px))] pb-[72px] md:w-[min(1120px,calc(100%-40px))]">
        <div className="grid grid-cols-1 items-center gap-6 rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_18px_45px_rgba(18,35,61,0.08)] lg:grid-cols-[1fr_auto] lg:p-8">
          <div>
            <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
              Hızlı İletişim
            </span>
            <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-[#1f2933]">
              {home.cta.title}
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
              {home.cta.text}
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#174ea6] px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-[#0f3674] sm:w-auto"
            to={home.cta.action.to}
          >
            {home.cta.action.label}
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
