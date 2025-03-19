import Link from 'next/link';
import "@/styles/main.css";
import HeaderMobileMenu from './HeaderMobileMenu';

const Header = () => {
  return (
    <>
      {/* Header pour desktop */}
      <header>
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item logo" style={{ fontWeight: 'bolder' }}>
              <Link href="/">
                <h1>FRANCK LEBEURRE</h1>
                <p>EXPERT-COMPTABLE</p>
              </Link>
            </li>
            <li className="menu-item">
              <a href="#">Le cabinet<i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><Link href="/sections/cabinet/presentation">Présentation</Link></li>
                <li><Link href="/sections/cabinet/nos-bureaux">Nos bureaux</Link></li>
                <li><Link href="/sections/cabinet/notre-equipe">Notre équipe</Link></li>
                <li><Link href="/sections/cabinet/ressources">Ressources</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#">Notre métier<i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><Link href="/sections/metier/expertise-comptable">Expertise comptable</Link></li>
                <li><Link href="/sections/metier/solutions-sur-mesure">Solutions sur mesure</Link></li>
                <li><Link href="/sections/metier/professions-liberales">Professions libérales</Link></li>
                <li><Link href="/sections/metier/gestion-de-patrimoine">Gestion de patrimoine</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#">Nos solutions<i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><Link href="/sections/solutions/cloud">Cloud</Link></li>
                <li><Link href="/sections/solutions/saisie-des-donnees">Saisie des données</Link></li>
                <li><Link href="/sections/solutions/previsionnels">Prévisionnels</Link></li>
                <li><Link href="/sections/solutions/modulation">Modulation</Link></li>
                <li><Link href="/sections/solutions/optimisation">Optimisation</Link></li>
                <li><Link href="/sections/solutions/web-master">Web master</Link></li>
              </ul>
            </li>
            <li className="menu-item visible">
              <Link href="/sections/autres/rdv">Se faire appeler<i className="fas fa-phone"></i></Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header pour mobile - Utilise le composant client */}
      <HeaderMobileMenu />
    </>
  );
};

export default Header;