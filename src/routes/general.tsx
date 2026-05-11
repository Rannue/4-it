// react
import { Route, Routes } from 'react-router-dom';

// app
import App from '@/app/App';

// constants
import { routePaths } from '@/constants/routePaths';

// components
import TechnicalSupportPage from '@/pages/bitrix24/TechnicalSupport';
import Bitrix24ImplementationPage from '@/pages/bitrix24/Implementation';
import EDMSWithSignaturePage from '@/pages/EDMSWithSignature';
import OnlineStorePage from '@/pages/websites/OnlineStore';
import VirtualizationPage from '@/pages/cybersecurity/delivery/Virtualization';
import ContactsPage from '@/pages/Contacts';
import ClientsPage from '@/pages/Clients';
import CertificatesDocumentsPage from '@/pages/CertificatesDocuments';

export function GeneralRoutes() {
  const p = routePaths;
  return (
    <Routes>
      <Route path={p.home} element={<App />} />
      <Route path={p.homeLegacy} element={<App />} />
      <Route path={p.certificates} element={<CertificatesDocumentsPage />} />
      <Route path={p.contacts} element={<ContactsPage />} />
      <Route path={p.clients} element={<ClientsPage />} />
      <Route path={p.technicalSupport} element={<TechnicalSupportPage />} />
      <Route path={p.bitrix24Implementation} element={<Bitrix24ImplementationPage />} />
      <Route path={p.edmsSignature} element={<EDMSWithSignaturePage />} />
      <Route path={p.websitesOnlineStore} element={<OnlineStorePage />} />
      <Route path={p.virtualization} element={<VirtualizationPage />} />
    </Routes>
  );
}
