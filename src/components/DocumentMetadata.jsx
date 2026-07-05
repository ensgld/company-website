import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://hedefofis.com').replace(
  /\/$/,
  '',
)

function DocumentMetadata({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Tarayıcı Başlığını Güncelle
    if (title) {
      document.title = title
    }

    // 2. Meta Açıklamasını Güncelle
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        const newMeta = document.createElement('meta')
        newMeta.name = 'description'
        newMeta.content = description
        document.head.appendChild(newMeta)
      }

      // Open Graph ve Twitter Açıklamalarını da Güncelle (Sosyal Medya Uyumlu)
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) ogDescription.setAttribute('content', description)

      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) twitterDescription.setAttribute('content', description)
    }

    // Open Graph ve Twitter Başlıklarını da Güncelle
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', title)

      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) twitterTitle.setAttribute('content', title)
    }

    // 3. Sayfa bazlı canonical + og:url + twitter:url
    const canonical = `${SITE_URL}${pathname}`

    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', canonical)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical)

    const twitterUrl = document.querySelector('meta[name="twitter:url"]')
    if (twitterUrl) twitterUrl.setAttribute('content', canonical)
  }, [title, description, pathname])

  return null
}

export default DocumentMetadata
