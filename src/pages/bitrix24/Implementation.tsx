import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import InfoGridSection from '@/components/sections/InfoGridSection';
import CtaLinksListSection from '@/components/sections/CtaLinksListSection';
import bitrixBoxImg from '@/assets/img/Битрикс.png';
import certificateIcon from '@/assets/icons/certificate.svg';
import StackedFeatureCardsSection, {
  type StackedFeatureCard,
} from '@/components/sections/StackedFeatureCardsSection';
import timeIllustration from '@/assets/img/illustrations/time.svg';
import groupIllustration from '@/assets/img/illustrations/group.svg';
import optimizationIllustration from '@/assets/img/illustrations/optimization.svg';
import riseIllustration from '@/assets/img/illustrations/rise.svg';
import CardsGridSectionDark from '@/components/sections/cards/CardsGridSectionDark';

const BITRIX24_IMPLEMENTATION_TIERS: readonly StackedFeatureCard[] = [
  {
    title: 'Начальное внедрение',
    description:
      'Подходит для компаний, которые только начинают работать с CRM и хотят быстро запустить основные функции.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'развертывание и настройка портала' },
      { text: 'добавление сотрудников (до 10 сотрудников)' },
      { text: 'создание структуры компании' },
      { text: 'начальное внедрение и настройка crm инструментов' },
    ],
  },
  {
    title: 'Стандартное внедрение',
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'сбор и анализ требований' },
      { text: 'подготовка проектной документации' },
      {
        text: (
          <>
            настройка статусов и карточек <strong>Лидов</strong> и стадий <strong>Сделок</strong>
          </>
        ),
      },
      { text: 'настройка ролей и прав доступов пользователей' },
      { text: 'подключение почтового домена' },
      { text: 'построение воронок продаж' },
      { text: 'обучение сотрудников' },
    ],
  },
  {
    title: 'Корпоративное внедрение',
    titleAccent: true,
    description:
      'Подходит компаниям, которым нужна структурированная CRM с настроенными воронками продаж и ролями пользователей.',
    ctaLabel: 'Оставить заявку',
    ctaHref: '/#contacts',
    features: [
      { text: 'сбор и анализ требований' },
      { text: 'настройка и подключение телефонии' },
      { text: 'интеграция с мессенджерами' },
      { text: 'создание и настройка бизнес-процессов' },
      { text: 'загрузка клиентской базы и товаров' },
      { text: 'обучение сотрудников' },
    ],
  },
];

