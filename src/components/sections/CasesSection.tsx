// components
import ArrowLongRightIcon from '@/shared/icons/ArrowLongRightIcon';

// assets
import projectImage from '@/assets/img/project.png';

import './CasesSection.css';

function CasesSection() {
  return (
    <section
      id="cases"
      className="cases section-wrapper"
      aria-labelledby="cases-heading"
    >
      <div className="section-wrapper__inner">
        <div className="cases__grid">
          <header className="cases__intro">
            <h2 id="cases-heading" className="cases__title">
              Кейсы
            </h2>
            <p className="cases__description">
              Реализуем проекты для промышленности, ритейла, финансового сектора и госсектора — от
              порталов и интеграций до кибербезопасности и автоматизации на Битрикс24 и 1С.
            </p>
          </header>

          {[1, 2, 3, 4].map(i => (
            <article key={i} className="cases-card">
              <div className="cases-card__media">
                <img src={projectImage} alt="" className="cases-card__image" />
              </div>
              <div className="cases-card__body">
                <h3 className="cases-card__name">Наименование проекта</h3>
                <p className="cases-card__tag">ПОРТАЛ</p>
              </div>
            </article>
          ))}

          <div className="cases__cta">
            <a href="#" className="cases__link">
              Смотреть все работы
              <ArrowLongRightIcon className="cases__link-icon" width={20} height={20} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasesSection;
