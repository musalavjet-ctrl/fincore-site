'use client'

import { useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#about', label: 'О нас' },
  { href: '#products', label: 'Продукты' },
  { href: '#industries', label: 'Для кого' },
  { href: '#how', label: 'Как это работает' },
  { href: '#advantages', label: 'Преимущества' },
  { href: '#contacts', label: 'Контакты' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

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
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[#424245] hover:text-[#0071e3] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-[#1d1d1f]"
          aria-label="Меню"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d2d2d7]/50 px-4 py-2">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-[#424245] active:bg-[#f5f5f7] rounded-lg px-2 -mx-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
