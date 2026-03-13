import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.jpg" alt="FinCore" width={80} height={80} className="rounded-xl mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] text-center mb-4">О компании</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-[#424245] text-base sm:text-lg leading-relaxed">
            FinCore.kz — финтех-компания, специализирующаяся на факторинговом финансировании.
            Мы помогаем бизнесу получить оборотные средства быстро и без сложных банковских процедур,
            предлагая индивидуальный подход и современные технологии.
          </p>
          <p className="text-[#424245] text-base sm:text-lg leading-relaxed">
            Работаем в Казахстане, Узбекистане, Кыргызстане, Азербайджане и Грузии.
          </p>
        </div>
      </div>
    </section>
  )
}
