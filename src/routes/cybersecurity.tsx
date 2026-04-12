// react
import { Route, Routes, Navigate } from 'react-router-dom';

// components
import CybersecurityPage from '@/pages/cybersecurity';
import CybersecurityAuditPage from '@/pages/cybersecurity/audit/Audit.tsx';
import CybersecurityDesignSziPage from '@/pages/cybersecurity/certification/DesignSzi';
import CybersecurityCreateSziPage from '@/pages/cybersecurity/certification/CreateSzi.tsx';
import CybersecurityAttestationSziPage from '@/pages/cybersecurity/AttestationSzi.tsx';
import CybersecurityInfrastructureEffectivenessPage from '@/pages/cybersecurity/InfrastructureEffectiveness.tsx';
import CybersecuritySiemPage from '@/pages/cybersecurity/delivery/SIEM.tsx';
import CybersecurityDlpPage from '@/pages/cybersecurity/delivery/DLP.tsx';
import CybersecurityPamPage from '@/pages/cybersecurity/delivery/PAM.tsx';
import FirewallPage from '@/pages/cybersecurity/delivery/Firewall.tsx';
import AntivirusProtectionPage from '@/pages/cybersecurity/delivery/AntivirusProtection';
import BackupPage from '@/pages/cybersecurity/delivery/Backup';
import CybersecurityNetworkScreensPage from '@/pages/cybersecurity/delivery/LinearEncryption.tsx';
import CertificationOfInformationSecurityToolsPage from '@/pages/cybersecurity/certification/Certification.tsx';
import CybersecurityDeliveryPage from '@/pages/cybersecurity/delivery/Delivery.tsx';
import CyberCulturePage from '@/pages/cybersecurity/delivery/CyberCulture.tsx';
import SupplyOfServersAndSwitchesPage from '@/pages/cybersecurity/delivery/SupplyOfServersAndSwitches.tsx';

export function CybersecurityRoutes() {
  return (
    <Routes>
      <Route path="/cybersecurity" element={<CybersecurityPage />} />
      <Route path="/cybersecurity/audit" element={<CybersecurityAuditPage />} />
      <Route path="/cybersecurity/design-szi" element={<CybersecurityDesignSziPage />} />
      <Route path="/cybersecurity/create-szi" element={<CybersecurityCreateSziPage />} />
      <Route path="/cybersecurity/attestation-szi" element={<CybersecurityAttestationSziPage />} />
      <Route
        path="/cybersecurity/infrastructure-effectiveness"
        element={<CybersecurityInfrastructureEffectivenessPage />}
      />
      <Route path="/cybersecurity/siem" element={<CybersecuritySiemPage />} />
      <Route path="/cybersecurity/dlp" element={<CybersecurityDlpPage />} />
      <Route path="/cybersecurity/pam" element={<CybersecurityPamPage />} />
      <Route path="/cybersecurity/firewall" element={<FirewallPage />} />
      <Route path="/cybersecurity/antivirus" element={<AntivirusProtectionPage />} />
      <Route path="/cybersecurity/backup" element={<BackupPage />} />
      <Route path="/cybersecurity/network-screens" element={<CybersecurityNetworkScreensPage />} />
      <Route
        path="/cybersecurity/linear-encryption"
        element={<CybersecurityNetworkScreensPage />}
      />
      <Route
        path="/cybersecurity/certification"
        element={<CertificationOfInformationSecurityToolsPage />}
      />
      <Route path="/delivery" element={<Navigate to="/cybersecurity/delivery" replace />} />
      <Route path="/cybersecurity/delivery" element={<CybersecurityDeliveryPage />} />
      <Route path="/cybersecurity/delivery/cyber-culture" element={<CyberCulturePage />} />
      <Route
        path="/cybersecurity/cyber-culture"
        element={<Navigate to="/cybersecurity/delivery/cyber-culture" replace />}
      />
      <Route
        path="/cybersecurity/servers-and-switches"
        element={<SupplyOfServersAndSwitchesPage />}
      />
    </Routes>
  );
}
