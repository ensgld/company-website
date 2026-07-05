import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteContent } from '../data/siteContent.js'

function Faq({ className = '' }) {
  const { faq } = siteContent
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={className}>
      <div className="mb-[34px] grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <span className="mb-3.5 inline-flex text-[13px] font-extrabold uppercase tracking-[0.08em] text-accent">
            {faq.eyebrow}
          </span>
          <h2 className="mb-0 text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-normal text-ink">
            {faq.title}
          </h2>
        </div>
        <p className="text-[17px] leading-[1.7] text-muted max-sm:text-base lg:max-w-[560px]">
          {faq.description}
        </p>
      </div>

      <div className="space-y-3">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              className="overflow-hidden rounded-lg border border-line bg-white shadow-card"
              key={item.q}
            >
              <h3>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-bold leading-snug text-ink">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={[
                      'shrink-0 text-primary transition-transform duration-300',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                    size={22}
                    strokeWidth={2.4}
                  />
                </button>
              </h3>
              {isOpen && (
                <div
                  className="px-5 pb-5 text-[16px] leading-[1.7] text-muted"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                >
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
