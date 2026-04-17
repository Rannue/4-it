// components
import PageLayout from '@/components/layout/PageLayout';
import InfoGridSection from '@/components/grids/InfoGridSection';
import SecondaryHero from '@/components/sections/SecondaryHero';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText';
import ClientsSection from '@/components/grids/ClientsSection';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';

// assets
import bookIcon from '@/assets/icons/book.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import trendingUpIcon from '@/assets/icons/trending-up.svg';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import scanDarkIllustration from '@/assets/img/illustrations/scan-dark.svg';
import taskDarkIllustration from '@/assets/img/illustrations/task-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';

function AuditPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', to: '/' },
          { label: 'Кибербезопасность', to: '/cybersecurity' },
          { label: 'Аудит инфраструктуры и информационной безопасности' },
        ]}
        title="Аудит инфраструктуры и информационной безопасности"
        description="Аудит инфраструктуры и информационной безопасности (ИБ) — это первый и важнейший этап в построении надежной системы защиты информации. Мы проводим детальный анализ вашей информационной системы (ИС), выявляем слабые места и предоставляем рекомендации для дальнейшего проектирования и внедрения системы защиты информации (СЗИ). Наши услуги помогут вам выполнить требования законодательства Республики Беларусь и обеспечить безопасность ваших данных."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель аудита"
        text="Анализ состояния информационной системы: мы проводим комплексный анализ текущего состояния вашей ИС"
      />

      <InfoGridSection
        title={
          <>
            Что вы получаете <span className="info-grid__title-accent">в рамках услуги</span>
          </>
        }
        columnsHtml={[
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
          `
              <div class="info-grid__group">
                <h4>Рекомендации по улучшению</h4>
                <p>
                  Конкретные шаги для устранения выявленных уязвимостей
                  и повышения уровня защищённости.
                </p>
              </div>
              <img
                src="${trendingUpIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
        ]}
      />

      <CardsGridSectionDark
        title="Преимущества аудита инфраструктуры и информационной безопасности"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Детальный анализ</h3>
              <p>
                Мы проводим глубокий анализ текущего состояния вашей информационной системы, что позволяет выявить все слабые места.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${scanDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Выявление узких мест</h3>
              <p>
                Мы определяем проблемные зоны в структуре и информационных потоках, которые могут стать источником угроз.
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
                <img src="${taskDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Подготовка к проектированию СЗИ</h3>
              <p>
                Наши рекомендации станут основой для разработки эффективной системы защиты информации.
              </p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>
            <h3>Соответствие законодательству</h3>
            <p>
Мы учитываем требования законодательства Республики Беларусь, что гарантирует выполнение всех нормативных требований.</p>
          `,
        ]}
      />

      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default AuditPage;
