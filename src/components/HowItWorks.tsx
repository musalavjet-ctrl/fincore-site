'use client'

import { useTranslation } from '@/i18n/LanguageContext'

const steps = [
  { num: '01', key: '1' },
  { num: '02', key: '2' },
  { num: '03', key: '3' },
  { num: '04', key: '4' },
]

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how" className="py-12 sm:py-16 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">{t('how.title')}</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          {t('how.subtitle')}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(s => (
            <div key={s.num} className="bg-white rounded-2xl shadow-sm p-6 relative">
              <div className="text-4xl font-bold text-[#0071e3]/15 mb-3">{s.num}</div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-2">{t(`how.${s.key}.title`)}</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">{t(`how.${s.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
