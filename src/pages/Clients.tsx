// components
import PageLayout from '@/components/layout/PageLayout';
import PageHeadingBar from '@/components/sections/PageHeadingBar';
import ClientsSection from '@/components/grids/ClientsSection';

import { CLIENTS_INTRO_TEXT } from '@/constants/clientsSectionCopy';

import './Clients.css';

export default function Clients() {
  return (
    <PageLayout>
      <PageHeadingBar
        breadcrumbs={[{ label: '4-it.by', to: '/' }, { label: 'Клиенты' }]}
        title="Клиенты"
      />

      <section className="section-wrapper section-wrapper--px-only clients-page__intro-section">
        <div className="section-wrapper__inner">
          <p className="clients-page__intro">{CLIENTS_INTRO_TEXT}</p>
        </div>
      </section>

      <ClientsSection showHeading={false} />
    </PageLayout>
  );
}
