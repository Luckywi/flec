import { Metadata } from "next";
import Link from "next/link";
import SolutionsNav from "@/app/components/SolutionsNav";

export const metadata: Metadata = {
  title: "Saisie Comptable Simplifiée | Traitement Optimisé | Cabinet Franck Lebeurre",
  description: "Solution de saisie comptable simplifiée et sécurisée avec matrices Excel personnalisées. Adaptée à votre activité et accessible en permanence via notre espace Cloud partagé pour une gestion efficace.",
  keywords: "saisie comptable, comptabilité Excel, données comptables, espace Cloud comptable, traitement comptable simplifié",
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
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}