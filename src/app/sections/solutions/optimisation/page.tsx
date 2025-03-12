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
          activeService="optimisation"
          backgroundImage="/images/fleur8.webp"
          title="Optimisation"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
      <div className="section-container">
      <h1>Optimiser stratégiquement vos contributions </h1>
          <p>Limiter, diminuer, réguler, temporiser… l&apos;impôt et/ou les charges sociales pour favoriser le développement de
            votre activité. Notre expertise nous permet de mettre en place des leviers pour payer vos contributions de façon
            optimale mais toujours de façon juste, cohérente et surtout en respectant la législation.</p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}