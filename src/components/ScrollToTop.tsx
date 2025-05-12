import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Use layout effect for immediate scrolling before painting
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Backup effect with multiple approaches for cross-browser compatibility
  useEffect(() => {
    // Immediate scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
    window.scrollTo(0, 0);
    
    // Delayed scroll to handle any dynamic content loading
    const timeoutId = setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari
      window.scrollTo(0, 0);
    }, 100);
    
    // Extra delayed scroll for pages with heavy content/images
    const secondTimeoutId = setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }, 300);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(secondTimeoutId);
    };
  }, [pathname]);
  
  return null;
} 