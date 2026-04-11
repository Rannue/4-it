import './CardsGridSection.css';

type HtmlCardsGridSectionProps = {
  title: string;
  cardsHtml: string[];
};

function CardsGridSectionDark({ title, cardsHtml }: HtmlCardsGridSectionProps) {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper-dark">
        <div className="section-wrapper__inner-dark">
          <section className="cards-grid-dark">
            <header className="cards-grid__header">
              <h2 className="cards-grid__title-dark">{title}</h2>
            </header>

            <div className="cards-grid__grid">
              {cardsHtml.map((html, index) => (
                <article
                  key={index}
                  className="cards-grid__card cards-grid__card-dark"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardsGridSectionDark;
