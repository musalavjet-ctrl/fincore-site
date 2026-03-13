const steps = [
  {
    num: '01',
    title: 'Оставляете заявку',
    desc: 'Напишите нам на email или в WhatsApp — мы свяжемся с вами в течение дня.',
  },
  {
    num: '02',
    title: 'Анализируем ваш бизнес',
    desc: 'Изучаем вашу компанию и подбираем оптимальные условия финансирования.',
  },
  {
    num: '03',
    title: 'Подписываем документы',
    desc: 'Быстрое оформление — минимум бумаг и бюрократии.',
  },
  {
    num: '04',
    title: 'Получаете финансирование',
    desc: 'Средства поступают на ваш счёт — развивайте бизнес без кассовых разрывов.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-12 sm:py-16 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">Как это работает</h2>
        <p className="text-[#86868b] text-center mb-8 max-w-xl mx-auto">
          Четыре простых шага от заявки до финансирования
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(s => (
            <div key={s.num} className="bg-white rounded-2xl shadow-sm p-6 relative">
              <div className="text-4xl font-bold text-[#0071e3]/15 mb-3">{s.num}</div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
