// components
import PageLayout from '@/components/layout/PageLayout';
import InfoGridSection from '@/components/grids/InfoGridSection';
import ServicesSection, { type ServiceItem } from '@/components/sections/ServicesSection';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import ClientsSection from '@/components/grids/ClientsSection';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import InterestingFacts from '@/components/sections/InterestingFacts';
import CertificatesSection from '@/components/sections/CertificatesSection';
// data
import { CYBERSECURITY_INTERESTING_FACTS } from '@/data/interestingFacts/cybersecurityInterestingFacts';

// assets
import certificateIcon from '@/assets/icons/certificate.svg';
import lockIcon from '@/assets/icons/lock.svg';
import checkIcon from '@/assets/icons/check.svg';
import taskDarkIllustration from '@/assets/img/illustrations/task-dark.svg';
import gridDarkIllustration from '@/assets/img/illustrations/grid-dark.svg';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';

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
      { label: 'Аттестация СЗИ', to: '/cybersecurity/certification/attestation-szi' },
      {
        label: 'Оценка эффективности защищённости инфраструктуры',
        to: '/cybersecurity/certification/security-assessment',
      },
      {
        label: 'Пересмотр документов защиты информации',
        to: '/cybersecurity/certification/szi-documents-review',
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
      { label: 'Антивирусная защита', to: '/cybersecurity/antivirus' },
      { label: 'Резервное копирование', to: '/cybersecurity/backup' },
      {
        label: 'Средства линейного шифрования',
        to: '/cybersecurity/linear-encryption',
      },
      { label: 'Сетевые экраны', to: '/cybersecurity/firewall' },
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

const CYBERSECURITY_INFO_COLUMNS_HTML = [
  `
              <div class="info-grid__group">
                <h4>Защита от утечек данных</h4>
                <p>
                  Утечка конфиденциальной информации может привести к серьезным финансовым и репутационным потерям. Кибербезопасность помогает предотвратить такие инциденты.
                </p>
              </div>
              <img
                src="${lockIcon}"
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
                <h4>Соблюдение законодательства</h4>
                <p>
                 В Республике Беларусь вопросы защиты информации регулируются Указом Президента Республики Беларусь от 16.04.2013 № 196 ("Положение о технической и криптографической защите информации"). Согласно этому документу, руководители организаций несут персональную ответственность за обеспечение защиты информации.
                 <br />
                  <br />
                 Приказ Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66
(в редакции от 10.12.2024 № 259) регулирует вопросы создания, внедрения и аттестации систем защиты информации (СЗИ). Этот документ устанавливает порядок проведения работ, требования к документации и процедуры проверки соответствия СЗИ.
                </p>
              </div>
              <img
                src="${checkIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
];

function CybersecurityPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Кибербезопасность' }]}
        title="Кибербезопасность"
        description="Кибербезопасность — это комплекс мер, направленных на защиту информационных систем от несанкционированного доступа, утечек данных и кибератак. В современном мире, где информация является одним из ключевых активов, обеспечение её безопасности становится критически важным. Мы поможем вам защитить ваши данные, соблюдая требования законодательства Республики Беларусь и внедряя передовые технологии."
      />

      <InterestingFacts items={CYBERSECURITY_INTERESTING_FACTS} />

      <ServicesSection items={CYBERSECURITY_SERVICES} />

      <InfoGridSection
        title="Зачем нужна кибербезопасность?"
        columnsHtml={CYBERSECURITY_INFO_COLUMNS_HTML}
      />

      <CardsGridSectionDark
        title="Почему выбирают нас?"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${taskDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
                Мы обладаем широкими компетенциями в направлении разработки.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${gridDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
Мы хорошо знаем архитектуру информационных систем изнутри.
              </p>
            `,
          `
            <div class="cards-grid__media cards-grid__media--empty">
            </div>
          `,
          `
          <div class="cards-grid__media cards-grid__media--empty">
          </div>
        `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <p>
Мы предоставляем оптимальные рекомендации по защите ваших информационных систем и внедряем исключительно проверенные и эффективные средства защиты информации.              </p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>
            <p>
Наша деятельность по технической и криптографической защите информации подтверждается лицензией, выданной Оперативно-аналитическим центром при Президенте Республики Беларусь.
          `,
        ]}
      />

      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default CybersecurityPage;
