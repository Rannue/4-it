import './App.css';
import Button from '@/shared/ui/Button';
import Header from '@/widgets/header/Header';
import ClientsSection from '@/components/grids/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import CertificatesSection from '@/components/sections/CertificatesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import type { ServiceItem } from '@/components/sections/ServicesSection';
import ServicesSection from '@/components/sections/ServicesSection';

const SERVICES: ServiceItem[] = [
  {
    title: 'Внедрение Битрикс24',
    description:
      'Оптимизируем работу вашей компании с помощью Битрикс24. Установим, настроим и интегрируем CRM-систему под ваши бизнес-процессы. Обучим сотрудников, подключим телефонию и мессенджеры',
    to: '/bitrix24/implementation',
    ariaLabel: 'Перейти к внедрению Битрикс24',
    tags: [
      { label: 'Внедрение и настройка Битрикс24', to: '/bitrix24/implementation' },
      { label: 'Поддержка Битрикс24', to: '/technical-support' },
    ],
  },
  {
    title: 'Кибербезопасность',
    description:
      'Комплексные решения для защиты информационных систем от кибератак, утечек данных и несанкционированного доступа. Работаем в соответствии с законодательством Республики Беларусь, применяя передовые технологии защиты.',
    to: '/cybersecurity',
    ariaLabel: 'Перейти к разделу Кибербезопасность',
    tags: [
      { label: 'Аудит инфраструктуры и информационной безопасности', to: '/cybersecurity/audit' },
      { label: 'Аттестация системы защиты информации', to: '/cybersecurity/certification' },
      { label: 'Поставка и внедрение СЗИ и оборудования', to: '/cybersecurity/delivery' },
    ],
  },
  {
    title: 'Разработка сайтов',
    description:
      'Создаём современные и функциональные сайты для вашего бизнеса. Подберём готовое решение или разработаем проект с нуля, учитывая ваши задачи и требования. Настроим интеграции, обеспечим удобное управление и адаптивный дизайн.',
    tags: [
      { label: 'Корпоративные сайты', to: '/#home' },
      { label: 'Интернет-магазины', to: '/websites/online-store' },
      { label: 'B2B порталы', to: '/#services-dev-b2b' },
    ],
  },
  {
    title: 'Электронный документооборот с ЭЦП',
    description:
      'Мы предоставляем услугу внедрения электронного документооборота с использованием ЭЦП. Помогаем IT-компаниям перейти на юридически значимые цифровые документы, наладить безопасный обмен и подписание, а также обеспечить поддержку для стабильной работы.',
    to: '/edms-signature',
    ariaLabel: 'Перейти к разделу электронного документооборота с ЭЦП',
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <div className="section-wrapper--px-only">
          <div className="section-wrapper__inner">
            <section id="home" className="hero">
              <div className="hero-grid">
                <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true" />
                <div className="hero-grid__cell">
                  <p>
                    Мы специализируемся на разработке сайтов, Интернет-магазинов, B2B-порталах,
                    online-сервисах, промо-сайтах, внедрении CRM, а также интеграциях и настройке
                    обмена данными с различными системами.
                  </p>
                </div>
                <div className="hero-grid__cell">
                  <h1>
                    Внедрение{' '}
                    <span style={{ backgroundColor: '#0062BA', padding: '2px 6px' }}>
                      Битрикс24
                    </span>
                    <br /> Кибербезопасность <br />
                    Комплексные IT УСлуги
                  </h1>
                </div>
                <div className="hero-grid__cell">
                  <div className="hero-grid__button-container">
                    <Button
                      color="var(--color-white)"
                      textColor="#01111E"
                      iconRight={<img src={ArrowRightIcon} alt="" />}
                    >
                      Заказать звонок
                    </Button>
                    <Button
                      color="var(--color-white)"
                      textColor="#01111E"
                      iconRight={<img src={ArrowRightIcon} alt="" />}
                    >
                      Оставить заявку
                    </Button>
                  </div>
                </div>
                <div className="hero-grid__cell"></div>
                <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true" />
              </div>
            </section>
          </div>
        </div>

        <AchievementsSection />

        <ServicesSection items={SERVICES} />

        <ClientsSection />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
