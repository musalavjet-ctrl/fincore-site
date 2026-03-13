'use client'

import { useTranslation } from '@/i18n/LanguageContext'
import { CTAButtons } from './CTAButtons'

export function Products() {
  const { t } = useTranslation()

  const products = [
    {
      name: t('products.express'),
      accent: 'border-[#0071e3]',
      features: [
        t('products.express.1'),
        t('products.express.2'),
        t('products.express.3'),
        t('products.express.4'),
      ],
    },
    {
      name: t('products.max'),
      accent: 'border-[#1d1d1f]',
      features: [
        t('products.max.1'),
        t('products.max.2'),
        t('products.max.3'),
        t('products.max.4'),
      ],
    },
  ]

  return (
    <section id="products" className="py-12 sm:py-16 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">{t('products.title')}</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          {t('products.subtitle')}
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map(p => (
            <div key={p.name} className={`bg-white rounded-2xl shadow-sm p-6 sm:p-8 border-t-4 ${p.accent}`}>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">{p.name}</h3>
              <ul className="space-y-3">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d1d1f]">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#86868b] mb-4">{t('products.cta')}</p>
          <CTAButtons />
        </div>
      </div>
    </section>
  )
}
