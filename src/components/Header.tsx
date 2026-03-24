import './Header.css';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo4it from '../assets/Логотип 4-IT.svg';
import Button from './Button';

type NavItemKey = 'Компания' | 'Услуги' | 'Решения' | 'Контакты';

const NAV_CONTENT: Record<NavItemKey, ReactNode> = {
  Компания: (
    <div className="nav-menu__columns">
      <ul className="nav-menu__list">
        <li>
          <a href="#about">О нас</a>
        </li>
        <li>
          <a href="#clients">Клиенты</a>
        </li>
        <li>
          <a href="#certificates">Сертификаты и документы</a>
        </li>
      </ul>
      <ul className="nav-menu__list">
        <li>
          <a href="#vacancies">Вакансии</a>
        </li>
        <li>
          <a href="#reviews">Отзывы</a>
        </li>
        <li>
          <a href="#blog">Блог</a>
        </li>
      </ul>
    </div>
  ),
  Услуги: (
    <div className="nav-menu__columns">
      <ul className="nav-menu__list">
        <li>
          <a href="#services-b24">Битрикс24</a>
        </li>
        <li>
          <a href="/cybersecurity">Кибербезопасность</a>
        </li>
        <li>
          <a href="#services-dev">Разработка сайтов</a>
        </li>
      </ul>
    </div>
  ),
  Решения: (
    <div className="nav-menu__columns">
      <ul className="nav-menu__list">
        <li>
          <a href="#solutions-integration">Интеграции</a>
        </li>
        <li>
          <a href="#solutions-crm">CRM решения</a>
        </li>
        <li>
          <a href="#solutions-portals">Порталы и личные кабинеты</a>
        </li>
      </ul>
    </div>
  ),
  Контакты: (
    <div className="nav-menu__columns">
      <ul className="nav-menu__list">
        <li>
          <a href="#contacts">Контактная информация</a>
        </li>
        <li>
          <a href="#contacts-map">Карта проезда</a>
        </li>
      </ul>
    </div>
  ),
};

function Header() {
  const [activeMenu, setActiveMenu] = useState<NavItemKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const update = () => {
      document.documentElement.style.setProperty('--header-height', `${node.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`app-header${isScrolled ? ' app-header--scrolled' : ''}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="app-left-part">
        <div className="app-header__logo">
          <Link to="/">
            <img src={logo4it} alt="4-IT" />
          </Link>
        </div>
        <div className="app-header__nav-wrapper">
          <nav className="app-header__nav">
            <Link to="/" className="app-header__nav-item" onMouseEnter={() => setActiveMenu(null)}>
              Главная
            </Link>
            <button
              type="button"
              className="app-header__nav-item"
              onMouseEnter={() => setActiveMenu('Услуги')}
            >
              Услуги
            </button>
            <button
              type="button"
              className="app-header__nav-item app-header__nav-item--company"
              onMouseEnter={() => setActiveMenu('Компания')}
            >
              Компания
            </button>
            <a
              href="#solutions"
              className="app-header__nav-item"
              onMouseEnter={() => setActiveMenu('Решения')}
            >
              Решения
            </a>
            <a
              href="#contacts"
              className="app-header__nav-item"
              onMouseEnter={() => setActiveMenu('Контакты')}
            >
              Контакты
            </a>
          </nav>
        </div>
      </div>
      <div className="app-right-part">
        <p>+375 (00) 000-00-00x</p>
        <Button>Оставить заявку</Button>
      </div>

      {activeMenu && (
        <div className="nav-menu nav-menu--open">
          <div className="nav-menu__inner">
            <div className="nav-menu__left">
              <h3 className="nav-menu__title">{activeMenu}</h3>
              {NAV_CONTENT[activeMenu]}
            </div>

            <div className="nav-menu__right">
              <div className="nav-menu__contacts">
                <p>+375 29 000 00 00 (A1)</p>
                <p className="nav-menu__contacts-muted">+375 29 000 00 00 (МТС)</p>
                <p>info@4-it.by</p>
              </div>
              <div className="nav-menu__cv">
                <Button>Отправить CV</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
