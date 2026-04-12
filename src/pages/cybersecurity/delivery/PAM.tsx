// components
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/cybersecurity/ManufacturersSection';

// assets
import lawIllustration from '@/assets/img/law_filled.svg';
import kronLogo from '@/assets/img/providers/kron.svg';
import indidLogo from '@/assets/img/providers/indid.png';
import itbastionLogo from '@/assets/img/providers/aitibastyon.png';
import jumpServerLogo from '@/assets/img/providers/JumpServer.png';
import folderIcon from '@/assets/icons/folder.svg';
import userIcon from '@/assets/icons/user.svg';
import rotateIcon from '@/assets/icons/rotate.svg';
import desktopIcon from '@/assets/icons/laptop.svg';
import editIcon from '@/assets/icons/edit.svg';

function PamPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'PAM (Privileged Access Management)' },
          ]}
          title="PAM — защита привилегированных доступов"
          description="PAM (Privileged Access Management) — это система управления и контроля привилегированными учётными записями, которая обеспечивает безопасный доступ к критически важным системам и данным. PAM-решения помогают организациям предотвращать несанкционированный доступ, снижать риски внутренних угроз."
        />
        <InfoGridSection
          title="Что такое PAM?"
          description="PAM (Privileged Access Management) — это комплекс технологий и процессов, направленных на:"
          columnsHtml={[
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Централизованное хранение</strong> и управление учётными данными привилегированных пользователей</p>
              <img class="info-grid__icon" src="${folderIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Разграничение прав доступа</strong> по принципу минимальных привилегий</p>
              <img class="info-grid__icon" src="${userIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Автоматическую ротацию</strong> паролей для критически важных учётных записей</p>
              <img class="info-grid__icon" src="${rotateIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Контроль и мониторинг</strong> сессий привилегированных пользователей в режиме реального времени</p>
              <img class="info-grid__icon" src="${desktopIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Запись и аудит</strong> всех действий привилегированных пользователей</p>
            <img class="info-grid__icon" src="${editIcon}" alt="" aria-hidden="true" />
          </div>`,
            `<div class="info-grid__group info-grid__group--empty"></div>`,
          ]}
        />
        <FeatureBanner
          complianceHeadline={{
            line1: 'Внедрение в соответствии',
            line2: 'с требованиями и стандартами',
          }}
          description="Мы предлагаем внедрение PAM-решений, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207)."
          complianceVisual={lawIllustration}
          imageAlt=""
        />
        <ManufacturersSection
          title="Производители и их решения"
          description="Мы работаем с решениями от ведущих производителей, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь (ТР 2013/027/BY)"
          logos={[
            { src: kronLogo, alt: 'Крон' },
            { src: indidLogo, alt: 'Индид' },
            { src: itbastionLogo, alt: 'Айтибастион' },
            { src: jumpServerLogo, alt: 'JumpServer' },
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

export default PamPage;