function Bitrix24ImplementationPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Внедрение и настройка Битрикс24' },
          ]}
          title="Внедрение и настройка Битрикс24"
          description="Битрикс24 оцифровывает маркетинг и продажи, автоматизирует процессы компании и организовывает работу. Это набор полезных инструментов для бизнеса: CRM, корпоративный портал, контакт-центр, конструктор сайтов, управление задачами и проектами в одной системе."
        />
        <InfoGridSection
          columnsHtml={[
            `
              <h2>Возможности<br /><span style="color: var(--color-primary);">Битрикс24</span></h2>
            `,
            `
              <div class="info-grid__group">
                <h4>Настройка CRM и автоматизация продаж</h4>
                <p>
                  Мы настраиваем CRM-модуль Битрикс24 под специфику вашего бизнеса:
                  <br /><br />
                  · настройка воронки продаж и этапов сделок<br />
                  · автоматизация повторяющихся задач<br />
                  · интеграция с телефонией, мессенджерами и email<br />
                  · отчётность по продажам и KPI<br />
                  <br />
                  Это позволяет контролировать все этапы продаж и сокращать время обработки заявок.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Организация задач и проектов</h4>
                <p>
                  Мы настраиваем систему управления задачами и проектами:
                  <br /><br />
                  · распределение задач между сотрудниками<br />
                  · контроль сроков и статусов выполнения<br />
                  · автоматическое уведомление и отчёты по прогрессу<br />
                  · настройка шаблонов проектов и бизнес-процессов<br />
                  <br />
                  Таким образом компания получает прозрачный контроль за всеми проектами и задачами.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Интеграции с внешними системами</h4>
                <p>
                  Битрикс24 можно интегрировать с любыми корпоративными системами:
                  <br /><br />
                  · 1С — синхронизация клиентов, заказов и остатков<br />
                  · ERP и складские системы<br />
                  · интернет-магазины и маркетплейсы<br />
                  · сторонние CRM, телефония и мессенджеры<br />
                  · аналитические и маркетинговые сервисы<br />
                  <br />
                  Интеграции позволяют автоматизировать обмен данными и сокращают ручной труд сотрудников.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Обучение и поддержка</h4>
                <p>
                  После внедрения мы проводим обучение сотрудников и предоставляем документацию по работе с системой. Также возможна техническая поддержка и сопровождение, чтобы ваши процессы оставались оптимизированными и эффективными.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
           <img
                src="${bitrixBoxImg}"
                alt="1С-Битрикс24"
                class="info-grid__icon info-grid__icon--bitrix-product"
              />
        `,
          ]}
        />
        <CardsGridSectionDark
          title="Преимущества внедрения Битрикс24"
          cardsHtml={[
            `
              <div class="cards-grid__media">
                <img src="${timeIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Экономия рабочего времени:</h3>
              <p>
                • сокращение издержек на поиск информации;<br />
                • минимизация потерь корпоративной информации;<br />
                • значительное ускорение бизнес-процессов.
              </p>
            `,
            `
              <div class="cards-grid__media">
                  <img src="${groupIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Совместная работа:</h3>
              <p>
                • улучшение коммуникаций между сотрудниками;<br />
                • накопление корпоративной базы знаний;<br />
                • совместная работа над проектами.
              </p>
            `,
            `
            <div class="cards-grid__media">
            </div>
           
          `,
            `
          <div class="cards-grid__media">
          </div>
         
        `,
            `
          <div class="cards-grid__media">
              <img src="${optimizationIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
          </div>
          <h3>Оптимизация бизнес-процессов:</h3>
          <p>
            • все заявки обрабатываются вовремя;<br />
            • экономия на скорости прохождения операций;<br />
            • эффективные связи между подразделениями.
          </p>
        `,
            `
          <div class="cards-grid__media">
              <img src="${riseIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
          </div>
          <h3>Оптимизация бизнес-процессов:</h3>
          <p>
            • все заявки обрабатываются вовремя;<br />
            • экономия на скорости прохождения операций;<br />
            • эффективные связи между подразделениями.
          </p>
        `,
          ]}
        />
        <CtaLinksListSection
          items={[
            { label: 'Попробовать Битрикс24', href: 'https://www.bitrix24.ru/' },
            { label: 'Узнать цены', href: 'https://www.bitrix24.ru/prices/' },
          ]}
          footer={
            <>
              Не уверены, какое решение выбрать?{' '}
              <a href="/#contacts" className="cta-links-list__footer-link">
                Оставьте заявку
              </a>{' '}
              на консультацию, и мы подберём оптимальное решение под задачи вашего бизнеса.
            </>
          }
        />
        <StackedFeatureCardsSection
          id="bitrix24-implementation-tiers"
          cards={BITRIX24_IMPLEMENTATION_TIERS}
        />
        <InfoGridSection
          title="Этапы работы"
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Предпроектное исследование</h4>
                <p>
                  Анализ текущих процессов. Определение объемов работ и требований к системе.
                </p>
              </div>
  <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot"></span>
                                                <span class="scroll-card__dot"></span>
                                <span class="scroll-card__dot "></span>
                                                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="info-grid__group">
                <h4>Подготовка проекта</h4>
                <p>
                  Анализ текущих процессов. Определение объемов работ и требований к системе.
                </p>
              </div>
  <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                                <span class="scroll-card__dot"></span>
                                <span class="scroll-card__dot "></span>
                                                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="info-grid__group">
                <h4>Концептуальное проектирование</h4>
                <p>
                 Обследование предприятия, выявление потребностей. Разработка концепции и проектных решений.учает прозрачный контроль за всеми проектами и задачами.
                </p>
              </div>
  <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot "></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="info-grid__group">
                <h4>Реализация проекта</h4>
                <p>
Конфигурирование прототипа, настройка системы. Проведение тестирования и устранение ошибок.             </p>
              </div>
  <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="info-grid__group">
                <h4>Обучение и поддержка</h4>
                <p>
                  После внедрения мы проводим обучение сотрудников и предоставляем документацию по работе с системой. Также возможна техническая поддержка и сопровождение, чтобы ваши процессы оставались оптимизированными и эффективными.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                                                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="info-grid__group">
                <h4>Эксплуатация и поддержка</h4>
                <p>
Обеспечение стабильной работы системы. Техническая поддержка и развитие функционала.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
              </div>
            `,
          ]}
        />
        <CertificatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Bitrix24ImplementationPage;
