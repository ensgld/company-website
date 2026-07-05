import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo/LOGOPNG.png'
import { siteContent } from '../data/siteContent.js'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-2.5 py-2.5 text-[15px] font-bold text-muted no-underline transition hover:bg-surface hover:text-primary-dark sm:px-3',
    isActive ? 'bg-surface text-primary-dark' : '',
  ].join(' ')

function Header() {
  const { company, navigation, contactInfo } = siteContent
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 w-[min(1120px,calc(100%-28px))] items-center justify-between gap-4 md:w-[min(1120px,calc(100%-40px))] lg:h-[82px]">
        <NavLink
          className="inline-flex min-w-0 items-center text-inherit no-underline"
          to="/"
          aria-label="Hedef Ofis ana sayfa"
        >
          <img
            className="h-11 w-auto max-w-[180px] object-contain sm:max-w-[220px]"
            src={logo}
            alt={`${company.name} logo`}
          />
        </NavLink>

        {/* Masaüstü menü */}
        <nav
          className="hidden items-center gap-1.5 lg:flex"
          aria-label="Ana menü"
        >
          {navigation.map((item) => (
            <NavLink className={navLinkClass} key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Masaüstü tıkla-ara */}
        <a
          className="hidden min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 font-extrabold text-white no-underline transition hover:bg-primary-dark lg:inline-flex"
          href={contactInfo.phoneHref}
        >
          <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
          {contactInfo.phone}
        </a>

        {/* Mobil: ara + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white no-underline transition hover:bg-primary-dark"
            href={contactInfo.phoneHref}
            aria-label={`Telefonla ara: ${contactInfo.phone}`}
          >
            <Phone aria-hidden="true" size={20} strokeWidth={2.4} />
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:bg-surface"
            type="button"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" size={22} strokeWidth={2.4} />
            ) : (
              <Menu aria-hidden="true" size={22} strokeWidth={2.4} />
            )}
          </button>
        </div>
      </div>

      {/* Mobil menü paneli */}
      {menuOpen && (
        <nav
          className="border-t border-line bg-white lg:hidden"
          id="mobile-menu"
          aria-label="Mobil menü"
        >
          <div className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col gap-1 py-3 md:w-[min(1120px,calc(100%-40px))]">
            {navigation.map((item) => (
              <NavLink
                className={navLinkClass}
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-4 font-extrabold text-white no-underline transition hover:bg-primary-dark"
              href={contactInfo.phoneHref}
              onClick={() => setMenuOpen(false)}
            >
              <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
              {contactInfo.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
