// components
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';
import ServicesSectionSecondary from '@/components/sections/ServicesSectionSecondary';
import CardsGridSection from '@/components/grids/CardsGridSection';
import DocumentDetailsSection from '@/components/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';

// assets
import aimIllustration from '@/assets/img/illustrations/aim.svg';
import complexIllustration from '@/assets/img/illustrations/complex.svg';
import integrationIllustration from '@/assets/img/illustrations/integration.svg';
import reliableIllustration from '@/assets/img/illustrations/reliability.svg';
import certificationIllustration from '@/assets/img/illustrations/certification.svg';
import chatIllustration from '@/assets/img/illustrations/chat.svg';

function CertificationOfInformationSecurityToolsPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Поставка и внедрение CЗИ и оборудования' },
          ]}
          title="Поставка и внедрение CЗИ и оборудования"
          description="Мы предлагаем комплексные решения для защиты информации: предотвращение утечек, мониторинг и анализ угроз. Используем надежные технологии от ведущих производителей, обеспечивая соответствие строгим требованиям безопасности."
        />
        <ServicesSectionSecondary
          title="Что мы предлагаем?"
          description="Мы предоставляем широкий спектр решений для защиты вашей информационной системы:"
          items={[
            {
              title: 'SIEM (Security Information and Event Management)',
              description:
                'Системы управления событиями и информационной безопасностью для мониторинга, анализа и реагирования на угрозы.',
              to: '/cybersecurity/siem',
            },
            {
              title: 'DLP (Data Loss Prevention)',
              description:
                'Технологии для предотвращения утечек конфиденциальной информации и защиты данных от несанкционированного доступа.',
              to: '/cybersecurity/dlp',
            },
            {
              title: 'PAM (Privileged Access Management)',
              description:
                'Средства управления привилегированным доступом для защиты критически важных данных и систем.',
              to: '/cybersecurity/pam',
            },
            {
              title: 'Firewall (межсетевые экраны)',
              description:
                'Высокоэффективные комплексные решения для предотвращения несанкционированного доступа и надёжной защиты корпоративных сетей.',
              to: '/cybersecurity/firewall',
            },
            {
              title: 'Средства линейного шифрования',
              description:
                'Решения для сквозного шифрования, предотвращающие перехват и несанкционированный доступ в корпоративных и телеком-сетях.',
              to: '/cybersecurity/linear-encryption',
            },
            {
              title: 'Антивирусная защита',
              description:
                'Современные средства обнаружения и устранения вредоносных программ, обеспечивающие защиту от вирусов, троянов и других угроз.',
              to: '/cybersecurity/antivirus',
            },
            {
              title: 'Поставка серверов и коммутаторов',
              description:
                'Надёжное оборудование для поддержки работы систем защиты информации и построения защищённой инфраструктуры.',
              to: '/cybersecurity/servers-and-switches',
            },
            {
              title: 'Резервное копирование',
              description:
                'Решения для резервного копирования и восстановления данных при сбоях, атаках и утрате — основа информационной безопасности.',
              to: '/cybersecurity/backup',
            },
            {
              title: 'Виртуализация',
              description:
                'Виртуализация позволяет запускать несколько систем на одном сервере, снижая затраты и повышая безопасность.',
              to: '/virtualization',
            },
            {
              title: 'Решения для развития киберкультуры в компаниях',
              description:
                'Система обучения по информационной безопасности с тренингами, симуляциями атак и тестированием сотрудников для повышения устойчивости к фишингу и другим угрозам.',
              to: '/cybersecurity/delivery/cyber-culture',
            },
          ]}
        />
        <CardsGridSection
          title="Преимущества наших решений"
          cardsHtml={[
            `
              <div class="cards-grid__media">
                <img src="${aimIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Фокус на защите информации</h3>
              <p>
                Мы поставляем и внедряем только проверенные решения, соответствующие самым строгим требованиям информационной безопасности.
              </p>
            `,
            `
              <div class="cards-grid__media">
                <img src="${complexIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Комплексный подход</h3>
              <p>
                Мы предлагаем комбинацию программного обеспечения и оборудования, что позволяет построить целостную систему защиты информации.
              </p>
            `,
            `
              <div class="cards-grid__media">
                <img src="${integrationIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Интеграция</h3>
              <p>
Мы гарантируем совместимость наших решений с существующей ИТ-инфраструктурой, что минимизирует затраты на внедрение.              </p>
            `,
            `
            <div class="cards-grid__media">
            </div>
          `,
            `
            <div class="cards-grid__media">
            </div>
          `,
            `
              <div class="cards-grid__media">
                <img src="${reliableIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Надежность</h3>
              <p>
                Мы используем сертифицированные средства защиты информации от ведущих производителей, что обеспечивает высокую надежность и эффективность.
              </p>
            `,
            `
              <div class="cards-grid__media">
                <img src="${certificationIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Соответствие требованиям</h3>
              <p>
Все наши решения соответствуют нормативным и законодательным стандартам, включая требования Республики Беларусь.              </p>
            `,
            `
              <div class="cards-grid__media">
                <img src="${chatIllustration}" alt="" aria-hidden="true" />
              </div>
              <h3>Поддержка на всех этапах</h3>
              <p>
Мы предоставляем консультации, настройку и сопровождение внедренных решений, чтобы обеспечить их эффективную работу.              </p>
            `,
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

export default CertificationOfInformationSecurityToolsPage;
