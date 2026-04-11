import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import './Hero.css';
import bookIcon from '@/assets/icons/book.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import trendingUpIcon from '@/assets/icons/trending-up.svg';
import InfoGridSection from '@/components/grids/InfoGridSection';
import ServicesSection, { type ServiceItem } from '@/components/sections/ServicesSection';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/кибербезопасность/DocumentDetailsSection';
import ClientsSection from '@/components/grids/ClientsSection';
import optimizationIllustration from '@/assets/img/illustrations/optimization.svg';
import riseIllustration from '@/assets/img/illustrations/rise.svg';
import CardsGridSection from '@/components/grids/CardsGridSection';
import buildingIllustration from '@/assets/img/illustrations/buildings.svg';
import scannerIllustration from '@/assets/img/illustrations/scaning.svg';

const CYBERSECURITY_SERVICES: ServiceItem[] = [
  {
    title: 'Аудит инфраструктуры и информационной безопасности',
    description:
      'Проводим анализ ИС, выявляем уязвимости и даём рекомендации по СЗИ в соответствии с законодательством РБ.',
    to: '/cybersecurity/audit',
    ariaLabel: 'Перейти к услуге Аудит инфраструктуры и информационной безопасности',
  },
  {
    title: 'Аттестация системы защиты информации',
    description:
      'Проводим аттестацию СЗИ, подтверждаем её соответствие законодательству РБ и выполняем полный цикл проверок.',
    to: '/cybersecurity/certification',
    ariaLabel: 'Перейти к услуге Аттестация системы защиты информации',
    tags: [
      { label: 'Проектирование СЗИ', to: '/cybersecurity/design-szi' },
      { label: 'Создание СЗИ', to: '/cybersecurity/create-szi' },
      { label: 'Аттестация СЗИ', to: '/cybersecurity/attestation-szi' },
      {
        label: 'Оценка эффективности защищённости инфраструктуры',
        to: '/cybersecurity/infrastructure-effectiveness',
      },
      {
        label: 'Пересмотр документов защиты информации',
        to: '/cybersecurity/certification',
      },
    ],
  },
  {
    title: 'Поставка и внедрение СЗИ и оборудования',
    description:
      'Обеспечиваем защиту данных и мониторинг угроз с использованием решений ведущих производителей, включая настройку и сопровождение.',
    to: '/cybersecurity/delivery',
    ariaLabel: 'Перейти к услуге Поставка и внедрение СЗИ и оборудования',
    tags: [
      {
        label: 'SIEM (Security Information and Event Management)',
        to: '/cybersecurity/siem',
      },
      { label: 'DLP (Data Loss Prevention)', to: '/cybersecurity/dlp' },
      { label: 'Firewall', to: '/cybersecurity/firewall' },
      { label: 'Сетевые экраны', to: '/cybersecurity/network-screens' },
      { label: 'Виртуализация', to: '/virtualization' },
      {
        label: 'Поставка серверов и коммутаторов',
        to: '/cybersecurity/servers-and-switches',
      },
      {
        label: 'Автоматизированная система обучения сотрудников',
        to: '/cybersecurity/delivery/cyber-culture',
      },
    ],
  },
];

const INFO_GRID_EMPTY_GROUP = `
  <div class="info-grid__group info-grid__group--empty"></div>
`;

const CYBERSECURITY_CARDS_HTML = [
  `
              <div class="cards-grid__media">
                <img src="${buildingIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
               <strong style="color: #01111E;">Более 60% компаний</strong>, пострадавших от кибератак, закрываются в течение полугода после инцидента
              </p>
            `,
  `
              <div class="cards-grid__media">
                  <img src="${scannerIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Совместная работа:</h3>
              <p>
                • улучшение коммуникаций между сотрудниками;<br />
                • накопление корпоративной базы знаний;<br />
                • совместная работа над проектами.
              </p>
            `,
  '<div class="cards-grid__media cards-grid__media-empty"></div>',
  '<div class="cards-grid__media cards-grid__media-empty"></div>',
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
];

const CYBERSECURITY_INFO_COLUMNS_HTML = [
  `
              <div class="info-grid__group">
                <h4>Отчёт о структуре информационной системы</h4>
                <p>
                  Детальный анализ текущего состояния ИС, включая физические и логические
                  границы системы.
                </p>
              </div>
              <img
                src="${bookIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,
  `
              <div class="info-grid__group">
                <h4>Спецификации для систем защиты информации</h4>
                <p>
                  Рекомендации по необходимым средствам защиты для безопасного
                  функционирования ИС.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
  INFO_GRID_EMPTY_GROUP,
  INFO_GRID_EMPTY_GROUP,
  `
              <div class="info-grid__group-type2">
                <h4>Рекомендации по улучшению</h4>
                <p>
                  В Республике Беларусь вопросы защиты информации регулируются Указом Президента Республики Беларусь от 16.04.2013 № 196 ("Положение о технической и криптографической защите информации"). Согласно этому документу, руководители организаций несут персональную ответственность за обеспечение защиты информации.
Приказ Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259) регулирует вопросы создания, внедрения и аттестации систем защиты информации (СЗИ). Этот документ устанавливает порядок проведения работ, требования к документации и процедуры проверки соответствия СЗИ.
                </p>
              </div>
              <img
                src="${trendingUpIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
];

function CybersecurityPage() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Кибербезопасность' }]}
          title="Кибербезопасность"
          description="Кибербезопасность — это комплекс мер, направленных на защиту информационных систем от несанкционированного доступа, утечек данных и кибератак. В современном мире, где информация является одним из ключевых активов, обеспечение её безопасности становится критически важным. Мы поможем вам защитить ваши данные, соблюдая требования законодательства Республики Беларусь и внедряя передовые технологии."
        />

        <ServicesSection items={CYBERSECURITY_SERVICES} />

        <CardsGridSection title="Кибербезопасность в цифрах" cardsHtml={CYBERSECURITY_CARDS_HTML} />

        <InfoGridSection
          title="Что вы получаете в рамках услуги"
          columnsHtml={CYBERSECURITY_INFO_COLUMNS_HTML}
        />

        <DocumentDetailsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default CybersecurityPage;
