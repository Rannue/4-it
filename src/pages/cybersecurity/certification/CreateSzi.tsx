// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText';
import settingsIcon from '@/assets/icons/settings.svg';
import searchIcon from '@/assets/icons/search.svg';
import chartIcon from '@/assets/icons/chart.svg';
import folderIcon from '@/assets/icons/folder.svg';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';
import settingsDarkIllustration from '@/assets/img/illustrations/settings-dark.svg';

const INFO_GRID_EMPTY_GROUP = `
  <div class="info-grid__group info-grid__group--empty"></div>
`;

function CybersecurityCreateSziPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация Системы Защиты Информации', href: '/cybersecurity/certification' },
          { label: 'Создание СЗИ' },
        ]}
        title="Создание СЗИ"
        description="Создание системы защиты информации (СЗИ) — это ключевой этап, который обеспечивает безопасность ваших данных и информационной системы (ИС). Мы внедряем современные средства защиты, проверяем их работоспособность и совместимость с вашей ИС, а также корректируем документы и схемы, разработанные на этапе проектирования. Наши решения полностью соответствуют требованиям законодательства Республики Беларусь и обеспечивают надежную защиту от внутренних и внешних угроз."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель создания СЗИ"
        text="Внедрение системы защиты информации для обеспечения безопасности данных: мы создаем и внедряем решения, которые защищают вашу информационную систему от утечек данных, несанкционированного доступа и других угроз."
      />

      <InfoGridSection
        title={
          <>
            Что включает в себя <span className="info-grid__title-accent">создание СЗИ?</span>
          </>
        }
        columnsHtml={[
          `
          <div class="info-grid__group">
            <h4>Внедрение средств защиты информации</h4>
            <p>
Установка и настройка современных средств защиты, таких как межсетевые экраны, системы предотвращения утечек данных (DLP), средства управления привилегированным доступом (PAM) и другие.            </p>
          </div>
          <img
            src="${settingsIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Проверка работоспособности и совместимости</h4>
            <p>
              Тестирование внедренных средств защиты на предмет их корректной работы и совместимости с активами вашей информационной системы.
            </p>
          </div>
          <img
            src="${searchIcon}"
            alt="Иконка спецификаций"
            class="info-grid__icon"
          />
        `,
          INFO_GRID_EMPTY_GROUP,
          INFO_GRID_EMPTY_GROUP,
          `
          <div class="info-grid__group-type2">
            <h4>Корректировка структурной и логической схем ИС</h4>
            <p>
             При необходимости мы вносим изменения в схемы, разработанные на этапе проектирования, чтобы обеспечить максимальную эффективность системы защиты.
            </p>
          </div>
          <img
            src="${chartIcon}"
            alt="Иконка улучшений"
            class="info-grid__icon"
          />
        `,
          `
          <div class="info-grid__group">
            <h4>Корректировка организационно-распорядительных документов</h4>
            <p>
              СМы актуализируем проекты локальных правовых актов и других документов, разработанных на этапе проектирования, чтобы они соответствовали внедренной системе защиты.оздание документов, регулирующих вопросы применения системы защиты информации в соответствии с Приказом № 66.
            </p>
          </div>
          <img
            src="${folderIcon}"
            alt="Иконка отчёта"
            class="info-grid__icon"
          />
        `,
        ]}
      />

      <CardsGridSectionDark
        title="Как мы работаем"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${settingsDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Внедрение средств защиты</h3>
              <p>
                Мы изучаем вашу информационную систему, выявляем уязвимости и определяем, какие меры защиты необходимы.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Тестирование и проверка</h3>
              <p>
Проверка работоспособности и совместимости внедренных средств с вашей ИС</p>
            `,
          `
            <div class="cards-grid__media cards-grid__media--empty">
            </div>
          `,
          `
          <div class="cards-grid__media cards-grid__media--empty">
          </div>
        `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Корректировка схем и документов</h3>
              <p>
                При необходимости вносим изменения в структурные и логические схемы, а также в организационно-распорядительные документы
              </p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>
            <h3>Сдача проекта</h3>
            <p>
Предоставляем готовую систему защиты информации, соответствующую всем требованиям</p>
          `,
        ]}
      />

      <InfoGridSection
        title="Преимущества создания СЗИ с нами"
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>Комплексный подход к внедрению</h4>
                <p>
                  Мы предлагаем полный цикл услуг — от проектирования до внедрения и сопровождения СЗИ.
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
              <div class="info-grid__group">
                <h4>Полное соответствие<br />требованиям законодательства</h4>
                <p>
                  Все работы выполняются в соответствии с Приказом № 66 (в редакции от 10.12.2024 № 259) и национальными стандартами.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          INFO_GRID_EMPTY_GROUP,
          INFO_GRID_EMPTY_GROUP,
          `
              <div class="info-grid__group">
                <h4>Индивидуальные решения</h4>
                <p>
                  Мы учитываем особенности вашей информационной системы и предлагаем решения, которые максимально соответствуют вашим потребностям.
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
              <div class="info-grid__group">
                <h4>Экспертная поддержка</h4>
                <p>
                  Наши специалисты сопровождают вас на всех этапах внедрения, обеспечивая высокое качество и соответствие требованиям.
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
      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default CybersecurityCreateSziPage;
