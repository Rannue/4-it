import type { ReactNode } from 'react';
import './AchievementsSection.css';

const ACHIEVEMENTS: Array<{ title: ReactNode; description: string }> = [
  {
    title: (
      <>
        <span className="achievements__highlight">Золотой</span> партнер <br />
        Битрикс24
      </>
    ),
    description:
      'Автоматизация бизнеса на Битрикс24: внедрение, сопровождение, обслуживание, проекты под ключ.',
  },
  {
    title: (
      <>
        <span className="achievements__accent">15+</span>
        <br /> лет опыта
      </>
    ),
    description: 'Предлагаем качественные услуги в IT‑сфере с 2008 года.',
  },
  {
    title: (
      <>
        Партнер <br />
        Kaspersky
      </>
    ),
    description: 'Поставляем лицензии и комплексные программные решения.',
  },
  {
    title: (
      <>
        <span className="achievements__accent">40+</span>
        <br /> направлений
      </>
    ),
    description: 'Более 40 направлений в IT: разработка, автоматизация, кибербезопасность.',
  },
];

function AchievementsSection() {
  return (
    <div className="achievements-section">
      <div className="achievements-section__inner">
        <section className="achievements" aria-label="Достижения компании">
          <div className="achievements__grid">
            {ACHIEVEMENTS.map((item, index) => (
              <article key={index} className="achievements__card">
                <h4 className="achievements__title">{item.title}</h4>
                <p className="achievements__text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AchievementsSection;
