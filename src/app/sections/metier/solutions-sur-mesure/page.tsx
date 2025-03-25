import { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/app/components/MetierNav";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Solutions Comptables Sur Mesure | Création et Suivi d'Entreprise | Cabinet Franck Lebeurre",
  description: "Solutions d'expertise comptable personnalisées pour créateurs d'entreprise : accompagnement à la création, choix du statut juridique, prévisionnel sur 3 ans, suivi d'activité et optimisation fiscale.",
  keywords: "solutions comptables personnalisées, création entreprise, statut juridique, prévisionnel financier, optimisation fiscale entreprise",
  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/solutions-sur-mesure',
  },
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

      <section>
  <div className="section-container">
    <h3 style={{ color: "white", marginBottom: "25px"}}>Solutions personnalisées pour votre activité</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <div style={{ border: "2px solid white", borderRadius: "10px", padding: "20px", width: "80%", margin:"auto"}}>
        <h4 style={{ color: "white", marginTop: "0" }}>Économisez sur vos frais bancaires professionnels</h4>
        <h5 style={{ color: "white" }}>
          Saviez-vous que la loi impose un compte dédié à votre activité, mais pas nécessairement un compte professionnel ? Découvrez comment cette distinction peut vous faire économiser plusieurs centaines d&apos;euros par an tout en respectant vos obligations légales.
        </h5>
        <Link href="/articles/economiser-frais-bancaires-liberal" style={{color: "white", textDecoration:"none", padding:"10px", display:"flex", width: "fit-content", margin:"auto", border: "2px solid white", borderRadius: "10px"}}>
          Réduire vos frais bancaires professionnels
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}