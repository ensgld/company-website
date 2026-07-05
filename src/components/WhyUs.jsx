import { Award, BriefcaseBusiness, ShieldCheck } from 'lucide-react'
import { siteContent } from '../data/siteContent.js'

const whyUsIconMap = {
  award: Award,
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
}

function WhyUs({ className = '' }) {
  const { whyUs } = siteContent.home

  return (
    <section className={className}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-[560px]">
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {whyUs.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
            {whyUs.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base">
            {whyUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px]">
          {whyUs.items.map((item) => {
            const Icon = whyUsIconMap[item.icon]

            return (
              <article
                className="rounded-lg border border-line bg-white p-6 shadow-card"
                key={item.title}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                    {Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null}
                  </span>
                  <h3 className="text-xl leading-tight tracking-normal text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.7] text-muted">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
