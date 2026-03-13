import type { Lang } from './types'

const ru: Record<string, string> = {
  // Navbar
  'nav.about': 'О нас',
  'nav.products': 'Продукты',
  'nav.industries': 'Для кого',
  'nav.how': 'Как это работает',
  'nav.advantages': 'Преимущества',
  'nav.contacts': 'Контакты',
  'nav.career': 'Карьера',

  // Hero
  'hero.title': 'Факторинговое финансирование для вашего бизнеса',
  'hero.subtitle': 'Оборотные средства под будущие доходы — быстро, просто и без долгих банковских процедур',
  'hero.email': 'Написать на email',
  'hero.whatsapp': 'Написать в WhatsApp',

  // About
  'about.text': 'FinCore.kz — финтех-компания, специализирующаяся на факторинговом финансировании. Мы помогаем бизнесу получить оборотные средства быстро и без сложных банковских процедур, предлагая индивидуальный подход и современные технологии.',

  // Products
  'products.title': 'Продукты',
  'products.subtitle': 'Два формата финансирования — выберите подходящий для вашего бизнеса',
  'products.express': 'Экспресс',
  'products.express.1': 'Суммы до 15 млн ₸',
  'products.express.2': 'Срок до 180 дней',
  'products.express.3': 'Решение от 1 рабочего дня',
  'products.express.4': 'Минимальный пакет документов',
  'products.express.5': 'Стандартные условия',
  'products.max': 'Максимум',
  'products.max.1': 'Суммы от 15 млн ₸ и выше',
  'products.max.2': 'Гибкие сроки по согласованию',
  'products.max.3': 'Индивидуальные условия',
  'products.max.4': 'Персональный менеджер',
  'products.max.5': 'Расширенная аналитика',
  'products.cta': 'Не знаете, какой продукт подходит? Мы поможем разобраться',

  // Industries
  'industries.title': 'Для кого',
  'industries.subtitle': 'Мы работаем с компаниями из разных отраслей, предоставляя индивидуальные решения',
  'industries.taxi.title': 'Таксопарки и автопарки',
  'industries.taxi.desc': 'Авансы под будущие выплаты от платформ для поддержания и расширения парка.',
  'industries.delivery.title': 'Службы доставки',
  'industries.delivery.desc': 'Финансирование под денежные потоки от курьерских и логистических сервисов.',
  'industries.ecom.title': 'E-commerce и маркетплейсы',
  'industries.ecom.desc': 'Оборотные средства для продавцов под будущие выплаты от площадок.',
  'industries.dealers.title': 'Автодилеры',
  'industries.dealers.desc': 'Финансирование оборота под дебиторскую задолженность от покупателей.',
  'industries.parts.title': 'Поставщики автозапчастей',
  'industries.parts.desc': 'Закупки без кассовых разрывов — получайте средства до оплаты от покупателей.',
  'industries.logistics.title': 'Логистика и каршеринг',
  'industries.logistics.desc': 'Средства на расширение автопарка и покрытие операционных расходов.',

  // How it works
  'how.title': 'Как это работает',
  'how.subtitle': 'Четыре простых шага от заявки до финансирования',
  'how.1.title': 'Оставляете заявку',
  'how.1.desc': 'Напишите нам на email или в WhatsApp — мы свяжемся с вами в течение дня.',
  'how.2.title': 'Анализируем ваш бизнес',
  'how.2.desc': 'Изучаем вашу компанию и подбираем оптимальные условия финансирования.',
  'how.3.title': 'Подписываем документы',
  'how.3.desc': 'Быстрое оформление — минимум бумаг и бюрократии.',
  'how.4.title': 'Получаете финансирование',
  'how.4.desc': 'Средства поступают на ваш счёт — развивайте бизнес без кассовых разрывов.',

  // Advantages
  'advantages.title': 'Преимущества',
  'advantages.subtitle': 'Почему бизнес выбирает FinCore',
  'advantages.fast.title': 'Быстрое решение',
  'advantages.fast.desc': 'От 1 рабочего дня на рассмотрение заявки и принятие решения.',
  'advantages.flex.title': 'Гибкие условия',
  'advantages.flex.desc': 'Индивидуальный подход к каждому клиенту и его бизнес-задачам.',
  'advantages.transparent.title': 'Прозрачность',
  'advantages.transparent.desc': 'Понятные условия без скрытых комиссий и неожиданных платежей.',
  'advantages.docs.title': 'Минимум документов',
  'advantages.docs.desc': 'Простой процесс оформления — собираем только необходимое.',

  // Contacts
  'contacts.title': 'Контакты',
  'contacts.subtitle': 'Свяжитесь с нами — обсудим условия финансирования для вашего бизнеса',
  'contacts.name.label': 'Полное наименование',
  'contacts.name.value': 'Товарищество с ограниченной ответственностью "ФинКорКаз"',
  'contacts.bin.label': 'БИН',
  'contacts.address.label': 'Адрес',
  'contacts.address.value': 'Казахстан, город Алматы, Алатауский район, улица Емцова, дом 9В',
  'contacts.cta': 'Оставьте заявку — мы свяжемся с вами в течение дня',
  'contacts.btn.email': 'Написать на email',
  'contacts.btn.whatsapp': 'Написать в WhatsApp',

  // WhatsApp & Email prefilled
  'wa.text': 'Здравствуйте! Прошу рассказать подробнее об условиях факторинга.',
  'email.subject': 'Заявка на факторинг',
  'email.body': 'Здравствуйте!\n\nПрошу рассказать подробнее об условиях факторинга.\n\nНазвание компании: \nСфера деятельности: \nЖелаемая сумма: \n\nС уважением,',

  // Footer
  'footer.copy': '© {year} ТОО «ФинКорКаз» · Алматы, Казахстан',
}

