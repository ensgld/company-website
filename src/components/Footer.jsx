import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent.js'

function Footer() {
  const { company } = siteContent

  return (
    <footer className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col items-start justify-between gap-6 border-t border-line py-7 md:w-[min(1120px,calc(100%-40px))] lg:flex-row lg:items-center">
      <div>
        <strong>{company.name}</strong>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {company.summary}
        </p>
      </div>
      <Link className="font-extrabold text-primary-dark no-underline" to="/iletisim">
        İletişime geç
      </Link>
    </footer>
  )
}

export default Footer
