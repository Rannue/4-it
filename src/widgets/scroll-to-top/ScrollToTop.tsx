// react
import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: ReactNode;
};

function ScrollToTop({ children }: ScrollToTopProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return children;
}

export default ScrollToTop;
