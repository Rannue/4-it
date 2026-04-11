import type { ReactNode } from 'react';
import './SplitHighlightPanel.css';

export type SplitHighlightPanelProps = {
  /** Заголовок в левой колонке (обычно капс, цвет primary) */
  asideTitle: ReactNode;
  /** Текст в правой колонке под иллюстрацией */
  children: ReactNode;
  /** Широкий блок с иллюстрацией над текстом */
  illustration?: { src: string; alt?: string };
  className?: string;
};

function SplitHighlightPanel({
  asideTitle,
  children,
  illustration,
  className,
}: SplitHighlightPanelProps) {
  return (
    <div className={['section-wrapper', className].filter(Boolean).join(' ')}>
      <div className="section-wrapper__inner">
        <section className="split-highlight-panel">
          <div className="split-highlight-panel__grid">
            <div className="split-highlight-panel__aside">
              <h2 className="split-highlight-panel__aside-title">{asideTitle}</h2>
            </div>
            <div className="split-highlight-panel__content">
              <div className="split-highlight-panel__content-inner">
                {illustration?.src ? (
                  <div className="split-highlight-panel__figure">
                    <img
                      className="split-highlight-panel__figure-img"
                      src={illustration.src}
                      alt={illustration.alt ?? ''}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <div className="split-highlight-panel__body">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SplitHighlightPanel;
