import { Metadata } from "next";
import ServiceNav from "@/app/components/MetierNav";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Solutions Comptables Sur Mesure | Création et Suivi d'Entreprise | Cabinet Franck Lebeurre",
  description: "Solutions d'expertise comptable personnalisées pour créateurs d'entreprise : accompagnement à la création, choix du statut juridique, prévisionnel sur 3 ans, suivi d'activité et optimisation fiscale.",
};

export default function SolutionsSurMesure() {
  // Contenu de l'accordéon
  const accordionItems = [
    {
      id: "item1",
      title: "Avant la création de votre activité…",
      content: (
        <p>
          Choix de la structuration juridique de votre activité, option pour un régime fiscal, statut social du chef
          d&apos;entreprise, prévisionnel sur 3 ans, rémunération attendue…autant de choix essentiels qui vont conditionner
          votre activité et auront un impact déterminant sur la réussite de votre projet. Nous mettons notre expertise
          et notre expérience à votre disposition pour vous orienter de façon objective vers des solutions sur mesure
          optimales.<br /><br />
        </p>
      ),
    },
    {
      id: "item2",
      title: "En cours d'exercice…",
      content: (
        <p>
          Nos outils permettent la collecte progressive de vos données d&apos;exploitation pour la mise en place de
          prévisionnels et leur actualisation. Notre objectif est de vous apporter de la visibilité à terme pour vous
          aider à anticiper certains coûts (charges sociales, impôts, taxes...) mais aussi de gérer votre activité avec
          plus de pertinence et de sérénité.<br /><br />
        </p>
      ),
    },
  ];

  return (
    <main>      
      {/* Navigation avec titre */}
      <section>
        <ServiceNav
          activeService="solutions-sur-mesure"
          backgroundImage="/images/flaur4.webp"
          title="Solution sur mesure"
        />
      </section>

      {/* Section accordéon */}
      <Accordion items={accordionItems} />
    </main>
  );
}