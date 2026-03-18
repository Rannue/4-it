import './InfoGridSection.css';

type InfoGridSectionProps = {
  /** Заголовок всего блока (h2) */
  title: string;
  /**
   * Массив HTML‑строк для ячеек.
   * Каждая строка может содержать заголовки, абзацы, иконки в формате HTML.
   */
  columnsHtml: string[];
};

function InfoGridSection({ title, columnsHtml }: InfoGridSectionProps) {
  return (
    <section className="info-grid">
      <header className="info-grid__header">
        <h2 className="info-grid__title">{title}</h2>
      </header>

      <div className="info-grid__cols">
        {columnsHtml.map((html, index) => (
          <article
            key={index}
            className="info-grid__col"
            // Контент приходит из конфигурации/кода, поэтому осознанно используем dangerouslySetInnerHTML.
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
      </div>
    </section>
  );
}

export default InfoGridSection;
