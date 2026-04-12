import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import ClientsSection from '@/components/grids/ClientsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import Footer from '@/widgets/footer/Footer';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import ManufacturersSection from '@/components/cybersecurity/ManufacturersSection';
import bytisLogo from '@/assets/img/providers/bytis.png';
import zstackLogo from '@/assets/img/providers/ZStack.svg';
import proxmoxLogo from '@/assets/img/providers/Proxmox.svg';

function VirtualizationPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Виртуализация' }]}
          title="Виртуализация"
          description="Виртуализация — технология, позволяющая запускать несколько виртуальных машин на одном физическом сервере, что существенно повышает эффективность использования ИТ-ресурсов, снижает затраты и упрощает управление инфраструктурой. Мы внедряем решения виртуализации поддерживающие современные стандарты информационной безопасности."
        />
        <StickyHeadingListSection
          id="virtualization-benefits"
          title={
            <>
              Что даёт{' '}
              <span className="sticky-heading-list__title-accent">
                <br />
                виртуализация?
              </span>
            </>
          }
          items={[
            { text: 'централизованное управление виртуальными машинами, хранилищами и сетями' },
            { text: 'автоматизацию развертывания и масштабирования ресурсов' },
            { text: 'поддержку KVM-гипервизора и стандартных API' },
            { text: 'высокую отказоустойчивость и гибкое распределение нагрузки' },
            { text: 'многоуровневую безопасность и контроль доступа' },
            { text: 'встроенные функции резервного копирования, миграции и восстановления' },
            { text: 'интеграцию с системами мониторинга и внешними хранилищами' },
            { text: 'удобный веб-интерфейс для администраторов и пользователей.' },
          ]}
        />
        <ManufacturersSection
          title="Производители и их решения"
          description="Мы работаем с решениями от ведущих производителей, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь (ТР 2013/027/BY)"
          logos={[
            { src: bytisLogo, alt: 'BYTIS' },
            { src: zstackLogo, alt: 'ZStack' },
            { src: proxmoxLogo, alt: 'Proxmox' },
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

export default VirtualizationPage;
