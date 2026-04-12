// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText.tsx';
import chartIcon from '@/assets/icons/chart.svg';
import folderIcon from '@/assets/icons/folder.svg';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';
import fingerprintIcon from '@/assets/icons/fingerprint.svg';
import exclamationIcon from '@/assets/icons/exclamation.svg';
import searchIcon from '@/assets/icons/search.svg';

const INFO_GRID_EMPTY_GROUP = `
  <div class="info-grid__group info-grid__group--empty"></div>
`;

function SecurityAssessmentPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация системы защиты информации', href: '/cybersecurity/certification' },
          { label: 'Оценка эффективности защищенности инфраструктуры' },
        ]}
        title="Оценка эффективности защищенности инфраструктуры"
        description="Оценка эффективности защищенности инфраструктуры (пентест) — это имитация действий злоумышленника для выявления уязвимостей в информационной системе. Мы проводим тестирование на проникновение, чтобы определить реальные риски и предложить меры по их устранению. Услуга соответствует требованиям п. 7.17 Приложения 3 к Положению о порядке технической и криптографической защиты информации (приказ ОАЦ при Президенте Республики Беларусь от 10.12.2024 № 259), согласно которому ежегодный пентест является обязательным."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель пентеста"
        text="Выявление уязвимостей и потенциальных угроз: мы проводим тестирование на проникновение, чтобы определить слабые места в вашей информационной системе и предложить меры для их устранения."
      />

      <InfoGridSection
        title={
          <>
            Что такое <span className="info-grid__title-accent">пентест?</span>
          </>
        }
        description="Пентест (penetration testing) — это тестирование на проникновение, которое имитирует действия злоумышленника для выявления уязвимостей в информационной системе. Пентест показывает:"
        columnsHtml={[
          `
          <div class="info-grid__group">
            <h4>
Возможности для незаконного доступа к данным</h4>
            <p>
Мы определяем, какие данные могут быть скомпрометированы и как злоумышленник может получить к ним доступ.
          </div>
          <img
            src="${fingerprintIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Реальные риски для информационной системы</h4>
            <p>
Мы выявляем слабые места, которые могут быть использованы для атак.
            </p>
          </div>
          <img
            src="${exclamationIcon}"
            alt="Иконка спецификаций"
            class="info-grid__icon"
          />
        `,
          INFO_GRID_EMPTY_GROUP,
          INFO_GRID_EMPTY_GROUP,
          `
          <div class="info-grid__group-type2">
            <h4>Корректировка структурной и логической схем ИС</h4>
            <p>
             При необходимости мы вносим изменения в схемы, разработанные на этапе проектирования, чтобы обеспечить максимальную эффективность системы защиты.
            </p>
          </div>
          <img
            src="${chartIcon}"
            alt="Иконка улучшений"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Конкретные пути улучшения безопасности</h4>
            <p>
             Мы предоставляем рекомендации, которые помогут вам устранить уязвимости и повысить уровень защиты.
            </p>
          </div>
          <img
            src="${folderIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
        ]}
      />

      <CardsGridSectionDark
        title="Преимущества пентеста"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Оценка
рисков и угроз</h3>
              <p>
Мы выявляем реальные риски для вашей информационной системы, что позволяет вам принимать обоснованные решения по улучшению безопасности.</p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Конкретные рекомендации
по улучшению</h3>
              <p>
                Наши специалисты предоставляют четкие и практические рекомендации, которые помогут вам устранить уязвимости и повысить уровень защищенности.
              </p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>
            <h3>Соответствие законодательству</h3>
            <p>
Проведение пентеста соответствует требованиям п. 7.17 Приложения 3 к Положению о порядке технической и криптографической защиты информации (в редакции от 10.12.2024 № 259).</p>
          `,
        ]}
      />

      <InfoGridSection
        title={
          <>
            Что вы получаете <span className="info-grid__title-accent">в рамках услуги?</span>
          </>
        }
        description="Пентест (penetration testing) — это тестирование на проникновение, которое имитирует действия злоумышленника для выявления уязвимостей в информационной системе. Пентест показывает:"
        columnsHtml={[
          `
          <div class="info-grid__group">
            <h4>
Отчет об уязвимостях и рекомендации по их устранению</h4>
            <p>
Мы предоставляем детальный отчет, в котором указаны все выявленные уязвимости, а также конкретные рекомендации по их устранению.          </div>
          <img
            src="${folderIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Анализ защищенности в реальных условиях (Pentest)</h4>
            <p>
Мы имитируем действия злоумышленника, чтобы оценить уровень защищенности вашей системы в условиях реальных угроз.
            </p>
          </div>
          <img
            src="${searchIcon}"
            alt="Иконка спецификаций"
            class="info-grid__icon"
          />
        `,
        ]}
      />

      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default SecurityAssessmentPage;
