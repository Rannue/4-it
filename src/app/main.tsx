// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components
import ScrollToTop from '@/widgets/scroll-to-top/ScrollToTop';
import { GeneralRoutes, CybersecurityRoutes } from '@/routes';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <GeneralRoutes />
        <CybersecurityRoutes />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
