import introVideo from '../assets/VIDEO.mp4'
import officeCultureImage from '../assets/ofis-ortami-3.webp'
import DocumentMetadata from '../components/DocumentMetadata.jsx'
import WhyUs from '../components/WhyUs.jsx'
import { siteContent } from '../data/siteContent.js'

function About() {
  const { about } = siteContent

  return (
    <>
      <DocumentMetadata
        title="Hakkımızda | Hedef Ofis Büro Makineleri"
        description="Hedef Ofis olarak 30 yıllık sektör tecrübemiz ve Develop Kayseri Bölge Bayiliği güvencemizle firmaların baskı altyapılarını daha düzenli, izlenebilir ve verimli hale getirmeyi hedefliyoruz."
      />
      <section className="mx-auto w-[min(1120px,calc(100%-28px))] py-[72px] pt-[58px] md:w-[min(1120px,calc(100%-40px))]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="max-w-[760px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {about.eyebrow}
          </span>
          <h1 className="mb-[22px] text-[clamp(38px,6vw,64px)] leading-[1.02] tracking-normal text-[#1f2933]">
            {about.title}
          </h1>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {about.description}
          </p>
        </div>

        <div className="rounded-lg border border-[#dbe2ea] bg-white shadow-[0_18px_45px_rgba(18,35,61,0.08)]">
          {about.summaryItems.map((item) => (
            <div className="border-t border-[#dbe2ea] px-5 py-4 first:border-t-0" key={item.label}>
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

      <div className="mt-[42px] grid grid-cols-1 gap-[18px] lg:grid-cols-2">
        {about.sections.map((section, index) => (
          <article
            className="relative overflow-hidden rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_26px_rgba(18,35,61,0.06)]"
            key={section.title}
          >
            <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#174ea6] text-sm font-black text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="mb-3.5 text-[clamp(26px,3vw,34px)] leading-[1.12] tracking-normal text-[#1f2933]">
              {section.title}
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
              {section.text}
            </p>
          </article>
        ))}
      </div>

      <WhyUs className="mt-[58px] border-t border-[#dbe2ea] pt-[58px]" />

      <section className="mt-[58px] grid grid-cols-1 items-center gap-8 border-t border-[#dbe2ea] pt-[58px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-lg border border-[#dbe2ea] bg-white shadow-[0_18px_45px_rgba(18,35,61,0.08)]">
          <img
            className="aspect-[16/10] h-full w-full object-cover"
            src={officeCultureImage}
            alt={about.imageSection.imageAlt}
          />
        </div>
        <div className="max-w-[560px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {about.imageSection.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {about.imageSection.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {about.imageSection.description}
          </p>
        </div>
      </section>

      <section className="mt-[58px] grid grid-cols-1 items-center gap-8 border-t border-[#dbe2ea] pt-[58px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-[560px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {about.mediaSection.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {about.mediaSection.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {about.mediaSection.description}
          </p>
          <p className="mt-5 border-l-4 border-[#174ea6] pl-4 text-[15px] font-bold leading-relaxed text-[#1f2933]">
            {about.mediaSection.note}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#dbe2ea] bg-white shadow-[0_18px_45px_rgba(18,35,61,0.1)]">
          <div className="border-b border-[#dbe2ea] px-5 py-4">
            <span className="mb-1 block text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
              {about.mediaSection.videoEyebrow}
            </span>
            <h3 className="text-lg font-extrabold leading-tight text-[#1f2933]">
              {about.mediaSection.videoTitle}
            </h3>
          </div>
          <video
            className="aspect-video w-full bg-[#111827] object-cover"
            src={introVideo}
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
      </section>
    </section>
    </>
  )
}

export default About
