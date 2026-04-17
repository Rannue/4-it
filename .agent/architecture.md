# Architecture — 4-it

React 19 SPA. Routing is modularized into route groups.

## Entry & home

- `src/app/main.tsx` — app root: React + BrowserRouter + imports route modules
- `src/routes/` — modular route definitions:
  - `general.tsx` — GeneralRoutes component (non-cybersecurity services)
  - `cybersecurity.tsx` — CybersecurityRoutes component (all security pages)
  - `index.ts` — barrel export
- `src/app/App.tsx` — home page component for `/` and `/home`

## Routes

### General service pages (via GeneralRoutes)

- `/` and `/home` → `src/app/App.tsx` (home page)
- `/technical-support` → `src/pages/bitrix24/TechnicalSupport.tsx`
- `/bitrix24/implementation` → `src/pages/bitrix24/Implementation.tsx`
- `/edms-signature` → `src/pages/EDMSWithSignature.tsx`
- `/websites/online-store` → `src/pages/websites/OnlineStore.tsx`
- `/virtualization` → `src/pages/cybersecurity/delivery/Virtualization.tsx`
- `/contacts` → `src/pages/Contacts.tsx` (карта и карточка офиса; шапка блока — `PageHeadingBar`)
- `/certificates` → `src/pages/CertificatesDocuments.tsx` (сертификаты, PDF-политики, реквизиты; якоря `#certificates`, `#policies`, `#requisites`)

### Cybersecurity — core (via CybersecurityRoutes)

- `/cybersecurity` → `src/pages/cybersecurity/index.tsx`
- `/cybersecurity/audit` → `src/pages/cybersecurity/Audit.tsx`
- `/cybersecurity/design-szi` → `src/pages/cybersecurity/certification/DesignSzi.tsx`
- `/cybersecurity/create-szi` → `src/pages/cybersecurity/certification/CreateSzi.tsx`
- `/cybersecurity/attestation-szi` and `/cybersecurity/certification/attestation-szi` → `src/pages/cybersecurity/certification/CertificationSecondary.tsx`
- `/cybersecurity/infrastructure-effectiveness` and `/cybersecurity/certification/security-assessment` → `src/pages/cybersecurity/certification/SecurityAssessment.tsx`
- `/cybersecurity/certification/szi-documents-review` → `src/pages/cybersecurity/certification/SZIDocumentsReview.tsx`
- `/cybersecurity/certification` → `src/pages/cybersecurity/certification/index.tsx`
- `/cybersecurity/delivery` → `src/pages/cybersecurity/delivery/Delivery.tsx`

### Cybersecurity — delivery products (via CybersecurityRoutes)

- `/cybersecurity/siem` → `src/pages/cybersecurity/delivery/SIEM.tsx`
- `/cybersecurity/dlp` → `src/pages/cybersecurity/delivery/DLP.tsx`
- `/cybersecurity/pam` → `src/pages/cybersecurity/delivery/PAM.tsx`
- `/cybersecurity/firewall` → `src/pages/cybersecurity/delivery/Firewall.tsx`
- `/cybersecurity/antivirus` → `src/pages/cybersecurity/delivery/AntivirusProtection.tsx`
- `/cybersecurity/backup` → `src/pages/cybersecurity/delivery/Backup.tsx`
- `/cybersecurity/network-screens` → redirect to `/cybersecurity/firewall`
- `/cybersecurity/linear-encryption` → same file as above (alias route)
- `/cybersecurity/delivery/cyber-culture` → `src/pages/cybersecurity/delivery/CyberCulture.tsx`
- `/cybersecurity/servers-and-switches` → `src/pages/cybersecurity/delivery/SupplyOfServersAndSwitches.tsx`

### Redirects

- `/delivery` → `/cybersecurity/delivery`
- `/cybersecurity/cyber-culture` → `/cybersecurity/delivery/cyber-culture`

## Source folders

- `src/app/` — entry (`main.tsx`), global styles, and `App.tsx` (home for `/` and `/home`)
- `src/routes/` — modular route definitions (GeneralRoutes, CybersecurityRoutes)
- `src/pages/` — route-level page components organized by domain
- `src/components/layout/` — page-level layouts (PageLayout wrapper with Header/Footer)
- `src/components/sections/` — full-width semantic sections (HeroBreadcrumbs, ServicesSection, TestimonialsSection, etc.)
- `src/components/grids/` — grid-based layout wrappers (CardsGridSection, InfoGridSection, ClientsSection)
- `src/components/domain/cybersecurity/` — cybersecurity domain-specific sections (DocumentDetailsSection, ManufacturersSection)
- `src/shared/ui/` — primitive UI components (Button, Input, PhoneInput)
- `src/shared/icons/` — SVG icon components
- `src/widgets/` — self-contained UI units with their own folder (Header, Footer, ScrollToTop)
- `src/data/` — JSX-heavy data files (stackedFeatureCards, cyberCultureProductTiers)
- `src/constants/` — typed static constants (supportPlans)
- `src/assets/` — images, icons, certificates

## Layout pattern

Use `PageLayout` from `src/components/layout/PageLayout.tsx` to wrap page content:

```tsx
import PageLayout from '@/components/layout/PageLayout';

export default function MyPage() {
  return <PageLayout>{/* page content */}</PageLayout>;
}
```
