"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Github, Download } from 'lucide-react'

const roots = [
  {
    id: 1,
    name: 'Projeto 1',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 1',
    about: 'Informações detalhadas sobre o Projeto 1',
    github: 'https://github.com/org/projeto1',
    downloads: [
      { type: 'npm', url: 'https://www.npmjs.com/package/projeto1' },
      { type: 'PyPI', url: 'https://pypi.org/project/projeto1/' },
    ],
  },
  {
    id: 2,
    name: 'Projeto 2',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 2',
    about: 'Informações detalhadas sobre o Projeto 2',
    github: 'https://github.com/org/projeto2',
    downloads: [
      { type: 'RubyGems', url: 'https://rubygems.org/gems/projeto2' },
      { type: 'Maven', url: 'https://mvnrepository.com/artifact/org.example/projeto2' },
    ],
  },
  {
    id: 3,
    name: 'Projeto 3',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 3',
    about: 'Informações detalhadas sobre o Projeto 3',
    github: 'https://github.com/org/projeto3',
    downloads: [
      { type: 'npm', url: 'https://www.npmjs.com/package/projeto3' },
    ],
  },
  {
    id: 4,
    name: 'Projeto 4',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 4',
    about: 'Informações detalhadas sobre o Projeto 4',
    github: 'https://github.com/org/projeto4',
    downloads: [
      { type: 'PyPI', url: 'https://pypi.org/project/projeto4/' },
    ],
  },
  {
    id: 5,
    name: 'Projeto 5',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 5',
    about: 'Informações detalhadas sobre o Projeto 5',
    github: 'https://github.com/org/projeto5',
    downloads: [
      { type: 'RubyGems', url: 'https://rubygems.org/gems/projeto5' },
    ],
  },
  {
    id: 6,
    name: 'Projeto 6',
    image: '/placeholder.svg?height=100&width=100',
    description: 'Breve descrição do Projeto 6',
    about: 'Informações detalhadas sobre o Projeto 6',
    github: 'https://github.com/org/projeto6',
    downloads: [
      { type: 'Maven', url: 'https://mvnrepository.com/artifact/org.example/projeto6' },
    ],
  },
]

export default function Roots() {
  const [selectedRoot, setSelectedRoot] = useState(roots[0])
  const { t } = useLanguage()

  return (
    <section id="raizes" className="py-12 pt-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('roots.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8">
          {roots.map((root) => (
            <Card 
              key={root.id} 
              className={`cursor-pointer transition-all duration-300 bg-white dark:bg-gray-700 ${selectedRoot.id === root.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedRoot(root)}
            >
              <CardHeader className="p-2 sm:p-4">
                <Image
                  src={root.image}
                  alt={root.name}
                  width={100}
                  height={100}
                  className="rounded-lg mx-auto w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24"
                />
              </CardHeader>
              <CardContent className="p-2 sm:p-4 pt-0">
                <CardTitle className="text-center text-xs sm:text-sm">{root.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedRoot && (
          <div className="flex justify-center">
            <Card className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 bg-white dark:bg-gray-700">
              <CardHeader>
                <CardTitle>{selectedRoot.name}</CardTitle>
                <CardDescription>{selectedRoot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{selectedRoot.about}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" onClick={() => window.open(selectedRoot.github, '_blank')}>
                  <Github className="mr-2 h-4 w-4" /> {t('roots.github')}
                </Button>
                {selectedRoot.downloads.map((download, index) => (
                  <Button key={index} variant="outline" onClick={() => window.open(download.url, '_blank')}>
                    <Download className="mr-2 h-4 w-4" /> {t('roots.download')} ({download.type})
                  </Button>
                ))}
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

