import { Metadata } from "next";
import Link from "next/link";
import CabinetNav from "@/app/components/CabinetNav";

export const metadata: Metadata = {
    title: "Cabinet d'Expertise Comptable Spécialiste Santé | Franck Lebeurre",
    description: "Cabinet d'expertise comptable spécialisé dans l'accompagnement des professionnels de santé. Une approche personnalisée et digitale pour les petites structures. Solutions adaptées aux professions libérales et médicales.",
    keywords: "expertise comptable santé, comptabilité professionnels santé, expert-comptable médical, fiscalité médicale, cabinet comptable digital",
  };

export default function Presentation() {
  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <CabinetNav
          activeSection="presentation"
          backgroundImage="/images/fleur12.webp"
          title="Présentation"
        />
      </section>

      {/* Section description */}
      <section>
        <div className="section-container">
          <h1>Un cabinet à votre dimension</h1>
          <p>
            Notre cabinet de taille humaine privilégie une relation conviviale et personnalisée avec ses clients qui sont
            notamment des petites structures aux profils variés. Ceci étant, nous nous distinguons grâce à notre
            spécialisation dans l&apos;accompagnement des professionnels du <u>secteur de la santé</u>.
          </p>
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Section Services */}
      <section className="services-2">
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Expertise comptable</h2>
          <p>
            Forts de nos principes déontologiques, notre mission consiste à vous aider pour assurer la pérennité de votre
            activité.
          </p>
          <Link href="/expertise-comptable" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Accompagnement des professions libérales</h2>
          <p>
            Nous comprenons les enjeux des professions libérales et offrons des services spécialisés pour répondre à leurs
            besoins spécifiques.
          </p>
          <Link href="/professions-liberales" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Solutions sur mesure</h2>
          <p>
            Nous vous aidons à vous orienter dans un environnement législatif complexe avec des solutions sur mesure
            adaptées à votre entreprise ou à votre situation personnelle.
          </p>
          <Link href="/solutions-sur-mesure" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Gestion de patrimoine</h2>
          <p>
            Nous vous accompagnons dans l&apos;optimisation et la valorisation de votre patrimoine pour assurer votre sécurité
            financière à long terme.
          </p>
          <Link href="/gestion-de-patrimoine" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}