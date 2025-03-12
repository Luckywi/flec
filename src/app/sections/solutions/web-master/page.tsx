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
          activeService="web-master"
          backgroundImage="/images/fleur11.webp"
          title="Web master"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
      <h1>Boostez votre visibilité en ligne pour développer votre activité</h1>
          <p>Fort de notre expérience, nous avons identifié des démarches de communication permettant de doper le chiffre
            d&apos;affaires de certaines activités. Psychomotriciens, ostéopathes, mais aussi Coiffeurs, Esthéticiennes,…peuvent
            bénéficier de notre savoir faire pour la mise en oeuvre de sites Internet personnalisés, pour optimiser leur
            référencement mais aussi pour organiser des campagnes de communication sur les réseaux sociaux (Facebook,
            Instagram).
            Retours sur investissement garantis !</p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}