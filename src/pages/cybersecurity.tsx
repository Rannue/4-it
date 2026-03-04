import Header from "../components/Header";
import "./Hero.css";
import "../components/Services_Type2.css";
import ArrowLongRightIcon from "../components/icons/ArrowLongRightIcon";

function CybersecurityPage() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section id="home" className="hero-secondary">
          <div className="hero-secondary-grid">
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell">
              <div className="hero-secondary__content">
                <div className="hero-secondary__title-wrapper">
                  <nav
                    className="hero-secondary__breadcrumbs"
                    aria-label="Хлебные крошки"
                  >
                    <ol>
                      <li>
                        <a href="/">Главная</a>
                      </li>
                      <li>
                        <span>Кибербезопасность</span>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="hero-secondary__title">Кибербезопасность</h1>
                </div>
                <p className="hero-secondary__description">
                  <b>Кибербезопасность</b> — это комплекс мер, направленных на
                  защиту информационных систем от несанкционированного доступа,
                  утечек данных и кибератак. В современном мире, где информация
                  является одним из ключевых активов, обеспечение её
                  безопасности становится критически важным. Мы поможем вам
                  защитить ваши данные, соблюдая требования законодательства
                  Республики Беларусь и внедряя передовые технологии.
                </p>
              </div>
            </div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
            <div className="hero-secondary-grid__cell"></div>
          </div>
        </section>

        <section className="services">
          <aside className="services__sidebar">
            <h2 className="services__sidebar-title">Услуги</h2>
          </aside>

          <div className="services__content">
            <article className="services-card">
              <header
                className="services-card__header"
                onClick={() => {
                  window.location.href = "/cybersecurity/audit";
                }}
              >
                <h3 className="services-card__title">
                  Аудит инфраструктуры и информационной безопасности
                </h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Аудит инфраструктуры и информационной безопасности"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Проводим анализ информационных систем, выявляем уязвимости и
                даём рекомендации по средствам защиты в соответствии с
                законодательством Республики Беларусь.
              </p>
            </article>

            <article className="services-card">
              <header className="services-card__header">
                <h3 className="services-card__title">
                  Аттестация системы защиты информации
                </h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Аттестация системы защиты информации"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Проводим аттестацию средств защиты информации, подтверждаем
                соответствие требованиям законодательства и сопровождаем полный
                цикл проверок.
              </p>
              <div className="services-card__tags">
                <a className="services-tag" href="/cybersecurity/design-szi">
                  Проектирование СЗИ
                </a>
                <a className="services-tag" href="/cybersecurity/create-szi">
                  Создание СЗИ
                </a>
                <a className="services-tag" href="/cybersecurity/attestation-szi">
                  Аттестация СЗИ
                </a>
                <a
                  className="services-tag"
                  href="/cybersecurity/infrastructure-effectiveness"
                >
                  Оценка эффективности защищённости инфраструктуры
                </a>
              </div>
            </article>

            <article className="services-card">
              <header className="services-card__header">
                <h3 className="services-card__title">
                  Поставка и внедрение СЗИ и оборудования
                </h3>
                <button
                  type="button"
                  className="services-card__icon"
                  aria-label="Перейти к услуге Поставка и внедрение СЗИ и оборудования"
                >
                  <ArrowLongRightIcon />
                </button>
              </header>
              <p className="services-card__text">
                Обеспечиваем защиту данных и мониторинг угроз с использованием
                решений ведущих производителей, включая настройку и
                сопровождение.
              </p>
              <div className="services-card__tags">
                <a className="services-tag" href="/cybersecurity/siem">
                  SIEM (Security Information and Event Management)
                </a>
                <a className="services-tag" href="/cybersecurity/dlp">
                  DLP (Data Loss Prevention)
                </a>
                <a className="services-tag" href="/cybersecurity/firewall">
                  Firewall
                </a>
                <a className="services-tag" href="/cybersecurity/network-screens">
                  Сетевые экраны
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CybersecurityPage;
