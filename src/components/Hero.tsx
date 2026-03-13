'use client'

import { useTranslation } from '@/i18n/LanguageContext'
import { CTAButtons } from './CTAButtons'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-gradient-to-br from-[#1d1d1f] to-[#0071e3] text-white pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <CTAButtons variant="hero" emailLabel={t('hero.email')} waLabel={t('hero.whatsapp')} />
      </div>
    </section>
  )
}