const kk: Record<string, string> = {
  // Navbar
  'nav.about': 'Біз туралы',
  'nav.products': 'Өнімдер',
  'nav.industries': 'Кімдер үшін',
  'nav.how': 'Қалай жұмыс істейді',
  'nav.advantages': 'Артықшылықтар',
  'nav.contacts': 'Байланыс',
  'nav.career': 'Мансап',

  // Hero
  'hero.title': 'Сіздің бизнесіңіз үшін факторингтік қаржыландыру',
  'hero.subtitle': 'Болашақ табыс есебінен айналым қаражаты — жылдам, қарапайым және банктік ұзақ рәсімдерсіз',
  'hero.email': 'Email жазу',
  'hero.whatsapp': 'WhatsApp жазу',

  // About
  'about.text': 'FinCore.kz — факторингтік қаржыландыруға маманданған финтех-компания. Біз бизнеске айналым қаражатын тез және күрделі банктік рәсімдерсіз алуға көмектесеміз, жеке тәсіл мен заманауи технологияларды ұсынамыз.',

  // Products
  'products.title': 'Өнімдер',
  'products.subtitle': 'Қаржыландырудың екі форматы — бизнесіңізге сәйкесін таңдаңыз',
  'products.express': 'Экспресс',
  'products.express.1': '15 млн ₸ дейін сомалар',
  'products.express.2': '180 күнге дейін мерзім',
  'products.express.3': '1 жұмыс күнінен бастап шешім',
  'products.express.4': 'Құжаттардың ең аз пакеті',
  'products.express.5': 'Стандартты шарттар',
  'products.max': 'Максимум',
  'products.max.1': '15 млн ₸ және одан жоғары сомалар',
  'products.max.2': 'Келісім бойынша икемді мерзімдер',
  'products.max.3': 'Жеке шарттар',
  'products.max.4': 'Жеке менеджер',
  'products.max.5': 'Кеңейтілген аналитика',
  'products.cta': 'Қай өнім сізге сәйкес келетінін білмейсіз бе? Біз көмектесеміз',

  // Industries
  'industries.title': 'Кімдер үшін',
  'industries.subtitle': 'Біз әртүрлі салалардағы компаниялармен жұмыс істейміз, жеке шешімдер ұсынамыз',
  'industries.taxi.title': 'Таксопарктер мен автопарктер',
  'industries.taxi.desc': 'Паркті қолдау және кеңейту үшін платформалардан болашақ төлемдер есебінен аванстар.',
  'industries.delivery.title': 'Жеткізу қызметтері',
  'industries.delivery.desc': 'Курьерлік және логистикалық сервистерден ақша ағындары есебінен қаржыландыру.',
  'industries.ecom.title': 'E-commerce және маркетплейстер',
  'industries.ecom.desc': 'Алаңдардан болашақ төлемдер есебінен сатушылар үшін айналым қаражаты.',
  'industries.dealers.title': 'Автодилерлер',
  'industries.dealers.desc': 'Сатып алушылардан дебиторлық берешек есебінен айналымды қаржыландыру.',
  'industries.parts.title': 'Автобөлшектер жеткізушілері',
  'industries.parts.desc': 'Кассалық үзіліссіз сатып алулар — сатып алушылардан төлемге дейін қаражат алыңыз.',
  'industries.logistics.title': 'Логистика және каршеринг',
  'industries.logistics.desc': 'Автопаркті кеңейтуге және операциялық шығындарды жабуға қаражат.',

  // How it works
  'how.title': 'Қалай жұмыс істейді',
  'how.subtitle': 'Өтінімнен қаржыландыруға дейін төрт қарапайым қадам',
  'how.1.title': 'Өтінім қалдырасыз',
  'how.1.desc': 'Бізге email немесе WhatsApp арқылы жазыңыз — күні ішінде хабарласамыз.',
  'how.2.title': 'Бизнесіңізді талдаймыз',
  'how.2.desc': 'Компанияңызды зерттеп, оңтайлы қаржыландыру шарттарын таңдаймыз.',
  'how.3.title': 'Құжаттарға қол қоямыз',
  'how.3.desc': 'Жылдам рәсімдеу — ең аз қағаз және бюрократия.',
  'how.4.title': 'Қаржыландыру аласыз',
  'how.4.desc': 'Қаражат шотыңызға түседі — бизнесті кассалық үзіліссіз дамытыңыз.',

  // Advantages
  'advantages.title': 'Артықшылықтар',
  'advantages.subtitle': 'Неліктен бизнес FinCore таңдайды',
  'advantages.fast.title': 'Жылдам шешім',
  'advantages.fast.desc': 'Өтінімді қарау және шешім қабылдауға 1 жұмыс күнінен.',
  'advantages.flex.title': 'Икемді шарттар',
  'advantages.flex.desc': 'Әр клиентке және оның бизнес-міндеттеріне жеке тәсіл.',
  'advantages.transparent.title': 'Ашықтық',
  'advantages.transparent.desc': 'Жасырын комиссияларсыз және күтпеген төлемдерсіз түсінікті шарттар.',
  'advantages.docs.title': 'Ең аз құжаттар',
  'advantages.docs.desc': 'Қарапайым рәсімдеу процесі — тек қажеттісін жинаймыз.',

  // Contacts
  'contacts.title': 'Байланыс',
  'contacts.subtitle': 'Бізбен хабарласыңыз — бизнесіңіз үшін қаржыландыру шарттарын талқылаймыз',
  'contacts.name.label': 'Толық атауы',
  'contacts.name.value': '"ФинКорКаз" жауапкершілігі шектеулі серіктестігі',
  'contacts.bin.label': 'БСН',
  'contacts.address.label': 'Орналасқан жері',
  'contacts.address.value': 'Қазақстан, Алматы қаласы, Алатау ауданы, Емцов көшесі, 9В үй',
  'contacts.cta': 'Өтінім қалдырыңыз — күні ішінде хабарласамыз',
  'contacts.btn.email': 'Email жазу',
  'contacts.btn.whatsapp': 'WhatsApp жазу',

  // WhatsApp & Email prefilled
  'wa.text': 'Сәлеметсіз бе! Факторинг шарттары туралы толығырақ айтып беруіңізді сұраймын.',
  'email.subject': 'Факторингке өтінім',
  'email.body': 'Сәлеметсіз бе!\n\nФакторинг шарттары туралы толығырақ айтып беруіңізді сұраймын.\n\nКомпания атауы: \nҚызмет саласы: \nҚалаған сома: \n\nҚұрметпен,',

  // Footer
  'footer.copy': '© {year} «ФинКорКаз» ЖШС · Алматы, Қазақстан',
}

