import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Hero.css';
import InfoGridSection from '../components/InfoGridSection';
import SecondaryHero from '../components/SecondaryHero';
import '../components/InfoGridSection.css';
import ClientsSection from '../components/ClientsSection';
import bookIcon from '../assets/icons/book.svg';
import certificateIcon from '../assets/icons/certificate.svg';
import trendingUpIcon from '../assets/icons/trending-up.svg';

const AUDIT_GOAL_TEXT =
  'Цель аудита — комплексный анализ текущего состояния вашей информационной системы';

function AnimatedAuditGoalText() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // начинаем анимацию, когда верх блока входит снизу в экран,
      // и завершаем, когда он поднимается ближе к верхней части
      const start = viewportHeight * 0.9; // почти нижний край
      const end = viewportHeight * 0.2; // верхняя зона чтения

      const raw = (start - rect.top) / (start - end);
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

  return (
    <section className="section audit-goal">
      <p ref={ref} className="audit-goal__text">
        {(() => {
          const words = AUDIT_GOAL_TEXT.split(' ');
          const totalLetters = words.reduce((sum, word) => sum + word.length, 0);
          let letterIndex = 0;

          return words.map((word, wordIdx) => (
            <span key={wordIdx} className="audit-goal__word">
              {word.split('').map((char, charIdx) => {
                const threshold = totalLetters > 1 ? letterIndex / (totalLetters - 1) : 1;
                const revealed = progress >= threshold;
                letterIndex += 1;

                return (
                  <span
                    key={`${wordIdx}-${charIdx}`}
                    style={{
                      color: revealed ? '#111111' : '#D3D4DB',
                      transition: 'color 80ms linear',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ));
        })()}
      </p>
    </section>
  );
}

function CybersecurityAuditPage() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <SecondaryHero
          breadcrumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Кибербезопасность', href: '/cybersecurity' },
            { label: 'Аудит инфраструктуры и информационной безопасности' },
          ]}
          title="Аудит инфраструктуры и информационной безопасности"
        />

        <AnimatedAuditGoalText />

        <InfoGridSection
          title="Что вы получаете в рамках услуги"
          columnsHtml={[
            `
              <div class="info-grid__group">
                <h4>Отчёт о структуре информационной системы</h4>
                <p>
                  Детальный анализ текущего состояния ИС, включая физические и логические
                  границы системы.
                </p>
              </div>
              <img
                src="${bookIcon}"
                alt="Иконка отчёта"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Спецификации для систем защиты информации</h4>
                <p>
                  Рекомендации по необходимым средствам защиты для безопасного
                  функционирования ИС.
                </p>
              </div>
              <img
                src="${certificateIcon}"
                alt="Иконка спецификаций"
                class="info-grid__icon"
              />
            `,
            `
              <div class="info-grid__group">
                <h4>Рекомендации по улучшению</h4>
                <p>
                  Конкретные шаги для устранения выявленных уязвимостей
                  и повышения уровня защищённости.
                </p>
              </div>
              <img
                src="${trendingUpIcon}"
                alt="Иконка улучшений"
                class="info-grid__icon"
              />
            `,
          ]}
        />

        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default CybersecurityAuditPage;
