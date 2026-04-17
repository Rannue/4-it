// components
import PageLayout from '@/components/layout/PageLayout';
import PageHeadingBar from '@/components/sections/PageHeadingBar';
import Button from '@/shared/ui/Button';

// constants
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import {
  SITE_COMPANY,
  SITE_EMAIL,
  SITE_OFFICE,
  SITE_PHONE,
  YANDEX_MAPS_OPEN_URL,
  YANDEX_MAP_WIDGET_SRC,
} from '@/constants/siteContacts';

import './Contacts.css';

const EXTERNAL_REL = 'noopener noreferrer' as const;

function ExternalRow({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel={EXTERNAL_REL} className="contacts-page__ext-link">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Contacts() {
  return (
    <PageLayout>
      <PageHeadingBar
        breadcrumbs={[{ label: '4-it.by', to: '/' }, { label: 'Контакты' }]}
        title="Контакты"
      />

      <section className="section-wrapper section-wrapper--px-only contacts-page__map-section">
        <div className="section-wrapper__inner">
          <div className="contacts-page__map-shell">
            <iframe
              title="Карта: офис 4-IT"
              className="contacts-page__map-frame"
              src={YANDEX_MAP_WIDGET_SRC}
              loading="lazy"
            />
            <aside className="contacts-page__card" aria-label="Контакты офиса">
              <p className="contacts-page__legal-name">{SITE_COMPANY.legalName}</p>
              <p className="contacts-page__unp">
                УНП <span className="contacts-page__unp-value">{SITE_COMPANY.unp}</span>
              </p>

              <h2 className="contacts-page__label">Адрес</h2>
              <p className="contacts-page__text">
                {SITE_OFFICE.building}
                <br />
                {SITE_OFFICE.streetLine}, {SITE_OFFICE.floor}
              </p>
              <p className="contacts-page__hours">{SITE_OFFICE.hours}</p>

              <h2 className="contacts-page__label">Телефон</h2>
              <p className="contacts-page__text">
                <a href={`tel:${SITE_PHONE.e164}`}>{SITE_PHONE.display}</a>
              </p>

              <h2 className="contacts-page__label">Почта</h2>
              <p className="contacts-page__text">
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </p>

              <h2 className="contacts-page__label">Мессенджеры и соц. сети</h2>
              <div className="contacts-page__socials">
                <ExternalRow href={SOCIAL_LINKS.linkedin}>LinkedIn</ExternalRow>
                <ExternalRow href={SOCIAL_LINKS.instagram}>Instagram</ExternalRow>
              </div>

              <Button
                className="contacts-page__map-btn"
                href={YANDEX_MAPS_OPEN_URL}
                target="_blank"
                rel={EXTERNAL_REL}
                color="#ffffff"
                textColor="var(--color-text-main)"
                borderColor="var(--color-line)"
              >
                Открыть Яндекс Карты
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
