import { Metadata } from "next";
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
      title: "Un sens de l&apos;éthique",
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
    </main>
  );
}