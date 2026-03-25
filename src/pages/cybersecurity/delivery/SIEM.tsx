import Header from '../../../components/Header';
import SecondaryHero from '../../../components/SecondaryHero';
import DocumentDetailsSection from '../../../components/DocumentDetailsSection';
import CertificatesSection from '../../../components/CertificatesSection';
import ClientsSection from '../../../components/ClientsSection';
import InfoGridSection from '../../../components/InfoGridSection';
import fileDownloadIcon from '../../../assets/icons/file-download.svg';
import presentationIcon from '../../../assets/icons/presentation.svg';
import bellIcon from '../../../assets/icons/bell.svg';
import clipboardIcon from '../../../assets/icons/clipboard.svg';
import FeatureBanner from '../../../components/FeatureBanner';
import Footer from '../../../components/Footer';
import lawIllustration from '../../../assets/img/law.png';

function SiemPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
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
          description="SIEM (Security Information and Event Management) — это технология, которая позволяет:"
          columnsHtml={[
            `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Собирать данные</strong> из различных источников, таких как сетевые устройства, серверы, приложения и системы безопасности</p>
              <img class="info-grid__icon" src="${fileDownloadIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Анализировать события</strong> в реальном времени для выявления подозрительной активности</p>
            <img class="info-grid__icon" src="${presentationIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            </div>`,
            `<div class="info-grid__group">
            </div>`,
            `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Оперативно реагировать</strong> на угрозы, минимизируя возможный ущерб</p>
            <img class="info-grid__icon" src="${bellIcon}" alt="" aria-hidden="true" />
            </div>`,
            `<div class="info-grid__group">
            <p><strong style="color: var(--color-text-main);">Генерировать отчеты</strong> для анализа инцидентов и улучшения стратегии безопасности</p>
            <img class="info-grid__icon" src="${clipboardIcon}" alt="" aria-hidden="true" />
            </div>`,
          ]}
        />
        <FeatureBanner
          title="Внедрение в соответствии с требованиями и стандартами"
          description="Мы предлагаем внедрение современных SIEM-решений, которые соответствуют требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207).
Чтобы ЭЦП была корректной, она должна быть выдана аккредитованным удостоверяющим центром."
          image={lawIllustration}
        />
        <DocumentDetailsSection />
        <CertificatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default SiemPage;
