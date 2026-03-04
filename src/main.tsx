import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CybersecurityPage from "./pages/cybersecurity";
import CybersecurityAuditPage from "./pages/cybersecurity-audit.tsx";
import CybersecurityDesignSziPage from "./pages/cybersecurity-design-szi.tsx";
import CybersecurityCreateSziPage from "./pages/cybersecurity-create-szi.tsx";
import CybersecurityAttestationSziPage from "./pages/cybersecurity-attestation-szi.tsx";
import CybersecurityInfrastructureEffectivenessPage from "./pages/cybersecurity-infrastructure-effectiveness.tsx";
import CybersecuritySiemPage from "./pages/cybersecurity-siem.tsx";
import CybersecurityDlpPage from "./pages/cybersecurity-dlp.tsx";
import CybersecurityFirewallPage from "./pages/cybersecurity-firewall.tsx";
import CybersecurityNetworkScreensPage from "./pages/cybersecurity-network-screens.tsx";

const path = window.location.pathname;

let content = <App />;

if (path === "/cybersecurity") {
  content = <CybersecurityPage />;
} else if (path === "/cybersecurity/audit") {
  content = <CybersecurityAuditPage />;
} else if (path === "/cybersecurity/design-szi") {
  content = <CybersecurityDesignSziPage />;
} else if (path === "/cybersecurity/create-szi") {
  content = <CybersecurityCreateSziPage />;
} else if (path === "/cybersecurity/attestation-szi") {
  content = <CybersecurityAttestationSziPage />;
} else if (path === "/cybersecurity/infrastructure-effectiveness") {
  content = <CybersecurityInfrastructureEffectivenessPage />;
} else if (path === "/cybersecurity/siem") {
  content = <CybersecuritySiemPage />;
} else if (path === "/cybersecurity/dlp") {
  content = <CybersecurityDlpPage />;
} else if (path === "/cybersecurity/firewall") {
  content = <CybersecurityFirewallPage />;
} else if (path === "/cybersecurity/network-screens") {
  content = <CybersecurityNetworkScreensPage />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{content}</StrictMode>,
);
