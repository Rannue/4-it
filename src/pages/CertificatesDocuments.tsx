// react
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// components
import PageLayout from '@/components/layout/PageLayout';
import PageHeadingBar from '@/components/sections/PageHeadingBar';
import CertificatePreviewModal, {
  type CertificatePreviewItem,
} from '@/components/sections/CertificatePreviewModal';

// constants
import {
  CERTIFICATE_DOCUMENT_PAGE_ROWS,
  type CertificateCardEntry,
} from '@/constants/certificateCards';
import { PUBLIC_DOWNLOAD_DOCS } from '@/constants/publicDocuments';

import './CertificatesDocuments.css';

const EXTERNAL_REL = 'noopener noreferrer' as const;

type CertificateTileButtonProps = {
  card: CertificateCardEntry;
  onOpen: (card: CertificateCardEntry) => void;
};

function CertificateTileButton({ card, onOpen }: CertificateTileButtonProps) {
  return (
    <button
      type="button"
      className="cert-doc-page__mosaic-hit"
      data-layout-fr={card.layoutFr}
      onClick={() => onOpen(card)}
      aria-label={`Открыть: ${card.title}${card.subtitle ? `. ${card.subtitle}` : ''}`}
    >
      <img src={card.imageSrc} alt="" className="cert-doc-page__mosaic-img" loading="lazy" />
    </button>
  );
}

const SECTION_IDS = {
  gallery: 'certificates-gallery',
  documents: 'public-documents',
} as const;

function PdfDocIcon() {
  return (
    <svg className="cert-doc-page__pdf-icon" width={36} height={36} viewBox="0 0 36 36" aria-hidden>
      <rect x={6} y={4} width={24} height={28} rx={3} fill="var(--color-primary)" opacity={0.12} />
      <rect
        x={6}
        y={4}
        width={24}
        height={28}
        rx={3}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={1.5}
      />
      <path
        d="M12 14h12M12 18h10M12 22h8"
        stroke="var(--color-primary)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function scrollToSectionId(id: string) {
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

export default function CertificatesDocuments() {
  const { hash, pathname } = useLocation();
  const [preview, setPreview] = useState<CertificatePreviewItem | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const activeSection = useMemo(() => {
    if (hash === '#policies') return 'policies' as const;
    return 'certificates' as const;
  }, [hash]);

  useLayoutEffect(() => {
    if (pathname !== '/certificates') return;
    if (hash === '#policies') scrollToSectionId(SECTION_IDS.documents);
    else scrollToSectionId(SECTION_IDS.gallery);
  }, [hash, pathname]);

  const openPreview = useCallback((card: CertificateCardEntry) => {
    setPreview({ src: card.imageSrc, alt: card.imageAlt });
  }, []);

  const navClass = (key: 'certificates' | 'policies') =>
    ['cert-doc-page__nav-link', activeSection === key ? 'cert-doc-page__nav-link--active' : '']
      .filter(Boolean)
      .join(' ');

  return (
    <PageLayout>
      <PageHeadingBar
        breadcrumbs={[{ label: '4-it.by', to: '/' }, { label: 'Сертификаты и документы' }]}
        title="Сертификаты и документы"
      />

      <div className="section-wrapper cert-doc-page">
        <div className="section-wrapper__inner cert-doc-page__inner">
          <nav className="cert-doc-page__sidebar" aria-label="Разделы страницы">
            <ul className="cert-doc-page__nav-list">
              <li>
                <Link to="/certificates#certificates" className={navClass('certificates')}>
                  Сертификаты
                </Link>
              </li>
              <li>
                <Link to="/certificates#policies" className={navClass('policies')}>
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </nav>

          <div className="cert-doc-page__main">
            <section
              id={SECTION_IDS.gallery}
              className="cert-doc-page__section"
              aria-labelledby="cert-doc-gallery-title"
            >
              <ul className="cert-doc-page__mosaic" aria-label="Галерея сертификатов">
                {CERTIFICATE_DOCUMENT_PAGE_ROWS.map((row, rowIndex) => {
                  const templateColumns =
                    row.length === 1 ? 'minmax(0, 1fr)' : row.map(c => `${c.layoutFr}fr`).join(' ');
                  return (
                    <li
                      key={`cert-doc-row-${rowIndex}`}
                      className="cert-doc-page__mosaic-row"
                      style={{ ['--cert-doc-row-cols' as string]: templateColumns }}
                    >
                      {row.map(card => (
                        <CertificateTileButton key={card.id} card={card} onOpen={openPreview} />
                      ))}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              id={SECTION_IDS.documents}
              className="cert-doc-page__section"
              aria-labelledby="cert-doc-docs-title"
            >
              <h2 id="cert-doc-docs-title" className="cert-doc-page__section-title">
                Документы
              </h2>
              <ul className="cert-doc-page__downloads">
                {PUBLIC_DOWNLOAD_DOCS.map(doc => (
                  <li key={doc.id}>
                    <a
                      href={doc.href}
                      className="cert-doc-page__download-row"
                      target="_blank"
                      rel={EXTERNAL_REL}
                    >
                      <PdfDocIcon />
                      <span className="cert-doc-page__download-text">
                        <span className="cert-doc-page__download-title">{doc.title}</span>
                        <span className="cert-doc-page__download-meta">{doc.sizeLabel}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {preview ? <CertificatePreviewModal item={preview} onClose={closePreview} /> : null}
    </PageLayout>
  );
}
