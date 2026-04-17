// react
import { Link } from 'react-router-dom';

// components
import ContactRequestForm from '@/components/sections/ContactRequestForm';

// data
import {
  COOKIES_POLICY_DOC_HREF,
  INFO_SECURITY_POLICY_DOC_HREF,
  PERSONAL_DATA_POLICY_DOC_HREF,
} from '@/constants/legalDocs';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import {
  SITE_EMAIL,
  SITE_OFFICE,
  SITE_PHONE,
  YANDEX_MAPS_OPEN_URL,
} from '@/constants/siteContacts';

// assets
import logo4it from '@/assets/logo-4it.svg';

import './Footer.css';

const EXTERNAL_REL = 'noopener noreferrer' as const;

const POLICY_LINKS = [
  {
    href: COOKIES_POLICY_DOC_HREF,
    label: 'Политика по обработке cookies-файлов',
  },
  {
    href: PERSONAL_DATA_POLICY_DOC_HREF,
    label: 'Политика по обработке персональных данных',
  },
  {
    href: INFO_SECURITY_POLICY_DOC_HREF,
    label: 'Политика в области информационной безопасности',
  },
] as const;

const MAIN_NAV = [
  { kind: 'router' as const, to: '/', label: 'Главная' },
  { kind: 'anchor' as const, href: '#about', label: 'Компания' },
  { kind: 'anchor' as const, href: '#services', label: 'Услуги' },
  { kind: 'anchor' as const, href: '#portfolio', label: 'Портфолио' },
  { kind: 'router' as const, to: '/contacts', label: 'Контакты' },
];

type ServiceLink = { label: string } & ({ to: string } | { href: string });

type ServiceColumn =
  | { title: string; links: ServiceLink[] }
  | { titleLink: { to: string; label: string }; links: [] };

const SERVICE_COLUMNS: ServiceColumn[] = [
  {
    title: 'Битрикс24',
    links: [
      { label: 'Внедрение и настройка Битрикс24', href: '#' },
      { label: 'Поддержка Битрикс24', href: '#' },
    ],
  },
  {
    title: 'Разработка сайтов',
    links: [
      { label: 'Корпоративные сайты', href: '#' },
      { label: 'Интернет-магазины', href: '#' },
      { label: 'B2B порталы', href: '#' },
    ],
  },
  {
    title: 'Кибербезопасность',
    links: [
      { label: 'Аудит инфраструктуры и информационной безопасности', to: '/cybersecurity/audit' },
      { label: 'Аттестация системы защиты информации', to: '/cybersecurity/certification' },
      { label: 'Поставка и внедрение СЗИ и оборудования', to: '/cybersecurity/delivery' },
    ],
  },
  {
    titleLink: { to: '/edms-signature', label: 'Электронный документооборот с ЭЦП' },
    links: [],
  },
];

function ServiceColumnBlock({ column }: { column: ServiceColumn }) {
  const heading =
    'titleLink' in column ? (
      <h4 className="footer__heading">
        <Link to={column.titleLink.to} className="footer__heading-link">
          {column.titleLink.label}
        </Link>
      </h4>
    ) : (
      <h4 className="footer__heading">{column.title}</h4>
    );

  return (
    <div className="footer__services-col">
      {heading}
      {column.links.length > 0 && (
        <ul className="footer__list">
          {column.links.map(item => (
            <li key={item.label}>
              {'to' in item ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExternalTextLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel={EXTERNAL_REL} className="footer__link-external">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function Footer() {
  return (
    <>
      <ContactRequestForm id="contacts" />
      <footer className="footer">
        <div className="footer__wrap">
          <div className="footer__panel">
            <div className="footer__top">
              <div className="footer__top-inner">
                <div className="footer__brand-block">
                  <Link to="/" className="footer__brand">
                    <img src={logo4it} alt="4-IT" className="footer__logo" />
                  </Link>
                  <nav className="footer__nav" aria-label="Основное меню">
                    {MAIN_NAV.map(item =>
                      item.kind === 'router' ? (
                        <Link key={item.label} to={item.to}>
                          {item.label}
                        </Link>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {item.label}
                        </a>
                      )
                    )}
                  </nav>
                </div>

                <div className="footer__divider footer__divider--tablet-only" aria-hidden />

                <div className="footer__services">
                  {SERVICE_COLUMNS.map(col => (
                    <ServiceColumnBlock
                      key={'titleLink' in col ? col.titleLink.to : col.title}
                      column={col}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="footer__divider footer__divider--panel-padded" aria-hidden />

            <div className="footer__middle">
              <div className="footer__middle-inner">
                <div className="footer__contacts">
                  <div className="footer__contacts-col">
                    <h4 className="footer__heading footer__heading--muted">Посетить</h4>
                    <p>{SITE_OFFICE.building}</p>
                    <p>
                      {SITE_OFFICE.streetLine},<br />
                      {SITE_OFFICE.floor}
                    </p>
                    <p>{SITE_OFFICE.hours}</p>
                    <ExternalTextLink href={YANDEX_MAPS_OPEN_URL}>Яндекс Карты</ExternalTextLink>
                  </div>
                  <div className="footer__contacts-col">
                    <h4 className="footer__heading footer__heading--muted">Написать</h4>
                    <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                    <ExternalTextLink href={SOCIAL_LINKS.linkedin}>LinkedIn</ExternalTextLink>
                    <ExternalTextLink href={SOCIAL_LINKS.instagram}>Instagram</ExternalTextLink>
                  </div>
                  <div className="footer__contacts-col">
                    <h4 className="footer__heading footer__heading--muted">Позвонить</h4>
                    <a href={`tel:${SITE_PHONE.e164}`}>{SITE_PHONE.display}</a>
                  </div>
                </div>

                <div className="footer__legal">
                  <nav className="footer__policies" aria-label="Правовая информация">
                    {POLICY_LINKS.map(({ href, label }) => (
                      <a key={href} href={href} target="_blank" rel={EXTERNAL_REL}>
                        {label}
                      </a>
                    ))}
                  </nav>
                  <p className="footer__copyright">© {new Date().getFullYear()} ФорАйТи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
