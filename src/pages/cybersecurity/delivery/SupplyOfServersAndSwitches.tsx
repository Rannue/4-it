// components
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import ClientsSection from '@/components/grids/ClientsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import ManufacturersSection from '@/components/domain/cybersecurity/ManufacturersSection';

// assets
import bvkLogo from '@/assets/img/providers/bvk.png';
import delTechLogo from '@/assets/img/providers/dell_technologies.png';
import fusionLogo from '@/assets/img/providers/fusion.png';
import huaweiLogo from '@/assets/img/providers/huawei.png';
import lenovoLogo from '@/assets/img/providers/lenovo.png';

function SupplyOfServersAndSwitchesPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'Поставка серверов и коммутаторов' },
          ]}
          title="Поставка серверов и коммутаторов"
          description="Мы осуществляем поставку серверного и сетевого оборудования от ведущих мировых и отечественных производителей, обеспечивая надёжную и масштабируемую инфраструктуру для предприятий любого уровня. Оборудование подбирается индивидуально под задачи клиента с учётом требований по производительности, отказоустойчивости и соответствия нормативным документам Республики Беларусь.
"
        />
        <StickyHeadingListSection
          id="servers-switches-benefits"
          title={<>Мы предлагаем:</>}
          items={[
            { text: 'подбор серверов' },
            {
              text: 'подбор сетевого оборудования: L2/L3-коммутаторы, маршрутизаторы, точки доступа',
            },
            { text: 'поставку оборудования с гарантией и необходимыми сертификатами' },
            { text: 'установку, настройку и ввод в эксплуатацию' },
            { text: 'техническую поддержка и сервисное обслуживание' },
          ]}
        />
        <ManufacturersSection
          title="Производители и их решения"
          description="Мы работаем с решениями от ведущих производителей, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь (ТР 2013/027/BY)"
          logos={[
            { src: bvkLogo, alt: 'bvkLogo' },
            { src: delTechLogo, alt: 'ZStack' },
            { src: fusionLogo, alt: 'fusionLogo' },
            { src: huaweiLogo, alt: 'huaweiLogo' },
            { src: lenovoLogo, alt: 'lenovoLogo' },
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

export default SupplyOfServersAndSwitchesPage;
