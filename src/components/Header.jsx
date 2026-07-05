import { NavLink } from 'react-router-dom'
import logo from '../assets/logo/LOGOPNG.png'
import { siteContent } from '../data/siteContent.js'

function Header() {
  const { company, navigation } = siteContent

  return (
    <header className="mx-auto flex h-auto w-[min(1120px,calc(100%-28px))] flex-col items-start justify-between gap-6 py-4 md:w-[min(1120px,calc(100%-40px))] lg:h-[82px] lg:flex-row lg:items-center lg:py-0">
      <NavLink
        className="inline-flex min-w-0 items-center text-inherit no-underline lg:min-w-[230px]"
        to="/"
        aria-label="Hedef Ofis ana sayfa"
      >
        <img
          className="h-12 w-auto max-w-[190px] object-contain sm:max-w-[220px]"
          src={logo}
          alt={`${company.name} logo`}
        />
      </NavLink>

      <nav
        className="flex flex-wrap items-center justify-start gap-1.5 lg:justify-end"
        aria-label="Ana menü"
      >
        {navigation.map((item) => (
          <NavLink
            className={({ isActive }) =>
              [
                'rounded-md px-2.5 py-2.5 text-[15px] font-bold text-muted no-underline transition hover:bg-surface hover:text-primary-dark sm:px-3',
                isActive ? 'bg-surface text-primary-dark' : '',
              ].join(' ')
            }
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
