import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import MobileCallBar from './MobileCallBar.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Mobil sabit CTA barının içeriği örtmemesi için boşluk */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
      <WhatsAppButton />
      <MobileCallBar />
    </div>
  )
}

export default Layout
