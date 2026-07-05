import {
  Building2,
  Copy,
  Package,
  Printer,
  ScanLine,
  Settings,
} from 'lucide-react'
import { siteContent } from '../data/siteContent.js'

const deviceIconMap = {
  building: Building2,
  copy: Copy,
  package: Package,
  printer: Printer,
  scan: ScanLine,
  settings: Settings,
}

function DeviceGroups({ className = '' }) {
  const { deviceGroups } = siteContent

  return (
    <section className={className}>
      <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {deviceGroups.eyebrow}
          </span>
          <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
            {deviceGroups.title}
          </h2>
        </div>
        <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base lg:max-w-[560px]">
          {deviceGroups.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
        {deviceGroups.items.map((item) => {
          const Icon = deviceIconMap[item.icon]

          return (
            <article
              className="rounded-lg border border-line bg-white p-6 shadow-card"
              key={item.title}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
                  {Icon ? <Icon aria-hidden="true" size={22} strokeWidth={2.2} /> : null}
                </span>
                <span className="rounded-md bg-success-soft px-3 py-1 text-xs font-extrabold uppercase tracking-[0.06em] text-success">
                  Servis
                </span>
              </div>
              <h3 className="mb-2.5 text-xl leading-tight tracking-normal text-ink">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-muted">
                {item.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default DeviceGroups
