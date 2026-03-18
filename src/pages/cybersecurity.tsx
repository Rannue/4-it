import Header from '../components/Header';
import './Hero.css';
import ArrowLongRightIcon from '../components/icons/ArrowLongRightIcon';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Services.css';
import bookIcon from '../assets/icons/book.svg';
import certificateIcon from '../assets/icons/certificate.svg';
import trendingUpIcon from '../assets/icons/trending-up.svg';
import InfoGridSection from '../components/InfoGridSection';

function CybersecurityPage() {
  const navigate = useNavigate();

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
                  <nav className="hero-secondary__breadcrumbs" aria-label="Хлебные крошки">
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
                  <b>Кибербезопасность</b> — это комплекс мер, направленных на защиту информационных
                  систем от несанкционированного доступа, утечек данных и кибератак. В современном
                  мире, где информация является одним из ключевых активов, обеспечение её
                  безопасности становится критически важным. Мы поможем вам защитить ваши данные,
                  соблюдая требования законодательства Республики Беларусь и внедряя передовые
                  технологии.
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
                  navigate('/cybersecurity/audit');
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
          title="Что вы получаете в рамках услуги"
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Отчёт о структуре информационной системы</h4>
                <p>
                  Детальный анализ текущего состояния ИС, включая физические и логические
                  границы системы.
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
                <h4>Спецификации для систем защиты информации</h4>
                <p>
                  Рекомендации по необходимым средствам защиты для безопасного
                  функционирования ИС.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
            <div class="info-grid__group">
            </div>
          `,
            `
          <div class="info-grid__group">
          </div>
        `,
            `
              <div class="info-grid__group-type2">
                <h4>Рекомендации по улучшению</h4>
                <p>
                  В Республике Беларусь вопросы защиты информации регулируются Указом Президента Республики Беларусь от 16.04.2013 № 196 ("Положение о технической и криптографической защите информации"). Согласно этому документу, руководители организаций несут персональную ответственность за обеспечение защиты информации.
 Приказ Оперативно-аналитического центра при Президенте Республики Беларусь от 20.02.2020 № 66 (в редакции от 10.12.2024 № 259) регулирует вопросы создания, внедрения и аттестации систем защиты информации (СЗИ). Этот документ устанавливает порядок проведения работ, требования к документации и процедуры проверки соответствия СЗИ.
                </p>
              </div>
              <img
                src="${trendingUpIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
          ]}
        />
      </main>
    </div>
  );
}

export default CybersecurityPage;
