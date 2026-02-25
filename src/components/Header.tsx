import "./Header.css";
import logo4it from "../assets/Логотип 4-IT.svg";
import Button from "./Button";

function Header() {
  return (
    <header className="app-header">
      <div className="app-left-part">
        <div className="app-header__logo">
          <img src={logo4it} alt="4-IT" />
        </div>
        <nav className="app-header__nav">
          <a href="#home">Главная</a>
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
      <div className="app-right-part">
        <p>+375 (00) 000-00-00x</p>
        <Button>Оставить заявку</Button>
      </div>
    </header>
  );
}

export default Header;
