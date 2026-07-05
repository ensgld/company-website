import { FileX2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import DocumentMetadata from '../components/DocumentMetadata.jsx'

function NotFound() {
  return (
    <>
      <DocumentMetadata
        title="Sayfa Bulunamadı | Hedef Ofis Büro Makineleri"
        description="Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Lütfen ana sayfaya dönerek tekrar deneyin."
      />
      <section className="mx-auto flex min-h-[65vh] w-[min(1120px,calc(100%-28px))] flex-col items-center justify-center py-12 text-center md:w-[min(1120px,calc(100%-40px))]">
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#fdf2f2] text-accent shadow-[0_10px_30px_rgba(198,40,40,0.08)]">
          <FileX2 size={52} strokeWidth={1.4} />
          <span className="absolute -right-1 -top-1 flex h-6 w-6 animate-ping rounded-full bg-accent/20" />
        </div>
        
        <h1 className="mb-3 text-[clamp(44px,8vw,80px)] font-black leading-none tracking-tight text-ink">
          404
        </h1>
        <h2 className="mb-4 text-[clamp(20px,3vw,28px)] font-bold text-ink">
          Aradığınız Sayfa Bulunamadı
        </h2>
        <p className="mb-8 max-w-[480px] text-[16px] leading-[1.7] text-muted max-sm:text-sm">
          Ulaşmaya çalıştığınız sayfa kaldırılmış, ismi değiştirilmiş veya geçici olarak yayından kaldırılmış olabilir. 
          Lütfen aşağıdaki buton yardımıyla ana sayfaya dönün.
        </p>

        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-8 font-extrabold text-white visited:text-white no-underline hover:bg-primary-dark hover:shadow-[0_8px_20px_rgba(23,78,166,0.25)] transition-all duration-300"
          to="/"
        >
          Ana Sayfaya Dön
        </Link>
      </section>
    </>
  )
}

export default NotFound
