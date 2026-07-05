import canonLogo from '../assets/brands/canon.png'
import developLogo from '../assets/brands/develop.png'
import epsonLogo from '../assets/brands/epson.png'
import hpLogo from '../assets/brands/hp.png'
import konicaMinoltaLogo from '../assets/brands/konica-minolta.png'
import kyoceraLogo from '../assets/brands/kyocera.png'
import sharpLogo from '../assets/brands/sharp.png'
import xeroxLogo from '../assets/brands/xerox.png'
import { siteContent } from '../data/siteContent.js'

const brandLogos = {
  canon: canonLogo,
  develop: developLogo,
  epson: epsonLogo,
  hp: hpLogo,
  konicaMinolta: konicaMinoltaLogo,
  kyocera: kyoceraLogo,
  sharp: sharpLogo,
  xerox: xeroxLogo,
}

function BrandSupport({ className = '' }) {
  const { brands } = siteContent

  return (
    <section className={className}>
      <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {brands.eyebrow}
          </span>
          <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
            {brands.title}
          </h2>
        </div>
        <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base lg:max-w-[560px]">
          {brands.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[14px] md:grid-cols-4">
        {brands.items.map((brand) => (
          <article
            className="flex min-h-[112px] items-center justify-center rounded-lg border border-line bg-white p-5 shadow-[0_10px_26px_rgba(18,35,61,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(18,35,61,0.1)]"
            key={brand.key}
          >
            <img
              className="max-h-12 w-auto max-w-[150px] object-contain"
              src={brandLogos[brand.key]}
              alt={`${brand.name} logo`}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default BrandSupport
