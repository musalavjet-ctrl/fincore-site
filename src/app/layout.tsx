import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/i18n/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

const siteUrl = 'https://fincore-site.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'FinCore — Факторинговое финансирование для бизнеса в Казахстане',
  description: 'FinCore.kz — факторинговое финансирование для таксопарков, доставки, e-commerce и малого бизнеса в Казахстане. Оборотные средства от 1 рабочего дня без сложных банковских процедур.',
  keywords: [
    'факторинг', 'факторинг Казахстан', 'факторинговое финансирование', 'оборотные средства',
    'финансирование бизнеса', 'FinCore', 'финтех Казахстан', 'факторинг Алматы',
    'factoring', 'factoring Kazakhstan', 'business financing', 'working capital',
    'факторинг такси', 'факторинг доставка', 'факторинг e-commerce',
  ],
  icons: { icon: '/logo.jpg' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ru': siteUrl,
      'kk': siteUrl,
      'en': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'FinCore — Факторинговое финансирование для бизнеса',
    description: 'Оборотные средства под будущие доходы — быстро, просто и без долгих банковских процедур. Факторинг для таксопарков, доставки, e-commerce в Казахстане.',
    siteName: 'FinCore',
    locale: 'ru_RU',
    alternateLocale: ['kk_KZ', 'en_US'],
    images: [
      {
        url: '/og-image.jpg',
        width: 512,
        height: 512,
        alt: 'FinCore — факторинговое финансирование',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'FinCore — Факторинговое финансирование для бизнеса',
    description: 'Оборотные средства под будущие доходы — быстро, просто и без долгих банковских процедур.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'FinCorKaz',
      alternateName: 'ТОО «ФинКорКаз»',
      url: siteUrl,
      logo: `${siteUrl}/logo.jpg`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'sales@fincore.kz',
          telephone: '+77477359572',
          contactType: 'sales',
          availableLanguage: ['Russian', 'Kazakh', 'English'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KZ',
        addressLocality: 'Almaty',
        streetAddress: 'Yemtsova street, 9B',
      },
    },
    {
      '@type': 'FinancialService',
      name: 'FinCore — Factoring Finance',
      description: 'Factoring finance for businesses in Kazakhstan. Working capital against future revenue for taxi fleets, delivery services, e-commerce, auto dealers, and logistics companies.',
      url: siteUrl,
      areaServed: {
        '@type': 'Country',
        name: 'Kazakhstan',
      },
      serviceType: 'Factoring',
      provider: {
        '@type': 'Organization',
        name: 'FinCorKaz',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className} suppressHydrationWarning>
      <body className="bg-[#f5f5f7] text-[#1d1d1f]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
