import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './Hero.css';
import bookIcon from '@/assets/icons/book.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import trendingUpIcon from '@/assets/icons/trending-up.svg';
import InfoGridSection from '@/components/sections/InfoGridSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SecondaryHero from '@/components/sections/SecondaryHero';
import DocumentDetailsSection from '@/components/sections/DocumentDetailsSection';
import ClientsSection from '@/components/sections/ClientsSection';

function CybersecurityPage() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Кибербезопасность' }]}
          title="Кибербезопасность"
          description="Кибербезопасность — это комплекс мер, направленных на защиту информационных систем от несанкционированного доступа, утечек данных и кибератак. В современном мире, где информация является одним из ключевых активов, обеспечение её безопасности становится критически важным. Мы поможем вам защитить ваши данные, соблюдая требования законодательства Республики Беларусь и внедряя передовые технологии."
        />

        <ServicesSection
          items={[
            {
              title: 'Аудит инфраструктуры и информационной безопасности',
              description:
                'Проводим анализ информационных систем, выявляем уязвимости и даём рекомендации по средствам защиты в соответствии с законодательством Республики Беларусь.',
              to: '/cybersecurity/audit',
              ariaLabel: 'Перейти к услуге Аудит инфраструктуры и информационной безопасности',
            },
            {
              title: 'Аттестация системы защиты информации',
              description:
                'Проводим аттестацию средств защиты информации, подтверждаем соответствие требованиям законодательства и сопровождаем полный цикл проверок.',
              to: '/cybersecurity/certification',
              ariaLabel: 'Перейти к услуге Аттестация системы защиты информации',
              tags: [
                { label: 'Проектирование СЗИ', to: '/cybersecurity/design-szi' },
                { label: 'Создание СЗИ', to: '/cybersecurity/create-szi' },
                { label: 'Аттестация СЗИ', to: '/cybersecurity/attestation-szi' },
                {
                  label: 'Оценка эффективности защищённости инфраструктуры',
                  to: '/cybersecurity/infrastructure-effectiveness',
                },
              ],
            },
            {
              title: 'Поставка и внедрение СЗИ и оборудования',
              description:
                'Обеспечиваем защиту данных и мониторинг угроз с использованием решений ведущих производителей, включая настройку и сопровождение.',
              to: '/cybersecurity/delivery',
              ariaLabel: 'Перейти к услуге Поставка и внедрение СЗИ и оборудования',
              tags: [
                {
                  label: 'SIEM (Security Information and Event Management)',
                  to: '/cybersecurity/siem',
                },
                { label: 'DLP (Data Loss Prevention)', to: '/cybersecurity/dlp' },
                { label: 'Firewall', to: '/cybersecurity/firewall' },
                { label: 'Сетевые экраны', to: '/cybersecurity/network-screens' },
                { label: 'Виртуализация', to: '/virtualization' },
                {
                  label: 'Поставка серверов и коммутаторов',
                  to: '/cybersecurity/servers-and-switches',
                },
              ],
            },
          ]}
        />

        <InfoGridSection
          title="Что вы получаете в рамках услуги"
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Отчёт о структуре информационной системы</h4>
                <p>
                  Детальный анализ текущего состояния ИС, включая физические и логические
                  границы системы.
                </p>
              </div>
              <img
                src="${bookIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Спецификации для систем защиты информации</h4>
                <p>
                  Рекомендации по необходимым средствам защиты для безопасного
                  функционирования ИС.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
            <div class="info-grid__group">
            </div>
          `,
            `
          <div class="info-grid__group">
          </div>
        `,
            `
              <div class="info-grid__group-type2">
                <h4>Рекомендации по улучшению</h4>
                <p>
                  В Республике Беларусь вопросы защиты информации регулируются Указом Президента Республики Беларусь от 16.04.2013 № 196 ("Положение о технической и криптографической защите информации"). Согласно этому документу, руководители организаций несут персональную ответственность за обеспечение защиты информации.
Приказ Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259) регулирует вопросы создания, внедрения и аттестации систем защиты информации (СЗИ). Этот документ устанавливает порядок проведения работ, требования к документации и процедуры проверки соответствия СЗИ.
                </p>
              </div>
              <img
                src="${trendingUpIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
          ]}
        />

        <DocumentDetailsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default CybersecurityPage;
