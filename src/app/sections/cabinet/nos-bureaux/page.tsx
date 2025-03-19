import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CabinetNav from "@/app/components/CabinetNav";

export const metadata: Metadata = {
    title: "Cabinet d'Expertise Comptable à Mâcon | Bureaux & Couverture Nationale | Franck Lebeurre",
    description: "Cabinet d'expertise comptable basé à Mâcon avec rayonnement national : proximité locale et services digitaux à distance, présence en France métropolitaine et DOM. Rendez-vous possibles près de Lyon et Bourg-en-Bresse.",
    keywords: "cabinet expertise comptable Mâcon, expert-comptable Lyon, comptable Bourg-en-Bresse, couverture nationale comptable, expertise comptable à distance",
  };

export default function NosBureaux() {
  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <CabinetNav
          activeSection="nos-bureaux"
          backgroundImage="/images/fleur10.webp"
          title="Nos bureaux"
        />
      </section>

      {/* Section description */}
      <section>
        <div className="section-container">
          <h1>Un cabinet de proximité</h1>
          <p>
            Notre siège social situé à Macon rayonne au travers de ses différents bureaux en France Métropolitaine et nous 
            permettent de recevoir au besoin l&apos;ensemble de nos clients.
            Notre savoir faire et nos méthodes de travail entièrement digitalisées nous permettent de réaliser nos missions 
            à distance (jusque dans les DOM!) tout en conservant une relation étroite avec nos clients.
          </p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Section Siège Social */}
      <section className="siege-social-section">
        <div className="container">
          <div className="content">
            <h2>Le siège social</h2>
            <p>
              Si vous êtes situé près de Lyon ou de Bourg-en-Bresse et souhaitez un rendez-vous en présentiel, 
              l&apos;équipe de Franck Lebeurre Expert-Comptable sera ravie de vous accueillir, sur rendez-vous, 
              dans son siège à Mâcon.
            </p>
          </div>
          <div className="image-wrapper">
            <Image
              src="/images/SC.webp"
              alt="Siège social à Mâcon"
              width={400}
              height={300}
            />
          </div>
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
          <Link href="/sections/metier/expertise-comptable" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Accompagnement des professions libérales</h2>
          <p>
            Nous comprenons les enjeux des professions libérales et offrons des services spécialisés pour répondre à leurs
            besoins spécifiques.
          </p>
          <Link href="/sections/metier/professions-liberales" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Solutions sur mesure</h2>
          <p>
            Nous vous aidons à vous orienter dans un environnement législatif complexe avec des solutions sur mesure
            adaptées à votre entreprise ou à votre situation personnelle.
          </p>
          <Link href="/sections/metier/solutions-sur-mesure" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        <div className="service-2" style={{ border: "2px solid white", borderRadius: "10px" }}>
          <h2>Gestion de patrimoine</h2>
          <p>
            Nous vous accompagnons dans l&apos;optimisation et la valorisation de votre patrimoine pour assurer votre sécurité
            financière à long terme.
          </p>
          <Link href="/sections/metier/gestion-de-patrimoine" className="learn-more">
            En savoir plus <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}