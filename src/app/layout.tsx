import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'FinCore — Факторинговое финансирование для бизнеса',
  description: 'FinCore.kz — факторинговое финансирование для таксопарков, доставки, e-commerce и малого бизнеса в Казахстане и Центральной Азии. Оборотные средства быстро и просто.',
  icons: { icon: '/logo.jpg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="bg-[#f5f5f7] text-[#1d1d1f]">
        {children}
      </body>
    </html>
  )
}
