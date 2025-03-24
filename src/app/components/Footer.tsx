import Link from 'next/link';
import "@/styles/main.css";

const Footer = () => {
  return (
    <>
      {/* Section Contact Client */}
      <section className="client-contact">
        <div className="left-column">
          <h1>Rencontre avec les clients</h1>
          <p>Notre siège social situé à Macon rayonne au travers de ses différents bureaux en France Métropolitaine et nous permettent de recevoir au besoin l&apos;sensemble de nos clients.<br /> <br /> Notre savoir faire et nos méthodes de travail entièrement digitalisées
            nous permettent de réaliser nos missions à distance (jusque dans les DOM!) tout en conservant une relation étroite avec nos clients.</p>
        </div>
        <div className="right-column">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h2>Siège social</h2>
              <p>ZAC Grand Sud, 154 Rue André Derain, 71000 Mâcon</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h2>Contact</h2>
              <p>06 98 78 08 44 ou contact@fl-ec.fr</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-calendar"></i>
            <div>
              <h2>Horaires</h2>
              <p>Du Lundi au Vendredi de 8H00 à 18H30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="map-container">
        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d354552.36164867284!2d4.4581929!3d46.0323393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f36ffa756d93ad%3A0x66b94623924c5b4d!2sEDM%20Centre%20d&#39;Affaires!5e0!3m2!1sen!2sfr!4v1718271148576!5m2!1sen!2sfr" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Section Contact (masquée par défaut d'après le CSS) */}
      <section className="contact-section">
        <div className="contact-card email">
          <i className="fas fa-envelope"></i>
          <h2>Email</h2>
          <p>Réponse sous 48H</p>
          <a href="#" className="contact-button">Nous envoyez un email !</a>
        </div>
        <div className="contact-card phone">
          <i className="fas fa-phone-alt"></i>
          <h2>Téléphone</h2>
          <p>Lundi - Vendredi 08:00 - 18:30</p>
          <a href="#" className="contact-button">Nous appelez !</a>
        </div>
      </section>

      {/* Footer Principal */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contacts</h3>
              <ul>
                <li><a href="#">Siège social: 154 Rue André Derain, 71000 Mâcon</a></li>
                <li><a href="tel:0698780844">Téléphone: 06 98 78 08 44</a></li>
                <li><a href="mailto:contact@fl-ec.fr">Email: contact@fl-ec.fr</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Liens rapides</h3>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/expertise-comptable">Nos services</Link></li>
                <li><Link href="/cabinet/presentation">À propos</Link></li>
                <li><Link href="/rendez-vous">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Informations légales</h3>
              <ul>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
                <li><Link href="/conditions-utilisation">Conditions générales d&apos;utilisation</Link></li>
                <li><Link href="/ordre-experts-comptables">Inscription à l&apos;Ordre des Experts-Comptables</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Franck Lebeurre Expertise Comptable</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;