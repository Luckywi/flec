'use client';

import { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import "@/styles/pages/splash.css";

interface SplashScreenProps {
  children: ReactNode;
}

const SplashScreen = ({ children }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(false);
  const pathname = usePathname();

  // Dans SplashScreen.tsx
useEffect(() => {
    if (showSplash) {
      // Empêcher le défilement quand le splash est actif
      document.body.classList.add('splash-active');
    } else {
      document.body.classList.remove('splash-active');
    }
    
    return () => {
      document.body.classList.remove('splash-active');
    };
  }, [showSplash]);
  
  useEffect(() => {
    // Affiche le splash screen uniquement sur la page d'accueil
    if (pathname === '/') {
      setShowSplash(true);
      
      // Masquer le SplashScreen après 2 secondes
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      
      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowSplash(false);
    }
  }, [pathname]);

  return (
    <>
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-logo">
            <h1>FRANCK LEBEURRE</h1>
            <p>EXPERT-COMPTABLE</p>
          </div>
        </div>
      )}
      <div className={showSplash ? '' : 'content-fade-in'}>
        {children}
      </div>
    </>
  );
};

export default SplashScreen;