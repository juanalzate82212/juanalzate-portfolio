'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { SITE_CONFIG, NEXT_PAGE } from '@/lib/constants'

interface FooterProps {
  currentPath: string
}

export function Footer({ currentPath }: FooterProps) {
  const t = useTranslations('footer')
  const locale = useLocale()
  const nextPath = `/${locale}${NEXT_PAGE[currentPath] === '/' ? '' : NEXT_PAGE[currentPath] ?? ''}`

  return (
    <footer>
      {/* Wave divider */}
      <div style={{ lineHeight: 0, marginBottom: '-2px' }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '60px', display: 'block', transform: "scaleY(-1)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="var(--color-bg-nav)"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="var(--color-bg-nav)"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="var(--color-bg-nav)"
          />
        </svg>
      </div>

      {/* Contenido del footer */}
      <div
        style={{ background: 'var(--color-bg-nav)' }}
      >
        <div style={{ width: "100%",
          padding: "40px 48px 48px 48px"
        }}>

          {/* Fila superior */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">

            {/* Izquierda — identidad */}
            <div>
              <p
                className="font-mono font-bold text-2xl mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                JA_
              </p>
              <p
                className="font-mono text-base"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {SITE_CONFIG.name}
              </p>
              <p
                className="text-base mt-1"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {SITE_CONFIG.role_es} · {SITE_CONFIG.location}
              </p>
            </div>

            {/* Derecha — redes sociales */}
            <div className="flex flex-col gap-3">
              <p
                className="font-mono text-sm uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {`// Redes`}
              </p>
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: 'rgba(0,255,148,0.2)',
                    color: 'var(--color-text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,148,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,148,0.2)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: 'rgba(0,255,148,0.2)',
                    color: 'var(--color-text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,148,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,148,0.2)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: 'rgba(0,255,148,0.2)',
                    color: 'var(--color-text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,148,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,148,0.2)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Email"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: 'rgba(0,255,148,0.2)',
                    color: 'var(--color-text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,148,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,148,0.2)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div
            className="mb-4"
            style={{ borderTop: '1px solid rgba(0,255,148,0.1)' }}
          />

          {/* Fila inferior */}
          <div className="flex items-center justify-between">
            <p
              className="font-mono text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              © {new Date().getFullYear()} · Construido con Next.js y Supabase
            </p>
            <Link
              href={nextPath}
              className="font-mono text-sm flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              {t('next')} →
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}