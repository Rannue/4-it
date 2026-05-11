// components
import PageLayout from '@/components/layout/PageLayout';
import PageHeadingBar from '@/components/sections/PageHeadingBar';
import ClientsSection from '@/components/grids/ClientsSection';

import './Clients.css';

export default function Clients() {
  return (
    <PageLayout>
      <PageHeadingBar
        breadcrumbs={[{ label: '4-it.by', to: '/' }, { label: 'Клиенты' }]}
        title="Клиенты"
      />

      <section className="section-wrapper section-wrapper--px-only clients-page__intro-section">
        <div className="section-wrapper__inner"></div>
      </section>

      <ClientsSection showHeading={false} />
    </PageLayout>
  );
}
