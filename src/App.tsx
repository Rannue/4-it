import './App.css'
import Header from './components/Header'
import Button from './components/Button'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section id="home" className="hero">
          <h1>Главная страница 4-IT</h1>
          <p>
            Добро пожаловать! Здесь будет ваша основная информация — краткое
            описание компании или проекта.
          </p>
          <Button variant="primary">Начать работу</Button>
        </section>

        <section id="about" className="section">
          <h2>О нас</h2>
          <p>
            Расскажите здесь, чем вы занимаетесь, какие технологии используете и чем можете быть полезны.
          </p>
        </section>

        <section id="services" className="section">
          <h2>Услуги</h2>
          <p>Список основных услуг или направлений, которыми вы занимаетесь.</p>
        </section>

        <section id="contacts" className="section">
          <h2>Контакты</h2>
          <p>Укажите здесь email, телефон или форму обратной связи.</p>
        </section>
      </main>
    </div>
  )
}

export default App
