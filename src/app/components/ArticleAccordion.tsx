"use client";

import { useEffect } from 'react';

export default function ArticleTocAccordion() {
  useEffect(() => {
    // Fonction pour gérer le clic sur le titre du sommaire
    const handleTocClick = () => {
      const tocElement = document.querySelector('.article-toc');
      if (tocElement) {
        tocElement.classList.toggle('collapsed');
      }
    };

    // Fonction pour initialiser l'accordéon du sommaire
    const initTocAccordion = () => {
      const tocElement = document.querySelector('.article-toc');
      const tocHeading = tocElement?.querySelector('h2');
      
      if (!tocElement || !tocHeading) return;
      
      // Sur mobile, on ferme le sommaire par défaut
      if (window.innerWidth <= 768) {
        tocElement.classList.add('collapsed');
      }
      
      // Ajouter l'événement de clic pour basculer l'état
      tocHeading.addEventListener('click', handleTocClick);
    };
    
    // On utilise setTimeout pour s'assurer que le DOM est complètement chargé
    const timer = setTimeout(() => {
      initTocAccordion();
    }, 100);
    
    // Nettoyer correctement l'événement lors du démontage du composant
    return () => {
      clearTimeout(timer);
      const tocHeading = document.querySelector('.article-toc h2');
      if (tocHeading) {
        tocHeading.removeEventListener('click', handleTocClick);
      }
    };
  }, []);
  
  return null;
}