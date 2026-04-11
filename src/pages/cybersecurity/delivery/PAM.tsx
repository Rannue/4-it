import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import FeatureListSection from '@/components/sections/FeatureListSection';
import DocumentDetailsSection from '@/components/кибербезопасность/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import Footer from '@/widgets/footer/Footer';
import searchIcon from '@/assets/icons/search.svg';
import databaseIcon from '@/assets/icons/Database.svg';
import barrierIcon from '@/assets/icons/barrier-block.svg';
import presentationIcon from '@/assets/icons/presentation.svg';
import FeatureBanner from '@/components/sections/FeatureBanner';
import ManufacturersSection from '@/components/кибербезопасность/ManufacturersSection';
import lawIllustration from '@/assets/img/law.png';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import stakhanovetsLogo from '@/assets/img/providers/Стахановец_Логотип_SVG_Полноцвет.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';

function PamPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение CЗИ и оборудования', href: '/delivery' },
            { label: 'PAM (Privileged Access Management)' },
          ]}
          title="PAM — защита привилегированных доступов"
          description="PAM (Privileged Access Management) — это система управления и контроля привилегированными учётными записями, которая обеспечивает безопасный доступ к критически важным системам и данным. PAM-решения помогают организациям предотвращать несанкционированный доступ, снижать риски внутренних угроз."
        />
        <FeatureListSection
          title="Что такое PAM?"
          description="PAM (Privileged Access Management) — это комплекс технологий и процессов, направленных на:"
          items={[
            {
              icon: searchIcon,
              text: '<strong>Централизованное хранение</strong><br> и управление учётными данными привилегированных пользователей;',
            },
            {
              icon: databaseIcon,
              text: '<strong>Контроль и мониторинг</strong><br> сессий привилегированных пользователей в режиме реального времени;',
            },
            {
              icon: barrierIcon,
              text: '<strong>Разграничение прав доступа</strong><br> по принципу минимальных привилегий;',
            },
            {
              icon: presentationIcon,
              text: '<strong>Запись и аудит</strong><br> всех действий привилегированных пользователей;',
            },
            {
              icon: searchIcon,
              text: '<strong>Автоматическую ротацию</strong><br> паролей для критически важных учётных записей.',
            },
          ]}
        />
        <FeatureBanner
          title="Внедрение в соответствии с требованиями и стандартами"
          description="Мы предлагаем внедрение современных DLP-решений, соответствующих требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207)."
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

export default PamPage;
