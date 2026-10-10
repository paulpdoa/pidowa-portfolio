import { useContext, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import { ThemeProvider, ThemeContext } from './context/themeContext.jsx'

function AppContent() {
  const { theme } = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    // hide loader when the whole window has loaded; fallback to 3s
    const handleLoad = () => setLoading(false)
    window.addEventListener('load', handleLoad)
    const timeout = setTimeout(() => setLoading(false), 3000)
    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-slate-900/90">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
              style={{ borderColor: theme === 'dark' ? 'rgba(148,163,184,1)' : 'rgba(148,163,184,1)', borderTopColor: theme === 'dark' ? 'transparent' : 'transparent' }}
              aria-hidden="true" />
            <span className="text-sm text-slate-600 dark:text-slate-300">Loading…</span>
          </div>
        </div>
      )}

      <main className={`min-h-screen max-w-4xl mx-auto px-4 py-8 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <Header />
        <About />
        <WorkExperience />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
