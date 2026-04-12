// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';

function CybersecurityCreateSziPage() {
  return (
    <PageLayout>
      <SecondaryHero
        breadcrumbs={[
          { label: 'Главная', href: '/' },
          { label: 'Кибербезопасность', href: '/cybersecurity' },
          { label: 'Создание СЗИ' },
        ]}
        title="Создание СЗИ"
      />
    </PageLayout>
  );
}

export default CybersecurityCreateSziPage;
