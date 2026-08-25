// react
import { Link } from 'react-router-dom';

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
import { CRM_FORM_URL } from '@/constants/siteContacts';

// assets
import ArrowRightIcon from '@/assets/icons/ic - arrow-up-right.svg';

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
        <div className="home-hero__shell">
          <section id="home" className="hero">
            <div className="home-hero__frame">
              <div className="home-hero__rail" aria-hidden="true" />
              <div className="home-hero__core">
                <div className="hero-grid">
                  <div className="hero-grid__cell hero-grid__cell--texture" aria-hidden="true">
                    <InteractiveTexture parallax>
                      <div className="hero-grid__texture-layer" />
                    </InteractiveTexture>
                  </div>
                  <div className="hero-grid__cell">
                    <p className="hero-grid__lead">
                      Специализируемся на кибербезопасности: проводим аудит и аттестацию систем,
                      внедряем средства защиты и специализированное оборудование. Также внедряем
                      Bitrix24, разрабатываем сайты, B2B-порталы и интеграции с безопасным обменом
                      данными.
                    </p>
                  </div>
                  <div className="hero-grid__cell">
                    <h1>
                      s Внедрение <span className="hero-grid__bitrix-mark">Битрикс24</span>
                      <br /> Кибербезопасность <br />
                      Комплексные IT Услуги
                    </h1>
                  </div>
                  <div className="hero-grid__cell">
                    <div className="hero-grid__button-container">
                      <Button
                        className="btn--full btn--secondary btn-text-base"
                        color="var(--color-white)"
                        textColor="#01111E"
                        href={CRM_FORM_URL}
                        target="_blank"
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
              </div>
              <div className="home-hero__rail" aria-hidden="true" />
            </div>
          </section>
        </div>

        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>

        <ScrollReveal>
          <ServicesSection items={SERVICES} />
        </ScrollReveal>

        <section id="solutions" className="solutions">
          <div className="solutions__container section-wrapper">
            <h1 className="solutions__title">Решения 4-IT</h1>
            <div className="solutiont-content">
              <div className="solution-card">
                <div className="solution-card__container">
                  <div className="solution-card__content">
                    <h4>Программно-аппаратный комплекс информационной безопасности «под ключ»</h4>
                    <p className="solution-card__p">
                      Мы предлагаем готовое решение для защиты информационных систем в соответствии
                      с Приказом ОАЦ №66 и директивой Президента РБ. Приобретение на условиях
                      лизинга совместно с{' '}
                      <a
                        href="https://www.alizing.by/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="solution-card__partner-link"
                      >
                        ООО «Активлизинг»
                      </a>
                    </p>
                  </div>
                </div>
                <div className="solution-card__button">
                  <Link to={routePaths.solutionsSecurityComplex} className="solution-card__more">
                    <span className="solution-card__more-label">Подробнее</span>
                    <img src={ArrowRightIcon} alt="" className="solution-card__more-arrow" />
                  </Link>
                </div>
              </div>
              <div className="solution-card"></div>
            </div>
          </div>
        </section>

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
