import type { ReactNode } from 'react';
import { useId } from 'react';
import './CtaLinksListSection.css';

function CtaArrowIcon({ className }: { className?: string }) {
  const clipId = useId().replace(/:/g, '');
  return (
    <svg
      className={className}
      width={36}
      height={36}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M14.1663 5.83398L5.83301 14.1673"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 5.83398H14.167V13.334"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export type CtaLinksListItem = {
  label: string;
  href: string;
  /** По умолчанию true для ссылок http(s) */
  external?: boolean;
};

export type CtaLinksListSectionProps = {
  /** Строки со ссылкой: текст слева, стрелка справа */
  items: readonly CtaLinksListItem[];
  /** Блок под списком (можно вставить ссылку с классом `cta-links-list__footer-link`) */
  footer?: ReactNode;
  className?: string;
  /** id секции для якорей / aria */
  id?: string;
};

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function CtaLinksListSection({ items, footer, className, id }: CtaLinksListSectionProps) {
  return (
    <div
      id={id}
      className={['section-wrapper', 'cta-links-list-pad', className].filter(Boolean).join(' ')}
      aria-label="Полезные ссылки"
      role="region"
    >
      <div className="section-wrapper__inner">
        <ul className="cta-links-list__items">
          {items.map((item, index) => {
            const external = item.external ?? isExternalHref(item.href);
            return (
              <li key={`${item.href}-${index}`} className="cta-links-list__item">
                <a
                  className="cta-links-list__link"
                  href={item.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="cta-links-list__label">{item.label}</span>
                  <span className="cta-links-list__arrow-wrap" aria-hidden>
                    <CtaArrowIcon className="cta-links-list__arrow" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        {footer ? (
          <div className="cta-links-list__footer">
            <div className="cta-links-list__footer-text">{footer}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CtaLinksListSection;
