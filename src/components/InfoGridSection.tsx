import './InfoGridSection.css';

type InfoGridSectionProps = {
  /** Заголовок всего блока (h2) */
  title: string;
  /** Описание под заголовком */
  description?: string;
  /**
   * Массив HTML‑строк для ячеек.
   * Каждая строка может содержать заголовки, абзацы, иконки в формате HTML.
   */
  columnsHtml: string[];
};

function InfoGridSection({ title, description, columnsHtml }: InfoGridSectionProps) {
  return (
    <section className="info-grid">
      <header className="info-grid__header">
        <h2 className="info-grid__title">{title}</h2>
        {description && <p className="info-grid__description">{description}</p>}
      </header>

      <div className="info-grid__cols-wrapper">
        <div className="info-grid__cols">
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
