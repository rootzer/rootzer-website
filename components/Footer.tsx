"use client"

import { Facebook, Twitter, Github, Linkedin, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  //{ icon: Facebook, href: 'https://facebook.com' },
  //{ icon: X, href: 'https://x.com' },
  { icon: Github, href: 'https://github.com/rootzer' },
  //{ icon: Linkedin, href: 'https://linkedin.com' },
]

export default function Footer() {
  const { t } = useLanguage()

  const menuItems = [
    { label: t('menu.project'), href: '#projeto' },
    { label: t('menu.roots'), href: '#raizes' },
    { label: t('menu.community'), href: '#comunidade' },
    { label: t('menu.support'), href: '#apoie' },
    { label: t('menu.license'), href: '#licenca' },
  ]

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{t('footer.projectName')}</h2>
        <nav className="flex justify-center space-x-6 mb-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

