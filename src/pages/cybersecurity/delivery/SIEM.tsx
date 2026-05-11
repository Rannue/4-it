// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/domain/cybersecurity/ManufacturersSection';
import InfoGridSection from '@/components/grids/InfoGridSection';

// assets
import lawIllustration from '@/assets/img/illustrations/law.png';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';
import stakhanovetsLogo from '@/assets/img/providers/stakhanovec-logo.svg';
import folderIcon from '@/assets/icons/folder.svg';
import exclamationIcon from '@/assets/icons/exclamation.svg';
import deviceIcon from '@/assets/icons/laptop.svg';
import chartIcon from '@/assets/icons/chart.svg';

const SIEM_FEATURE_BANNER_DESCRIPTION =
  'Мы предлагаем внедрение современных SIEM-решений, которые соответствуют требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207).';

const SIEM_FEATURE_BANNER_DESCRIPTION_SECONDARY =
  'Чтобы ЭЦП была корректной, она должна быть выдана аккредитованным удостоверяющим центром.';

function SiemPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
          { label: 'SIEM (Security Information and Event Management)' },
        ]}
        title="SIEM (Security Information and Event Management)"
        description="SIEM (Security Information and Event Management) — это система управления событиями и информацией безопасности, которая обеспечивает мониторинг, анализ и оперативное реагирование на угрозы в реальном времени. SIEM объединяет данные из различных источников, таких как сетевые устройства, серверы и приложения, чтобы выявить подозрительную активность и предотвратить кибератаки."
      />
      <InfoGridSection
        title="Что такое SIEM?"
        description="SIEM (Security Information and Event Management) — это технология, которая позволяет"
        columnsHtml={[
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Собирать данные</strong> из различных источников, таких как сетевые устройства, серверы, приложения и системы безопасности</p>
              <img class="info-grid__icon" src="${deviceIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Анализировать события</strong> в реальном времени для выявления подозрительной активности</p>
              <img class="info-grid__icon" src="${chartIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group info-grid__group--empty">
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Оперативно реагировать</strong> на угрозы, минимизируя возможный ущерб</p>
              <img class="info-grid__icon" src="${exclamationIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group info-grid__group--empty">
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Генерировать отчеты</strong> для анализа инцидентов и улучшения стратегии безопасности</p>
              <img class="info-grid__icon" src="${folderIcon}" alt="" aria-hidden="true" />
            </div>`,
        ]}
      />
      <FeatureBanner
        complianceHeadline={{
          line1: 'Внедрение в соответствии',
          line2: 'с требованиями и стандартами',
        }}
        description={SIEM_FEATURE_BANNER_DESCRIPTION}
        descriptionSecondary={SIEM_FEATURE_BANNER_DESCRIPTION_SECONDARY}
        complianceVisual={lawIllustration}
        imageAlt=""
      />
      <ManufacturersSection
        title={
          <>
            <span className="manufacturers__title-accent">Производители</span> и их решения
          </>
        }
        description="Мы работаем с решениями от ведущих производителей, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь (ТР 2013/027/BY)"
        logos={[
          { src: infowatchLogo, alt: 'InfoWatch' },
          { src: librasoftLogo, alt: 'Librasoft' },
          { src: stakhanovetsLogo, alt: 'Стахановец' },
        ]}
      />
      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default SiemPage;
