import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import ClientsSection from './components/ClientsSection';
import CasesSection from './components/CasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesType2Section from './components/ServicesType2Section';
import Footer from './components/Footer';
import ArrowRightIcon from './assets/icons/arrow-up-right.svg';
import CertificatesSection from './components/CertificatesSection';
import AchievementsSection from './components/AchievementsSection';

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
                      textColor="#000000"
                      iconRight={<img src={ArrowRightIcon} alt="" />}
                    >
                      Заказать звонок
                    </Button>
                    <Button
                      color="var(--color-white)"
                      textColor="#000000"
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

        <ServicesType2Section
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              tags: [
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
                { label: 'Наименование услуги' },
              ],
            },
            {
              title: 'Электронный документооборот с ЭЦП',
              description:
                'Мы предоставляем услугу внедрения электронного документооборота с использованием ЭЦП. Помогаем IT-компаниям перейти на юридически значимые цифровые документы, наладить безопасный обмен и подписание, а также обеспечить поддержку для стабильной работы.',
            },
          ]}
        />

        <CasesSection />

        <TestimonialsSection />

        <ClientsSection />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
