"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react'

type Language = 'pt-BR' | 'en-US'

// Define a type for our translation keys
type TranslationKey = 
  | 'menu.project'
  | 'menu.roots'
  | 'menu.community'
  | 'menu.support'
  | 'menu.license'
  | 'project.image.alt'
  | 'project.paragraph1'
  | 'project.paragraph2'
  | 'project.paragraph3'
  | 'roots.title'
  | 'roots.github'
  | 'roots.download'
  | 'community.title'
  | 'community.description'
  | 'community.button'
  | 'support.title'
  | 'support.development.title'
  | 'support.development.description'
  | 'support.development.button'
  | 'support.financial.title'
  | 'support.financial.description'
  | 'support.financial.button'
  | 'support.other.title'
  | 'support.other.description'
  | 'license.title'
  | 'license.description'
  | 'license.mit.title'
  | 'license.mit.text'
  | 'footer.projectName'

// Update the translations type
type Translations = {
  [key in Language]: {
    [key in TranslationKey]: string
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations: Translations = {
  'pt-BR': {
    'menu.project': 'O Projeto',
    'menu.roots': 'Raízes',
    'menu.community': 'Comunidade',
    'menu.support': 'Apoie',
    'menu.license': 'Licença',
    'project.image.alt': '',
    'project.paragraph1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    'project.paragraph2': 'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    'project.paragraph3': 'Proin quis tortor orci. Etiam at risus et justo dignissim congue.',
    'roots.title': 'Nossas Raízes',
    'roots.github': 'Documentação do projeto',
    'roots.download': 'Baixar',
    'community.title': 'Junte-se à nossa Comunidade!',
    'community.description': 'Participe do nosso servidor no Discord e conecte-se com outros desenvolvedores e entusiastas do projeto.',
    'community.button': 'Entrar no Discord',
    'support.title': 'Apoie o Projeto',
    'support.development.title': 'Desenvolvimento',
    'support.development.description': 'Contribua com o desenvolvimento do projeto através do GitHub.',
    'support.development.button': 'Contribuir no GitHub',
    'support.financial.title': 'Apoio Financeiro',
    'support.financial.description': 'Ajude a manter o projeto com uma doação através do GitHub Sponsors.',
    'support.financial.button': 'Doar via GitHub Sponsors',
    'support.other.title': 'Outros Apoios',
    'support.other.description': 'Para outras formas de apoio, entre em contato conosco por e-mail.',
    'license.title': 'Licença',
    'license.description': `
    Este é um projeto de código aberto (open source), o que significa que você tem a liberdade de usar, modificar e distribuir o código conforme suas necessidades, desde que siga os termos da licença.
    Todos os projetos possuem sua respectiva licença, onde neste momento, visando manter o uso na medida do possivel pela licença MIT, citada abaixo.
    A licença é escrita unico e exclusiva em inglês, para evitar mudanças de sentido que uma tradução poderia ocasionar.`,
    'license.mit.title': 'Licença MIT',
    'license.mit.text': `MIT License

Copyright (c) Miguel Eduardo Senna Moroni <miguelmcontato@gmail.com> (miguelmcontato@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    'footer.projectName': 'O Projeto Rootzer',
  },
  'en-US': {
    'menu.project': 'The Project',
    'menu.roots': 'Roots',
    'menu.community': 'Community',
    'menu.support': 'Support',
    'menu.license': 'License',
    'project.image.alt': '',
    'project.paragraph1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    'project.paragraph2': 'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    'project.paragraph3': 'Proin quis tortor orci. Etiam at risus et justo dignissim congue.',
    'roots.title': 'Our Roots',
    'roots.github': 'Project documentation',
    'roots.download': 'Download',
    'community.title': 'Join our Community!',
    'community.description': 'Join our Discord server and connect with other developers and project enthusiasts.',
    'community.button': 'Join Discord',
    'support.title': 'Support the Project',
    'support.development.title': 'Development',
    'support.development.description': 'Contribute to the project development through GitHub.',
    'support.development.button': 'Contribute on GitHub',
    'support.financial.title': 'Financial Support',
    'support.financial.description': 'Help maintain the project with a donation through GitHub Sponsors.',
    'support.financial.button': 'Donate via GitHub Sponsors',
    'support.other.title': 'Other Support',
    'support.other.description': 'For other forms of support, please contact us via email.',
    'license.title': 'License',
    'license.description': 
    `This is an open-source project, which means you have the freedom to use, modify, and distribute the code according to your needs, as long as you follow the terms of the license.
    All projects have their respective license, where at this moment, aiming to maintain the use as far as possible by the MIT license, mentioned below.`,
    'license.mit.title': 'MIT License',
    'license.mit.text': `MIT License

Copyright (c) Miguel Eduardo Senna Moroni <miguelmcontato@gmail.com> (miguelmcontato@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    'footer.projectName': 'Rootzer Project',
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR')

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

