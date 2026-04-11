import Header from '@/widgets/header/Header';
import SecondaryHero from '@/components/sections/SecondaryHero';
import SupportPlansSection from '@/components/sections/SupportPlansSection';
import InfoGridSection from '@/components/grids/InfoGridSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ClientsSection from '@/components/grids/ClientsSection';
import ContactRequestForm from '@/components/sections/ContactRequestForm';
import Footer from '@/widgets/footer/Footer';
import communicationIcon from '@/assets/icons/Communication.svg';
import checkIcon from '@/assets/icons/Check.svg';
import deviceDesktopIcon from '@/assets/icons/device-desktop-code.svg';
import settingsIcon from '@/assets/icons/settings.svg';
import usersGroupIcon from '@/assets/icons/users-group.svg';
import laptopIcon from '@/assets/icons/laptop.svg';

function TechnicalSupportBitrix24Page() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Поддержка Битрикс24' }]}
          title="Поддержка Битрикс24"
          description="Обеспечим стабильную работу вашего портала и поможем развивать CRM-систему. Поддержка Битрикс24 позволяет быстро решать возникающие проблемы, настраивать систему под задачи бизнеса и внедрять новые инструменты без привлечения штатного администратора. Наши специалисты помогают поддерживать портал в актуальном состоянии, оптимизировать процессы и эффективно использовать возможности платформы."
        />
        <InfoGridSection
          title={
            <>
              Направления <span className="info-grid__title-accent">техподдержки</span>
            </>
          }
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Администрирование портала</h4>
                <p>
                  Поддерживаем стабильную работу Битрикс24 и порядок в системе. Настраиваем пользователей, права доступа и структуру компании, чтобы портал оставался удобным и управляемым.
                </p>
              </div>
              <img
                src="${laptopIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Настройка CRM</h4>
                <p>
                  Адаптируем CRM под процессы вашей компании. Настраиваем воронки продаж, карточки клиентов и структуру данных для удобной работы отдела продаж.
                </p>
              </div>
              <img
                src="${usersGroupIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group-type2">
                <h4>Автоматизация процессов</h4>
                <p>
                  Автоматизируем рутинные задачи в Битрикс24. Настраиваем роботов, триггеры, уведомления и распределение лидов, чтобы сотрудники тратили меньше времени на ручные действия.
                </p>
              </div>
              <img
                src="${settingsIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group-type2">
                <h4>Интеграции сервисов</h4>
                <p>
                  Подключаем Битрикс24 к почте, телефонии, сайту и другим сервисам. Все коммуникации и данные о клиентах объединяются в одной системе.
                </p>
              </div>
              <img
                src="${deviceDesktopIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group-type2">
                <h4>Исправление ошибок</h4>
                <p>
                  Оперативно находим и устраняем ошибки в работе портала. Проверяем настройки системы и восстанавливаем корректную работу инструментов.
                </p>
              </div>
              <img
                src="${checkIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
            `
              <div class="info-grid__group-type2">
                <h4>Консультации пользователей</h4>
                <p>
                  Помогаем сотрудникам эффективно работать в Битрикс24. Отвечаем на вопросы, объясняем функционал и даём рекомендации по развитию системы.
                </p>
              </div>
              <img
                src="${communicationIcon}"
                alt=""
                class="info-grid__icon"
                aria-hidden="true"
              />
            `,
          ]}
        />
        <SupportPlansSection />
        <CertificatesSection />
        <ClientsSection />
        <ContactRequestForm id="technical-support-contact" />
      </main>
      <Footer />
    </div>
  );
}

export default TechnicalSupportBitrix24Page;
