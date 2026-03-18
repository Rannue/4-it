import { useEffect, useRef, useState } from 'react';
import './ScrollCardsSection.css';

type ScrollCardsSectionProps = {
  title: string;
  cardsHtml: string[];
};

function ScrollCardsSection({ title, cardsHtml }: ScrollCardsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxShift, setMaxShift] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stickyTop, setStickyTop] = useState<number | undefined>(undefined);
  // scrollY, при котором синяя секция фиксируется по центру экрана
  const [pinScrollY, setPinScrollY] = useState<number | null>(null);
  const [sectionMinHeight, setSectionMinHeight] = useState<number | null>(null);
  const [scrollRange, setScrollRange] = useState<{
    start: number;
    end: number;
  } | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!viewport || !track || !section) return;

    const recalc = () => {
      const shift = track.scrollWidth - viewport.clientWidth;
      const positiveShift = shift > 0 ? shift : 0;
      setMaxShift(positiveShift);

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const innerHeight = viewport.parentElement
        ? viewport.parentElement.clientHeight
        : viewport.clientHeight;
      // позиция, при которой inner оказывается по центру окна
      const sticky = vh / 2 - innerHeight / 2;
      const stickyClamped = sticky > 0 ? sticky : 0;
      setStickyTop(stickyClamped);

      // scrollY, при котором ЦЕНТР секции совпадает с центром экрана
      const sectionCenterScrollY = section.offsetTop + section.offsetHeight / 2 - vh / 2;
      const pinY = sectionCenterScrollY;
      setPinScrollY(pinY);

      // вертикальный диапазон, в котором крутим карточки:
      // старт — в момент фиксации,
      // конец — ещё на fraction * maxShift пикселей скролла ниже
      const start = pinY;
      const speedFactor = 0.25; // меньше — ещё быстрее прокрутка
      const end = start + positiveShift * speedFactor;
      setScrollRange({ start, end });

      // чтобы sticky-добежала до конца горизонтального скролла,
      // секция должна быть достаточно высокой (учитываем уменьшенный диапазон)
      const minHeight = vh + stickyClamped + innerHeight + positiveShift * speedFactor;
      setSectionMinHeight(minHeight);
    };

    recalc();
    window.addEventListener('resize', recalc);

    return () => window.removeEventListener('resize', recalc);
  }, []);

  useEffect(() => {
    if (!scrollRange || maxShift <= 0 || pinScrollY === null) return;

    const handleScroll = () => {
      const y = window.scrollY;
      const { start, end } = scrollRange;

      if (y <= start) {
        setProgress(0);
        return;
      }

      if (y >= end) {
        setProgress(1);
        return;
      }

      const raw = (y - start) / (end - start);
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
  }, [maxShift, scrollRange, pinScrollY]);

  const translateX = -(maxShift * progress);

  return (
    <section
      className="scroll-section"
      ref={sectionRef}
      style={sectionMinHeight !== null ? { minHeight: `${sectionMinHeight}px` } : undefined}
    >
      <div
        className="scroll-section__inner"
        style={stickyTop !== undefined ? { top: stickyTop } : undefined}
      >
        <h2 className="scroll-section__title">{title}</h2>

        <div className="scroll-section__viewport" ref={viewportRef}>
          <div
            className="scroll-section__track"
            ref={trackRef}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {cardsHtml.map((html, index) => (
              <article
                key={index}
                className="scroll-card"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollCardsSection;
