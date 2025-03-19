import { Metadata } from "next";
import Link from "next/link";
import SolutionsNav from "@/app/components/SolutionsNav";

export const metadata: Metadata = {
  title: "Modulation Fiscale et Sociale | Gestion Optimisée des Charges | Cabinet Franck Lebeurre",
  description: "Évitez les régularisations importantes d'impôts et de charges sociales grâce à nos solutions de modulation. Acomptes provisionnels ajustés pour une trésorerie maîtrisée et sans mauvaises surprises.",
  keywords: "modulation fiscale, acomptes provisionnels, charges sociales, gestion trésorerie, régularisation impôts",
};

export default function ProfessionsLiberales() {
  // Contenu de l'accordéon

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <SolutionsNav
          activeService="modulation"
          backgroundImage="/images/image7.webp"
          title="Modulation"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
      <h1>Maîtrisez vos charges pour une gestion plus fluide</h1>
          <p>Pour éviter de se laisser surprendre par l&apos;importance des régularisations d&apos;impôt et de charges sociales, nous
            privilégions la mise en place de versements d&apos;acomptes provisionnels mensuels ajustés à vos prévisions ce qui
            permet de régler en temps réel la quasi totalité des sommes dues aux administrations. Ainsi, la gestion de votre
            trésorerie s&apos;en trouve facilité et vous met à l&apos;abri de très mauvaises surprises. </p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}