// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import ClientsSection from '@/components/grids/ClientsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import DocumentDetailsSection from '@/components/domain/cybersecurity/DocumentDetailsSection';
import StackedFeatureCardsSection from '@/components/sections/StackedFeatureCardsSection';
import ManufacturersSection from '@/components/domain/cybersecurity/ManufacturersSection';
import InfoGridSection from '@/components/grids/InfoGridSection';
import AnimatedAuditGoalText from '@/components/sections/AnimatedAuditGoalText';

// data
import { CYBER_CULTURE_PHISHMAN_STACKED } from '@/data/stackedFeatureCards/StackedCards';

// assets
import phmnLogo from '@/assets/img/providers/PHMN.svg';
import downIcon from '@/assets/icons/down.svg';
import groupIcon from '@/assets/icons/group.svg';
import calendarDownIcon from '@/assets/icons/calendar-down.svg';
import upIcon from '@/assets/icons/up.svg';

function CyberCulturePage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Поставка и внедрение СЗИ и оборудования', href: '/cybersecurity/delivery' },
          { label: 'Решения для развития киберкультуры в компаниях' },
        ]}
        title="Автоматизированная система обучения сотрудников"
        description="Система обучения по информационной безопасности обеспечивает проведение тренингов, симуляций атак и тестирования сотрудников. Она позволяет повысить устойчивость организации к фишинговым атакам и другим видам угроз."
      />

      <AnimatedAuditGoalText
        asideLabel="Цель обучения"
        text="Повысить осведомлённость сотрудников и устойчивость организации к фишингу, социальной инженерии и типовым атакам: регулярные тренинги и проверки знаний снижают долю инцидентов из‑за человеческого фактора и укрепляют культуру информационной безопасности."
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
      <InfoGridSection
        title="Результат"
        columnsHtml={[
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Сокращение </strong>числа событий информационной безопасности на 70% в первый месяц использования</p>
              <img class="info-grid__icon" src="${calendarDownIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Формирование киберкультуры:</strong> (в том числе фишинг) каждый сотрудник участвует в процессе защиты информации</p>
              <img class="info-grid__icon" src="${groupIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group info-grid__group--empty">
            </div>`,
          `<div class="info-grid__group info-grid__group--empty">
            </div>`,
          `<div class="info-grid__group">
              <p><strong style="color: var(--color-text-main);">Снижение нагрузки</strong> на ИБ-отдел, выстраивание эффективного диалога между ИБ и организацией</p>
              <img class="info-grid__icon" src="${downIcon}" alt="" aria-hidden="true" />
            </div>`,
          `<div class="info-grid__group">
            <p>Улучшение обнаружения инцидентов и реакции на них: <strong style="color: var(--color-text-main);">на 25% больше </strong>информации об инцидентах от сотрудников</p>
            <img class="info-grid__icon" src="${upIcon}" alt="" aria-hidden="true" />
          </div>`,
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
      <ManufacturersSection
        title="Производители и их решения"
        description={
          <>
            Мы предлагаем внедрение решений ведущих производителей автоматизированных систем
            обучения, включая решения компании Phishman.
            <br />
            <br />
            Phishman — решение для развития киберкультуры в компаниях: анализирует цифровое
            поведение сотрудников, развивает их навыки ИБ и укрепляет доверие к ИБ-отделу.
          </>
        }
        logos={[{ src: phmnLogo, alt: 'PHMN' }]}
      />
      <DocumentDetailsSection />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default CyberCulturePage;
