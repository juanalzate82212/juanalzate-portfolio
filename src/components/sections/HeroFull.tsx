'use client'

import { TECH_STACK } from '@/lib/constants'

interface HeroFullProps {
  eyebrow: string
  role: string
  tagline: string
  // available: string
  ctaProjects: string
  ctaContact: string
  stackLabel: string
  visible: boolean
  onNavigateProjects: () => void
  onNavigateContact: () => void
}

export function HeroFull({
  eyebrow,
  role,
  tagline,
  // available,
  ctaProjects,
  ctaContact,
  stackLabel,
  visible,
  onNavigateProjects,
  onNavigateContact,
}: HeroFullProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6 transition-all duration-700"
      style={{
        minHeight: 'calc(100vh - 96px)',
        paddingTop: "80px",
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {/* Eyebrow */}
      <p
        className="font-mono uppercase tracking-widest"
        style={{ fontSize: '11px', color: 'var(--color-accent)', marginBottom: "24px"}}
      >
        {`// ${eyebrow}`}
      </p>

      {/* Nombre */}
      <h1
        className="font-mono font-bold"
        style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        Juan Alzate
      </h1>

      {/* Rol */}
      <p
        className="font-mono"
        style={{
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          color: 'var(--color-text-secondary)',
          marginBottom: "16px",
        }}
      >
        {role} ·{' '}
        <span style={{ color: 'var(--color-accent)' }}>Medellín, CO</span>
      </p>

      {/* Disponibilidad */}
      {/* <div className="flex items-center" style={{ gap: "8px", marginBottom: "32px" }}>
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            display: 'inline-block',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
        <span
          className="text-xs"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {available}
        </span>
      </div> */}

      {/* Tagline */}
      <p
        className="mb-10 max-w-lg"
        style={{
          fontSize: '16px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
          marginBottom: "40px",
        }}
      >
        {tagline}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center" style={{ gap: "12px", marginBottom: "56px"}}>
        <button
          onClick={onNavigateProjects}
          className="font-medium transition-all duration-200"
          style={{
            background: 'var(--color-accent)',
            color: '#0D0D0F',
            fontSize: '13px',
            padding: '10px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.88'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,148,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {ctaProjects}
        </button>
        <button
          onClick={onNavigateContact}
          className="font-medium transition-all duration-200"
          style={{
            background: 'transparent',
            color: 'var(--color-text-primary)',
            fontSize: '13px',
            padding: '10px 24px',
            borderRadius: '6px',
            border: '1px solid var(--color-border-subtle)',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--color-accent)'
            e.currentTarget.style.color = 'var(--color-accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--color-border-subtle)'
            e.currentTarget.style.color = 'var(--color-text-primary)'
          }}
        >
          {ctaContact} →
        </button>
      </div>

      {/* Divisor */}
      <div
        className="w-full max-w-lg"
        style={{ borderTop: '3px solid var(--color-border-subtle)', marginBottom: '20px' }}
      />

      {/* Stack */}
      <p
        className="font-mono uppercase tracking-widest"
        style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: "16px" }}
      >
        {stackLabel}
      </p>
      <div className="flex flex-wrap justify-center" style={{ gap: "8px", maxWidth: "32rem", marginBottom: "80px"}}>
        {TECH_STACK.map(tech => (
          <span
            key={tech}
            className="font-mono transition-all duration-200"
            style={{
              fontSize: '13px',
              color: 'var(--color-accent)',
              border: '1px solid rgba(0,255,148,0.25)',
              padding: '5px 14px',
              borderRadius: '4px',
              background: 'var(--color-accent-dim)',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-accent)'
              e.currentTarget.style.boxShadow = '0 0 8px rgba(0,255,148,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,255,148,0.25)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}