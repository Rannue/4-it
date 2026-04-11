import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import FeatureListSection from '@/components/sections/FeatureListSection';
import DocumentDetailsSection from '@/components/кибербезопасность/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import searchIcon from '@/assets/icons/search.svg';
import databaseIcon from '@/assets/icons/Database.svg';
import barrierIcon from '@/assets/icons/barrier-block.svg';
import presentationIcon from '@/assets/icons/presentation.svg';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/кибербезопасность/ManufacturersSection';
import lawIllustration from '@/assets/img/illustrations/law.png';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import stakhanovetsLogo from '@/assets/img/providers/Стахановец_Логотип_SVG_Полноцвет.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';

const FIREWALL_STANDARDS_DESCRIPTION =
  'Мы предлагаем внедрение современных решений класса межсетевых экранов, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207).';

function CybersecurityFirewallPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'Firewall (межсетевые экраны)' },
          ]}
          title="Firewall — межсетевые экраны"
          description="Межсетевой экран (Firewall) — это средство защиты информации, которое контролирует и фильтрует сетевой трафик между сегментами сети или между внутренней сетью организации и внешним миром. Современные решения помогают предотвратить несанкционированный доступ, снизить поверхность атаки и обеспечить соответствие политикам информационной безопасности."
        />
        <FeatureListSection
          title="Задачи межсетевых экранов"
          description="В рамках построения защищённой инфраструктуры межсетевые экраны выполняют ключевые функции:"
          items={[
            {
              icon: barrierIcon,
              text: '<strong>Контроль и фильтрация трафика</strong><br> по правилам безопасности на периметре и между сегментами сети;',
            },
            {
              icon: searchIcon,
              text: '<strong>Обнаружение и блокирование</strong><br> подозрительных соединений и известных векторов атак;',
            },
            {
              icon: databaseIcon,
              text: '<strong>Сегментация сети</strong><br> и ограничение распространения угроз внутри корпоративной инфраструктуры;',
            },
            {
              icon: presentationIcon,
              text: '<strong>Логирование и мониторинг</strong><br> событий для аудита и реагирования на инциденты;',
            },
            {
              icon: barrierIcon,
              text: '<strong>Интеграция</strong><br> с другими средствами защиты (SIEM, IDS/IPS и др.) в единый контур безопасности.',
            },
          ]}
        />
        <FeatureBanner
          title="Внедрение в соответствии с требованиями и стандартами"
          description={FIREWALL_STANDARDS_DESCRIPTION}
          image={lawIllustration}
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

export default CybersecurityFirewallPage;
