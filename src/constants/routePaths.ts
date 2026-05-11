/**
 * Все pathname’ы приложения в одном месте: маршруты, `<Link>`, сравнение с `location.pathname`.
 * Якоря главной (`/#…`) — в `anchors`.
 */
export const routePaths = {
  home: '/',
  homeLegacy: '/home',
  contacts: '/contacts',
  clients: '/clients',
  certificates: '/certificates',
  technicalSupport: '/technical-support',
  bitrix24Implementation: '/bitrix24/implementation',
  edmsSignature: '/edms-signature',
  websitesOnlineStore: '/websites/online-store',
  virtualization: '/virtualization',
  anchors: {
    cases: '/#cases',
    home: '/#home',
    servicesDevB2b: '/#services-dev-b2b',
  },
  cyber: {
    root: '/cybersecurity',
    audit: '/cybersecurity/audit',
    designSzi: '/cybersecurity/design-szi',
    createSzi: '/cybersecurity/create-szi',
    /** Старый URL; совпадает с отдельным маршрутом в router */
    attestationSziLegacy: '/cybersecurity/attestation-szi',
    attestationSzi: '/cybersecurity/certification/attestation-szi',
    infrastructureEffectiveness: '/cybersecurity/infrastructure-effectiveness',
    securityAssessment: '/cybersecurity/certification/security-assessment',
    sziDocumentsReview: '/cybersecurity/certification/szi-documents-review',
    siem: '/cybersecurity/siem',
    dlp: '/cybersecurity/dlp',
    pam: '/cybersecurity/pam',
    firewall: '/cybersecurity/firewall',
    antivirus: '/cybersecurity/antivirus',
    backup: '/cybersecurity/backup',
    networkScreensLegacy: '/cybersecurity/network-screens',
    linearEncryption: '/cybersecurity/linear-encryption',
    certification: '/cybersecurity/certification',
    deliveryLegacy: '/delivery',
    delivery: '/cybersecurity/delivery',
    deliveryCyberCulture: '/cybersecurity/delivery/cyber-culture',
    cyberCultureLegacy: '/cybersecurity/cyber-culture',
    serversAndSwitches: '/cybersecurity/servers-and-switches',
  },
} as const;
