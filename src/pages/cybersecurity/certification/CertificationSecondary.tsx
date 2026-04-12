// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText.tsx';
import searchIcon from '@/assets/icons/search.svg';
import folderIcon from '@/assets/icons/folder.svg';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';
import certificateIcon from '@/assets/icons/certificate.svg';

const INFO_GRID_EMPTY_GROUP = `
  <div class="info-grid__group info-grid__group--empty"></div>
`;

function SecondaryCertificationPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация системы защиты информации', href: '/cybersecurity/certification' },
          { label: 'Аттестация СЗИ' },
        ]}
        title="Аттестация СЗИ"
        description="Аттестация системы защиты информации (СЗИ) — это обязательный процесс, который подтверждает, что ваша система защиты информации соответствует установленным требованиям законодательства Республики Беларусь. Мы проводим оценку СЗИ, разрабатываем необходимую документацию и сопровождаем процесс аттестации с последующей выдачей аттестата соответствия. Все работы выполняются в соответствии с Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259)."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель аттестации СЗИ"
        text="Проверка СЗИ на соответствие требованиям: мы сопровождаем процедуру так, чтобы ваша система защиты информации удовлетворяла нормам законодательства Республики Беларусь."
      />

      <InfoGridSection
        title={
          <>
            Что вы получаете <span className="info-grid__title-accent">в рамках услуги?</span>
          </>
        }
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>Оценка СЗИ на предмет соответствия требованиям</h4>
                <p>
                  Мы проводим комплексный анализ вашей системы защиты информации, чтобы убедиться, что она соответствует всем предъявляемым требованиям.
                </p>
              </div>
              <img
                src="${searchIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,
          `
              <div class="info-grid__group">
                <h4>Разработка документации, необходимой для аттестации</h4>
                <p>
                  Подготовка полного пакета документов, включая отчёты, акты и иные материалы, необходимые для прохождения аттестации.
                </p>
              </div>
              <img
                src="${folderIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
          `
              <div class="info-grid__group-type2">
                <h4>Получение аттестата соответствия</h4>
                <p>
                  Мы обеспечиваем официальное подтверждение соответствия вашей системы защиты информации установленным требованиям. После успешного прохождения всех этапов аттестации вы получаете аттестат соответствия, который подтверждает, что ваша СЗИ соответствует нормам законодательства и готова к эксплуатации.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка аттестата"
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
                <img src="${searchDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Оценка СЗИ</h3>
              <p>
                Проводим анализ системы защиты информации на соответствие требованиям законодательства.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Разработка документации</h3>
              <p>
                Подготавливаем полный комплект документов для прохождения аттестации.
              </p>
            `,
          `
              <div class="cards-grid__media">
                <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Выдача аттестата соответствия</h3>
              <p>
                Обеспечиваем получение аттестата, подтверждающего соответствие СЗИ требованиям.
              </p>
            `,
        ]}
      />

      <InfoGridSection
        title="Преимущества аттестации СЗИ с нами"
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>Соответствие требованиям законодательства</h4>
                <p>
                  Мы гарантируем, что ваша система защиты информации будет соответствовать требованиям Приказа № 66 (в редакции от 10.12.2024 № 259).
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
                <h4>Квалифицированное сопровождение процесса</h4>
                <p>
                  Наши специалисты сопровождают вас на всех этапах аттестации — от оценки до получения аттестата.
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
                <h4>Экономия времени и ресурсов</h4>
                <p>
                  Мы берём на себя организационные и технические вопросы, чтобы вы могли сосредоточиться на основных бизнес-процессах.
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
                <h4>Индивидуальный подход</h4>
                <p>
                  Мы учитываем особенности вашей информационной системы и подбираем решения под ваши задачи.
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

export default SecondaryCertificationPage;
