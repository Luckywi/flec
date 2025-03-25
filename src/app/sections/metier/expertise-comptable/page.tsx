import { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/app/components/MetierNav";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Expertise Comptable | Solutions Digitales & Accompagnement Personnalisé | Cabinet Franck Lebeurre",
  description: "Cabinet d'expertise comptable 100% digital : accompagnement à distance, outils connectés, conseil stratégique et suivi personnalisé. Solutions adaptées à votre activité dès 62€/mois.",
  keywords: "expertise comptable, outils digitaux, conseil comptable, accompagnement entreprise, cabinet digital",

  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/expertise-comptable',
  },
  
};


export default function ExpertiseComptable() {
  const accordionItems = [
    {
      id: "item1",
      title: "La comptabilité...",
      content: (
        <p>
          Un sujet qui fait généralement bailler d&apos;ennui, mais qui est en réalité le socle indispensable sur lequel
          repose toute activité maîtrisée et donc couronnée de succès.<br /><br />
        </p>
      ),
    },
    {
      id: "item2",
      title: "Des outils sympa !",
      content: (
        <p>
          Nous avons développé des outils simples d&apos;utilisation, connectés, sans coûts additionnels et adaptés aux
          particularités professionnelles de chacun.<br /><br />
        </p>
      ),
    },
    {
      id: "item3",
      title: "Une volonté de conseil",
      content: (
        <p>
          Les chiffres c&apos;est bien ! Car ils sont porteurs d&apos;informations. Nous sommes à vos côtés pour les analyser et vous aider à vous orienter dans vos choix au quotidien.<br /><br />
        </p>
      ),
    },
    {
      id: "item4",
      title: "Un sens de l'éthique",
      content: (
        <p>
          Nos règles professionnelles nous obligent et c&apos;est tant mieux ! Objectivité, intégrité, indépendance… autant
          de qualités qui orientent nos missions et nourrissent une relation client forte et stable.<br /><br />
        </p>
      ),
    },
  ];

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <ServiceNav
          activeService="expertise-comptable"
          backgroundImage="/images/fleur1.webp"
          title="Expertise-comptable"
        />
      </section>

      {/* Section accordéon */}
      <Accordion items={accordionItems} />
      <section>
  <div className="section-container">
    <h3 style={{ color: "white", marginBottom: "25px"}}>Ressources d&apos;expertise comptable</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <div style={{ border: "2px solid white", borderRadius: "10px", padding: "20px", width: "80%", margin:"auto"}}>
        <h4 style={{ color: "white", marginTop: "0" }}>Comment définir sa rémunération en activité libérale ?</h4>
        <h5 style={{ color: "white" }}>
          Déterminer une rémunération adaptée est essentiel pour la pérennité de votre activité libérale. Notre guide vous accompagne étape par étape dans cette décision stratégique et vous aide à trouver le juste équilibre entre viabilité économique et besoins personnels.
        </h5>
        <Link href="/articles/remuneration-activite-liberale" style={{color: "white", textDecoration:"none", padding:"10px", display:"flex", width: "fit-content", margin:"auto", border: "2px solid white", borderRadius: "10px"}}>
          Optimiser votre rémunération libérale
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}