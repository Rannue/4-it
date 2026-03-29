import './TestimonialsSection.css';
import asbLogo from '@/assets/img/partners/asb-new 1.svg';
import ArrowLongRightIcon from '@/components/icons/ArrowLongRightIcon';

const QUOTE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

function NavChevronLeft() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavChevronRight() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-wrapper__inner">
        <div className="testimonials__panel">
          <header className="testimonials__head">
            <h2 id="testimonials-heading" className="testimonials__title">
              Что о нас говорят?
            </h2>
            <div className="testimonials__nav" role="group" aria-label="Навигация по отзывам">
              <button
                type="button"
                className="testimonials__nav-btn"
                disabled
                aria-label="Предыдущий"
              >
                <NavChevronLeft />
              </button>
              <button
                type="button"
                className="testimonials__nav-btn testimonials__nav-btn--active"
                aria-label="Следующий"
              >
                <NavChevronRight />
              </button>
            </div>
          </header>

          <div className="testimonials__viewport">
            <div className="testimonials__track">
              {[0, 1, 2].map(i => (
                <article key={i} className="testimonials-card">
                  <p className="testimonials-card__quote">{QUOTE}</p>
                  <footer className="testimonials-card__footer">
                    <div className="testimonials-card__person">
                      <div className="testimonials-card__avatar" aria-hidden="true">
                        ИИ
                      </div>
                      <div className="testimonials-card__author">
                        <p className="testimonials-card__name">Иванов Иван Иванович</p>
                        <p className="testimonials-card__role">Должность</p>
                      </div>
                    </div>
                    <span className="testimonials-card__divider" aria-hidden="true" />
                    <img src={asbLogo} alt="АСБ Лизинг" className="testimonials-card__logo" />
                    <a href="#" className="testimonials-card__link">
                      Смотреть оригинал
                      <ArrowLongRightIcon width={18} height={18} aria-hidden />
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
