import { ClipboardCheck, PhoneCall, Wrench } from 'lucide-react'
import fastServiceImage from '../assets/hizli-servis.png'
import { siteContent } from '../data/siteContent.js'

const processIconMap = {
  clipboard: ClipboardCheck,
  phone: PhoneCall,
  wrench: Wrench,
}

function ServiceProcess({ className = '' }) {
  const { serviceProcess } = siteContent.home

  return (
    <section className={className}>
      <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#c62828]">
            {serviceProcess.eyebrow}
          </span>
          <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-[#1f2933]">
            {serviceProcess.title}
          </h2>
        </div>
        <p className="text-[17px] leading-[1.7] text-[#5d6876] max-sm:text-base lg:max-w-[560px]">
          {serviceProcess.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="grid grid-cols-1 gap-[18px]">
          {serviceProcess.steps.map((step, index) => {
            const Icon = processIconMap[step.icon]

            return (
              <article
                className="rounded-lg border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_26px_rgba(18,35,61,0.06)]"
                key={step.title}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#174ea6] text-white">
                    {Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null}
                  </span>
                  <span className="rounded-md bg-[#dcfce7] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.06em] text-[#166534]">
                    Adım {index + 1}
                  </span>
                </div>
                <h3 className="mb-2.5 text-xl leading-tight tracking-normal text-[#1f2933]">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#5d6876]">
                  {step.text}
                </p>
              </article>
            )
          })}
        </div>

        <div className="overflow-hidden rounded-lg border border-[#dbe2ea] bg-white p-3 shadow-[0_18px_45px_rgba(18,35,61,0.08)]">
          <img
            className="aspect-[16/9] h-full w-full rounded-md bg-[#eef2f6] object-contain"
            src={fastServiceImage}
            alt="Hızlı teknik servis süreci"
          />
          <div className="mt-3 border-t border-[#dbe2ea] px-2 py-4">
            <p className="text-[15px] font-bold leading-relaxed text-[#1f2933]">
              {serviceProcess.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
