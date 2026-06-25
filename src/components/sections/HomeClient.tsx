'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PageWrapper } from '@/components/layout'
import { HeroIntro } from '@/components/sections/HeroIntro'
import { HeroFull } from '@/components/sections/HeroFull'

interface HomeClientProps {
  locale: string
  translations: {
    eyebrow: string
    role: string
    tagline: string
    available: string
    ctaProjects: string
    ctaContact: string
    stackLabel: string
    scroll: string
  }
}

export function HomeClient({ locale, translations: t }: HomeClientProps) {
  const router = useRouter()
  const [revealed, setRevealed] = useState(false)

  // Persiste el estado revealed en sessionStorage
  // para que el cambio de idioma no repita la intro
  useEffect(() => {
    const already = sessionStorage.getItem('intro-played')
    if (already) setRevealed(true)
  }, [])

  function handleReveal() {
    sessionStorage.setItem('intro-played', '1')
    setRevealed(true)
  }

  return (
    <>
      {!revealed && (
        <HeroIntro
          name="Juan Alzate"
          role={t.role}
          scrollLabel={t.scroll}
          onReveal={handleReveal}
        />
      )}
      <div
        style={{
          opacity: revealed ? 1 : 0,
          transition: 'opacity 0.7s ease',
          pointerEvents: revealed ? 'auto' : 'none',
        }}
      >
        <PageWrapper currentPath="/" hideNav={!revealed}>
          <HeroFull
            eyebrow={t.eyebrow}
            role={t.role}
            tagline={t.tagline}
            // available={t.available}
            ctaProjects={t.ctaProjects}
            ctaContact={t.ctaContact}
            stackLabel={t.stackLabel}
            visible={revealed}
            onNavigateProjects={() => router.push(`/${locale}/projects`)}
            onNavigateContact={() => router.push(`/${locale}/contact`)}
          />
        </PageWrapper>
      </div>
    </>
  )
}