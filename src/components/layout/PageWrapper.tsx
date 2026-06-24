import { NavBar } from './NavBar'
import { Footer } from './Footer'

interface PageWrapperProps {
  children: React.ReactNode
  currentPath: string
  hideNav?: boolean
}

export function PageWrapper({ children, currentPath, hideNav = false }: PageWrapperProps) {
    return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg-primary)' }}>
      {!hideNav && <NavBar />}
      <main className="flex-1 ${hideNav ? 'pt-0' : 'pt-16'}">
        {children}
      </main>
      {!hideNav && <Footer currentPath={currentPath} />}
    </div>
  )
}