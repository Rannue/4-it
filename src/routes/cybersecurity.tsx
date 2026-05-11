// react
import { Route, Routes, Navigate } from 'react-router-dom';

// constants
import { routePaths } from '@/constants/routePaths';

// components
import CybersecurityPage from '@/pages/cybersecurity';
import CybersecurityAuditPage from '@/pages/cybersecurity/Audit';
import CybersecurityDesignSziPage from '@/pages/cybersecurity/certification/DesignSzi';
import CybersecurityCreateSziPage from '@/pages/cybersecurity/certification/CreateSzi';
import SecondaryCertificationPage from '@/pages/cybersecurity/certification/CertificationSecondary';
import SecurityAssessmentPage from '@/pages/cybersecurity/certification/SecurityAssessment';
import SZIDocumentsReviewPage from '@/pages/cybersecurity/certification/SZIDocumentsReview';
import CybersecuritySiemPage from '@/pages/cybersecurity/delivery/SIEM';
import CybersecurityDlpPage from '@/pages/cybersecurity/delivery/DLP';
import CybersecurityPamPage from '@/pages/cybersecurity/delivery/PAM';
import FirewallPage from '@/pages/cybersecurity/delivery/Firewall';
import AntivirusProtectionPage from '@/pages/cybersecurity/delivery/AntivirusProtection';
import BackupPage from '@/pages/cybersecurity/delivery/Backup';
import CybersecurityNetworkScreensPage from '@/pages/cybersecurity/delivery/LinearEncryption';
import CertificationOfInformationSecurityToolsPage from '@/pages/cybersecurity/certification';
import CybersecurityDeliveryPage from '@/pages/cybersecurity/Delivery';
import CyberCulturePage from '@/pages/cybersecurity/delivery/CyberCulture';
import SupplyOfServersAndSwitchesPage from '@/pages/cybersecurity/delivery/SupplyOfServersAndSwitches';

export function CybersecurityRoutes() {
  const c = routePaths.cyber;
  return (
    <Routes>
      <Route path={c.root} element={<CybersecurityPage />} />
      <Route path={c.audit} element={<CybersecurityAuditPage />} />
      <Route path={c.designSzi} element={<CybersecurityDesignSziPage />} />
      <Route path={c.createSzi} element={<CybersecurityCreateSziPage />} />
      <Route path={c.attestationSziLegacy} element={<SecondaryCertificationPage />} />
      <Route path={c.attestationSzi} element={<SecondaryCertificationPage />} />
      <Route path={c.infrastructureEffectiveness} element={<SecurityAssessmentPage />} />
      <Route path={c.securityAssessment} element={<SecurityAssessmentPage />} />
      <Route path={c.sziDocumentsReview} element={<SZIDocumentsReviewPage />} />
      <Route path={c.siem} element={<CybersecuritySiemPage />} />
      <Route path={c.dlp} element={<CybersecurityDlpPage />} />
      <Route path={c.pam} element={<CybersecurityPamPage />} />
      <Route path={c.firewall} element={<FirewallPage />} />
      <Route path={c.antivirus} element={<AntivirusProtectionPage />} />
      <Route path={c.backup} element={<BackupPage />} />
      <Route
        path={c.networkScreensLegacy}
        element={<Navigate to={c.firewall} replace />}
      />
      <Route path={c.linearEncryption} element={<CybersecurityNetworkScreensPage />} />
      <Route path={c.certification} element={<CertificationOfInformationSecurityToolsPage />} />
      <Route path={c.deliveryLegacy} element={<Navigate to={c.delivery} replace />} />
      <Route path={c.delivery} element={<CybersecurityDeliveryPage />} />
      <Route path={c.deliveryCyberCulture} element={<CyberCulturePage />} />
      <Route
        path={c.cyberCultureLegacy}
        element={<Navigate to={c.deliveryCyberCulture} replace />}
      />
      <Route path={c.serversAndSwitches} element={<SupplyOfServersAndSwitchesPage />} />
    </Routes>
  );
}
