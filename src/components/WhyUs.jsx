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
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {whyUs.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {whyUs.title}
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base">
            {whyUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px]">
          {whyUs.items.map((item) => {
            const Icon = whyUsIconMap[item.icon]

            return (
              <article
                className="rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_26px_rgba(18,35,61,0.06)]"
                key={item.title}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#174ea6] text-white">
                    {Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null}
                  </span>
                  <h3 className="text-xl leading-tight tracking-normal text-[#1f2933]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.7] text-[#5d6876]">
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
