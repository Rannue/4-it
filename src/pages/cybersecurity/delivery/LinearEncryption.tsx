// components
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/domain/cybersecurity/ManufacturersSection';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';

// assets
import lawIllustration from '@/assets/img/law_filled.svg';
import sterraLogo from '@/assets/img/providers/Sterra.png';

function LinearEncryptionPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'Средства линейного шифрования' },
          ]}
          title="Средства линейного шифрования"
          description="Средства линейного шифрования обеспечивают безопасную передачу данных по сетям связи, предотвращая перехват и несанкционированный доступ. Решения поддерживают сквозное шифрование, гарантируя конфиденциальность и целостность информации."
        />
        <StickyHeadingListSection
          id="firewall-benefits"
          title={
            <>
              Зачем нужны средства{' '}
              <span className="sticky-heading-list__title-accent">
                <br />
                линейного шифрования?
              </span>
            </>
          }
          description={
            <>
              Такие технологии защиты обеспечивают надёжное и быстрое шифрование данных в
              корпоративных сетях. Основные преимущества:
            </>
          }
          items={[
            {
              text: 'обеспечивают сквозное шифрование данных в корпоративных и телекоммуникационных сетях',
            },
            {
              text: 'защищают информацию от перехвата и утечек',
            },
            { text: 'поддерживают высокую скорость передачи без потери производительности' },
            {
              text: 'легко интегрируется в существующую сетевую инфраструктуру',
            },
            {
              text: 'соответствовуют требованиям регуляторов РБ в области информационной безопасности',
            },
          ]}
        />
        <FeatureBanner
          complianceHeadline={{
            line1: 'Внедрение в соответствии',
            line2: 'с требованиями и стандартами',
          }}
          description="Мы предлагаем сертифицированные решения для защиты данных, соответствующие требованиям Технического регламента Республики Беларусь (ТР 2013/027/BY) и стандартов, утвержденных Оперативно-аналитическим центром при Президенте Республики Беларусь."
          complianceVisual={lawIllustration}
          imageAlt=""
        />
        <ManufacturersSection
          title="Производители и их решения"
          description={
            <>
              Мы работаем с решениями от{' '}
              <strong style={{ color: 'var(--color-text-main)' }}>«С-Терра Беларусь»</strong> : шлюз
              безопасности Bel VPN Gate, клиент безопасности Bel VPN Client, программный комплекс
              Bel VPN KP, а также модуль Bel VPN L2.
            </>
          }
          logos={[{ src: sterraLogo, alt: 'С-Терра' }]}
        />
        <DocumentDetailsSection />
        <CertificatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default LinearEncryptionPage;
