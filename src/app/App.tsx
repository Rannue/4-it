// components
import Button from '@/shared/ui/Button';
import ScrollReveal from '@/shared/ui/ScrollReveal';
import InteractiveTexture from '@/shared/ui/InteractiveTexture';
import Header from '@/widgets/header/Header';
import HomeCustomCursor from '@/widgets/home-custom-cursor/HomeCustomCursor';
import ClientsSection from '@/components/grids/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import CertificatesSection from '@/components/sections/CertificatesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import WorkProcessSection from '@/components/sections/WorkProcessSection';
import type { ServiceItem } from '@/components/sections/ServicesSection';
import ServicesSection from '@/components/sections/ServicesSection';

// constants
import { routePaths } from '@/constants/routePaths';

// assets
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';

import './App.css';

const SERVICES: ServiceItem[] = [
  {
    title: 'Внедрение Битрикс24',
    description:
      'Оптимизируем работу вашей компании с помощью Битрикс24. Установим, настроим и интегрируем CRM-систему под ваши бизнес-процессы. Обучим сотрудников, подключим телефонию и мессенджеры',
    to: routePaths.bitrix24Implementation,
    ariaLabel: 'Перейти к внедрению Битрикс24',
    tags: [
      { label: 'Внедрение и настройка Битрикс24', to: routePaths.bitrix24Implementation },
      { label: 'Поддержка Битрикс24', to: routePaths.technicalSupport },
    ],
  },
  {
    title: 'Кибербезопасность',
    description:
      'Комплексные решения для защиты информационных систем от кибератак, утечек данных и несанкционированного доступа. Работаем в соответствии с законодательством Республики Беларусь, применяя передовые технологии защиты.',
    to: routePaths.cyber.root,
    ariaLabel: 'Перейти к разделу Кибербезопасность',
    tags: [
      { label: 'Аудит инфраструктуры и информационной безопасности', to: routePaths.cyber.audit },
      { label: 'Аттестация системы защиты информации', to: routePaths.cyber.certification },
      { label: 'Поставка и внедрение СЗИ и оборудования', to: routePaths.cyber.delivery },
    ],
  },
  {
    title: 'Разработка сайтов',
    description:
      'Создаём современные и функциональные сайты для вашего бизнеса. Подберём готовое решение или разработаем проект с нуля, учитывая ваши задачи и требования. Настроим интеграции, обеспечим удобное управление и адаптивный дизайн.',
    tags: [
      /* Временно без разделов: снимите `disabled`, когда маршруты будут готовы */
      { label: 'Корпоративные сайты', to: routePaths.anchors.home, disabled: true },
      { label: 'Интернет-магазины', to: routePaths.websitesOnlineStore },
      { label: 'B2B порталы', to: routePaths.anchors.servicesDevB2b, disabled: true },
    ],
  },
  {
    title: 'Электронный документооборот с ЭЦП',
    description:
      'Мы предоставляем услугу внедрения электронного документооборота с использованием ЭЦП. Помогаем IT-компаниям перейти на юридически значимые цифровые документы, наладить безопасный обмен и подписание, а также обеспечить поддержку для стабильной работы.',
    to: routePaths.edmsSignature,
    ariaLabel: 'Перейти к разделу электронного документооборота с ЭЦП',
  },
];

function App() {
  return (
    <div className="app">
      <HomeCustomCursor />
      <Header />

      <main className="app-main">
        <div className="section-wrapper--px-only">
          <div className="section-wrapper__inner">
            <section id="home" className="hero">
              <div className="hero-grid">
                <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true">
                  <InteractiveTexture parallax>
                    <div className="hero-grid__texture-layer" />
                  </InteractiveTexture>
                </div>
                <div className="hero-grid__cell">
                  <p className="hero-grid__lead">
                    Специализируемся на кибербезопасности и внедрении CRM на базе Bitrix24, а также
                    разрабатываем сайты, интернет-магазины и B2B-порталы, выполняем интеграции и
                    настраиваем обмен данными между системами.
                  </p>
                </div>
                <div className="hero-grid__cell">
                  <h1>
                    Внедрение{' '}
                    <span className="hero-grid__bitrix-mark">Битрикс24</span>
                    <br /> Кибербезопасность <br />
                    Комплексные IT Услуги
                  </h1>
                </div>
                <div className="hero-grid__cell">
                  <div className="hero-grid__button-container">
                    {/* Temporarily hidden: callback CTA */}
                    <Button
                      color="var(--color-white)"
                      textColor="#01111E"
                      href="#contacts"
                      iconRight={<img src={ArrowRightIcon} alt="" />}
                    >
                      Оставить заявку
                    </Button>
                  </div>
                </div>
                <div className="hero-grid__cell"></div>
                <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true">
                  <InteractiveTexture parallax>
                    <div className="hero-grid__texture-layer" />
                  </InteractiveTexture>
                </div>
              </div>
            </section>
          </div>
        </div>

        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>

        <ScrollReveal>
          <ServicesSection items={SERVICES} />
        </ScrollReveal>

        <ScrollReveal>
          <WorkProcessSection />
        </ScrollReveal>

        <ScrollReveal>
          <ClientsSection anchorId="clients" />
        </ScrollReveal>

        <ScrollReveal>
          <CertificatesSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
