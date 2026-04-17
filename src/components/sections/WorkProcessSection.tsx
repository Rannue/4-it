import agileDiagram from '@/assets/img/Agile.svg';
import waterfallDiagram from '@/assets/img/Waterfall.svg';

import './WorkProcessSection.css';

const APPROACHES = [
  {
    id: 'agile',
    title: 'Agile',
    description:
      'Итерационный процесс с возможностью менять требования. Обеспечивает гибкость и поэтапный выпуск продукта.',
    diagramSrc: agileDiagram,
    diagramAlt: 'Схема итерационного процесса Agile',
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    description: 'Строгая последовательность этапов по утверждённому техническому заданию',
    diagramSrc: waterfallDiagram,
    diagramAlt: 'Схема последовательного процесса Waterfall',
  },
] as const;

function WorkProcessSection() {
  return (
    <section className="work-process" aria-labelledby="work-process-heading">
      <div className="work-process__inner">
        <header className="work-process__header">
          <h2 id="work-process-heading" className="work-process__title">
            Подбираем оптимальный процесс работы <br /> для{' '}
            <span className="work-process__title-accent">вашего</span> проекта
          </h2>
          <p className="work-process__lead">
            Мы используем как Agile, так и Waterfall подходы, адаптируя их под задачи каждого
            проекта.
          </p>
        </header>

        <div className="work-process__grid">
          {APPROACHES.map(item => (
            <article key={item.id} className="work-process-card">
              <div className="work-process-card__copy">
                <h3 className="work-process-card__title">{item.title}</h3>
                <p className="work-process-card__text">{item.description}</p>
              </div>
              <div className="work-process-card__figure">
                <img
                  className="work-process-card__diagram"
                  src={item.diagramSrc}
                  alt={item.diagramAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcessSection;
