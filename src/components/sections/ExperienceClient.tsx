'use client'

import Link from 'next/link'
import { GraduationCap, ArrowRight } from 'lucide-react'

interface ExperienceClientProps {
  locale: string
  translations: {
    eyebrow: string
    title: string
    sectionWork: string
    sectionEducation: string
    present: string
    hintText: string
    hintLink: string
    freelanceTitle: string
    freelanceSubtitle: string
    freelanceDesc: string
    solumeciDesc: string
    eduDegree: string
    eduInstitution: string
    eduExpected: string
  }
}

export function ExperienceClient({ locale, translations: t }: ExperienceClientProps) {

  return (
    <div style={{ padding: '80px 40px 40px', maxWidth: '860px', margin: '0 auto' }}>

      {/* Eyebrow + título */}
      <p
        className="font-mono uppercase tracking-widest"
        style={{ fontSize: '11px', color: 'var(--color-accent)', marginBottom: '8px' }}
      >
        {t.eyebrow}
      </p>
      <h1
        className="font-mono font-bold"
        style={{
          fontSize: '28px',
          color: 'var(--color-text-primary)',
          marginBottom: '40px',
          paddingBottom: '16px',
          borderBottom: '3px solid var(--color-border-subtle)',
        }}
      >
        {t.title}
      </h1>

      {/* Sección experiencia laboral */}
      <div
        className="font-mono uppercase"
        style={{
          fontSize: '12px',
          color: 'var(--color-accent)',
          letterSpacing: '0.15em',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {t.sectionWork}
        <span style={{ flex: 1, height: '3px', background: 'var(--color-border-subtle)', display: 'inline-block' }} />
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '28px', marginBottom: '48px' }}>
        {/* Línea vertical */}
        <div style={{
          position: 'absolute',
          left: '6px',
          top: '6px',
          bottom: '6px',
          width: '1px',
          background: 'var(--color-border-subtle)',
        }} />

        {/* Item: Freelance */}
        <div style={{ position: 'relative', marginBottom: '0' }}>
          {/* Dot */}
          <div style={{
            position: 'absolute',
            left: '-22px',
            top: '5px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            boxShadow: '0 0 10px rgba(0,255,148,0.4)',
            border: '2px solid var(--color-bg-primary)',
          }} />

          <p
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--color-accent)', marginBottom: '4px', letterSpacing: '0.08em' }}
          >
            Jun 2025 — {t.present}
          </p>
          <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
            {t.freelanceTitle}
          </h3>
          <p
            className="font-mono"
            style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}
          >
            {t.freelanceSubtitle}
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>
            {t.freelanceDesc}
          </p>

          {/* Proyecto destacado: Solumeci */}
          <div style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border-subtle)',
            borderLeft: '2px solid rgba(0,255,148,0.4)',
            borderRadius: '6px',
            padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                Solumeci SAS
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '10px',
                  color: 'var(--color-accent)',
                  background: 'var(--color-accent-dim)',
                  border: '1px solid rgba(0,255,148,0.2)',
                  padding: '1px 6px',
                  borderRadius: '3px',
                }}
              >
                Feb - Mar 2026
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {t.solumeciDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Sección educación */}
      <div
        className="font-mono uppercase"
        style={{
          fontSize: '12px',
          color: 'var(--color-accent)',
          letterSpacing: '0.15em',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {t.sectionEducation}
        <span style={{ flex: 1, height: '3px', background: 'var(--color-border-subtle)', display: 'inline-block' }} />
      </div>

      {/* Card educación */}
      <div
        style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: '8px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'var(--color-accent-dim)',
          border: '1px solid rgba(0,255,148,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <GraduationCap size={20} style={{ color: 'var(--color-accent)' }} />
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
            {t.eduDegree}
          </p>
          <p
            className="font-mono"
            style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}
          >
            Politécnico Colombiano Jaime Isaza Cadavid
          </p>
          <span
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border-subtle)',
              padding: '2px 8px',
              borderRadius: '3px',
              display: 'inline-block',
            }}
          >
            {t.eduExpected}
          </span>
        </div>
      </div>

      {/* Hint link a Projects */}
      <Link
        href={`/${locale}/projects`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '16px 24px',
          borderRadius: '8px',
          border: '1px dashed rgba(0,255,148,0.25)',
          background: 'var(--color-accent-dim)',
          textDecoration: 'none',
          marginBottom: '8px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--color-accent)'
          e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,148,0.08)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(0,255,148,0.25)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
          {t.hintText}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: '12px', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <ArrowRight size={13} />
          {t.hintLink}
        </span>
      </Link>

    </div>
  )
}