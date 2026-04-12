// react
import type { ReactNode } from 'react';

// components
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}
