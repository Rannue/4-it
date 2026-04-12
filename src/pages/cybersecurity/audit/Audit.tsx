// components
import PageLayout from '@/components/layout/PageLayout';
import InfoGridSection from '@/components/grids/InfoGridSection';
import SecondaryHero from '@/components/sections/SecondaryHero';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText.tsx';
import ClientsSection from '@/components/grids/ClientsSection';

// assets
import bookIcon from '@/assets/icons/book.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import trendingUpIcon from '@/assets/icons/trending-up.svg';

import '../../Hero.css';

const AUDIT_GOAL_TEXT =
  'Цель аудита — комплексный анализ текущего состояния вашей информационной системы';

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
      />

      <AnimatedAuditGoalText text={AUDIT_GOAL_TEXT} />

      <InfoGridSection
        title="Что вы получаете в рамках услуги"
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

      <ClientsSection />
    </PageLayout>
  );
}

export default AuditPage;
