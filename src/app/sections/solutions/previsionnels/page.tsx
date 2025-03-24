import { Metadata } from "next";
import Link from "next/link";
import SolutionsNav from "@/app/components/SolutionsNav";

export const metadata: Metadata = {
  title: "Prévisionnels Financiers | Projections & Stratégie | Cabinet Franck Lebeurre",
  description: "Prévisions financières précises et actualisées pour votre activité : projections à 6 mois, suivi semestriel, ajustements stratégiques anticipés. Visibilité optimale pour vos décisions d'entreprise.",
  keywords: "prévisionnel financier, projection trésorerie, vision stratégique, business plan, expertise comptable prévisionnelle",
};

export default function ProfessionsLiberales() {
  // Contenu de l'accordéon

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <SolutionsNav
          activeService="previsionnels"
          backgroundImage="/images/fleur9.webp"
          title="Prévisionnels"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
      <h1>Anticiper pour mieux réussir</h1>
          <p>Entreprendre c&apos;est prévoir. Et même si les prévisions sont très différentes de la réalité, il faut une feuille
            de route car c&apos;est la meilleure façon de s&apos;en rapprocher. Fort de ce credo, nous mettons systématiquement en
            place un prévisionnel à chaque début d&apos;exercice puis nous le réactualisons au bout de 6 mois: nous intégrons
            alors les 6 premiers mois passés et nous nous projetons sur les 6 prochains mois. Ainsi, nos projections sont
            plus pertinentes, elles apportent une visibilité prédictive fiable et permettent de prendre des décisions
            stratégiques en amont pour plus d&apos;impact.
          </p>
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}