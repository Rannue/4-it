// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';
import InfoGridSection from '@/components/grids/InfoGridSection';
import StickyHeadingListSection from '@/components/sections/StickyHeadingListSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';

// assets
import fingerprintIcon from '@/assets/icons/fingerprint.svg';
import databaseIcon from '@/assets/icons/Database.svg';
import laptopIcon from '@/assets/icons/laptop.svg';
import certificateIcon from '@/assets/icons/certificate.svg';

function SecurityComplexPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', to: '/' },
          { label: 'Решения', to: '/#solutions' },
          { label: 'Программно-аппаратный комплекс информационной безопасности «под ключ»' },
        ]}
        title="Программно-аппаратный комплекс информационной безопасности «под ключ»"
        description="Готовое решение для защиты информационных систем в соответствии с Приказом ОАЦ №66 и директивой Президента РБ. Проектируем, поставляем и внедряем комплекс защиты «под ключ» — от аудита до сопровождения. Приобретение возможно на условиях лизинга совместно с ООО «Активлизинг»."
      />
      <InfoGridSection
        title={
          <>
            Что входит в <span className="info-grid__title-accent">комплекс</span>
          </>
        }
        columnsHtml={[
          `
              <div class="info-grid__group">
                <h4>Аппаратные средства защиты</h4>
                <p>
                  Подача и настройка сертифицированных СЗИ: межсетевые экраны, системы
                  обнаружения и предотвращения вторжений, шифрование каналов связи.
                </p>
              </div>
              <img src="${laptopIcon}" alt="" class="info-grid__icon" aria-hidden="true" />
            `,
          `
              <div class="info-grid__group">
                <h4>Программные средства защиты</h4>
                <p>
                  Антивирусная защита, контроль доступа, учёт действий пользователей и
                  защита данных на рабочих местах и серверах.
                </p>
              </div>
              <img src="${databaseIcon}" alt="" class="info-grid__icon" aria-hidden="true" />
            `,
          `
              <div class="info-grid__group">
                <h4>Идентификация и аутентификация</h4>
                <p>
                  Системы управления доступом на основе биометрии, ЭЦП и многофакторной
                  аутентификации сотрудников.
                </p>
              </div>
              <img src="${fingerprintIcon}" alt="" class="info-grid__icon" aria-hidden="true" />
            `,
          `
              <div class="info-grid__group">
                <h4>Документация и сертификаты</h4>
                <p>
                  Полный пакет проектной документации, сертификаты соответствия и
                  сопровождение для аттестации информационной системы.
                </p>
              </div>
              <img src="${certificateIcon}" alt="" class="info-grid__icon" aria-hidden="true" />
            `,
        ]}
      />
      <StickyHeadingListSection
        id="security-complex-stages"
        title={
          <>
            Этапы
            <span className="sticky-heading-list__title-accent"> внедрения</span>
          </>
        }
        items={[
          { text: 'Аудит текущей информационной системы и анализ требований законодательства' },
          { text: 'Проектирование комплекса защиты и подбор сертифицированных средств' },
          { text: 'Поставка оборудования и программных средств защиты' },
          { text: 'Внедрение, настройка и интеграция СЗИ в инфраструктуру' },
          { text: 'Разработка документации, обучение сотрудников и сопровождение' },
        ]}
      />
      <CertificatesSection />
      <ClientsSection />
    </PageLayout>
  );
}

export default SecurityComplexPage;
