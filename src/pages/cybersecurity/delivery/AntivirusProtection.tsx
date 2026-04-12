// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/domain/cybersecurity/ManufacturersSection';

// assets
import searchIcon from '@/assets/icons/search.svg';
import laptopIcon from '@/assets/icons/laptop.svg';
import chartIcon from '@/assets/icons/chart.svg';
import centerIcon from '@/assets/icons/center.svg';
import fingerprintIcon from '@/assets/icons/fingerprint.svg';
import folderIcon from '@/assets/icons/folder.svg';
import lawIllustration from '@/assets/img/law_filled.svg';
import kiberprotectLogo from '@/assets/img/providers/kiberprotekt.svg';
import vinchinLogo from '@/assets/img/providers/Vinchin.svg';

function AntivirusProtectionPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
          { label: 'Антивирусная защита' },
        ]}
        title="Антивирусная защита"
        description="Антивирусная защита является ключевым элементом информационной безопасности, обеспечивая обнаружение, блокировку и удаление вредоносного программного обеспечения. Современные антивирусные решения защищают не только от вирусов, но и от шпионских программ, троянов, червей, руткитов и других видов угроз."
      />
      <InfoGridSection
        title={
          <>
            Что включает <span className="info-grid__title-accent">антивирусная защита?</span>
          </>
        }
        description="Современная антивирусная защита охватывает:"
        columnsHtml={[
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Постоянный мониторинг</strong> файловой системы и сетевого трафика</p>
              <img class="info-grid__icon" src="${laptopIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Проверку загружаемых и запускаемых файлов</strong> (USB, съёмные диски) в режиме реального времени</p>
              <img class="info-grid__icon" src="${searchIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Расширенную</strong> эвристическую и сигнатурную аналитику</p>
              <img class="info-grid__icon" src="${chartIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Централизованное управление и обновление</strong> баз данных угроз</p>
              <img class="info-grid__icon" src="${centerIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Защиту</strong> рабочих станций, серверов, мобильных устройств</p>
            <img class="info-grid__icon" src="${fingerprintIcon}" alt="" aria-hidden="true" />
          </div>`,
          `<div class="info-grid__group">
          <p><strong style="color: var(--color-text-main);">Генерацию</strong> отчётов и событийных логов для анализа инцидентов</p>
          <img class="info-grid__icon" src="${folderIcon}" alt="" aria-hidden="true" />
        </div>`,
        ]}
      />
      <FeatureBanner
        complianceHeadline={{
          line1: 'Внедрение в соответствии',
          line2: 'с требованиями и стандартами',
        }}
        description="Мы предлагаем проверенные решения, соответствующие требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207)."
        complianceVisual={lawIllustration}
        imageAlt=""
      />
      <ManufacturersSection
        title="Производители и их решения"
        logos={[
          { src: vinchinLogo, alt: 'Vinchin' },
          { src: kiberprotectLogo, alt: 'Киберпротект' },
        ]}
      />
      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default AntivirusProtectionPage;
