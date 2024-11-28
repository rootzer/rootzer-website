"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { Github, DollarSign, Mail } from 'lucide-react'

export default function Support() {
  const { t } = useLanguage()

  return (
    <section id="apoie" className="py-12 pt-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('support.title')}</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Github className="mr-2 h-6 w-6" />
              {t('support.development.title')}
            </h3>
            <p className="mb-6 text-lg">{t('support.development.description')}</p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open('https://github.com/rootzer', '_blank')}
            >
              {t('support.development.button')}
            </Button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2 h-6 w-6" />
              {t('support.financial.title')}
            </h3>
            <p className="mb-6 text-lg">{t('support.financial.description')}</p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://github.com/sponsors/migmoroni', '_blank')}
            >
              {t('support.financial.button')}
            </Button>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 h-6 w-6" />
              {t('support.other.title')}
            </h3>
            <p className="mb-6 text-lg">{t('support.other.description')}</p>
            <a 
              href="mailto:contato@seuprojeto.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
            >
              contato@seuprojeto.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

