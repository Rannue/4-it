// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';

import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText';
import taskDarkIllustration from '@/assets/img/illustrations/task-dark.svg';
import checkIcon from '@/assets/icons/check.svg';
import folderIcon from '@/assets/icons/folder.svg';

function SZIDocumentsReviewPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация системы защиты информации', href: '/cybersecurity/certification' },
          { label: 'Пересмотр документов по СЗИ' },
        ]}
        title="Пересмотр документов по СЗИ"
        description="Пересмотр документов по системе защиты информации (СЗИ) — это важный процесс, который обеспечивает актуальность и эффективность вашей системы защиты в соответствии с требованиями законодательства Республики Беларусь. Мы проводим анализ текущей документации, актуализируем меры по защите информации и готовим необходимые документы в соответствии с Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259). Это позволяет вам быть уверенными в том, что ваша СЗИ соответствует всем нормативным требованиям и эффективно защищает ваши данные."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель пересмотра документов"
        text="Обеспечение актуальности и эффективности системы защиты информации: мы помогаем поддерживать документы по СЗИ в соответствии с требованиями законодательства и практиками в области информационной безопасности."
      />

      <CardsGridSectionDark
        title="Что вы получаете в рамках услуги?"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Анализ эффективности применения СЗИ</h3>
              <p>
                Мы оцениваем, насколько текущие меры защиты соответствуют требованиям и эффективно работают на практике.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Пересмотр и актуализация мер по защите информации</h3>
              <p>
                Мы обновляем документы и меры защиты, чтобы они соответствовали последним изменениям в законодательстве и современным угрозам.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${taskDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Рекомендации по внесению изменений в СЗИ</h3>
              <p>
                Мы предоставляем конкретные рекомендации по улучшению СЗИ, чтобы повысить её эффективность.
              </p>
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
Соответствие требованиям законодательства</h4>
            <p>
Мы гарантируем, что ваши документы по СЗИ будут соответствовать всем актуальным нормативным требованиям, включая Приказ № 66 (в редакции от 10.12.2024 № 259).
            </p>
          </div>
          <img
            src="${checkIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Регулярный мониторинг и улучшение системы защиты</h4>
            <p>
Мы помогаем вам поддерживать актуальность документов и мер защиты, что позволяет своевременно реагировать на изменения в законодательстве и новые угрозы.
            </p>
          </div>
          <img
            src="${folderIcon}"
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

export default SZIDocumentsReviewPage;
