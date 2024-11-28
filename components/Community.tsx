"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { DiscIcon as Discord } from 'lucide-react'

export default function Community() {
  const { t } = useLanguage()

  return (
    <section id="comunidade" className="py-12 pt-24 bg-gray-800 dark:bg-gray-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('community.title')}</h2>
        <p className="mb-8 text-xl">{t('community.description')}</p>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open('https://discord.gg/seu-link-aqui', '_blank')}
        >
          <Discord className="mr-2 h-6 w-6" />
          {t('community.button')}
        </Button>
      </div>
    </section>
  )
}

