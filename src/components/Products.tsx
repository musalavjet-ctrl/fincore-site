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
    <section id="products" className="py-12 sm:py-16 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">Продукты</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
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

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#86868b] mb-4">Не знаете, какой продукт подходит? Мы поможем разобраться</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:sales@fincore.kz?subject=Заявка%20на%20факторинг&body=Здравствуйте!%0A%0AПрошу%20рассказать%20подробнее%20об%20условиях%20факторинга.%0A%0AНазвание%20компании:%20%0AСфера%20деятельности:%20%0AЖелаемая%20сумма:%20%0A%0AС%20уважением,"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0062c4] active:bg-[#0055b0] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Написать на email
            </a>
            <a
              href="https://wa.me/77477359572?text=Здравствуйте!%20Прошу%20рассказать%20подробнее%20об%20условиях%20факторинга."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-6 py-3 rounded-full hover:bg-[#20bd5a] active:bg-[#1caa51] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
