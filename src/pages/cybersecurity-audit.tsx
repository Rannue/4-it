import Header from "../components/Header";
import "./Hero.css";
import "../components/Services_Type2.css";

function CybersecurityAuditPage() {
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
                        <a href="/cybersecurity">Кибербезопасность</a>
                      </li>
                      <li>
                        <span>Аудит инфраструктуры и информационной безопасности</span>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="hero-secondary__title">
                    Аудит инфраструктуры и информационной безопасности
                  </h1>
                </div>
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

        <section className="section">
          <h2>Что входит в аудит инфраструктуры и информационной безопасности</h2>
          <p>
            Мы анализируем архитектуру вашей ИТ-инфраструктуры, выявляем технические и
            организационные уязвимости, проверяем соответствие требованиям
            законодательства Республики Беларусь и готовим рекомендации по повышению
            уровня защищённости.
          </p>
        </section>
      </main>
    </div>
  );
}

export default CybersecurityAuditPage;

