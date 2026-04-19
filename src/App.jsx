import { useContext, useEffect } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import { ThemeProvider, ThemeContext } from './context/themeContext.jsx'

function AppContent() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
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
