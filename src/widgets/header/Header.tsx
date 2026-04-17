// react
import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { Link, useLocation } from 'react-router-dom';

// constants
import { SOCIAL_LINKS } from '@/constants/socialLinks';

// components
import Button from '@/shared/ui/Button';
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';

// assets
import logo4it from '@/assets/logo-4it.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import linkedinIcon from '@/assets/icons/lin.svg';

import './Header.css';

type NavItemKey = 'Компания' | 'Услуги';

/** Временно: выпадающее меню всегда видно. Поставьте `true` для отладки вёрстки. */
const NAV_MENU_ALWAYS_VISIBLE = false;

/** Временно: пункты «Отзывы» и «Блог» в блоке «Компания». Поставьте `true`, когда разделы будут готовы. */
const SHOW_COMPANY_REVIEWS_AND_BLOG = false;

const HH_VACANCIES_URL = 'https://hh.ru/employer/1589500?hhtmFrom=vacancy&tab=DESCRIPTION';

const MOBILE_NAV_QUERY = '(max-width: 999px)';

function subscribeMobileNav(onChange: () => void) {
  const mql = window.matchMedia(MOBILE_NAV_QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

function getMobileNavSnapshot() {
  return window.matchMedia(MOBILE_NAV_QUERY).matches;
}

function getMobileNavServerSnapshot() {
  return false;
}

function useIsMobileNav() {
  return useSyncExternalStore(subscribeMobileNav, getMobileNavSnapshot, getMobileNavServerSnapshot);
}

function MenuBurgerIcon() {
  return (
    <svg width={24} height={18} viewBox="0 0 24 18" fill="none" aria-hidden>
      <path
        d="M1 1h22M1 9h22M1 17h22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuCloseIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M4 4l14 14M18 4L4 18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavChevron() {
  return (
    <svg
      className="app-header__nav-chevron"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.583 7.792L11 14.208L17.417 7.792"
        stroke="currentColor"
        strokeWidth={1.5}
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
          <a href={HH_VACANCIES_URL} target="_blank" rel="noopener noreferrer">
            Вакансии
          </a>
        </li>
      </ul>
      <ul className="nav-menu__list">
        <li>
          <a href="#clients">Клиенты</a>
        </li>
        {SHOW_COMPANY_REVIEWS_AND_BLOG ? (
          <li>
            <a href="#reviews">Отзывы</a>
          </li>
        ) : null}
      </ul>
      <ul className="nav-menu__list">
        <li>
          <Link to="/certificates">Сертификаты и документы</Link>
        </li>
        {SHOW_COMPANY_REVIEWS_AND_BLOG ? (
          <li>
            <a href="#blog">Блог</a>
          </li>
        ) : null}
      </ul>
    </div>
  ),
  Услуги: (
    <div className="nav-menu__columns nav-menu__columns--services">
      <div className="nav-menu__group">
        <p className="nav-menu__group-title">Битрикс24</p>
        <ul className="nav-menu__sublist">
          <li>
            <Link to="/bitrix24/implementation">Внедрение и настройка Битрикс24</Link>
          </li>
          <li>
            <Link to="/technical-support">Поддержка Битрикс24</Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu__group">
        <p className="nav-menu__group-title">Разработка сайтов</p>
        <ul className="nav-menu__sublist">
          <li>
            <Link to="/websites/online-store">Разработка интернет-магазина</Link>
          </li>
          <li>
            <a href="#services-dev-b2b">B2B порталы</a>
          </li>
          <li>
            <Link to="/#home">Корпоративные сайты</Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu__group">
        <Link to="/cybersecurity" className="nav-menu__group-title nav-menu__group-title--link">
          Кибербезопасность
        </Link>
        <ul className="nav-menu__sublist">
          <li>
            <Link to="/cybersecurity/audit">Аудит инфраструктуры и информационной безопасности</Link>
          </li>
          <li>
            <Link to="/cybersecurity/certification">Аттестация системы защиты информации</Link>
          </li>
          <li>
            <Link to="/cybersecurity/delivery">Поставка и внедрение СЗИ и оборудования</Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu__group">
        <Link to="/edms-signature" className="nav-menu__group-title nav-menu__group-title--link">
          Электронный документооборот с ЭЦП
        </Link>
      </div>
    </div>
  ),
};

function Header() {
  const location = useLocation();
  const isMobileNav = useIsMobileNav();
  const [activeMenu, setActiveMenu] = useState<NavItemKey | null>(
    NAV_MENU_ALWAYS_VISIBLE ? 'Услуги' : null
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavItemKey | null>(null);

  const panelKey: NavItemKey | null = activeMenu ?? (NAV_MENU_ALWAYS_VISIBLE ? 'Услуги' : null);

  const contactsNavActive = location.pathname === '/contacts';

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, []);

  const openMobileMenu = useCallback(() => {
    setActiveMenu(null);
    setMobileMenuOpen(true);
  }, []);

  useEffect(() => {
    if (!isMobileNav || !mobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNav, mobileMenuOpen]);

  useEffect(() => {
    if (!isMobileNav || !mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileNav, mobileMenuOpen, closeMobileMenu]);

  const onMobilePanelLinkAreaClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('a')) closeMobileMenu();
  };

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
      className={`app-header${isScrolled ? ' app-header--scrolled' : ''}${isMobileNav ? ' app-header--mobile-nav' : ''}`}
      onMouseLeave={() => {
        if (!NAV_MENU_ALWAYS_VISIBLE && !isMobileNav) setActiveMenu(null);
      }}
    >
      <div className="app-header__bar">
        <div className="app-left-part">
          <div className="app-header__logo">
            <Link to="/" onClick={closeMobileMenu}>
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
              <Link
                to="/contacts"
                className={[
                  'app-header__nav-item',
                  contactsNavActive ? 'app-header__nav-item--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onMouseEnter={() => setActiveMenu(null)}
              >
                Контакты
              </Link>
            </nav>
          </div>
        </div>
        <div className="app-header__mobile-tools">
          <button
            type="button"
            className="app-header__menu-toggle"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-dialog"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
          >
            {mobileMenuOpen ? <MenuCloseIcon /> : <MenuBurgerIcon />}
          </button>
        </div>
        <div className="app-right-part">
          <p>+375 (44) 555 44 16</p>
          <Button href="#contacts">Оставить заявку</Button>
        </div>
      </div>

      {mobileMenuOpen && isMobileNav && (
        <div
          className="mobile-menu"
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Меню сайта"
        >
          <div className="mobile-menu__body">
            <div className="mobile-menu__body-inner">
              <div className="mobile-menu__nav">
                <div className="mobile-menu__section">
                  <button
                    type="button"
                    className={[
                      'mobile-menu__trigger',
                      mobileExpanded === 'Услуги' ? 'mobile-menu__trigger--open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-expanded={mobileExpanded === 'Услуги'}
                    onClick={() => setMobileExpanded(k => (k === 'Услуги' ? null : 'Услуги'))}
                  >
                    Услуги
                    <NavChevron />
                  </button>
                  {mobileExpanded === 'Услуги' && (
                    <div className="mobile-menu__panel">
                      <div
                        className="mobile-menu__panel-inner"
                        onClick={onMobilePanelLinkAreaClick}
                      >
                        {NAV_CONTENT.Услуги}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mobile-menu__section">
                  <button
                    type="button"
                    className={[
                      'mobile-menu__trigger',
                      mobileExpanded === 'Компания' ? 'mobile-menu__trigger--open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-expanded={mobileExpanded === 'Компания'}
                    onClick={() => setMobileExpanded(k => (k === 'Компания' ? null : 'Компания'))}
                  >
                    Компания
                    <NavChevron />
                  </button>
                  {mobileExpanded === 'Компания' && (
                    <div className="mobile-menu__panel">
                      <div
                        className="mobile-menu__panel-inner"
                        onClick={onMobilePanelLinkAreaClick}
                      >
                        {NAV_CONTENT.Компания}
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/#cases" className="mobile-menu__link-row" onClick={closeMobileMenu}>
                  Кейсы
                </Link>
                <Link to="/contacts" className="mobile-menu__link-row" onClick={closeMobileMenu}>
                  Контакты
                </Link>
              </div>
              <div className="mobile-menu__footer">
                <div className="mobile-menu__cta">
                  <Button href="#contacts" onClick={closeMobileMenu}>
                    Оставить заявку
                  </Button>
                </div>
                <div className="mobile-menu__contacts">
                  <a href="tel:+375445554416">+375 (44) 555 44 16</a>
                  <a href="mailto:info@4-it.by">info@4-it.by</a>
                </div>
                <hr className="mobile-menu__rule" />
                <a
                  href={HH_VACANCIES_URL}
                  className="nav-menu__cv-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
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
                    href={SOCIAL_LINKS.instagram}
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
                    href={SOCIAL_LINKS.linkedin}
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
              </div>
            </div>
          </div>
        </div>
      )}

      {panelKey && !isMobileNav && (
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

              <a
                href={HH_VACANCIES_URL}
                className="nav-menu__cv-link"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  href={SOCIAL_LINKS.instagram}
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
                  href={SOCIAL_LINKS.linkedin}
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
