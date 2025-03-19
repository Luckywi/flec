"use client";

import { useState } from 'react';
import Link from 'next/link';
import "@/styles/components/header.css";

const HeaderMobileMenu = () => {
  // État pour gérer l'ouverture/fermeture du menu principal
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // État pour suivre le sous-menu actif (uno, duo, tres ou null si aucun n'est ouvert)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Fonction pour fermer le menu principal
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Fonction pour gérer le clic sur un sous-menu
  const handleSubmenuClick = (id: string) => {
    // Si on clique sur un sous-menu déjà ouvert, on le ferme
    if (activeSubmenu === id) {
      setActiveSubmenu(null);
    } else {
      // Sinon, on ferme le sous-menu actif et on ouvre celui qu'on a cliqué
      setActiveSubmenu(id);
    }
  };

  // Fonction pour gérer le clic sur un lien de sous-menu
  const handleSubmenuLinkClick = () => {
    // Fermer tout le menu quand on clique sur un lien
    closeMenu();
  };

  // Fonction pour basculer l'état du menu principal
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="menu-bar">
      {/* Menu burger sans checkbox native */}
      <div className="header-content">
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="title-container">
          <Link className="title" href="/" onClick={closeMenu}>
            <h1>FRANCK LEBEURRE</h1>
            <p>EXPERT-COMPTABLE</p>
          </Link>
        </div>
        {/* Élément invisible pour équilibrer le header */}
        <div className="menu-toggle-placeholder"></div>
      </div>
      
      {/* Menu déroulant conditionnel basé sur l'état React */}
      <div className="dropdown-content" style={{ display: isMenuOpen ? 'block' : 'none' }}>
        {/* Reste du code inchangé */}
        <div>
          <div 
            className="for-dropdown-sub"
            onClick={() => handleSubmenuClick("uno")}
          >
            <span>Le cabinet<i className={`fas fa-chevron-down ${activeSubmenu === "uno" ? "rotate" : ""}`}></i></span>
          </div>
          <div className="section-dropdown-sub" style={{ 
            maxHeight: activeSubmenu === "uno" ? '500px' : '0',
            display: 'block' // Important: toujours afficher mais avec maxHeight à 0
          }}>
            <Link href="/sections/cabinet/presentation" onClick={handleSubmenuLinkClick}>Présentation</Link>
            <Link href="/sections/cabinet/nos-bureaux" onClick={handleSubmenuLinkClick}>Nos bureaux</Link>
            <Link href="/sections/cabinet/notre-equipe" onClick={handleSubmenuLinkClick}>Notre équipe</Link>
            <Link href="/sections/cabinet/ressources" onClick={handleSubmenuLinkClick}>Ressources</Link>
          </div>
        </div>
        
        <div>
          <div 
            className="for-dropdown-sub"
            onClick={() => handleSubmenuClick("duo")}
          >
            <span>Notre métier<i className={`fas fa-chevron-down ${activeSubmenu === "duo" ? "rotate" : ""}`}></i></span>
          </div>
          <div className="section-dropdown-sub" style={{ 
            maxHeight: activeSubmenu === "duo" ? '500px' : '0',
            display: 'block'
          }}>
            <Link href="/sections/metier/expertise-comptable" onClick={handleSubmenuLinkClick}>Expertise comptable</Link>
            <Link href="/sections/metier/solutions-sur-mesure" onClick={handleSubmenuLinkClick}>Solutions sur mesure</Link>
            <Link href="/sections/metier/professions-liberales" onClick={handleSubmenuLinkClick}>Professions libérales</Link>
            <Link href="/sections/metier/gestion-de-patrimoine" onClick={handleSubmenuLinkClick}>Gestion de patrimoine</Link>
          </div>
        </div>
        
        <div>
          <div 
            className="for-dropdown-sub"
            onClick={() => handleSubmenuClick("tres")}
          >
            <span>Nos solutions<i className={`fas fa-chevron-down ${activeSubmenu === "tres" ? "rotate" : ""}`}></i></span>
          </div>
          <div className="section-dropdown-sub" style={{ 
            maxHeight: activeSubmenu === "tres" ? '500px' : '0',
            display: 'block'
          }}>
            <Link href="/sections/solutions/cloud" onClick={handleSubmenuLinkClick}>Cloud</Link>
            <Link href="/sections/solutions/saisie-des-donnees" onClick={handleSubmenuLinkClick}>Saisie des données</Link>
            <Link href="/sections/solutions/previsionnels" onClick={handleSubmenuLinkClick}>Prévisionnels</Link>
            <Link href="/sections/solutions/modulation" onClick={handleSubmenuLinkClick}>Modulation</Link>
            <Link href="/sections/solutions/optimisation" onClick={handleSubmenuLinkClick}>Optimisation</Link>
            <Link href="/sections/solutions/web-master" onClick={handleSubmenuLinkClick}>Web master</Link>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link 
            style={{ border: '2px solid white', borderRadius: '10px', marginRight: '30px' }}
            href="/sections/autres/rdv"
            onClick={handleSubmenuLinkClick}
          >
            Se faire appeler<i className="fas fa-phone"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobileMenu;