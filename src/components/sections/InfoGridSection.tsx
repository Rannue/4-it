import type { ReactNode } from 'react';
import './InfoGridSection.css';

type InfoGridSectionProps = {
  title?: ReactNode;
  description?: string;
  columnsHtml: string[];
  columns?: 2 | 3;
};

function InfoGridSection({ title, description, columnsHtml, columns = 3 }: InfoGridSectionProps) {
  const showHeader = title !== undefined || Boolean(description);

  return (
    <section className="info-grid section-wrapper--py-only">
      {showHeader ? (
        <header className="info-grid__header">
          <div className="info-grid__header-inner">
            {title !== undefined ? <h2 className="info-grid__title">{title}</h2> : null}
            {description ? <p className="info-grid__description">{description}</p> : null}
          </div>
        </header>
      ) : null}

      <div className="info-grid__cols-wrapper">
        <div className={`info-grid__cols info-grid__cols--${columns}`}>
          {columnsHtml.map((html, index) => (
            <article
              key={index}
              className="info-grid__col"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoGridSection;
