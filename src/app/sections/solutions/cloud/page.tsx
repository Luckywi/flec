import { Metadata } from "next";
import Link from "next/link";
import SolutionsNav from "@/app/components/SolutionsNav";

export const metadata: Metadata = {
  title: "Solutions Cloud Comptabilité | Digitalisation & Accessibilité | Cabinet Franck Lebeurre",
  description: "Digitalisation de votre comptabilité : accès sécurisé à vos données comptables depuis n'importe quel appareil. Échange facilité de documents et collaboration à distance avec votre expert-comptable.",
  keywords: "comptabilité cloud, digitalisation cabinet comptable, accès données comptables, collaboration à distance, documents numériques",
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
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}