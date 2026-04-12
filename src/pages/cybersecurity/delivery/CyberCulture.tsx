import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import ClientsSection from '@/components/grids/ClientsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import Footer from '@/widgets/footer/Footer';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import { CYBER_CULTURE_PHISHMAN_STACKED } from '@/data/stackedFeatureCards/StackedCards';
import StackedFeatureCardsSection from '@/components/sections/StackedFeatureCardsSection';

function CyberCulturePage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
            { label: 'Решения для развития киберкультуры в компаниях' },
          ]}
          title="Решения для развития киберкультуры в компаниях"
          description="Система обучения по информационной безопасности с тренингами, симуляциями атак и проверкой знаний сотрудников. Повышаем осведомлённость и устойчивость к фишингу, социальной инженерии и другим типовым угрозам — в соответствии с задачами вашей компании."
        />
        <StickyHeadingListSection
          id="cyber-culture-benefits"
          title={
            <>
              Что даёт развитие{' '}
              <span className="sticky-heading-list__title-accent">
                <br />
                киберкультуры?
              </span>
            </>
          }
          items={[
            { text: 'регулярные тренинги и материалы по ИБ для разных ролей в организации' },
            { text: 'симуляции атак и учебные сценарии без реального риска для инфраструктуры' },
            { text: 'тестирование сотрудников и отчёты для руководства и отдела ИБ' },
            {
              text: 'акцент на фишинг, утечки данных и безопасное поведение в почте и мессенджерах',
            },
            { text: 'поддержка внутренних политик и регламентов по защите информации' },
            { text: 'измеримый рост знаний и снижение доли инцидентов «человеческого фактора»' },
          ]}
        />
        <StackedFeatureCardsSection
          id="cyber-culture-phishman-line"
          heading={
            <>
              ПРОДУКТОВАЯ ЛИНЕЙКА{' '}
              <span className="stacked-feature-cards__heading-accent">PHISHMAN</span>
            </>
          }
          {...CYBER_CULTURE_PHISHMAN_STACKED}
        />
        <DocumentDetailsSection />
        <CertificatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default CyberCulturePage;
