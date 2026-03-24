import { useEffect, useMemo, useRef } from 'react';
import './CertificatesSection.css';

function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => {
    const modules = import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>;

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b, 'ru'))
      .map(([path, src]) => {
        const file = path.split('/').pop() ?? path;
        const name = file.replace(/\.(png|jpe?g|webp)$/i, '');
        return { src, alt: `Сертификат: ${name}` };
      });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track) return;

    let rafId = 0;

    const updateHeight = () => {
      const scrollable = track.scrollWidth - track.offsetWidth;
      const stickyH = sticky.offsetHeight;
      section.style.height = `${stickyH + scrollable}px`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollable = track.scrollWidth - track.offsetWidth;
        if (scrollable <= 0) return;

        const stickyH = sticky.offsetHeight;
        const stickyTravel = section.offsetHeight - stickyH;
        if (stickyTravel <= 0) return;

        const sectionRect = section.getBoundingClientRect();
        const stickyRect = sticky.getBoundingClientRect();
        const offset = stickyRect.top - sectionRect.top;
        const progress = Math.min(Math.max(offset / stickyTravel, 0), 1);

        track.style.transform = `translateX(${-progress * scrollable}px)`;
      });
    };

    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(track);
    ro.observe(sticky);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="section-wrapper">
      <div className="section-wrapper__inner">
        <section className="certificates" ref={sectionRef}>
          <div className="certificates__sticky" ref={stickyRef}>
            <header className="certificates-carousel__header">
              <h2 className="certificates-carousel__title">Сертификаты и лицензии</h2>
            </header>

            <div className="certificates-carousel__track" ref={trackRef} aria-label="Лента документов">
              {items.map(item => (
                <article key={item.alt} className="certificates-carousel__item">
                  <img className="certificates-carousel__img" src={item.src} alt={item.alt} />
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CertificatesSection;
