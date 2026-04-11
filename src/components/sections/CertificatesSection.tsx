import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import './CertificatesSection.css';

/** Совпадает с max-width в CertificatesSection.css (колонка без горизонтальной анимации) */
const MQ_STACK = '(max-width: 600px)';

type CertificateItem = { src: string; alt: string };

function clamp01(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

function mapModulesToItems(modules: Record<string, string>): CertificateItem[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, 'ru'))
    .map(([path, src]) => {
      const file = path.split('/').pop() ?? path;
      const name = file.replace(/\.(png|jpe?g|webp)$/i, '');
      return { src, alt: `Сертификат: ${name}` };
    });
}

function useCertificateItems(): CertificateItem[] {
  return useMemo(() => {
    const modules = import.meta.glob('../../assets/certificates/*.{png,jpg,jpeg,webp}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>;
    return mapModulesToItems(modules);
  }, []);
}

type StripRefs = {
  section: RefObject<HTMLElement | null>;
  sticky: RefObject<HTMLDivElement | null>;
  track: RefObject<HTMLDivElement | null>;
  trackInner: RefObject<HTMLDivElement | null>;
};

/**
 * Горизонтальный сдвиг ленты, синхронный со скроллом (desktop).
 * На узких экранах — сброс: колонка задаётся в CSS.
 */
function useScrollLinkedStrip(refs: StripRefs): void {
  useEffect(() => {
    const { section, sticky, track, trackInner } = refs;
    const elSection = section.current;
    const elSticky = sticky.current;
    const elTrack = track.current;
    if (!elSection || !elSticky || !elTrack) return;

    const mq = window.matchMedia(MQ_STACK);
    const isStack = () => mq.matches;

    let rafId = 0;

    const viewportWidth = () => trackInner.current?.clientWidth ?? elTrack.clientWidth;

    const overflowWidth = () => Math.max(0, elTrack.scrollWidth - viewportWidth());

    const clearStripStyles = () => {
      elSection.style.height = '';
      elTrack.style.transform = '';
    };

    const syncSectionHeight = () => {
      if (isStack()) {
        clearStripStyles();
        return;
      }
      const scrollable = overflowWidth();
      elSection.style.height = `${elSticky.offsetHeight + scrollable}px`;
    };

    const applyScrollTransform = () => {
      if (isStack()) {
        elTrack.style.transform = '';
        return;
      }

      const scrollable = overflowWidth();
      if (scrollable <= 0) {
        elTrack.style.transform = '';
        return;
      }

      const stickyTravel = elSection.offsetHeight - elSticky.offsetHeight;
      if (stickyTravel <= 0) return;

      const sectionTop = elSection.getBoundingClientRect().top;
      const stickyTop = elSticky.getBoundingClientRect().top;
      const offset = stickyTop - sectionTop;
      const progress = clamp01(offset / stickyTravel);

      elTrack.style.transform = `translateX(${-progress * scrollable}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyScrollTransform);
    };

    const onBreakpointChange = () => {
      syncSectionHeight();
      applyScrollTransform();
    };

    syncSectionHeight();
    mq.addEventListener('change', onBreakpointChange);

    const ro = new ResizeObserver(syncSectionHeight);
    ro.observe(elTrack);
    ro.observe(elSticky);
    trackInner.current && ro.observe(trackInner.current);

    const onImgLoad = () => syncSectionHeight();
    const imgCleanups: (() => void)[] = [];
    elTrack.querySelectorAll('img').forEach(node => {
      const img = node as HTMLImageElement;
      if (img.complete) return;
      img.addEventListener('load', onImgLoad);
      imgCleanups.push(() => img.removeEventListener('load', onImgLoad));
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', syncSectionHeight);
    applyScrollTransform();

    return () => {
      mq.removeEventListener('change', onBreakpointChange);
      ro.disconnect();
      imgCleanups.forEach(fn => fn());
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', syncSectionHeight);
      cancelAnimationFrame(rafId);
      clearStripStyles();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- RefObject и stripRefs стабильны между рендерами
  }, []);
}

type PreviewModalProps = {
  item: CertificateItem;
  onClose: () => void;
};

function CertificatePreviewModal({ item, onClose }: PreviewModalProps) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="certificates-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр сертификата"
    >
      <button
        type="button"
        className="certificates-modal__backdrop"
        aria-label="Закрыть"
        onClick={onClose}
      />
      <div className="certificates-modal__panel">
        <button
          type="button"
          className="certificates-modal__close"
          aria-label="Закрыть просмотр"
          onClick={onClose}
        >
          ×
        </button>
        <img className="certificates-modal__img" src={item.src} alt={item.alt} />
      </div>
    </div>,
    document.body,
  );
}

function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackInnerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = useCertificateItems();
  const [preview, setPreview] = useState<CertificateItem | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const stripRefs = useMemo(
    () => ({
      section: sectionRef,
      sticky: stickyRef,
      track: trackRef,
      trackInner: trackInnerRef,
    }),
    [],
  );

  useScrollLinkedStrip(stripRefs);

  return (
    <section className="certificates" ref={sectionRef}>
      <div className="certificates__sticky" ref={stickyRef}>
        <header className="certificates-carousel__header">
          <h2 className="certificates-carousel__title">Сертификаты и лицензии</h2>
        </header>

        <div className="certificates__track-wrapper">
          <div className="certificates-carousel__inner" ref={trackInnerRef}>
            <div
              className="certificates-carousel__track"
              ref={trackRef}
              aria-label="Лента документов"
            >
              {items.map(item => (
                <button
                  key={item.alt}
                  type="button"
                  className="certificates-carousel__item"
                  onClick={() => setPreview(item)}
                  aria-label={`Просмотреть: ${item.alt}`}
                >
                  <img className="certificates-carousel__img" src={item.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {preview && <CertificatePreviewModal item={preview} onClose={closePreview} />}
    </section>
  );
}

export default CertificatesSection;
