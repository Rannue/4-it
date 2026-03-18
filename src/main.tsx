import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ScrollToTop from './components/ScrollToTop';
import CybersecurityPage from './pages/cybersecurity';
import CybersecurityAuditPage from './pages/cybersecurity-audit.tsx';
import CybersecurityDesignSziPage from './pages/cybersecurity-design-szi.tsx';
import CybersecurityCreateSziPage from './pages/cybersecurity-create-szi.tsx';
import CybersecurityAttestationSziPage from './pages/cybersecurity-attestation-szi.tsx';
import CybersecurityInfrastructureEffectivenessPage from './pages/cybersecurity-infrastructure-effectiveness.tsx';
import CybersecuritySiemPage from './pages/cybersecurity-siem.tsx';
import CybersecurityDlpPage from './pages/cybersecurity-dlp.tsx';
import CybersecurityFirewallPage from './pages/cybersecurity-firewall.tsx';
import CybersecurityNetworkScreensPage from './pages/cybersecurity-network-screens.tsx';
import CertificationOfInformationSecurityToolsPage from './pages/cybersecurity/Certification.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />

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
          <Route path="/cybersecurity/firewall" element={<CybersecurityFirewallPage />} />
          <Route
            path="/cybersecurity/network-screens"
            element={<CybersecurityNetworkScreensPage />}
          />
          <Route
            path="/cybersecurity/certification"
            element={<CertificationOfInformationSecurityToolsPage />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
