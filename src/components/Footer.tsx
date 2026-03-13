'use client'

import Image from 'next/image'
import { useTranslation } from '@/i18n/LanguageContext'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#1d1d1f] text-white/60 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Image src="/logo.jpg" alt="FinCore" width={24} height={24} className="rounded" />
          <span className="text-base font-bold text-white">
            Fin<span className="text-[#0071e3]">Core</span>
          </span>
        </div>
        <p className="text-xs">{t('footer.copy').replace('{year}', String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  )
}
