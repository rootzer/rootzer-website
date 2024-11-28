"use client"

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Project() {
  const { t } = useLanguage()

  return (
    <section id="projeto" className="pt-24 mt-16">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt={t('project.image.alt')}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p>{t('project.paragraph1')}</p>
          <p>{t('project.paragraph2')}</p>
          <p>{t('project.paragraph3')}</p>
        </div>
      </div>
    </section>
  )
}

