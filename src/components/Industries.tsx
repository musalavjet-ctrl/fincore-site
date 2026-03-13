const industries = [
  {
    title: 'Таксопарки и автопарки',
    desc: 'Авансы под будущие выплаты от платформ для поддержания и расширения парка.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h17.25m-17.25 0V4.875c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v9.375m-9 0h9m0 0h2.25c.621 0 1.125.504 1.125 1.125v2.625" />
      </svg>
    ),
  },
  {
    title: 'Службы доставки',
    desc: 'Финансирование под денежные потоки от курьерских и логистических сервисов.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
      </svg>
    ),
  },
  {
    title: 'E-commerce и маркетплейсы',
    desc: 'Оборотные средства для продавцов под будущие выплаты от площадок.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Автодилеры',
    desc: 'Финансирование оборота под дебиторскую задолженность от покупателей.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Поставщики автозапчастей',
    desc: 'Закупки без кассовых разрывов — получайте средства до оплаты от покупателей.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: 'Логистика и каршеринг',
    desc: 'Средства на расширение автопарка и покрытие операционных расходов.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">Для кого</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          Мы работаем с компаниями из разных отраслей, предоставляя индивидуальные решения
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industries.map(ind => (
            <div key={ind.title} className="bg-[#f5f5f7] rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-3 sm:mb-4">
                {ind.icon}
              </div>
              <h3 className="text-[13px] sm:text-sm font-semibold text-[#1d1d1f] mb-1">{ind.title}</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
