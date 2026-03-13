'use client'

import { useTranslation } from '@/i18n/LanguageContext'
import { CTAButtons } from './CTAButtons'

export function Contacts() {
  const { t } = useTranslation()

  const emailHref = `mailto:sales@fincore.kz?subject=${encodeURIComponent(t('email.subject'))}&body=${encodeURIComponent(t('email.body'))}`
  const waHref = `https://wa.me/77477359572?text=${encodeURIComponent(t('wa.text'))}`

  const details = [
    [t('contacts.name.label'), t('contacts.name.value')],
    [t('contacts.bin.label'), '251040009908'],
    [t('contacts.address.label'), t('contacts.address.value')],
  ]

  return (
    <section id="contacts" className="py-12 sm:py-16 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">{t('contacts.title')}</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          {t('contacts.subtitle')}
        </p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Реквизиты */}
          <div className="p-5 sm:p-8 space-y-5">
            {details.map(([label, value]) => (
              <div key={label}>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#86868b] mb-0.5">{label}</div>
                <div className="text-sm sm:text-base font-medium text-[#1d1d1f] break-words">{value}</div>
              </div>
            ))}
          </div>

          {/* Email & WhatsApp */}
          <div className="border-t border-[#e5e5e5] p-5 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#86868b] mb-0.5">Email</div>
                <a href={emailHref} className="text-sm sm:text-base font-medium text-[#0071e3] hover:underline">
                  sales@fincore.kz
                </a>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#86868b] mb-0.5">WhatsApp</div>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium text-[#0071e3] hover:underline">
                  +7 747 735 95 72
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-[#e5e5e5] p-5 sm:p-8 bg-[#fafafa] text-center">
            <p className="text-sm text-[#86868b] mb-4">{t('contacts.cta')}</p>
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
