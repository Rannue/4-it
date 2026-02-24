import './Header.css'

function Header() {
  return (
    <header className="app-header">
      <div className="app-header__logo">4-IT</div>
      <nav className="app-header__nav">
        <a href="#home">Главная</a>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  )
}

export default Header

