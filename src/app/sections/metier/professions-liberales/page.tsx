import { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/app/components/MetierNav";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Expert-Comptable Professions Libérales | Cabinet Franck Lebeurre | Conseil & Accompagnement",
  description: "Expert-comptable spécialisé professions libérales : conseil fiscal personnalisé, optimisation comptable, accompagnement dédié dès 62€/mois. Plus de 250 professionnels libéraux nous font confiance.",
  keywords: "expert-comptable professions libérales, comptabilité libérale, fiscalité profession libérale, optimisation BNC, accompagnement libéral",
  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/professions-liberales',
  },
};

export default function ProfessionsLiberales() {
  // Contenu de l'accordéon
  const accordionItems = [
    {
      id: "item1",
      title: "Halte aux idées toutes faites",
      content: (
        <p>
          Internet mais aussi vos confrères, les &quot;on dit…&quot; sont autant de sources d&apos;information dont la fiabilité doit
          être remise en question. Votre situation est particulière, elle ne peut être calquée sur celle d&apos;une soit
          disant majorité. En sollicitant un Expert-comptable vous aurez l&apos;assurance d&apos;un discours approprié, objectif
          et pertinent qui vous aidera à prendre les bonnes décisions.
          Avec nous, ces premiers échanges ne sont pas payants et ce serait dommage de ne pas en profiter...<br /><br />
        </p>
      ),
    },
    {
      id: "item2",
      title: "La comptabilité un outil indispensable et rentable",
      content: (
        <p>
          Certains régimes (micro-enteprise, micro-BNC) vous dispensent de tenir une comptabilité et vous privent ainsi
          d&apos;un retour précis sur votre activité. Comment envisager une quelconque optimisation dans ces conditions ? Un
          Expert-comptable a un coût mais le savoir-faire de notre cabinet vous garantit des honoraires compétitifs
          souvent éligibles à crédit d&apos;impôt qui vous permettront des économies substantielles de charges sociales et
          d&apos;impôt.<br /><br />
        </p>
      ),
    },
    {
      id: "item3",
      title: "L'impact décisif du bon régime fiscal",
      content: (
        <p>
          Micro-entreprise, Micro BNC, BNC déclaration contrôlée, Franchise en base de TVA…autant de notion qu&apos;il
          convient de confronter à vos modalités d&apos;exercice et à votre situation fiscale personnelle. Avant toute
          collaboration, nous proposons un inventaire chiffré de votre activité à venir pour définir objectivement
          l&apos;option qui sera la plus adaptée à votre situation. Cette analyse est OFERTE de BON COEUR, alors n&apos;hésitez
          pas !<br /><br />
        </p>
      ),
    },
    {
      id: "item4",
      title: "Des outils complémentaires pour votre développement",
      content: (
        <p>
          La richesse de notre retour d&apos;expérience nous permet de diversifier nos prestations et de vous proposer des
          prestations originales aux meilleurs coûts: conception de votre site Internet, référencement en ligne,
          communication sur les réseaux sociaux mais aussi projets d&apos;investissement, montages juridiques et
          optimisation...<br /><br />
        </p>
      ),
    },
  ];

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <ServiceNav
          activeService="professions-liberales"
          backgroundImage="/images/fleur3.webp"
          title="Professions liberales"
        />
      </section>

      {/* Section "Pourquoi nous choisir" */}
      <section>
        <div className="card">
          <h2>Pourquoi nous choisir ? </h2>
          <ul>
            <p><strong>Analyse de votre situation gratuite : </strong>cabinet de taille humaine qui prendra le temps de vous écouter et de vous conseiller</p>
            <p><strong>Connaissance poussée de votre situation : </strong>nous nous occupons de +250 clients pratiquant une activité libérale</p>
            <p><strong>Des formules avantageuses : </strong>le suivi d&apos;un professionnel en activité libérale à partir de 62€ par mois</p>
          </ul>
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous gratuit<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Section accordéon */}
      <Accordion items={accordionItems} />
      {/* Section Recommandations d'articles */}
      {/* Section Recommandations d'articles */}
<section>
  <div className="section-container">
    <h3 style={{ color: "white", marginBottom: "25px"}}>Articles recommandés pour les professions libérales</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <div style={{ border: "2px solid white", borderRadius: "10px", padding: "20px", width: "80%", margin:"auto"}}>
        <h4 style={{ color: "white", marginTop: "0" }}>Comprendre votre régime fiscal optimal</h4>
        <h5 style={{ color: "white" }}>
          Micro-BNC, déclaration contrôlée ou société ? Découvrez comment 
          choisir le régime fiscal le plus avantageux pour votre activité libérale
          en fonction de votre situation spécifique.
        </h5>
        <Link href="/articles/regime-fiscal-liberal" style={{color: "white", textDecoration:"none", padding:"10px", display:"flex",  width: "fit-content", margin:"auto",border: "2px solid white", borderRadius: "10px"}}>
          Lire l&apos;article sur les régimes fiscaux
        </Link>
      </div>
      
      <div style={{ border: "2px solid white", borderRadius: "10px", padding: "20px", width: "80%", margin:"auto"}}>
        <h4 style={{ color: "white", marginTop: "0" }}>Anticiper vos charges sociales</h4>
        <h5 style={{ color: "white" }}>
          Évitez l&apos;effet falaise de la 3ème année d&apos;activité ! Découvrez comment 
          provisionner correctement et optimiser votre trésorerie dès le début de votre activité.
        </h5>
        <Link href="/articles/anticipation-charges-liberales" style={{color: "white", textDecoration:"none", padding:"10px", display:"flex", width: "fit-content", margin:"auto", border: "2px solid white", borderRadius: "10px"}}>
          Lire l&apos;article sur l&apos;anticipation des charges
        </Link>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}