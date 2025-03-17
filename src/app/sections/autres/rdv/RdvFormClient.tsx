"use client";

import { useEffect, useRef, useState } from "react";

export default function RdvFormClient() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Fonction pour mettre à jour la hauteur de l'iframe
  const updateIframeHeight = (height: number) => {
    if (!iframeRef.current) return;
    
    if (height > 100) { // Vérification de sécurité
      iframeRef.current.style.height = `${height}px`;
    } else {
      iframeRef.current.style.height = '300px'; // Hauteur minimale par défaut
    }
  };

  // Fonction pour demander la hauteur à l'iframe
  const requestHeight = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    
    iframeRef.current.contentWindow.postMessage({ 
      type: 'requestHeight',
      currentStep: currentStep
    }, 'https://booking-frame.vercel.app');
  };

  // Détection du changement d'étape dans l'iframe pour mettre à jour le carousel
  const updateActiveStep = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    // Gérer les messages de l'iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://booking-frame2.vercel.app') return;

      if (event.data?.type === 'pageChange') {
        updateActiveStep(event.data.step);
        // On force une réinitialisation de la hauteur
        if (iframeRef.current) {
          iframeRef.current.style.height = '300px';
        }
        // On demande une nouvelle mesure après un court délai
        setTimeout(() => {
          requestHeight();
        }, 100);
      }
      
      if (event.data?.type === 'resize') {
        const newHeight = event.data.height || 300;
        updateIframeHeight(newHeight);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Nettoyage à la désinstallation du composant
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [currentStep]);

  // Effet pour gérer le chargement initial de l'iframe
  useEffect(() => {
    if (!iframeRef.current) return;
    
    const handleIframeLoad = () => {
      requestHeight();
    };

    iframeRef.current.addEventListener('load', handleIframeLoad);

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  // Effet pour gérer les changements de navigation
  useEffect(() => {
    const handlePopState = () => {
      // Réinitialiser la hauteur lors du retour
      if (iframeRef.current) {
        iframeRef.current.style.height = '300px';
      }
      setTimeout(requestHeight, 100);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
      {/* Étapes modernes et responsives */}
      <section className="booking-steps">
        <div className="step-container">
          <div className={`step-item ${currentStep === 1 ? 'active' : ''}`}>
            <div className="step-circle">
              <i className="fas fa-calendar-check"></i>
              <div className="step-number">1</div>
            </div>
            <div className="step-content">
              <h3>Choisir un service</h3>
              <p>Sélectionnez le service qui correspond à vos besoins d&apos;accompagnement comptable.</p>
            </div>
          </div>
          
          <div className="step-connector"></div>
          
          <div className={`step-item ${currentStep === 2 ? 'active' : ''}`}>
            <div className="step-circle">
              <i className="fas fa-clock"></i>
              <div className="step-number">2</div>
            </div>
            <div className="step-content">
              <h3>Choisir date et heure</h3>
              <p>Sélectionnez un créneau qui vous convient dans notre calendrier de disponibilités.</p>
            </div>
          </div>

          <div className="step-connector"></div>
          
          <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
            <div className="step-circle">
              <i className="fas fa-check-circle"></i>
              <div className="step-number">3</div>
            </div>
            <div className="step-content">
              <h3>Confirmer le rendez-vous</h3>
              <p>Recevez une confirmation par email et SMS pour vous rappeler votre rendez-vous.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section iframe de réservation */}
      <section>
        <div className="iframe-wrapper">
          <iframe 
            id="booking-frame"
            ref={iframeRef}
            src="https://booking-frame2.vercel.app/?id=tYKkHV3IDTWqBOViN4FS1vacN0I3"
            scrolling="no"
          />
        </div>
      </section>

      <style jsx>{`
        .booking-steps {
          padding: 20px 0;
          margin: 20px auto;
          max-width: 1000px;
        }
        
        .step-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 200px;
          position: relative;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 8px;
          opacity: 0.7;
        }
        
        .step-item.active {
          transform: scale(1.05);
          opacity: 1;
        }
        
        .step-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #000;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          position: relative;
          border: 2px solid white;
          transition: all 0.3s ease;
          font-size: 24px;
        }
        
        .step-item.active .step-circle {
          border: 3px solid white;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
        .step-number {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: white;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
        }
        
        .step-content {
          text-align: center;
          color: white;
        }
        
        .step-content h3 {
          margin-bottom: 8px;
          font-size: 18px;
        }
        
        .step-content p {
          font-size: 14px;
          line-height: 1.4;
        }
        
        .step-connector {
          flex-grow: 0.1;
          height: 3px;
          background: linear-gradient(90deg, white 0%, white 100%);
          margin-top: 35px;
          position: relative;
          min-width: 30px;
        }
        
        .iframe-wrapper {
          width: 100%;
          margin: 0 auto;
          padding-top: 30px;
        }
        
        #booking-frame {
          width: 100%;
          height: 300px;
          border: none;
          transition: height 0.2s ease-out;
        }
        
        @media (max-width: 768px) {
          .booking-steps {
            padding: 10px 0;
            margin: 10px auto;
          }
          
          .step-container {
            flex-direction: row;
            justify-content: space-between;
            padding: 0 10px;
          }
          
          .step-item {
            min-width: auto;
            width: 28%;
            padding: 5px;
            margin: 0;
          }
          
          .step-circle {
            width: 40px;
            height: 40px;
            font-size: 16px;
            margin-bottom: 8px;
          }
          
          .step-number {
            width: 18px;
            height: 18px;
            font-size: 10px;
            top: -3px;
            right: -3px;
          }
          
          .step-content h3 {
            font-size: 12px;
            margin-bottom: 2px;
          }
          
          .step-content p {
            display: none; /* Masquer les descriptions sur mobile */
          }
          
          .step-connector {
            min-width: 20px;
            margin-top: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .step-container {
            padding: 0 5px;
          }
          
          .step-circle {
            width: 36px;
            height: 36px;
            font-size: 14px;
          }
          
          .step-number {
            width: 15px;
            height: 15px;
            font-size: 7.5px;
            top: -2px;
            right: -2px;
          }
          
          .step-content h3 {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}