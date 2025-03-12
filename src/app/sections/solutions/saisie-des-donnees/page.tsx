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
          activeService="saisie-des-donnees"
          backgroundImage="/images/fleur13.webp"
          title="Saisie des données"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
      <h1>Un traitement comptable simplifié et sécurisé </h1>
          <p>Notre expertise du logiciel EXCEL (Microsoft) nous permet de vous proposer des matrices de saisies adaptées aux
            particularités de votre activité, simples d&apos;utilisation en limitant les coûts de votre traitement comptable. Que
            vous choisissiez de saisir vous même vos données ou de nous déléguer cette tâche, vous y avez accès en
            permanence grâce à notre espace Cloud partagé.</p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}