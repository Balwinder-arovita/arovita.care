import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useIntersectionObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to let React render the new page's DOM before querying
    const raf = requestAnimationFrame(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
            }
          });
        },
        { threshold: 0.12 }
      );

      const elements = document.querySelectorAll('.fu:not(.vis),.sl-left:not(.vis),.sl-right:not(.vis)');
      elements.forEach((el) => obs.observe(el));

      // Also observe already-visible ones that may have been reset
      const allElements = document.querySelectorAll('.fu,.sl-left,.sl-right');
      allElements.forEach((el) => {
        // Reset visibility for elements on new pages
        if (!el.classList.contains('vis')) {
          obs.observe(el);
        }
      });

      return () => {
        obs.disconnect();
      };
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [pathname]);
}
