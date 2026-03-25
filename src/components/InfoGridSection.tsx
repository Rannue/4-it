import './InfoGridSection.css';

type InfoGridSectionProps = {
  title: string;
  description?: string;
  columnsHtml: string[];
  columns?: 2 | 3;
};

function InfoGridSection({ title, description, columnsHtml, columns = 3 }: InfoGridSectionProps) {
  return (
    <section className="info-grid">
      <header className="info-grid__header">
        <h2 className="info-grid__title">{title}</h2>
        {description && <p className="info-grid__description">{description}</p>}
      </header>

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
