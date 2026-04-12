import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/cybersecurity/ManufacturersSection';
import lawIllustration from '@/assets/img/law_filled.svg';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import stakhanovetsLogo from '@/assets/img/providers/stakhanovec-logo.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';
import copyIcon from '@/assets/icons/copy.svg';
import rotateIcon from '@/assets/icons/rotate.svg';
import settingsIcon from '@/assets/icons/settings.svg';
import centerIcon from '@/assets/icons/center.svg';
import folderIcon from '@/assets/icons/folder.svg';
import сhartIcon from '@/assets/icons/chart.svg';

function BackupPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'Резервное копирование' },
          ]}
          title="Резервное копирование"
          description="Резервное копирование (Backup) — ключевой элемент обеспечения непрерывности бизнеса и защиты информации от потерь. Является гарантией сохранности критически важных данных."
        />
        <InfoGridSection
          title={
            <>
              Что даёт современное{' '}
              <span className="info-grid__title-accent">резервное копирование?</span>
            </>
          }
          description="В рамках защищённой инфраструктуры важно обеспечить:"
          columnsHtml={[
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Создание</strong> резервных копий файлов, баз данных, виртуальных машин и системных образов</p>
              <img class="info-grid__icon" src="${copyIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Поддержка</strong> гибкого расписания и дедупликации данных</p>
              <img class="info-grid__icon" src="${rotateIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Автоматическое восстановление</strong> данных при сбоях и инцидентах</p>
              <img class="info-grid__icon" src="${settingsIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Централизованное</strong> управление и обновление баз данных угроз</p>
              <img class="info-grid__icon" src="${centerIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Хранение</strong> копий локально, в удалённых хранилищах или в облаке</p>
            <img class="info-grid__icon" src="${folderIcon}" alt="" aria-hidden="true" />
          </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Отчётность, логирование и контроль</strong> успешности операций</p>
              <img class="info-grid__icon" src="${сhartIcon}" alt="" aria-hidden="true" />
            </div>`,
          ]}
        />
        <FeatureBanner
          complianceHeadline={{
            line1: 'Внедрение в соответствии',
            line2: 'с требованиями и стандартами',
          }}
          description="Мы предлагаем решения для автоматизированного резервного копирования и восстановления данных, соответствующие требованиям безопасности. Надёжные системы резервного копирования минимизируют риски потери данных при сбоях, атаках или ошибках пользователей."
          complianceVisual={lawIllustration}
          imageAlt=""
        />
        <ManufacturersSection
          title="Производители и их решения"
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
      </main>
      <Footer />
    </div>
  );
}

export default BackupPage;
