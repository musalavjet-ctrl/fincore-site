'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from './types'
import { translations } from './translations'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (key) => key,
})

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'ru'
  const stored = localStorage.getItem('lang')
  if (stored === 'ru' || stored === 'kk' || stored === 'en') return stored
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('kk')) return 'kk'
  if (nav.startsWith('en')) return 'en'
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLangState(detectLang())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lang', lang)
      document.documentElement.lang = lang
    }
  }, [lang, mounted])

  const setLang = (newLang: Lang) => setLangState(newLang)

  const t = (key: string): string => {
    return translations[lang][key] ?? translations.ru[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
