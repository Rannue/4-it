# Architecture — 4-it

React 19 SPA. All routing is defined in one place: `src/app/main.tsx`.

## Entry & home

- `src/app/main.tsx` — app root: React + BrowserRouter + all route definitions
- `src/app/App.tsx` — home page component, rendered at `/` and `/home`
- `src/App.tsx` — **empty orphan, do not import from it**

## Routes

### General service pages

- `/` and `/home` → `src/app/App.tsx`
- `/technical-support` → `src/pages/TechnicalSupport.tsx`
- `/bitrix24/implementation` → `src/pages/bitrix24/Implementation.tsx`
- `/edms-signature` → `src/pages/EDMSWithSignature.tsx`
- `/websites/online-store` → `src/pages/websites/OnlineStore.tsx`
- `/virtualization` → `src/pages/cybersecurity/delivery/Virtualization.tsx`

### Cybersecurity — core

- `/cybersecurity` → `src/pages/cybersecurity.tsx`
- `/cybersecurity/audit` → `src/pages/cybersecurity/audit/Audit.tsx`
- `/cybersecurity/design-szi` → `src/pages/cybersecurity-design-szi.tsx`
- `/cybersecurity/create-szi` → `src/pages/cybersecurity-create-szi.tsx`
- `/cybersecurity/attestation-szi` → `src/pages/cybersecurity-attestation-szi.tsx`
- `/cybersecurity/infrastructure-effectiveness` → `src/pages/cybersecurity-infrastructure-effectiveness.tsx`
- `/cybersecurity/certification` → `src/pages/cybersecurity/Certification.tsx`
- `/cybersecurity/delivery` → `src/pages/cybersecurity/Delivery.tsx`

### Cybersecurity — delivery products

- `/cybersecurity/siem` → `src/pages/cybersecurity/delivery/01_SIEM.tsx`
- `/cybersecurity/dlp` → `src/pages/cybersecurity/delivery/DLP.tsx`
- `/cybersecurity/pam` → `src/pages/cybersecurity/delivery/PAM.tsx`
- `/cybersecurity/firewall` → `src/pages/cybersecurity/delivery/Firewall.tsx`
- `/cybersecurity/antivirus` → `src/pages/cybersecurity/delivery/AntivirusProtection.tsx`
- `/cybersecurity/backup` → `src/pages/cybersecurity/delivery/Backup.tsx`
- `/cybersecurity/network-screens` → `src/pages/cybersecurity/delivery/LinearEncryption.tsx`
- `/cybersecurity/linear-encryption` → same file as above (alias route)
- `/cybersecurity/delivery/cyber-culture` → `src/pages/cybersecurity/delivery/CyberCulture.tsx`
- `/cybersecurity/servers-and-switches` → `src/pages/cybersecurity/delivery/SupplyOfServersAndSwitches.tsx`

### Redirects

- `/delivery` → `/cybersecurity/delivery`
- `/cybersecurity/cyber-culture` → `/cybersecurity/delivery/cyber-culture`

## Source folders

- `src/app/` — entry point, global styles, home page
- `src/pages/` — route-level page components
- `src/components/layout/` — page-level layouts (PageLayout wrapper with Header/Footer)
- `src/components/sections/` — full-width semantic sections (HeroBreadcrumbs, ServicesSection, TestimonialsSection, etc.)
- `src/components/grids/` — grid-based layout wrappers (CardsGridSection, InfoGridSection, KeyFeaturesGridSection, ClientsSection)
- `src/components/domain/cybersecurity/` — cybersecurity domain-specific sections (DocumentDetailsSection, ManufacturersSection)
- `src/shared/ui/` — primitive UI components (Button, Input, PhoneInput)
- `src/shared/icons/` — SVG icon components
- `src/widgets/` — self-contained UI units with their own folder (Header, Footer, ScrollToTop)
- `src/data/` — JSX-heavy data files (stackedFeatureCards, cyberCultureProductTiers)
- `src/constants/` — typed static constants (supportPlans)
- `src/assets/` — images, icons, certificates

## Quirks & gotchas

- **`src/App.tsx` is empty** — the real home component is `src/app/App.tsx`. The root-level file is an orphan from an earlier structure. Do not import from it.

- **Unrouted page files** — these exist but are not wired into any route:
  - `src/pages/cybersecurity/Audit.tsx` — superseded by `src/pages/cybersecurity/audit/Audit.tsx`
  - `src/pages/cybersecurity/certification/CreationOfAnInformationSecuritySystem.tsx`
