import Link from "next/link";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Cabinet d'Expertise Comptable Franck Lebeurre | Expert-Comptable Mâcon",
  description: "Cabinet d'expertise comptable spécialisé dans l'accompagnement des professions libérales et entrepreneurs. Solutions personnalisées, conseils fiscaux et suivi digital à partir de 62€/mois. Basé à Mâcon avec couverture nationale.",
  keywords: "expert-comptable, professions libérales, expertise comptable Mâcon, fiscalité, optimisation fiscale, comptabilité digitale",
};


export default function Home() {
  return (
    <main>
      {/* Section Héro avec vidéo */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">La comptabilité est la mesure necessaire pour l&apos;épanouissement de votre activité...</h1>
          <div className="hero-description mobile-delete">
            <p>
              Car elle permet une visibilité de votre activité passée, en cours mais surtout à venir.
              <br />
              Pour forger une stratégie garantissant la pérennité de son activité, l&apos;entrepreneur se doit d&apos;être
              informé en permanence.
            </p>
            <p>
              Notre cabinet met à votre disposition son savoir faire, ses outils mais aussi ses conseils pour le
              développement harmonieux de votre patrimoine tant professionnel que personnel.
            </p>
          </div>
          <Link href="/sections/autres/rdv" className="button-rdv">
            Obtenir une date de rendez-vous sous 24h<i className="fas fa-phone"></i>
          </Link>
        </div>
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/videos/248704680-4k-time-lapse-blooming-dahlia-_H264HD1080.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </section>

      {/* Section accordéon (uniquement visible sur mobile) */}
      <section className="deroule desktop-delete">
        <div className="accordion">
          <input type="checkbox" id="item1" />
          <label htmlFor="item1" className="accordion-label">
            Expertise comptable
            <span className="plus"><i className="fas fa-plus"></i></span>
            <span className="minus"><i className="fas fa-minus"></i></span>
          </label>
          <div className="accordion-content">
            <p>
              Forts de nos principes déontologiques, notre mission consiste à vous aider pour assurer la pérennité de votre
              activité.<br />
              <Link href="/sections/metier/expertise-comptable" className="learn-more">En savoir plus <i
                className="fas fa-chevron-right"></i></Link><br />
            </p>
          </div>
        </div>
        <div className="accordion">
          <input type="checkbox" id="item2" />
          <label htmlFor="item2" className="accordion-label">
            Accompagnement des professions libérales
            <span className="plus"><i className="fas fa-plus"></i></span>
            <span className="minus"><i className="fas fa-minus"></i></span>
          </label>
          <div className="accordion-content">
            <p>
              Nous comprenons les enjeux des professions libérales et offrons des services spécialisés pour répondre à leurs
              besoins spécifiques.<br /> <Link href="/sections/metier/expertise-comptable" className="learn-more">En
                savoir plus <i className="fas fa-chevron-right"></i></Link><br />
            </p>
          </div>
        </div>
        <div className="accordion">
          <input type="checkbox" id="item3" />
          <label htmlFor="item3" className="accordion-label">
            Solutions sur mesure
            <span className="plus"><i className="fas fa-plus"></i></span>
            <span className="minus"><i className="fas fa-minus"></i></span>
          </label>
          <div className="accordion-content">
            <p>
              Nous vous aidons à vous orienter dans un environnement législatif complexe avec des solutions sur mesure
              adaptées à votre entreprise ou à votre situation personnelle.<br />
              <Link href="/sections/metier/expertise-comptable" className="learn-more">En savoir plus <i
                className="fas fa-chevron-right"></i></Link><br />
            </p>
          </div>
        </div>
        <div className="accordion">
          <input type="checkbox" id="item4" />
          <label htmlFor="item4" className="accordion-label">
            Gestion de patrimoine
            <span className="plus"><i className="fas fa-plus"></i></span>
            <span className="minus"><i className="fas fa-minus"></i></span>
          </label>
          <div className="accordion-content">
            <p>
              Nous vous accompagnons dans l&apos;optimisation et la valorisation de votre patrimoine pour assurer votre sécurité
              financière à long terme.<br /><Link href="/sections/metier/expertise-comptable"
                className="learn-more">En savoir plus <i className="fas fa-chevron-right"></i></Link><br />
            </p>
          </div>
        </div>
      </section>

      {/* Section Services (visible sur desktop) */}
      <section className="services-2">
        <div className="service-2">
          <h2>Expertise comptable</h2>
          <p>Forts de nos principes déontologiques, notre mission consiste à vous aider pour assurer la pérennité de votre
            activité.</p>
          <Link href="/sections/metier/expertise-comptable" className="learn-more mobile-delete">En savoir plus <i
            className="fas fa-chevron-right"></i></Link>
        </div>
        <div className="service-2">
          <h2>Accompagnement des professions libérales</h2>
          <p>Nous comprenons les enjeux des professions libérales et offrons des services spécialisés pour répondre à leurs
            besoins spécifiques.</p>
          <Link href="/sections/metier/professions-liberales" className="learn-more mobile-delete">En savoir plus
            <i className="fas fa-chevron-right"></i></Link>
        </div>
        <div className="service-2">
          <h2>Solutions sur mesure</h2>
          <p>Nous vous aidons à vous orienter dans un environnement législatif complexe avec des solutions sur mesure
            adaptées à votre entreprise ou à votre situation personnelle.</p>
          <Link href="/sections/metier/solutions-sur-mesure" className="learn-more mobile-delete">En savoir plus
            <i className="fas fa-chevron-right"></i></Link>
        </div>
        <div className="service-2">
          <h2>Gestion de patrimoine</h2>
          <p>Nous vous accompagnons dans l&apos;optimisation et la valorisation de votre patrimoine pour assurer votre sécurité
            financière à long terme.</p>
          <Link href="/sections/metier/gestion-de-patrimoine" className="learn-more mobile-delete">En savoir plus
            <i className="fas fa-chevron-right"></i></Link>
        </div>
      </section>

      {/* Section Statistiques (carousel) */}
      <section>
        <div className="stats-carousel-container">
          <div className="stats-carousel-track">
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-handshake"></i> + 352 </h2>
                </div>
                <p>Clients qui nous font confiance !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-tag"></i> 81 € </h2>
                </div>
                <p>Le forfait moyen mensuel pour le suivi administratif d&apos;une activité libérale !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-chart-line"></i> 15 % </h2>
                </div>
                <p>L&apos;augmentation moyenne de votre rentabilité après optimisation de votre régime fiscal !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-user-friends"></i> 7 </h2>
                </div>
                <p>Le nombre de collaborateurs prêts à vous accompagner !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-handshake"></i> + 352 </h2>
                </div>
                <p>Clients qui nous font confiance !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-tag"></i> 81 € </h2>
                </div>
                <p>Le forfait moyen mensuel pour le suivi administratif d&apos;une activité libérale !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-chart-line"></i> 15 % </h2>
                </div>
                <p>L&apos;augmentation moyenne de votre rentabilité après optimisation de votre régime fiscal !</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="titre">
                  <h2><i className="fas fa-user-friends"></i> 7 </h2>
                </div>
                <p>Le nombre de collaborateurs prêts à vous accompagner !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Franck Lebeurre */}
      <section className="franck-lebeurre">
        <div className="fl-content">
          <img className="desktop-delete" src="/images/franck.webp" alt="Franck Lebeurre" />
          <h1>Franck Lebeurre</h1>
          <p>Fort d&apos;une expérience professionnelle de 25 ans passés aux côtés d&apos;entreprises de différents horizons, Franck
            LEBEURRE met à profits son savoir faire aux services des entrepreneurs et professions libérales pour les
            accompagner dans le développement de leur activité.</p>
          <p>Entouré d&apos;une équipe de 7 collaborateurs, Franck LEBEURRE vous propose entre autres des solutions sur mesure
            pour pérenniser votre patrimoine tant professionnel que personnel. Que vous soyez particulier,
            micro-entrepreneur ou mandataire de société, nous saurons vous guider pour une structuration optimale de votre
            activité. </p>
        </div>
        <div className="image">
          <img src="/images/franck.webp" alt="Franck Lebeurre" />
        </div>
      </section>
    </main>
  );
}