'use client'

import { useTranslation } from '@/i18n/LanguageContext'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-10 sm:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#424245] text-base sm:text-lg leading-relaxed">
            {t('about.text')}
          </p>
        </div>
      </div>
    </section>
  )
}
