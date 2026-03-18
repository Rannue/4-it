import Header from '../../components/Header';
import SecondaryHero from '../../components/SecondaryHero';
import InterestingFacts from '../../components/InterestingFacts';
import { Link } from 'react-router-dom';
import ArrowLongRightIcon from '../../components/icons/ArrowLongRightIcon';
import InfoGridSection from '../../components/InfoGridSection';
import HighlightGridSection from '../../components/HighlightGridSection';
import certificateIcon from '../../assets/icons/certificate.svg';
import licenseIcon from '../../assets/icons/license.svg';
import fingerprintIcon from '../../assets/icons/fingerprint.svg';
import ScrollCardsSection from '../../components/ScrollCardsSection';
import DocumentDetailsSection from '../../components/DocumentDetailsSection';

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

        <InterestingFacts />
        <section className="services">
          <aside className="services__sidebar">
            <h2 className="services__sidebar-title">Услуги</h2>
          </aside>

          <div className="services__content">
            <article className="services-card">
              <header
                className="services-card__header"
                onClick={() => {
                  navigate('/cybersecurity/design-szi');
                }}
              >
                <h3 className="services-card__title">Проектирование СЗИ</h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Аудит инфраструктуры и информационной безопасности"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Проводим анализ информационных систем, выявляем уязвимости и даём рекомендации по
                средствам защиты в соответствии с законодательством Республики Беларусь.
              </p>
            </article>

            <article className="services-card">
              <header
                className="services-card__header"
                onClick={() => {
                  navigate('/cybersecurity/certification');
                }}
              >
                <h3 className="services-card__title">Аттестация системы защиты информации</h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Аттестация системы защиты информации"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Проводим аттестацию средств защиты информации, подтверждаем соответствие требованиям
                законодательства и сопровождаем полный цикл проверок.
              </p>
              <div className="services-card__tags">
                <Link className="services-tag" to="/cybersecurity/design-szi">
                  Проектирование СЗИ
                </Link>
                <Link className="services-tag" to="/cybersecurity/create-szi">
                  Создание СЗИ
                </Link>
                <Link className="services-tag" to="/cybersecurity/attestation-szi">
                  Аттестация СЗИ
                </Link>
                <Link className="services-tag" to="/cybersecurity/infrastructure-effectiveness">
                  Оценка эффективности защищённости инфраструктуры
                </Link>
              </div>
            </article>

            <article className="services-card">
              <header className="services-card__header">
                <h3 className="services-card__title">Поставка и внедрение СЗИ и оборудования</h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Поставка и внедрение СЗИ и оборудования"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Обеспечиваем защиту данных и мониторинг угроз с использованием решений ведущих
                производителей, включая настройку и сопровождение.
              </p>
              <div className="services-card__tags">
                <Link className="services-tag" to="/cybersecurity/siem">
                  SIEM (Security Information and Event Management)
                </Link>
                <Link className="services-tag" to="/cybersecurity/dlp">
                  DLP (Data Loss Prevention)
                </Link>
                <Link className="services-tag" to="/cybersecurity/firewall">
                  Firewall
                </Link>
                <Link className="services-tag" to="/cybersecurity/network-screens">
                  Сетевые экраны
                </Link>
              </div>
            </article>
          </div>
        </section>
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
        <InterestingFacts />
        <DocumentDetailsSection />
        <DocumentDetailsSection />
      </main>
    </div>
  );
}

export default CertificationOfInformationSecurityToolsPage;
