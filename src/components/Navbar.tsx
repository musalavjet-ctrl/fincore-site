'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/i18n/LanguageContext'
import type { Lang } from '@/i18n/types'

const NAV_KEYS: { href: string; key: string }[] = [
  { href: '#about', key: 'nav.about' },
  { href: '#products', key: 'nav.products' },
  { href: '#industries', key: 'nav.industries' },
  { href: '#how', key: 'nav.how' },
  { href: '#advantages', key: 'nav.advantages' },
  { href: '#contacts', key: 'nav.contacts' },
]

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'ҚЗ' },
  { code: 'en', label: 'EN' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#d2d2d7]/50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="FinCore" width={28} height={28} className="rounded" />
          <span className="text-lg font-bold text-[#1d1d1f] tracking-tight">
            Fin<span className="text-[#0071e3]">Core</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_KEYS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[#424245] hover:text-[#0071e3] transition-colors">
              {t(l.key)}
            </a>
          ))}
          <a
            href="https://almaty.hh.kz/employer/12464572?hhtmFrom=vacancy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#424245] hover:text-[#0071e3] transition-colors"
          >
            {t('nav.career')}
          </a>
          <div className="border-l border-[#d2d2d7] h-5 mx-1" />
          <div className="flex items-center gap-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  lang === code
                    ? 'bg-[#0071e3] text-white'
                    : 'text-[#424245] hover:text-[#0071e3]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  lang === code
                    ? 'bg-[#0071e3] text-white'
                    : 'text-[#424245] hover:text-[#0071e3]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-2 text-[#1d1d1f]"
            aria-label="Menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d2d2d7]/50 px-4 py-2">
          {NAV_KEYS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-[#424245] active:bg-[#f5f5f7] rounded-lg px-2 -mx-2 transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="https://almaty.hh.kz/employer/12464572?hhtmFrom=vacancy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-[#424245] active:bg-[#f5f5f7] rounded-lg px-2 -mx-2 transition-colors"
          >
            {t('nav.career')}
          </a>
        </div>
      )}
    </nav>
  )
}
