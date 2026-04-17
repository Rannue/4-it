// react
import { Route, Routes } from 'react-router-dom';

// app
import App from '@/app/App';

// components
import TechnicalSupportPage from '@/pages/bitrix24/TechnicalSupport';
import Bitrix24ImplementationPage from '@/pages/bitrix24/Implementation';
import EDMSWithSignaturePage from '@/pages/EDMSWithSignature';
import OnlineStorePage from '@/pages/websites/OnlineStore';
import VirtualizationPage from '@/pages/cybersecurity/delivery/Virtualization';
import ContactsPage from '@/pages/Contacts';
import CertificatesDocumentsPage from '@/pages/CertificatesDocuments';

export function GeneralRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/certificates" element={<CertificatesDocumentsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/technical-support" element={<TechnicalSupportPage />} />
      <Route path="/bitrix24/implementation" element={<Bitrix24ImplementationPage />} />
      <Route path="/edms-signature" element={<EDMSWithSignaturePage />} />
      <Route path="/websites/online-store" element={<OnlineStorePage />} />
      <Route path="/virtualization" element={<VirtualizationPage />} />
    </Routes>
  );
}
