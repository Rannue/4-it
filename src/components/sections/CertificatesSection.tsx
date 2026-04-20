// react
import { useCallback, useState } from 'react';

import { CERTIFICATE_CARDS, type CertificateCardEntry } from '@/constants/certificateCards';

import CertificatePreviewModal, { type CertificatePreviewItem } from './CertificatePreviewModal';

import bitrix24CardMark from '@/assets/img/Кибербезопасность/Bitrix24-logo.svg';
import oneCCompanyMark from '@/assets/img/Кибербезопасность/1с-лого.svg';
import erlBrandIcon from '@/assets/img/ЕРЛ.svg';

import './CertificatesSection.css';

/** Inline SVG: `currentColor` + hover в CSS (как у stroke-иконок 1px / 20px). */
function CertificateCardArrowIcon() {
  return (
    <svg
      className="certificates-card__arrow-svg"
      width={36}
      height={36}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1663 5.83398L5.83301 14.1673"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 5.83398H14.167V13.334"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertificateBrandColumn({ card }: { card: CertificateCardEntry }) {
  if (card.brand === 'bitrix24') {
    return (
      <div className="certificates-card__brand">
        <img
          src={bitrix24CardMark}
          alt=""
          className="certificates-card__brand-mark certificates-card__brand-mark--bitrix"
        />
      </div>
    );
  }

  if (card.brand === '1c-bitrix') {
    return (
      <div className="certificates-card__brand certificates-card__brand--1c">
        <div className="certificates-card__brand-marks-duo" aria-hidden="true">
          <img
            src={oneCCompanyMark}
            alt=""
            className="certificates-card__brand-mark certificates-card__brand-mark--duo-1c"
          />
          <img
            src={bitrix24CardMark}
            alt=""
            className="certificates-card__brand-mark certificates-card__brand-mark--duo-bitrix"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="certificates-card__brand certificates-card__brand--erl">
      <img src={erlBrandIcon} alt="" className="certificates-card__brand-coat" />
    </div>
  );
}

function CertificatesSection() {
  const [preview, setPreview] = useState<CertificatePreviewItem | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const openPreview = useCallback((card: CertificateCardEntry) => {
    setPreview({ src: card.imageSrc, alt: card.imageAlt });
  }, []);

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__inner">
        <header className="certificates__header">
          <h2 className="certificates__title">Сертификаты и лицензии</h2>
        </header>

        <ul className="certificates__list" aria-label="Список сертификатов">
          {CERTIFICATE_CARDS.map(card => (
            <li key={card.id} className="certificates__item">
              <button
                type="button"
                className="certificates-card"
                onClick={() => openPreview(card)}
                aria-label={`Открыть сертификат: ${card.title}${card.subtitle ? `. ${card.subtitle}` : ''}`}
              >
                <CertificateBrandColumn card={card} />
                <p className="certificates-card__doc-type">{card.title}</p>
                <div className="certificates-card__competency">
                  {card.subtitle ? (
                    <p className="certificates-card__competency-text">{card.subtitle}</p>
                  ) : null}
                </div>
                <span className="certificates-card__arrow" aria-hidden="true">
                  <CertificateCardArrowIcon />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {preview ? <CertificatePreviewModal item={preview} onClose={closePreview} /> : null}
    </section>
  );
}

export default CertificatesSection;
