import { BadgeCheck, Copy, Package, Printer, Repeat2, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import serviceWorkflowImage from '../assets/is-akisi-yerinde-servis.webp'
import BrandSupport from '../components/BrandSupport.jsx'
import DeviceGroups from '../components/DeviceGroups.jsx'
import DocumentMetadata from '../components/DocumentMetadata.jsx'
import { siteContent } from '../data/siteContent.js'

const serviceIconMap = {
  badge: BadgeCheck,
  copy: Copy,
  package: Package,
  printer: Printer,
  repeat: Repeat2,
  wrench: Wrench,
}

function Services() {
  const { services, servicesPage } = siteContent

  return (
    <>
      <DocumentMetadata
        title="Hizmetlerimiz | Hedef Ofis Büro Makineleri"
        description="Yazıcı, fotokopi makinesi satışı, teknik servis, bakım ve kopya başı kiralık fotokopi makinesi desteği ile işletmenizin baskı altyapısını güçlendiriyoruz."
      />
      <section className="mx-auto w-[min(1120px,calc(100%-28px))] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
        <div className="max-w-[760px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {servicesPage.eyebrow}
          </span>
          <h1 className="mb-[22px] text-[clamp(38px,6vw,64px)] leading-[1.02] tracking-normal text-ink">
            {servicesPage.title}
          </h1>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {servicesPage.description}
          </p>
        </div>

        <div className="rounded-lg border border-line bg-white shadow-elevated">
          {servicesPage.summaryItems.map((item) => (
            <div className="border-t border-line px-5 py-4 first:border-t-0" key={item.label}>
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
              {servicesPage.sectionEyebrow}
            </span>
            <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
              {servicesPage.sectionTitle}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base lg:max-w-[520px]">
            {servicesPage.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              className="rounded-lg border border-line bg-white p-6 shadow-card"
              key={service.title}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
                  {(() => {
                    const Icon = serviceIconMap[service.icon]
                    return Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null
                  })()}
                </span>
                <span className="rounded-md bg-surface px-3 py-1 text-xs font-extrabold uppercase tracking-[0.06em] text-primary-dark">
                  {String(index + 1).padStart(2, '0')} / {service.tag}
                </span>
              </div>
              <h3 className="mb-3.5 text-[clamp(26px,3vw,34px)] leading-[1.12] tracking-normal text-ink">
                {service.title}
              </h3>
              <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-8 border-t border-line pt-[58px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-[560px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {servicesPage.workflow.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
            {servicesPage.workflow.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {servicesPage.workflow.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-white p-3 shadow-elevated">
          <img
            className="aspect-[16/9] h-full w-full rounded-md bg-surface object-contain"
            src={serviceWorkflowImage}
            alt={servicesPage.workflow.imageAlt}
          />
        </div>
      </section>

      <DeviceGroups className="mt-[58px] border-t border-line pt-[58px]" />

      <BrandSupport className="mt-[58px] border-t border-line pt-[58px]" />

      <section className="mt-[58px] grid grid-cols-1 items-center gap-6 rounded-lg border border-line bg-white p-6 shadow-elevated lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            Danışmanlık
          </span>
          <h2 className="mb-3 text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-normal text-ink">
            {servicesPage.cta.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {servicesPage.cta.text}
          </p>
        </div>
        <Link
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-[18px] font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark sm:w-auto"
          to={servicesPage.cta.action.to}
        >
          {servicesPage.cta.action.label}
        </Link>
      </section>
    </section>
    </>
  )
}

export default Services
