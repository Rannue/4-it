import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App.tsx';
import ScrollToTop from '@/widgets/scroll-to-top/ScrollToTop';
import CybersecurityPage from '@/pages/cybersecurity';
import CybersecurityAuditPage from '@/pages/cybersecurity/audit/Audit.tsx';
import CybersecurityDesignSziPage from '@/pages/cybersecurity-design-szi.tsx';
import CybersecurityCreateSziPage from '@/pages/cybersecurity-create-szi.tsx';
import CybersecurityAttestationSziPage from '@/pages/cybersecurity-attestation-szi.tsx';
import CybersecurityInfrastructureEffectivenessPage from '@/pages/cybersecurity-infrastructure-effectiveness.tsx';
import CybersecuritySiemPage from '@/pages/cybersecurity/delivery/SIEM.tsx';
import CybersecurityDlpPage from '@/pages/cybersecurity/delivery/DLP.tsx';
import CybersecurityPamPage from '@/pages/cybersecurity/delivery/PAM.tsx';
import CybersecurityFirewallPage from '@/pages/cybersecurity-firewall.tsx';
import CybersecurityNetworkScreensPage from '@/pages/cybersecurity-network-screens.tsx';
import CertificationOfInformationSecurityToolsPage from '@/pages/cybersecurity/Certification.tsx';
import CybersecurityDeliveryPage from '@/pages/cybersecurity/Delivery.tsx';
import TechnicalSupportPage from '@/pages/TechnicalSupport.tsx';
import VirtualizationPage from '@/pages/cybersecurity/delivery/Virtualization.tsx';
import SupplyOfServersAndSwitchesPage from '@/pages/cybersecurity/delivery/SupplyOfServersAndSwitches.tsx';
import Bitrix24ImplementationPage from '@/pages/bitrix24/Implementation.tsx';
import EDMSWithSignaturePage from '@/pages/EDMSWithSignature.tsx';
import OnlineStorePage from '@/pages/websites/OnlineStore.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/technical-support" element={<TechnicalSupportPage />} />
          <Route path="/bitrix24/implementation" element={<Bitrix24ImplementationPage />} />
          <Route path="/edms-signature" element={<EDMSWithSignaturePage />} />
          <Route path="/websites/online-store" element={<OnlineStorePage />} />
          <Route path="/virtualization" element={<VirtualizationPage />} />

          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/cybersecurity/audit" element={<CybersecurityAuditPage />} />
          <Route path="/cybersecurity/design-szi" element={<CybersecurityDesignSziPage />} />
          <Route path="/cybersecurity/create-szi" element={<CybersecurityCreateSziPage />} />
          <Route
            path="/cybersecurity/attestation-szi"
            element={<CybersecurityAttestationSziPage />}
          />
          <Route
            path="/cybersecurity/infrastructure-effectiveness"
            element={<CybersecurityInfrastructureEffectivenessPage />}
          />
          <Route path="/cybersecurity/siem" element={<CybersecuritySiemPage />} />
          <Route path="/cybersecurity/dlp" element={<CybersecurityDlpPage />} />
          <Route path="/cybersecurity/pam" element={<CybersecurityPamPage />} />
          <Route path="/cybersecurity/firewall" element={<CybersecurityFirewallPage />} />
          <Route
            path="/cybersecurity/network-screens"
            element={<CybersecurityNetworkScreensPage />}
          />
          <Route
            path="/cybersecurity/certification"
            element={<CertificationOfInformationSecurityToolsPage />}
          />
          <Route path="/cybersecurity/delivery" element={<CybersecurityDeliveryPage />} />
          <Route
            path="/cybersecurity/servers-and-switches"
            element={<SupplyOfServersAndSwitchesPage />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
