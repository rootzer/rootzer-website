import Menu from '@/components/Menu'
import Project from '@/components/Project'
import Roots from '@/components/Roots'
import Community from '@/components/Community'
import Support from '@/components/Support'
import License from '@/components/License'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Menu />
          <main className="flex-grow">
            <Project />
            <Roots />
            <Community />
            <Support />
            <License />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