const en: Record<string, string> = {
  // Navbar
  'nav.about': 'About',
  'nav.products': 'Products',
  'nav.industries': 'Industries',
  'nav.how': 'How it works',
  'nav.advantages': 'Advantages',
  'nav.contacts': 'Contacts',
  'nav.career': 'Career',

  // Hero
  'hero.title': 'Factoring finance for your business',
  'hero.subtitle': 'Working capital against future revenue — fast, simple, and without lengthy banking procedures',
  'hero.email': 'Email us',
  'hero.whatsapp': 'WhatsApp us',

  // About
  'about.text': 'FinCore.kz is a fintech company specializing in factoring finance. We help businesses access working capital quickly and without complex banking procedures, offering a personalized approach and modern technology.',

  // Products
  'products.title': 'Products',
  'products.subtitle': 'Two financing formats — choose the right one for your business',
  'products.express': 'Express',
  'products.express.1': 'Amounts up to 15M ₸',
  'products.express.2': 'Terms up to 180 days',
  'products.express.3': 'Decision from 1 business day',
  'products.express.4': 'Minimal document package',
  'products.express.5': 'Standard terms',
  'products.max': 'Maximum',
  'products.max.1': 'Amounts from 15M ₸ and above',
  'products.max.2': 'Flexible terms by agreement',
  'products.max.3': 'Individual conditions',
  'products.max.4': 'Personal manager',
  'products.max.5': 'Extended analytics',
  'products.cta': 'Not sure which product suits you? We\'ll help you decide',

  // Industries
  'industries.title': 'Industries',
  'industries.subtitle': 'We work with companies across various industries, providing tailored solutions',
  'industries.taxi.title': 'Taxi & car fleets',
  'industries.taxi.desc': 'Advances against future payouts from platforms to maintain and expand your fleet.',
  'industries.delivery.title': 'Delivery services',
  'industries.delivery.desc': 'Financing against cash flows from courier and logistics services.',
  'industries.ecom.title': 'E-commerce & marketplaces',
  'industries.ecom.desc': 'Working capital for sellers against future payouts from platforms.',
  'industries.dealers.title': 'Auto dealers',
  'industries.dealers.desc': 'Turnover financing against accounts receivable from buyers.',
  'industries.parts.title': 'Auto parts suppliers',
  'industries.parts.desc': 'Purchases without cash gaps — receive funds before buyer payments.',
  'industries.logistics.title': 'Logistics & car sharing',
  'industries.logistics.desc': 'Funds to expand your fleet and cover operational expenses.',

  // How it works
  'how.title': 'How it works',
  'how.subtitle': 'Four simple steps from application to financing',
  'how.1.title': 'Submit an application',
  'how.1.desc': 'Email or WhatsApp us — we\'ll get back to you within a day.',
  'how.2.title': 'We analyze your business',
  'how.2.desc': 'We study your company and select optimal financing terms.',
  'how.3.title': 'Sign documents',
  'how.3.desc': 'Quick processing — minimal paperwork and bureaucracy.',
  'how.4.title': 'Receive financing',
  'how.4.desc': 'Funds are transferred to your account — grow your business without cash gaps.',

  // Advantages
  'advantages.title': 'Advantages',
  'advantages.subtitle': 'Why businesses choose FinCore',
  'advantages.fast.title': 'Fast decisions',
  'advantages.fast.desc': 'From 1 business day to review and make a decision.',
  'advantages.flex.title': 'Flexible terms',
  'advantages.flex.desc': 'Individual approach to each client and their business needs.',
  'advantages.transparent.title': 'Transparency',
  'advantages.transparent.desc': 'Clear terms with no hidden fees or unexpected charges.',
  'advantages.docs.title': 'Minimal documents',
  'advantages.docs.desc': 'Simple application process — we only collect what\'s necessary.',

  // Contacts
  'contacts.title': 'Contacts',
  'contacts.subtitle': 'Get in touch — let\'s discuss financing terms for your business',
  'contacts.name.label': 'Legal name',
  'contacts.name.value': 'FinCorKaz Limited Liability Partnership',
  'contacts.bin.label': 'BIN',
  'contacts.address.label': 'Address',
  'contacts.address.value': 'Kazakhstan, Almaty, Alatau district, Yemtsova street, 9B',
  'contacts.cta': 'Leave a request — we\'ll contact you within a day',
  'contacts.btn.email': 'Email us',
  'contacts.btn.whatsapp': 'WhatsApp us',

  // WhatsApp & Email prefilled
  'wa.text': 'Hello! Please tell me more about your factoring terms.',
  'email.subject': 'Factoring inquiry',
  'email.body': 'Hello!\n\nPlease tell me more about your factoring terms.\n\nCompany name: \nIndustry: \nDesired amount: \n\nBest regards,',

  // Footer
  'footer.copy': '© {year} FinCorKaz LLP · Almaty, Kazakhstan',
}

export const translations: Record<Lang, Record<string, string>> = { ru, kk, en }
