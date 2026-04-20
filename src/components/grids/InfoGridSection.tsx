// react
import { memo, useId, type ReactNode } from 'react';

import '@/components/sections/scroll-card-dots.css';

import './InfoGridSection.css';

export type InfoGridColumnCount = 2 | 3;

export type InfoGridSectionProps = {
  title?: ReactNode;
  description?: string;
  columnsHtml: readonly string[];
  columns?: InfoGridColumnCount;
};

const COLS_MODIFIER: Record<InfoGridColumnCount, string> = {
  2: 'info-grid__cols--2',
  3: 'info-grid__cols--3',
};

/** Плейсхолдеры: класс info-grid__group--empty или один пустой div.info-grid__group (скрываются ≤900px). */
function isPlaceholderColumn(html: string): boolean {
  if (html.includes('info-grid__group--empty')) return true;
  const compact = html.replace(/\s+/g, ' ').trim();
  return /^<div class="info-grid__group"><\/div>$/i.test(compact);
}

const InfoGridSection = memo(function InfoGridSection({
  title,
  description,
  columnsHtml,
  columns = 3,
}: InfoGridSectionProps) {
  const titleId = useId();
  const gridId = useId();

  const showHeader = title != null || Boolean(description);
  const colsClassName = `info-grid__cols ${COLS_MODIFIER[columns]}`;

  return (
    <section
      className="info-grid section-wrapper--py-only"
      aria-labelledby={showHeader && title != null ? titleId : undefined}
    >
      {showHeader ? (
        <header className="info-grid__header">
          <div className="info-grid__header-inner">
            {title != null ? (
              <h2 id={titleId} className="info-grid__title">
                {title}
              </h2>
            ) : null}
            {description ? <p className="info-grid__description">{description}</p> : null}
          </div>
        </header>
      ) : null}

      <div className="info-grid__cols-wrapper">
        <div className={colsClassName}>
          {columnsHtml.map((html, index) => (
            <article
              key={`${gridId}-${index}`}
              className={
                isPlaceholderColumn(html)
                  ? 'info-grid__col info-grid__col--placeholder'
                  : 'info-grid__col'
              }
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

InfoGridSection.displayName = 'InfoGridSection';

export default InfoGridSection;
