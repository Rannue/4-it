// components
import HeroBreadcrumbs, { type BreadcrumbItem, type HeroBreadcrumbsTone } from './HeroBreadcrumbs';

import './PageHeadingBar.css';

export type { BreadcrumbItem };

type PageHeadingBarProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  /** По умолчанию светлый блок под шапкой сайта. */
  tone?: HeroBreadcrumbsTone;
};

/**
 * Верх страницы: хлебные крошки + крупный заголовок. Переиспользуется на внутренних страницах.
 */
export default function PageHeadingBar({
  breadcrumbs,
  title,
  tone = 'onCanvas',
}: PageHeadingBarProps) {
  return (
    <header className="section-wrapper page-heading-bar">
      <div className="section-wrapper__inner">
        <HeroBreadcrumbs items={breadcrumbs} tone={tone} />
        <h1 className="page-heading-bar__title">{title}</h1>
      </div>
    </header>
  );
}
