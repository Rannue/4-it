import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import ClientsSection from './components/ClientsSection';
import Footer from './components/Footer';
import ArrowRightIcon from './assets/icons/arrow-up-right.svg';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <div className="section-wrapper">
          <div className="section-wrapper__inner">
            <section id="home" className="hero">
              <div className="hero-grid">
            <div className="hero-grid__cell"></div>
            <div className="hero-grid__cell">
              <p>
                Мы специализируемся на разработке сайтов, Интернет-магазинов, B2B-порталах,
                online-сервисах, промо-сайтах, внедрении CRM, а также интеграциях и настройке обмена
                данными с различными системами. а также интеграциях и настройке обмена данными с
                различными системами.
              </p>
            </div>
            <div className="hero-grid__cell">
              <h1>
                Внедрение{' '}
                <span style={{ backgroundColor: '#0062BA', padding: '2px 6px' }}>Битрикс24</span>
                <br /> Кибербезопасность <br />
                Комплексные IT УСлуги
              </h1>
            </div>
            <div className="hero-grid__cell"></div>
            <div className="hero-grid__cell">
              <div className="hero-grid__button-container">
                <Button iconRight={<img src={ArrowRightIcon} alt="" />}>Заказать звонок</Button>
                <Button>Оставить заявку</Button>
              </div>
            </div>
            <div className="hero-grid__cell"></div>
              </div>
            </section>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="section-wrapper__inner">
            <section className="achievements">
          <div className="achievements__grid">
            <article className="achievements__card">
              <h4 className="achievements__title">
                <span style={{ backgroundColor: '#FFDD5D', padding: '0px 6px' }}>Золотой</span>{' '}
                партнер Битрикс24
              </h4>
              <p className="achievements__text">
                Автоматизация бизнеса на Битрикс24: внедрение, сопровождение, обслуживание, проекты
                под ключ.
              </p>
            </article>

            <article className="achievements__card">
              <h4 className="achievements__title">
                <span className="achievements__accent">15+</span> лет опыта
              </h4>
              <p className="achievements__text">
                Предлагаем качественные услуги в IT‑сфере с 2008 года.
              </p>
            </article>

            <article className="achievements__card">
              <h4 className="achievements__title">Партнер Kaspersky</h4>
              <p className="achievements__text">
                Поставляем лицензии и комплексные программные решения.
              </p>
            </article>

            <article className="achievements__card">
              <h4 className="achievements__title">
                <span className="achievements__accent">40+</span> направлений
              </h4>
              <p className="achievements__text">
                Более 40 направлений в IT: разработка, автоматизация, кибербезопасность.
              </p>
            </article>
              </div>
            </section>
          </div>
        </div>

        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
