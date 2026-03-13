const stats = [
  { value: '5', label: 'стран присутствия' },
  { value: '15 млн ₸', label: 'макс. сумма экспресс' },
  { value: '180', label: 'дней — макс. срок' },
  { value: '1 день', label: 'на решение' },
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-4">О компании</h2>
          <p className="text-[#86868b] text-base sm:text-lg leading-relaxed">
            FinCore.kz — финтех-компания, специализирующаяся на факторинговом финансировании.
            Мы помогаем бизнесу получить оборотные средства быстро и без сложных банковских процедур,
            предлагая индивидуальный подход и современные технологии.
          </p>
          <p className="text-[#86868b] text-base sm:text-lg leading-relaxed mt-4">
            Работаем в Казахстане, Узбекистане, Кыргызстане, Азербайджане и Грузии.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-[#f5f5f7] rounded-2xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#0071e3] mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm text-[#86868b]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
