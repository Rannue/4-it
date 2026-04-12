// react
import { useEffect, useMemo, useState } from 'react';

import './ClientsSection.css';

/** Порядок важен: сначала более узкий viewport (синхронно с ClientsSection.css). */
const GRID_BREAKPOINTS = [
  { media: '(max-width: 720px)', columns: 2 },
  { media: '(max-width: 1200px)', columns: 3 },
] as const;

/** Подстроки в имени файла (lower) → класс `clients__logo-image--tuned` в CSS. */
const TUNED_LOGO_MARKERS = ['kamvol', 'камвол', 'kommunarka', 'коммунарка'] as const;

type ClientLogo = {
  id: string;
  name: string;
  src: string;
  logoClassName: string;
};

function cx(...parts: Array<string | undefined | false>): string {
  return parts.filter(Boolean).join(' ');
}

function fileNameFromPath(path: string): string {
  return path.split('/').pop() ?? path;
}

function pathToDisplayName(path: string): string {
  const stem = fileNameFromPath(path).replace(/\.(svg|png|jpe?g|webp)$/i, '');
  return stem.replace(/[-_]+/g, ' ').trim() || 'Клиент';
}

function isTunedLogoPath(path: string): boolean {
  const base = fileNameFromPath(path).toLowerCase();
  return TUNED_LOGO_MARKERS.some(marker => base.includes(marker));
}

function logoImageClassName(path: string): string {
  return cx('clients__logo-image', isTunedLogoPath(path) && 'clients__logo-image--tuned');
}

function readGridColumnCount(): 2 | 3 | 4 {
  if (typeof window === 'undefined') return 4;
  for (const { media, columns } of GRID_BREAKPOINTS) {
    if (window.matchMedia(media).matches) return columns;
  }
  return 4;
}

function useGridColumnCount(): 2 | 3 | 4 {
  const [columns, setColumns] = useState<2 | 3 | 4>(readGridColumnCount);

  useEffect(() => {
    const mqlList = GRID_BREAKPOINTS.map(({ media }) => window.matchMedia(media));
    const sync = () => setColumns(readGridColumnCount());

    sync();
    mqlList.forEach(mql => mql.addEventListener('change', sync));
    return () => mqlList.forEach(mql => mql.removeEventListener('change', sync));
  }, []);

  return columns;
}

function trailingPlaceholderCount(itemCount: number, columns: number): number {
  if (itemCount === 0) return 0;
  return (columns - (itemCount % columns)) % columns;
}

function mapGlobToClients(modules: Record<string, string>): ClientLogo[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, 'ru'))
    .map(([path, src]) => ({
      id: path,
      name: pathToDisplayName(path),
      src,
      logoClassName: logoImageClassName(path),
    }));
}

function usePartnerClients(): ClientLogo[] {
  return useMemo(() => {
    const modules = import.meta.glob('../../assets/img/partners/*.{svg,png}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>;
    return mapGlobToClients(modules);
  }, []);
}

function ClientsSection() {
  const clients = usePartnerClients();
  const columns = useGridColumnCount();
  const placeholders = useMemo(
    () => trailingPlaceholderCount(clients.length, columns),
    [clients.length, columns],
  );

  return (
    <section className="clients" aria-labelledby="clients-heading">
      <div className="section-wrapper__inner clients__header-inner">
        <header className="clients__header">
          <h2 id="clients-heading" className="clients__title">
            Наши клиенты
          </h2>
          <p className="clients__subtitle">
            Представители международного бизнеса, государственного сектора и белорусских компаний,
            лидеры своих отраслей.
          </p>
        </header>
      </div>

      <div className="clients__grid-wrapper">
        <div className="clients__grid">
          {clients.map(client => (
            <div key={client.id} className="clients__cell">
              <img
                className={client.logoClassName}
                src={client.src}
                alt={client.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
          {Array.from({ length: placeholders }, (_, i) => (
            <div
              key={`clients-grid-pad-${i}`}
              className="clients__cell clients__cell--placeholder"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
