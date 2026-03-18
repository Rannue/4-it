import './HighlightGridSection.css';

type HighlightItem = {
  title: string;
  description: string;
  indexLabel?: string;
};

type HighlightGridSectionProps = {
  title: string;
  items: HighlightItem[];
};

function HighlightGridSection({ title, items }: HighlightGridSectionProps) {
  return (
    <section className="highlight-grid">
      <div className="highlight-grid__inner">
        <div className="highlight-grid__title">
          <h2>{title}</h2>
        </div>
        <div className="highlight-grid__cards">
          {items.map((item, index) => {
            const label = item.indexLabel ?? String(index + 1).padStart(2, '0');

            return (
              <article key={index} className="highlight-card">
                <div className="highlight-card__content">
                  <h3 className="highlight-card__title">{item.title}</h3>
                  <p className="highlight-card__description">{item.description}</p>
                </div>
                <p className="highlight-card__index">[ {label} ]</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HighlightGridSection;
