// react
import type { ReactNode } from 'react';

import './CardsGridSection.css';

type HtmlCardsGridSectionProps = {
  title: ReactNode;
  cardsHtml: string[];
};

function CardsGridSection({ title, cardsHtml }: HtmlCardsGridSectionProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="cards-grid">
          <header className="cards-grid__header">
            <h2 className="cards-grid__title">{title}</h2>
          </header>

          <div className="cards-grid__grid">
            {cardsHtml.map((html, index) => (
              <article
                key={index}
                className="cards-grid__card"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CardsGridSection;
