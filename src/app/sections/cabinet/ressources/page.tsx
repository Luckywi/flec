import { Metadata } from "next";
import Link from "next/link";
import CabinetNav from "@/app/components/CabinetNav";
import ArticleCard, { Article, ArticleTag } from "@/app/components/ArticleCard";

export const metadata: Metadata = {
  title: "Ressources et Articles | Cabinet Franck Lebeurre | Expertise Comptable",
  description: "Découvrez nos ressources, articles et conseils pratiques sur la comptabilité, la fiscalité et la gestion de patrimoine. Des informations précieuses pour les professions libérales et entrepreneurs.",
  keywords: "articles expertise comptable, ressources fiscales, conseils comptables, guide professions libérales, informations fiscalité",
};

// Données des tags
const tags: Record<string, ArticleTag> = {
  fiscalite: {
    id: "fiscalite",
    name: "Fiscalité"
  },
  remuneration: {
    id: "remuneration",
    name: "Rémunération"
  },
  optimisation: {
    id: "optimisation",
    name: "Optimisation"
  },
  charges: {
    id: "charges",
    name: "Charges Sociales"
  },
  liberal: {
    id: "liberal",
    name: "Prof. libérale"
  },
  activite: {
    id: "activite",
    name: "Création"
  },
  patrimoine: {
    id: "patrimoine",
    name: "Patrimoine"
  },
  retraite: {
    id: "retraite",
    name: "Retraite"
  },
  per: {
    id: "per",
    name: "PER"
  },
  tresorerie: {
    id: "tresorerie",
    name: "Trésorerie"
  },
  urssaf: {
    id: "urssaf",
    name: "URSSAF"
  }
};

// Données d'articles
const articles: Article[] = [
  {
    id: "1",
    title: "Nouvelle activité libérale : les conseils d'un expert-comptable !",
    excerpt: "Guide complet pour déterminer votre rémunération idéale lors du lancement d'une activité libérale en 2025. Conseils d'expert-comptable et stratégies d'optimisation.",
    date: "2025-03-15",
    category: "Fiscalité & Rémunération",
    slug: "articles/remuneration-activite-liberale",
    tags: [tags.fiscalite, tags.remuneration, tags.liberal, tags.activite, tags.optimisation]
  },
  {
    id: "2",
    title: "Le PER, une solution d'optimisation fiscale efficace ?",
    excerpt: "Analyse complète du Plan d'Épargne Retraite comme outil d'optimisation fiscale. Avantages, inconvénients et stratégies d'utilisation selon votre situation.",
    date: "2025-03-19",
    category: "Fiscalité & Patrimoine",
    slug: "articles/per-optimisation-fiscale",
    tags: [tags.fiscalite, tags.optimisation, tags.patrimoine, tags.retraite, tags.per]
  },
  {
    id: "3",
    title: "Professions libérales : anticipez vos charges dès le départ !",
    excerpt: "Guide pratique pour comprendre, calculer et provisionner efficacement vos charges sociales et fiscales. Évitez l'effet falaise de la 3ème année.",
    date: "2025-03-10",
    category: "Charges & Fiscalité",
    slug: "articles/anticipation-charges-liberales",
    tags: [tags.charges, tags.fiscalite, tags.liberal, tags.tresorerie, tags.urssaf]
  },
  {
    id: "4",
    title: "Activité libérale : Comment définir sa rémunération ?",
    excerpt: "Guide expert pour déterminer votre niveau de rémunération optimal en profession libérale. Méthodes de calcul, stratégies d'optimisation et erreurs à éviter pour une gestion sereine.",
    date: "2025-02-25",
    category: "Rémunération & Fiscalité",
    slug: "articles/definir-remuneration-liberale",
    tags: [tags.remuneration, tags.fiscalite, tags.liberal, tags.tresorerie, tags.optimisation]
  },
  {
    id: "5",
    title: "Activité libérale : Quel régime fiscal choisir ?",
    excerpt: "Guide complet pour choisir le régime fiscal optimal pour votre activité libérale. Comparez micro-BNC, déclaration contrôlée et options d'imposition à l'IS pour une fiscalité optimisée.",
    date: "2025-03-01",
    category: "Fiscalité & Optimisation",
    slug: "articles/regime-fiscal-liberal",
    tags: [tags.fiscalite, tags.liberal, tags.optimisation, tags.charges, tags.tresorerie]
  },
  {
    id: "6",
    title: "Économisez sur vos frais bancaires en libéral !",
    excerpt: "La loi impose un compte dédié à votre activité, mais pas nécessairement un compte professionnel ! Découvrez comment économiser plusieurs centaines d'euros par an sur vos frais bancaires.",
    date: "2025-03-08",
    category: "Optimisation & Gestion",
    slug: "articles/economiser-frais-bancaires-liberal",
    tags: [tags.fiscalite, tags.liberal, tags.optimisation, tags.tresorerie]
  },
  {
    id: "7",
    title: "La voiture, un bon outil d'optimisation fiscale ?",
    excerpt: "Inscrire votre véhicule à l'actif ou opter pour les indemnités kilométriques ? Découvrez pourquoi cette seconde option est souvent bien plus avantageuse fiscalement pour les professions libérales.",
    date: "2025-03-12",
    category: "Fiscalité & Optimisation",
    slug: "articles/voiture-optimisation-fiscale",
    tags: [tags.fiscalite, tags.liberal, tags.optimisation, tags.charges]
  }
];

export default function Ressources() {
  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <CabinetNav
          activeSection="ressources"
          backgroundImage="/images/fleur13.webp"
          title="Ressources"
        />
      </section>

      {/* Section description */}
      <section>
        <div className="section-container">
          <h1>Articles et ressources pour vous accompagner</h1>
          <p>
            Découvrez nos articles, guides et vidéos sur l&apos;actualité comptable, fiscale et entrepreneuriale. Des ressources pratiques pour vous accompagner dans le développement de votre activité.
          </p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="fl-articles-container">
        <div className="fl-articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}