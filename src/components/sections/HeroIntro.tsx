'use client'

import { useEffect, useState } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'

interface HeroIntroProps {
  name: string
  role: string
  scrollLabel: string
  onReveal: () => void
}

export function HeroIntro({ name, role, scrollLabel, onReveal }: HeroIntroProps) {
  const { displayed, done } = useTypewriter({ text: name, speed: 80, delay: 500 })
  const [showRole, setShowRole] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [lifting, setLifting] = useState(false)

  useEffect(() => {
    if (done) {
      const t1 = setTimeout(() => setShowRole(true), 300)
      const t2 = setTimeout(() => setShowHint(true), 800)
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [done])

  // Trigger: clic en flecha, scroll de mouse o touch en móvil
  useEffect(() => {
    const handleReveal = () => {
      if (lifting) return
      setLifting(true)
      setTimeout(onReveal, 600)
    }

    const handleWheel = () => handleReveal()
    const handleTouch = () => handleReveal()

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouch, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [lifting, onReveal])

  const handleClick = () => {
    if (lifting) return
    setLifting(true)
    setTimeout(onReveal, 600)
  }

  return (
    <>
      {/* Cortina superior — sube hacia arriba */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center"
        style={{
          background: 'var(--color-bg-primary)',
          transform: lifting ? 'translateY(-100%)' : 'translateY(0)',
          transition: lifting ? 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        }}
      >
        {/* Nombre con typewriter */}
        <div
          className="font-mono font-bold text-center"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            color: 'var(--color-text-primary)',
            minHeight: '1.2em',
            letterSpacing: '-0.02em',
          }}
        >
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '0.85em',
              background: 'var(--color-accent)',
              marginLeft: '4px',
              verticalAlign: 'middle',
              borderRadius: '1px',
              animation: 'blink 0.8s step-end infinite',
            }}
          />
        </div>

        {/* Cargo */}
        <div
          className="font-mono mt-3 text-center transition-all duration-700"
          style={{
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            color: 'var(--color-text-secondary)',
            opacity: showRole ? 1 : 0,
            transform: showRole ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          {role} ·{' '}
          <span style={{ color: 'var(--color-accent)' }}>Medellín, CO</span>
        </div>

        {/* Flecha de scroll */}
        <button
          onClick={handleClick}
          className="absolute flex flex-col items-center gap-2 transition-all duration-500"
          style={{
            bottom: '2.5rem',
            opacity: showHint ? 1 : 0,
            transform: showHint ? 'translateY(0)' : 'translateY(8px)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label={scrollLabel}
        >
          <span
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}
          >
            {scrollLabel}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ animation: 'bounce 1.4s ease-in-out infinite' }}
          >
            <path
              d="M10 3v14M4 11l6 6 6-6"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  )
}