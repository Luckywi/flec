'use client'; // Si tu utilises le App Router de Next.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Pour Pages Router
// Pour App Router, utilise: import { usePathname } from 'next/navigation';
import "@/styles/pages/splash.css";

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Masquer le SplashScreen après 2 secondes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    // Configurer l'événement pour détecter la navigation interne
    // Ne pas afficher le splash lors des navigations internes
    const handleRouteChange = () => {
      setShowSplash(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

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
      {children}
    </>
  );
};

export default SplashScreen;