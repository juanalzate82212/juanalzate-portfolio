import { NavBar } from './NavBar'
import { Footer } from './Footer'

interface PageWrapperProps {
  children: React.ReactNode
  currentPath: string
}

export function PageWrapper({ children, currentPath }: PageWrapperProps) {
    return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg-primary)' }}>
      <NavBar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer currentPath={currentPath} />
    </div>
  )
}