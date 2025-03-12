import { Metadata } from "next";
import Link from "next/link";
import SolutionsNav from "@/app/components/SolutionsNav";

export const metadata: Metadata = {
  title: "Expert-Comptable Professions Libérales | Cabinet Franck Lebeurre | Conseil & Accompagnement",
  description: "Expert-comptable spécialisé professions libérales : conseil fiscal personnalisé, optimisation comptable, accompagnement dédié dès 62€/mois. Plus de 250 professionnels libéraux nous font confiance.",
};

export default function ProfessionsLiberales() {
  // Contenu de l'accordéon

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <SolutionsNav
          activeService="cloud"
          backgroundImage="/images/fleurbonus.webp"
          title="Cloud"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
        <h1>La digitalisation à portée de main pour une gestion optimisée</h1>
          <p> La digitalisation de nos outils contribue à notre productivité et notre pertinence mais facilite également
            votre quotidien. L&apos;espace partagé accessible depuis votre PC, tablette ou téléphone permet d&apos;échanger vos
            données en toute simplicité, fiabilité et sans coût additif. Elle permet également une collaboration de qualité
            à distance.
            En fonction de l&apos;organisation de votre comptabilité, la version basic de DROPBOX (non payante) permettra soit,
            d&apos;y numériser vos pièces comptables soit, d&apos;avoir accès au fichier centralisant
            vos données chiffrées.</p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}