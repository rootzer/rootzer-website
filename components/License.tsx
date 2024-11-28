"use client"

import { useLanguage } from '@/contexts/LanguageContext'

export default function License() {
  const { t } = useLanguage()

  return (
    <section id="licenca" className="py-12 pt-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('license.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">{t('license.description')}</p>
          <h3 className="text-xl font-semibold mb-2">{t('license.mit.title')}</h3>
          <pre className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-sm overflow-x-auto">
            {t('license.mit.text')}
          </pre>
        </div>
      </div>
    </section>
  )
}

