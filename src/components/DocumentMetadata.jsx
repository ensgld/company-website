import { useEffect } from 'react'

function DocumentMetadata({ title, description }) {
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
  }, [title, description])

  return null
}

export default DocumentMetadata
