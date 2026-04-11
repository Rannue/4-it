import './App.css';
import Button from '@/shared/ui/Button';
import Header from '@/widgets/header/Header';
import ClientsSection from '@/components/sections/ClientsSection';
import CasesSection from '@/components/sections/CasesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServicesSectionSecondary from '@/components/sections/ServicesSectionSecondary';
import Footer from '@/widgets/footer/Footer';
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import CertificatesSection from '@/components/sections/CertificatesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactRequestForm from '@/components/sections/ContactRequestForm';
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
        <div className="section-wrapper">
          <div className="section-wrapper__inner">
            <section id="home" className="hero">
              <div className="hero-grid">
                <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true" />
                <div className="hero-grid__cell">
                  <p>
                    Мы специализируемся на разработке сайтов, Интернет-магазинов, B2B-порталах,
                    online-сервисах, промо-сайтах, внедрении CRM, а также интеграциях и настройке
                    обмена данными с различными системами. а также интеграциях и настройке обмена
                    данными с различными системами.
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
                  {' '}
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

        <ServicesSectionSecondary
          title="Что мы предлагаем?"
          items={[
            {
              title: 'Битрикс24',
              description:
                'Оптимизируем работу вашей компании с помощью Битрикс24. Установим, настроим и интегрируем CRM-систему под ваши бизнес-процессы. Обучим сотрудников, подключим телефонию и мессенджеры',
              tags: [
                { label: 'Внедрение и настройка Битрикс24' },
                { label: 'Доработка Битрикс24' },
                { label: 'Интеграция Битрикс24' },
                { label: 'Обучение сотрудников' },
              ],
            },
            {
              title: 'Поддержка Битрикс24',
              description:
                'Обеспечим стабильную работу портала и поможем развивать CRM: администрирование, обновления, настройка под задачи бизнеса и оперативные консультации без штатного администратора.',
              to: '/technical-support',
              tags: [
                { label: 'Сопровождение портала' },
                { label: 'Настройка и доработки' },
                { label: 'Консультации пользователей' },
              ],
            },
            {
              title: 'Кибербезопасность',
              description:
                'Комплексные решения для защиты информационных систем от кибератак, утечек данных и несанкционированного доступа. Работаем в соответствии с законодательством Республики Беларусь, применяя передовые технологии защиты.',
              to: '/cybersecurity',
              tags: [
                { label: 'Аудит инфраструктуры и информационная безопасности' },
                { label: 'Аттестация системы защиты информации' },
                { label: 'Поставка и внедрение СЗИ и оборудования' },
              ],
            },
            {
              title: 'Виртуализация',
              description:
                'Проектируем и внедряем виртуальную инфраструктуру: консолидация серверов, миграция, резервирование и сопровождение. Снижаем затраты на оборудование и упрощаем администрирование.',
              to: '/virtualization',
              tags: [
                { label: 'Проектирование и внедрение' },
                { label: 'Миграция и консолидация' },
                { label: 'Резервирование и мониторинг' },
              ],
            },
            {
              title: 'Разработка сайтов',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              tags: [
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
              ],
            },
            {
              title: 'Техническая поддержка',
              description:
                'Обеспечиваем стабильную и безопасную работу ПО: администрируем, обновляем, восстанавливаем функциональность, адаптируем систему под новые задачи. Предоставляем технические консультации и сопровождаем на каждом этапе. Реакция — от 1 часа, в зависимости от приоритета запроса.',
              to: '/technical-support',
              supportFeatureBars: true,
            },
            {
              title: 'Электронный документооборот с ЭЦП',
              description:
                'Мы предоставляем услугу внедрения электронного документооборота с использованием ЭЦП. Помогаем IT-компаниям перейти на юридически значимые цифровые документы, наладить безопасный обмен и подписание, а также обеспечить поддержку для стабильной работы.',
              to: '/edms-signature',
            },
          ]}
        />

        <CasesSection />

        <TestimonialsSection />

        <ClientsSection />
        <CertificatesSection />

        <ContactRequestForm id="contacts" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
