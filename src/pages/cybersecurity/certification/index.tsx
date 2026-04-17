// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import CardsGridSectionDark from '@/components/grids/CardsGridSectionDark';
import ServiceGridSection from '@/components/sections/ServiceGridSection';
import InterestingFacts from '@/components/sections/InterestingFacts';
import FeatureBanner from '@/components/sections/FeatureBanner';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import searchDarkIllustration from '@/assets/img/illustrations/search-dark.svg';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
// data
import { CERTIFICATION_INTERESTING_FACTS } from '@/data/interestingFacts/certificationInterestingFacts';

// assets
import certificationImg from '@/assets/img/certificationImg.svg';
import codeDarkIllustration from '@/assets/img/illustrations/code-dark.svg';
import certificateDarkIllustration from '@/assets/img/illustrations/certificate-dark.svg';
import docDarkIllustration from '@/assets/img/illustrations/doc-dark.svg';

function CertificationOfInformationSecurityToolsPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Аттестация системы защиты информации' },
        ]}
        title="Аттестация системы защиты информации"
        description="Аттестация системы защиты информации (СЗИ) — это не просто формальность, а важный процесс, который подтверждает, что ваша система защиты информации соответствует всем требованиям законодательства Республики Беларусь. Мы предлагаем полный спектр услуг, связанных с проектированием, созданием, аттестацией, проверкой и поддержанием эффективности СЗИ, в соответствии с Приказом Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259)."
      />

      <InterestingFacts items={CERTIFICATION_INTERESTING_FACTS} />

      <ServiceGridSection
        title="Что мы предлагаем?"
        description="Проектирование, создание, аттестация СЗИ, оценка защищённости и актуализация документации — в соответствии с требованиями законодательства РБ."
        items={[
          {
            title: <>Проектирование СЗИ</>,
            description:
              'Разрабатываем систему защиты информации, которая реально работает под задачи вашего бизнеса и требования законодательства Республики Беларусь. Помогаем снизить риски, избежать штрафов и заранее закрыть уязвимости за счёт продуманной архитектуры и грамотного проектирования.',
            to: '/cybersecurity/design-szi',
          },
          {
            title: <>Создание СЗИ</>,
            description:
              'Внедряем надёжные решения для защиты данных и инфраструктуры с использованием технологий лидеров рынка. Вы получаете не просто систему, а готовый инструмент для предотвращения угроз, контроля безопасности и стабильной работы без сбоев.',
            to: '/cybersecurity/create-szi',
          },
          {
            title: <>Аттестация СЗИ</>,
            description:
              'Берём на себя весь процесс аттестации: от подготовки до успешного прохождения проверок. Помогаем быстро и без лишнего стресса подтвердить соответствие требованиям и получить необходимые документы с первого раза.',
            to: '/cybersecurity/certification/attestation-szi',
          },
          {
            title: (
              <>
                Пересмотр документов
                <br />
                системы защиты информации
              </>
            ),
            description:
              'Приводим документацию в порядок и соответствие актуальным требованиям. Вы избегаете рисков при проверках и получаете понятные, актуальные документы, которые действительно отражают вашу систему защиты.',
            to: '/cybersecurity/certification/szi-documents-review',
          },
          {
            title: 'Оценка эффективности защищенности инфраструктуры',
            description:
              'Проверяем вашу систему на реальные уязвимости и слабые места. Даём конкретные рекомендации по усилению защиты, чтобы вы могли предотвратить инциденты, сохранить данные и обеспечить бесперебойную работу бизнеса.',
            to: '/cybersecurity/certification/security-assessment',
          },
        ]}
      />

      <FeatureBanner
        complianceHeadline={{
          line1: 'Что включает в себя',
          line2: 'аттестация СЗИ?',
        }}
        description={
          <>
            Аттестация системы защиты информации — это комплекс услуг, которые помогают вам не
            только соответствовать законодательным требованиям, но и обеспечить надежную защиту
            ваших данных. Мы предлагаем следующие услуги:
            <br />
            <br />
            • Проектирование системы защиты информации;
            <br />
            • Создание системы защиты информации;
            <br />
            • Аттестация системы защиты информации;
            <br />
            • Оценка эффективности защищенности информации (пентест);
            <br />• Пересмотр документов защиты информации.
          </>
        }
        complianceVisual={certificationImg}
        imageAlt=""
      />

      <StickyHeadingListSection
        id="virtualization-benefits"
        title={<>Почему это важно?</>}
        items={[
          {
            text: (
              <>
                <span className="sticky-heading-list__text-accent">Защита от утечек данных:</span>
                <br />
                <br />
                Аттестация помогает выявить слабые места в системе защиты и предотвратить утечки
                конфиденциальной информации.
              </>
            ),
          },
          {
            text: (
              <>
                <span className="sticky-heading-list__text-accent">Репутация и доверие:</span>
                <br />
                <br />
                Наличие аттестованной СЗИ повышает доверие клиентов и партнеров к вашей организации.
              </>
            ),
          },
          {
            text: (
              <>
                <span className="sticky-heading-list__text-accent">
                  Соответствие законодательству:
                </span>
                <br />
                <br />В соответствии с Приказом Оперативно-аналитического центра от 20.02.2020 № 66
                (в редакции от 10.12.2024 № 259), аттестация СЗИ является обязательной для
                организаций, работающих с информацией, требующей защиты.
              </>
            ),
          },
        ]}
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
                <img src="${codeDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Проектирование и создание СЗИ</h3>
              <p>
                Разрабатываем и внедряем систему защиты, которая соответствует вашим потребностям и требованиям законодательства.
              </p>
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
                <img src="${certificateDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
              </div>
              <h3>Аттестация и проверка</h3>
              <p>
               Проводим проверку СЗИ на соответствие требованиям и выдаем аттестат соответствия.
              </p>
            `,
          `
            <div class="cards-grid__media">
              <img src="${docDarkIllustration}" alt="" aria-hidden="true" class="cards-grid__illustration" />
            </div>
            <h3>Поддержка и пересмотр документов</h3>
            <p>
             Помогаем поддерживать актуальность системы защиты и документов в соответствии с изменениями в законодательстве.
            </p>
          `,
        ]}
      />

      <InfoGridSection
        title="Наши преимущества"
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>Наличие лицензии</h4>
                <p>
                 Мы работаем на основании лицензии №22250000081852, выданной Оперативно-аналитическим центром при Президенте РБ.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
              <div class="info-grid__group">
                <h4>Опыт и профессионализм</h4>
                <p>
Наша команда имеет опыт в области проектирования, создания и аттестации СЗИ.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot"></span>
              </div>
            `,
          `
              <div class="info-grid__group">
                <h4>Индивидуальный подход</h4>
                <p>
                 Мы учитываем особенности каждой организации и предлагаем решения, которые максимально соответствуют вашим потребностям.
                </p>
              </div>
              <div class="scroll-card__dots">
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
                <span class="scroll-card__dot scroll-card__dot--active"></span>
              </div>
            `,
        ]}
      />

      <CertificatesSection />
      <ClientsSection />
      <DocumentDetailsSection />
    </PageLayout>
  );
}

export default CertificationOfInformationSecurityToolsPage;
