// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';

import bookIcon from '@/assets/icons/book.svg';
import chartIcon from '@/assets/icons/chart.svg';
import folderIcon from '@/assets/icons/folder.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import fileSettingsIcon from '@/assets/icons/File-settings.svg';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText';

const DESIGN_SZI_GOAL_ASIDE = 'Цель проектирования СЗИ';

const DESIGN_SZI_GOAL_TEXT =
  'Разработка системы защиты информации для обеспечения безопасности ИС: мы создаем решения, которые защищают вашу информационную систему от внутренних и внешних угроз, обеспечивая конфиденциальность, целостность и доступность данных.';

const INFO_GRID_EMPTY_GROUP = `
  <div class="info-grid__group info-grid__group--empty"></div>
`;

/** Блок «Что включает в себя проектирование СЗИ?» — тексты по макету. */
const DESIGN_SZI_WHAT_INCLUDES_COLUMNS_HTML = [
  `
              <div class="info-grid__group">
                <h4>Разработку (корректировку) политики информационной безопасности</h4>
                <p>
                  Создание или актуализация документа, который определяет правила и процедуры защиты информации в вашей организации.
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
                <h4>Разработку структурной и логической схем информационной системы</h4>
                <p>
                  Анализ и описание архитектуры вашей ИС, включая физические и логические компоненты.
                </p>
              </div>
              <img
                src="${chartIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
  `
              <div class="info-grid__group info-grid__group--lg">
                <h4>Разработку технического задания на создание СЗИ</h4>
                <p>
                  Подготовка документа, который определяет требования к системе защиты информации.
                </p>
              </div>
              <img
                src="${fileSettingsIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
  `
              <div class="info-grid__group">
                <h4>Разработку проектов локальных правовых актов и других организационно-распорядительных документов</h4>
                <p>
                  Создание документов, регулирующих вопросы применения системы защиты информации в соответствии с Приказом № 66.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,
  `
              <div class="info-grid__group">
                <h4>Разработку технической документации</h4>
                <p>
                  Подготовка полного пакета документов, необходимых для внедрения и эксплуатации СЗИ.
                </p>
              </div>
              <img
                src="${folderIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,

  INFO_GRID_EMPTY_GROUP,
];

function CybersecurityDesignSziPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация Системы Защиты Информации', href: '/cybersecurity/certification' },
          { label: 'Проектирование СЗИ' },
        ]}
        title="Проектирование СЗИ"
        description="Проектирование системы защиты информации (СЗИ) — это первый и ключевой этап в создании надежной защиты вашей информационной системы (ИС). Мы разрабатываем индивидуальные решения, которые учитывают особенности вашей ИС и соответствуют требованиям законодательства Республики Беларусь. Наши услуги включают разработку политики информационной безопасности, архитектуры защиты и технической документации в соответствии с Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259)."
      />

      <AnimatedAuditGoalText asideLabel={DESIGN_SZI_GOAL_ASIDE} text={DESIGN_SZI_GOAL_TEXT} />

      <InfoGridSection
        title={
          <>
            Что включает в себя <span className="info-grid__title-accent">проектирование СЗИ?</span>
          </>
        }
        columnsHtml={DESIGN_SZI_WHAT_INCLUDES_COLUMNS_HTML}
      />

      <CardsGridSectionDark
        title="Как мы работаем"
        cardsHtml={[
          `
              <div class="cards-grid__media">
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Анализ текущего состояния ИС</h3>
              <p>
                Мы изучаем вашу информационную систему, выявляем уязвимости и определяем, какие меры защиты необходимы.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Подготовка документации</h3>
              <p>
                Разрабатываем техническое задание, политику информационной безопасности и другие необходимые документы.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Согласование и утверждение</h3>
              <p>
                Предоставляем готовые решения для согласования и внедрения.
              </p>
            `,
        ]}
      />

      <InfoGridSection
        title="Преимущества проектирования СЗИ с нами"
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

export default CybersecurityDesignSziPage;
