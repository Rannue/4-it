// react
import { Children, Fragment, type ReactNode } from 'react';

// components
import ScrollReveal from '@/shared/ui/ScrollReveal';
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  const nodes = Children.toArray(children);

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        {nodes.map((child, index) =>
          /* First block is usually the hero — no scroll-in animation */
          index === 0 ? (
            <Fragment key={`main-block-${index}`}>{child}</Fragment>
          ) : (
            <ScrollReveal key={`main-block-${index}`}>{child}</ScrollReveal>
          )
        )}
      </main>
      <Footer />
    </div>
  );
}
