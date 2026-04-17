// react
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './CertificatesSection.css';

export type CertificatePreviewItem = {
  src: string;
  alt: string;
};

type CertificatePreviewModalProps = {
  item: CertificatePreviewItem;
  onClose: () => void;
};

export default function CertificatePreviewModal({ item, onClose }: CertificatePreviewModalProps) {
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
    document.body
  );
}
