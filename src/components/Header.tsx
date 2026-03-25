import './Header.css';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo4it from '../assets/Логотип 4-IT.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedinIcon from '../assets/icons/lin.svg';
import Button from './Button';
import ArrowLongRightIcon from './icons/ArrowLongRightIcon';

type NavItemKey = 'Компания' | 'Услуги';

/** Временно: выпадающее меню всегда видно. Поставьте `true` для отладки вёрстки. */
const NAV_MENU_ALWAYS_VISIBLE = false;

function NavChevron() {
  return (
    <svg
      className="app-header__nav-chevron"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 4.25L6 7.75L9.5 4.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NAV_CONTENT: Record<NavItemKey, ReactNode> = {
  Компания: (
    <div className="nav-menu__columns nav-menu__columns--company">
      <ul className="nav-menu__list">
        <li>
          <a href="#about">О нас</a>
        </li>
        <li>
          <a href="#vacancies">Вакансии</a>
        </li>
      </ul>
      <ul className="nav-menu__list">
        <li>
          <a href="#clients">Клиенты</a>
        </li>
        <li>
          <a href="#reviews">Отзывы</a>
        </li>
      </ul>
      <ul className="nav-menu__list">
        <li>
          <a href="#certificates">Сертификаты и документы</a>
        </li>
        <li>
          <a href="#blog">Блог</a>
        </li>
      </ul>
    </div>
  ),
  Услуги: (
    <div className="nav-menu__columns nav-menu__columns--services">
      <div className="nav-menu__col">
        <div className="nav-menu__group">
          <p className="nav-menu__group-title">Битрикс24</p>
          <ul className="nav-menu__sublist">
            <li>
              <a href="#services-b24-impl">Внедрение и настройка Битрикс24</a>
            </li>
            <li>
              <a href="#services-b24-custom">Доработка Битрикс24</a>
            </li>
            <li>
              <a href="#services-b24-integration">Интеграция Битрикс24</a>
            </li>
          </ul>
        </div>
        <div className="nav-menu__group">
          <Link to="/cybersecurity" className="nav-menu__group-title nav-menu__group-title--link">
            Кибербезопасность
          </Link>
          <ul className="nav-menu__sublist">
            <li>
              <Link to="/cybersecurity/audit">
                Аудит инфраструктуры и информационной безопасности
              </Link>
            </li>
            <li>
              <Link to="/cybersecurity/certification">Аттестация системы защиты информации</Link>
            </li>
            <li>
              <Link to="/cybersecurity/delivery">Поставка и внедрение СЗИ и оборудования</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-menu__col">
        <div className="nav-menu__group">
          <p className="nav-menu__group-title">Разработка сайтов</p>
          <ul className="nav-menu__sublist">
            <li>
              <a href="#services-dev-shop">Интернет магазины</a>
            </li>
            <li>
              <a href="#services-dev-b2b">B2B порталы</a>
            </li>
            <li>
              <Link to="/cybersecurity/delivery">Поставка и внедрение СЗИ и оборудования</Link>
            </li>
          </ul>
        </div>
        <div className="nav-menu__standalone">
          <a href="#support" className="nav-menu__block-link">
            Техподдержка
          </a>
          <a href="#edo" className="nav-menu__block-link">
            Электронный документооборот с ЭЦП
          </a>
        </div>
      </div>
    </div>
  ),
};

function Header() {
  const [activeMenu, setActiveMenu] = useState<NavItemKey | null>(
    NAV_MENU_ALWAYS_VISIBLE ? 'Услуги' : null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const panelKey: NavItemKey | null =
    activeMenu ?? (NAV_MENU_ALWAYS_VISIBLE ? 'Услуги' : null);

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
      onMouseLeave={() => {
        if (!NAV_MENU_ALWAYS_VISIBLE) setActiveMenu(null);
      }}
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
              className={[
                'app-header__nav-item',
                activeMenu === 'Услуги' ? 'app-header__nav-item--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={() => setActiveMenu('Услуги')}
            >
              Услуги
              <NavChevron />
            </button>
            <button
              type="button"
              className={[
                'app-header__nav-item',
                'app-header__nav-item--company',
                activeMenu === 'Компания' ? 'app-header__nav-item--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={() => setActiveMenu('Компания')}
            >
              Компания
              <NavChevron />
            </button>
            <Link
              to="/#cases"
              className="app-header__nav-item"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Кейсы
            </Link>
            <a
              href="#contacts"
              className="app-header__nav-item"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Контакты
            </a>
          </nav>
        </div>
      </div>
      <div className="app-right-part">
        <p>+375 (44) 555 44 16</p>
        <Button>Оставить заявку</Button>
      </div>

      {panelKey && (
        <div className="nav-menu nav-menu--open">
          <div className="nav-menu__inner">
            <div className="nav-menu__left">
              <h3 className="nav-menu__title">{panelKey}</h3>
              {NAV_CONTENT[panelKey]}
            </div>

            <aside className="nav-menu__right" aria-label="Контакты">
              <a href="tel:+375445554416" className="nav-menu__phone">
                +375 (44) 555 44 16
              </a>
              <a href="mailto:info@4-it.by" className="nav-menu__email">
                info@4-it.by
              </a>

              <a href="#vacancies" className="nav-menu__cv-link">
                <span className="nav-menu__cv-label">Отправить CV</span>
                <ArrowLongRightIcon
                  className="nav-menu__cv-arrow"
                  width={20}
                  height={20}
                  aria-hidden
                />
              </a>

              <div className="nav-menu__social">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-menu__social-link"
                  aria-label="Instagram"
                >
                  <img
                    src={instagramIcon}
                    alt=""
                    className="nav-menu__social-icon"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-menu__social-link"
                  aria-label="LinkedIn"
                >
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="nav-menu__social-icon"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
