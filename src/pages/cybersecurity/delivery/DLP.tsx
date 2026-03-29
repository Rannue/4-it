import Header from '@/components/layout/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/sections/InfoGridSection';
import DocumentDetailsSection from '@/components/sections/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import Footer from '@/components/layout/Footer';
import searchIcon from '@/assets/icons/search.svg';
import databaseIcon from '@/assets/icons/Database.svg';
import barrierIcon from '@/assets/icons/barrier-block.svg';
import presentationIcon from '@/assets/icons/presentation.svg';
import FeatureBanner from '@/components/sections/FeatureBanner';
import PartnersSection from '@/components/sections/PartnersSection';
import lawIllustration from '@/assets/img/law.png';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import stakhanovetsLogo from '@/assets/img/providers/Стахановец_Логотип_SVG_Полноцвет.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';

function DlpPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение CЗИ и оборудования', href: '/delivery' },
            { label: 'DLP (Data Loss Prevention)' },
          ]}
          title="DLP — защита от утечек конфиденциальных данных"
          description="DLP (Data Loss Prevention) — это технология предотвращения утечек данных, которая обеспечивает контроль, мониторинг и защиту конфиденциальной информации от несанкционированного доступа, передачи или удаления. DLP-системы помогают компаниям предотвращать утечки персональных данных, коммерческой тайны и иной критически важной информации."
        />
        <InfoGridSection
          title="Что такое DLP?"
          description="DLP (Data Loss Prevention) — это комплекс технологий и политик, направленных на:"
          columnsHtml={[
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Обнаружение и классификацию</strong> конфиденциальных данных (персональные данные, финансовая информация, коммерческая тайна);</p>
              <img class="info-grid__icon" src="${searchIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Мониторинг и контроль</strong> передачи данных через корпоративные каналы (электронная почта, мессенджеры, облачные хранилища, USB-устройства);</p>
              <img class="info-grid__icon" src="${databaseIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Блокирование попыток утечки</strong> в реальном времени на основе заданных политик безопасности;</p>
              <img class="info-grid__icon" src="${barrierIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            </div>`,
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Анализ инцидентов</strong> и формирование отчетов для аудита и соответствия регуляторным требованиям.</p>
              <img class="info-grid__icon" src="${presentationIcon}" alt="" aria-hidden="true" />
            </div>`,
          ]}
        />
        <FeatureBanner
          title="Внедрение в соответствии с требованиями и стандартами"
          description="Мы предлагаем внедрение современных DLP-решений, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207)."
          image={lawIllustration}
        />
        <PartnersSection
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

export default DlpPage;
