// react
import { Route, Routes, Navigate } from 'react-router-dom';

// components
import TechnicalSupportPage from '@/pages/TechnicalSupport.tsx';
import Bitrix24ImplementationPage from '@/pages/bitrix24/Implementation.tsx';
import EDMSWithSignaturePage from '@/pages/EDMSWithSignature.tsx';
import OnlineStorePage from '@/pages/websites/OnlineStore.tsx';
import VirtualizationPage from '@/pages/cybersecurity/delivery/Virtualization.tsx';

export function GeneralRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cybersecurity" replace />} />
      <Route path="/home" element={<Navigate to="/cybersecurity" replace />} />
      <Route path="/technical-support" element={<TechnicalSupportPage />} />
      <Route path="/bitrix24/implementation" element={<Bitrix24ImplementationPage />} />
      <Route path="/edms-signature" element={<EDMSWithSignaturePage />} />
      <Route path="/websites/online-store" element={<OnlineStorePage />} />
      <Route path="/virtualization" element={<VirtualizationPage />} />
    </Routes>
  );
}
