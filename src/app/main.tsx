// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import HashLinkScroll from '@/widgets/hash-link-scroll/HashLinkScroll';
import ScrollToTop from '@/widgets/scroll-to-top/ScrollToTop';
import { GeneralRoutes, CybersecurityRoutes } from '@/routes';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop>
        <HashLinkScroll />
        <GeneralRoutes />
        <CybersecurityRoutes />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
