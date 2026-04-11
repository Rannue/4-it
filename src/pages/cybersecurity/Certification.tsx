import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/sections/InfoGridSection';
import HighlightGridSection from '@/components/sections/HighlightGridSection';
import certificateIcon from '@/assets/icons/certificate.svg';
import licenseIcon from '@/assets/icons/license.svg';
import fingerprintIcon from '@/assets/icons/fingerprint.svg';
import ScrollCardsSection from '@/components/sections/ScrollCardsSection';
import DocumentDetailsSection from '@/components/sections/DocumentDetailsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CardsGridSectionDark from '@/components/sections/cards/CardsGridSectionDark';
import optimizationIllustration from '@/assets/img/illustrations/optimization.svg';
import riseIllustration from '@/assets/img/illustrations/rise.svg';
import analysisIllustration from '@/assets/img/illustrations/Кибербезопасность/analysis.svg';
import settingsIllustration from '@/assets/img/illustrations/Кибербезопасность/settings.svg';

function CertificationOfInformationSecurityToolsPage() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Аттестация системы защиты информации' },
          ]}
          title="Аттестация системы защиты информации"
          description="Аттестация системы защиты информации (СЗИ) — это не просто формальность, а важный процесс, который подтверждает, что ваша система защиты информации соответствует всем требованиям законодательства Республики Беларусь. Мы предлагаем полный спектр услуг, связанных с проектированием, созданием, аттестацией, проверкой и поддержанием эффективности СЗИ, в соответствии с Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259)."
        />
        {/* 
        <InterestingFacts />
        <CertificatesSection /> */}
        <ServicesSection
          items={[
            {
              title: 'Проектирование СЗИ',
              description:
                'Разрабатываем СЗИ с учётом требований законодательства РБ и особенностей системы.',
              to: '/cybersecurity/design-szi',
            },
            {
              title: 'Создание СЗИ',
              description:
                'Обеспечиваем защиту данных и мониторинг угроз с использованием надежных технологий лидеров рынка.',
              to: '/cybersecurity/create-szi',
            },
            {
              title: 'Аттестация СЗИ',
              description:
                'Проводим аттестацию, подтверждаем соответствие требованиям и обеспечиваем защиту.',
              to: '/cybersecurity/delivery',
            },
            {
              title: 'Оценка эффективности защищенности инфраструктуры',
              description:
                'Тестируем информационную систему на уязвимости, выявляем слабые места и предлагаем решения.',
              to: '/cybersecurity/delivery',
            },
            {
              title: 'Пересмотр документов защиты информации',
              description:
                'Актуализируем документацию СЗИ в соответствии с законодательством и практиками.',
              to: '/cybersecurity/delivery',
            },
          ]}
        />
        <InfoGridSection
          title="Почему это важно?"
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Защита от утечек данных</h4>
                <p>
                  Аттестация помогает выявить слабые места в системе защиты
                  и предотвратить утечки конфиденциальной информации.
                </p>
              </div>
              <img
                src="${fingerprintIcon}"
                alt="Иконка защиты данных"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Репутация и доверие</h4>
                <p>
                  Наличие аттестованной СЗИ повышает доверие клиентов
                  и партнёров к вашей организации.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка сертификата"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Соответствие законодательству</h4>
                <p>
                  В соответствии с Приказом Оперативно-аналитического центра
                  от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259),
                  аттестация СЗИ обязательна для организаций, работающих
                  с информацией, требующей защиты.
                </p>
              </div>
              <img
                src="${licenseIcon}"
                alt="Иконка соответствия требованиям"
                class="info-grid__icon"
              />
            `,
          ]}
        />
        <ScrollCardsSection
          title="Как мы работаем?"
          cardsHtml={[
            `
              <div class="scroll-card__content">
                <h3>Анализ текущего состояния</h3>
                <p>
                  Изучаем вашу информационную систему, выявляем уязвимости
                  и определяем, какие меры защиты необходимы.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="scroll-card__content">
                <h3>Проектирование и создание СЗИ</h3>
                <p>
                  Разрабатываем и внедряем систему защиты, которая соответствует вашим потребностям и требованиям законодательства.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="scroll-card__content">
                <h3>Аттестация и проверка</h3>
                <p>
                  Проводим проверку СЗИ на соответствие требованиям и выдаем аттестат соответствия.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
            `
              <div class="scroll-card__content">
                <h3>Внедрение и сопровождение</h3>
                <p>
                  Настраиваем средства защиты, обучаем персонал и обеспечиваем
                  дальнейшее сопровождение и поддержание эффективности СЗИ.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
              </div>
            `,
          ]}
        />
        <HighlightGridSection
          title="Почему выбирают нас?"
          items={[
            {
              title: 'Подтверждённая лицензия',
              description:
                'Наша деятельность в области технической и криптографической защиты информации лицензирована Оперативно-аналитическим центром при Президенте Республики Беларусь.',
            },
            {
              title: 'Экспертиза в разработке',
              description:
                'Мы обладаем широкими компетенциями в области разработки и внедрения информационных систем и средств защиты информации.',
            },
            {
              title: 'Обоснованная защита информации',
              description:
                'На основе практического опыта мы даём обоснованные рекомендации по защите информации, используя только проверенные средства СЗИ.',
            },
            {
              title: 'Глубокое понимание архитектуры ИС',
              description:
                'Мы хорошо знаем архитектуру информационных систем изнутри, что позволяет учитывать реальные риски и уязвимости.',
            },
          ]}
        />
        <CardsGridSectionDark
          title="Как мы работаем?"
          cardsHtml={[
            `
              <div class="cards-grid__media">
                <img src="${analysisIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Анализ текущего состояния</h3>
              <p>
                Мы изучаем вашу информационную систему, выявляем уязвимости и определяем, какие меры защиты необходимы.
              </p>
            `,
            `
              <div class="cards-grid__media">
                  <img src="${settingsIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Совместная работа:</h3>
              <p>
                • улучшение коммуникаций между сотрудниками;<br />
                • накопление корпоративной базы знаний;<br />
                • совместная работа над проектами.
              </p>
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
              <img src="${optimizationIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
          </div>
          <h3>Оптимизация бизнес-процессов:</h3>
          <p>
            • все заявки обрабатываются вовремя;<br />
            • экономия на скорости прохождения операций;<br />
            • эффективные связи между подразделениями.
          </p>
        `,
            `
          <div class="cards-grid__media">
              <img src="${riseIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
          </div>
          <h3>Оптимизация бизнес-процессов:</h3>
          <p>
            • все заявки обрабатываются вовремя;<br />
            • экономия на скорости прохождения операций;<br />
            • эффективные связи между подразделениями.
          </p>
        `,
          ]}
        />
        <DocumentDetailsSection />
      </main>
      <Footer />
    </div>
  );
}

export default CertificationOfInformationSecurityToolsPage;
