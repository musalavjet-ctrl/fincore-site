'use client'

import { useTranslation } from '@/i18n/LanguageContext'

const advantageItems = [
  {
    key: 'fast',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    key: 'flex',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    key: 'transparent',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    key: 'docs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
]

export function Advantages() {
  const { t } = useTranslation()

  return (
    <section id="advantages" className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">{t('advantages.title')}</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          {t('advantages.subtitle')}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {advantageItems.map(a => (
            <div key={a.key} className="bg-[#f5f5f7] rounded-2xl p-4 sm:p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3">
                {a.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">{t(`advantages.${a.key}.title`)}</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">{t(`advantages.${a.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
