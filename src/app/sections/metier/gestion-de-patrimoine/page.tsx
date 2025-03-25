import { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/app/components/MetierNav";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Gestion de Patrimoine| Cabinet Franck Lebeurre | Conseil Patrimonial",
  description: "Expert-comptable spécialisé en gestion de patrimoine : conseil en transmission d'entreprise, optimisation fiscale et planification patrimoniale. Expertise pluridisciplinaire pour votre patrimoine professionnel et personnel.",
  keywords: "gestion patrimoine, conseil patrimonial, transmission entreprise, optimisation fiscale patrimoine, expert-comptable patrimoine",

  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/gestion-de-patrimoine',
  },
};


export default function GestionPatrimoine() {
  // Contenu de l'accordéon
  const accordionItems = [
    {
      id: "item1",
      title: "Du patrimoine professionnel vers le personnel",
      content: (
        <p>
          Elargir la vision de votre outil de travail en l&apos;intégrant pleinement dans la réflexion globale de votre
          patrimoine personnel et les perspectives de votre future retraite.<br /><br />
        </p>
      ),
    },
    {
      id: "item2",
      title: "Expertise pluridisciplinaire",
      content: (
        <p>
          En interne mais aussi grâce à nos partenaires, nous réunissons des compétences en droit fiscal, droit des
          sociétés, finances... pour vous amener progressivement à structurer vos investissements pour mieux les
          préserver et les transmettre à terme.<br /><br />
        </p>
      ),
    },
    {
      id: "item3",
      title: "Préparation à la transmission",
      content: (
        <p>
          Nous vous accompagnons dans la planification successorale et la transmission de votre patrimoine, assurant
          ainsi la pérennité de vos biens.<br /><br />
        </p>
      ),
    },
  ];

  return (
    <main> 
      {/* Navigation avec titre */}
      <section>
        <ServiceNav
          activeService="gestion-de-patrimoine"
          backgroundImage="/images/fleur2.webp"
          title="Gestion de patrimoine"
        />
      </section>

      {/* Section accordéon */}
      <Accordion items={accordionItems} />

      <section>
  <div className="section-container">
    <h3 style={{ color: "white", marginBottom: "25px"}}>Ressources pour optimiser votre patrimoine</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <div style={{ border: "2px solid white", borderRadius: "10px", padding: "20px", width: "80%", margin:"auto"}}>
        <h4 style={{ color: "white", marginTop: "0" }}>Le PER : un outil d&apos;optimisation fiscale efficace</h4>
        <h5 style={{ color: "white" }}>
          Le Plan d&apos;Épargne Retraite représente une opportunité stratégique pour réduire votre pression fiscale tout en préparant votre avenir. Découvrez notre analyse complète sur ses avantages et comment l&apos;intégrer à votre stratégie patrimoniale.
        </h5>
        <Link href="/articles/per-optimisation-fiscale" style={{color: "white", textDecoration:"none", padding:"10px", display:"flex",  width: "fit-content", margin:"auto",border: "2px solid white", borderRadius: "10px"}}>
          Tout savoir sur le PER et la fiscalité
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}