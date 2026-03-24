import { Link } from 'react-router-dom';
import logo4it from '../assets/Логотип 4-IT.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-inner">
          <div className="footer__brand">
            <Link to="/">
              <img src={logo4it} alt="4-IT" className="footer__logo" />
            </Link>
          </div>

          <div className="footer__services">
            <div className="footer__services-col">
              <h4 className="footer__heading">Битрикс24</h4>
              <ul className="footer__list">
                <li><a href="#">Внедрение и настройка Битрикс24</a></li>
                <li><a href="#">Доработка Битрикс24</a></li>
                <li><a href="#">Интеграция Битрикс24</a></li>
              </ul>
            </div>
            <div className="footer__services-col">
              <h4 className="footer__heading">Кибербезопасность</h4>
              <ul className="footer__list">
                <li><Link to="/cybersecurity/audit">Аудит инфраструктуры и информационной безопасности</Link></li>
                <li><Link to="/cybersecurity/certification">Аттестация системы защиты информации</Link></li>
                <li><Link to="/cybersecurity/delivery">Поставка и внедрение СЗИ и оборудования</Link></li>
              </ul>
            </div>
            <div className="footer__services-col">
              <h4 className="footer__heading">Разработка сайтов</h4>
              <ul className="footer__list">
                <li><a href="#">Аудит инфраструктуры и информационной безопасности</a></li>
                <li><a href="#">Аттестация системы защиты информации</a></li>
                <li><a href="#">Поставка и внедрение СЗИ и оборудования</a></li>
              </ul>
            </div>
            <div className="footer__services-col">
              <h4 className="footer__heading">Техподдержка</h4>
              <ul className="footer__list">
                <li><a href="#">Электронный документооборот с ЭЦП</a></li>
              </ul>
            </div>
          </div>

          <nav className="footer__nav">
            <Link to="/">Главная</Link>
            <a href="#about">О компании</a>
            <a href="#services">Услуги</a>
            <a href="#solutions">Решения</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#contacts">Контакты</a>
            <a href="#blog">Блог</a>
          </nav>
        </div>
      </div>

      <div className="footer__middle">
        <div className="footer__middle-inner">
          <div className="footer__contacts">
            <div className="footer__contacts-col">
              <h4 className="footer__heading footer__heading--dark">Посетить</h4>
              <p>БЦ &quot;Royal Plaza&quot;, ст. м. Немига</p>
              <p>г. Минск, Проспект Победителей 7А,<br />20 этаж, 17 офис</p>
              <p>пн-пт 9.00 – 19.00</p>
              <a href="https://yandex.by/maps" target="_blank" rel="noreferrer" className="footer__link-external">
                Яндекс Карты <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="footer__contacts-col">
              <h4 className="footer__heading footer__heading--dark">Написать</h4>
              <a href="mailto:example@4-it.by">example@4-it.by</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__link-external">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link-external">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="footer__contacts-col">
              <h4 className="footer__heading footer__heading--dark">Позвонить</h4>
              <a href="tel:+375200000000">+375 20 000 00 00</a>
            </div>
          </div>

          <div className="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.5!2d27.55!3d53.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU0JzM2LjAiTiAyN8KwMzMnMDAuMCJF!5e0!3m2!1sru!2sby!4v1"
              className="footer__map-iframe"
              loading="lazy"
              title="Офис 4-IT на карте"
            />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">©2026 ФорАйТи</p>
          <div className="footer__policies">
            <a href="#">Политика по обработке cookies-файлов</a>
            <a href="#">Политика по обработке персональных данных</a>
            <a href="#">Политика в области информационной безопасности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
