const products = [
  {
    name: 'Экспресс',
    accent: 'border-[#0071e3]',
    features: [
      'Суммы до 15 млн ₸',
      'Срок до 180 дней',
      'Решение от 1 рабочего дня',
      'Минимальный пакет документов',
      'Стандартные условия',
    ],
  },
  {
    name: 'Максимум',
    accent: 'border-[#1d1d1f]',
    features: [
      'Суммы от 15 млн ₸ и выше',
      'Гибкие сроки по согласованию',
      'Индивидуальные условия',
      'Персональный менеджер',
      'Расширенная аналитика',
    ],
  },
]

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">Продукты</h2>
        <p className="text-[#86868b] text-center mb-12 max-w-xl mx-auto">
          Два формата финансирования — выберите подходящий для вашего бизнеса
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map(p => (
            <div key={p.name} className={`bg-white rounded-2xl shadow-sm p-6 sm:p-8 border-t-4 ${p.accent}`}>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">{p.name}</h3>
              <ul className="space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1d1d1f]">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
