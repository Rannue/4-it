import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/cybersecurity/ManufacturersSection';
import lawIllustration from '@/assets/img/law_filled.svg';
import checkpointLogo from '@/assets/img/providers/checkpoint.svg';
import huaweiLogo from '@/assets/img/providers/Huawei.svg';
import usergateLogo from '@/assets/img/providers/Usergate.png';
import kodBezopasnostiLogo from '@/assets/img/providers/kod-bezopasnosti.svg';
import idecoLogo from '@/assets/img/providers/Ideco.png';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';

const FIREWALL_STANDARDS_DESCRIPTION =
  'Мы предлагаем внедрение межсетевых экранов, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY).';

function FirewallPage() {
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
        <StickyHeadingListSection
          id="firewall-benefits"
          title={
            <>
              Что обеспечивают{' '}
              <span className="sticky-heading-list__title-accent">
                <br />
                Межсетевые экраны?
              </span>
            </>
          }
          description={
            <>
              <strong style={{ color: 'var(--color-text-main)' }}>Firewall</strong> — это система
              защиты, контролирующая входящий и исходящий сетевой трафик. Она играет ключевую роль в
              обеспечении информационной безопасности компании. Современные межсетевые экраны
              обеспечивают:
            </>
          }
          items={[
            {
              text: 'пакетную фильтрацию сетевого трафика',
            },
            {
              text: 'контроль приложений (Application Control)',
            },
            { text: 'предотвращение вторжений (IPS)' },
            {
              text: 'защиту от DDoS-атак',
            },
            { text: 'VPN-туннелирование' },
            { text: 'контроль доступа к облачным сервисам' },
          ]}
        />
        <FeatureBanner
          complianceHeadline={{
            line1: 'Внедрение в соответствии',
            line2: 'с требованиями и стандартами',
          }}
          description={FIREWALL_STANDARDS_DESCRIPTION}
          complianceVisual={lawIllustration}
          imageAlt=""
        />
        <ManufacturersSection
          title="Производители и их решения"
          description="Мы работаем с решениями от ведущих производителей, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь (ТР 2013/027/BY)"
          logos={[
            { src: checkpointLogo, alt: 'Check Point' },
            { src: huaweiLogo, alt: 'Huawei' },
            { src: usergateLogo, alt: 'UserGate' },
            { src: kodBezopasnostiLogo, alt: 'Код безопасности' },
            { src: idecoLogo, alt: 'Ideco' },
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

export default FirewallPage;
