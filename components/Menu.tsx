"use client"

import { useState } from 'react'
import { MenuIcon, Globe, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { smoothScroll } from '@/utils/smoothScroll'

const languages = [
  { code: 'pt-BR', label: 'Português' },
  { code: 'en-US', label: 'English' },
]

export default function Menu() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { label: t('menu.project'), href: '#projeto' },
    { label: t('menu.roots'), href: '#raizes' },
    { label: t('menu.community'), href: '#comunidade' },
    { label: t('menu.support'), href: '#apoie' },
    { label: t('menu.license'), href: '#licenca' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-24"> {/* Espaço vazio à esquerda para balancear o layout */}
        </div>
        <nav className="hidden md:flex space-x-8 mx-auto">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={(e) => smoothScroll(e, item.href.slice(1))}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme}
            className="bg-background text-foreground border-border"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-background text-foreground border-border"
              >
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onSelect={() => setLanguage(lang.code as 'pt-BR' | 'en-US')}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

