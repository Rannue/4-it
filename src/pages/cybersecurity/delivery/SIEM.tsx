import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/sections/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/sections/ClientsSection';
import KeyFeaturesGridSection from '@/components/sections/KeyFeaturesGridSection';
import bitrixBoxImg from '@/assets/img/Битрикс.png';
import bitrixScreenImg from '@/assets/img/Битрикс-скрин.png';
import FeatureBanner from '@/components/sections/FeatureBanner';
import Footer from '@/widgets/footer/Footer';
import lawIllustration from '@/assets/img/law.png';
import PartnersSection from '@/components/sections/PartnersSection';
import infowatchLogo from '@/assets/img/providers/Infowatch.svg';
import librasoftLogo from '@/assets/img/providers/librasoft.svg';
import stakhanovetsLogo from '@/assets/img/providers/Стахановец_Логотип_SVG_Полноцвет.svg';

const SIEM_FEATURE_BANNER_DESCRIPTION =
  'Мы предлагаем внедрение современных SIEM-решений, которые соответствуют требованиям стандартов, указанных в Перечне государственных стандартов, взаимосвязанных с техническим регламентом Республики Беларусь «Информационные технологии. Средства защиты информации. Информационная безопасность» (ТР 2013/027/BY), утверждённых Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 12 марта 2020 г. № 77 (в редакции от 28.12.2022 № 207).';

const SIEM_FEATURE_BANNER_DESCRIPTION_SECONDARY =
  'Чтобы ЭЦП была корректной, она должна быть выдана аккредитованным удостоверяющим центром.';

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
        <KeyFeaturesGridSection
          title={
            <>
              Ключевые возможности{' '}
              <span className="key-features-grid__title-accent">Битрикс24</span>
            </>
          }
          cells={[
            { kind: 'image', src: bitrixBoxImg, alt: '1С-Битрикс24, корпоративный портал' },
            {
              kind: 'text',
              title: 'Настройка CRM и автоматизация продаж',
              intro: 'Мы настраиваем CRM-модуль Битрикс24 под специфику вашего бизнеса:',
              bullets: [
                'настройка воронки продаж и этапов сделок',
                'автоматизация повторяющихся задач',
                'интеграция с телефонией, мессенджерами и email',
                'отчётность по продажам и KPI',
              ],
              footnote:
                'Это позволяет контролировать все этапы продаж и сокращать время обработки заявок.',
            },
            {
              kind: 'text',
              title: 'Организация задач и проектов',
              intro: 'Мы настраиваем систему управления задачами и проектами:',
              bullets: [
                'распределение задач между сотрудниками',
                'контроль сроков и статусов выполнения',
                'автоматическое уведомление и отчёты по прогрессу',
                'настройка шаблонов проектов и бизнес-процессов',
              ],
              footnote:
                'Таким образом компания получает прозрачный контроль за всеми проектами и задачами.',
            },
            {
              kind: 'text',
              title: 'Интеграции с внешними системами',
              intro: 'Битрикс24 можно интегрировать с любыми корпоративными системами:',
              bullets: [
                '1С — синхронизация клиентов, заказов и остатков',
                'ERP и складские системы',
                'интернет-магазины и маркетплейсы',
                'сторонние CRM, телефония и мессенджеры',
                'аналитические и маркетинговые сервисы',
              ],
              footnote:
                'Интеграции позволяют автоматизировать обмен данными и сокращают ручной труд сотрудников.',
            },
            {
              kind: 'text',
              title: 'Обучение и поддержка',
              intro:
                'После внедрения мы проводим обучение сотрудников и предоставляем документацию по работе с системой. Также возможна техническая поддержка и сопровождение, чтобы ваши процессы оставались оптимизированными и эффективными.',
            },
            {
              kind: 'image',
              src: bitrixScreenImg,
              alt: 'Интерфейс CRM Битрикс24, сделки',
              layout: 'screen-corner',
            },
          ]}
        />
        <FeatureBanner
          title="Внедрение в соответствии с требованиями и стандартами"
          description={SIEM_FEATURE_BANNER_DESCRIPTION}
          descriptionSecondary={SIEM_FEATURE_BANNER_DESCRIPTION_SECONDARY}
          image={lawIllustration}
        />
        <PartnersSection
          title={
            <>
              <span className="partners__title-accent">Производители</span> и их решения
            </>
          }
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

export default SiemPage;
