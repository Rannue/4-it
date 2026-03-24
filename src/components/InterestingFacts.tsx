import { useEffect, useRef, useState } from 'react';
import './InterestingFacts.css';
import certificationIllustration from '../assets/img/illustrations/certification.svg';
import scanningIllustration from '../assets/img/illustrations/scaning.svg';
import buildingsIllustration from '../assets/img/illustrations/buildings.svg';

function InterestingFacts() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [shift, setShift] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>('.facts-card');
    if (cards.length < 3) return;

    // считаем разницу по нижним границам карточек,
    // чтобы при завершении анимации они выровнялись по нижней линии
    const firstBottom = cards[0].offsetTop + cards[0].offsetHeight;
    const bottomBottom = cards[2].offsetTop + cards[2].offsetHeight;
    const delta = bottomBottom - firstBottom;
    if (delta <= 0) return;
    setShift(delta);

    const handleScroll = () => {
      const rect = grid.getBoundingClientRect();

      // учитываем фиксированную шапку и дополнительный отступ 42px
      const header = document.querySelector<HTMLElement>('.app-header');
      const headerHeight = header?.offsetHeight ?? 0;
      const offsetTop = rect.top - headerHeight - 42;

      // начинаем анимацию, когда верх сетки доезжает до области под шапкой
      // offsetTop = 0  → progress = 0
      // offsetTop = -delta → progress = 1 (верхний ряд "опустился" на уровень нижнего)
      const start = 0;
      const end = -delta;

      const raw = (start - offsetTop) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const translateY = shift * progress;

  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="facts">
          <div className="facts__grid" ref={gridRef}>
        <article
          className="facts-card facts-card--top"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <div className="facts-card__visual facts-card__visual--orange">
            <img
              src={buildingsIllustration}
              alt="Иллюстрация аттестации СЗИ"
              className="facts-card__image"
            />
          </div>
          <p className="facts-card__text">
            <strong>Более 60% компаний</strong> , пострадавших от кибератак, закрываются в течение
            полугода после инцидента
          </p>
        </article>

        <article
          className="facts-card facts-card--top"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <div className="facts-card__visual facts-card__visual--image">
            <img
              src={scanningIllustration}
              alt="Иллюстрация аттестации СЗИ"
              className="facts-card__image"
            />
          </div>
          <p className="facts-card__text">
            <strong>90% кибератак</strong> можно предотвратить, если своевременно выявить уязвимости
            в системе защиты.
          </p>
        </article>

        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>

        <article
          className="facts-card facts-card--top"
          // style={{ transform: `translateY(${translateY}px)` }}
        >
          <div className="facts-card__visual facts-card__visual--image">
            <img
              src={certificationIllustration}
              alt="Иллюстрация аттестации СЗИ"
              className="facts-card__image"
            />
          </div>
          <p className="facts-card__text">
            Аттестация СЗИ помогает снизить риски утечек данных <strong>на 80%</strong>
          </p>
        </article>
      </div>
        </section>
      </div>
    </div>
  );
}

export default InterestingFacts;
