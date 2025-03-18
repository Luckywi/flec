import { Metadata } from "next";
import Link from "next/link";
import CabinetNav from "@/app/components/CabinetNav";
import ArticleCard, { Article, ArticleTag } from "@/app/components/ArticleCard";

export const metadata: Metadata = {
  title: "Ressources et Articles | Cabinet Franck Lebeurre | Expertise Comptable",
  description: "Découvrez nos ressources, articles et conseils pratiques sur la comptabilité, la fiscalité et la gestion de patrimoine. Des informations précieuses pour les professions libérales et entrepreneurs.",
};

// Données des tags
const tags: Record<string, ArticleTag> = {
  fiscalite: {
    id: "fiscalite",
    name: "Fiscalité",
    color: "#3b82f6" // Bleu
  },
  remuneration: {
    id: "remuneration",
    name: "Rémunération",
    color: "#10b981" // Vert
  },
  optimisation: {
    id: "optimisation",
    name: "Optimisation",
    color: "#f59e0b" // Orange
  },
  charges: {
    id: "charges",
    name: "Charges Sociales",
    color: "#8b5cf6" // Violet
  },
  liberal: {
    id: "liberal",
    name: "Prof. libérale",
    color: "#ec4899" // Rose
  },
  activite: {
    id: "activite",
    name: "Création",
    color: "#ef4444" // Rouge
  },
  patrimoine: {
    id: "patrimoine",
    name: "Patrimoine",
    color: "#6366f1" // Indigo
  }
};

// Données d'articles
const articles: Article[] = [
  {
    id: "1",
    title: "Nouvelle activité libérale : comment définir sa rémunération ?",
    excerpt: "Guide complet pour déterminer votre rémunération idéale lors du lancement d'une activité libérale en 2025. Conseils d'expert-comptable et stratégies d'optimisation.",
    date: "2025-03-15",
    category: "Fiscalité & Rémunération",
    slug: "articles/remuneration-activite-liberale",
    tags: [tags.fiscalite, tags.remuneration, tags.liberal, tags.activite, tags.optimisation]
  },
  {
    id: "2",
    title: "Comment optimiser votre régime fiscal en tant que profession libérale ?",
    excerpt: "Guide pratique pour comprendre et choisir le régime fiscal le plus avantageux pour votre activité.",
    date: "2025-02-28",
    category: "Optimisation",
    slug: "articles/optimisation-regime-fiscal",
    tags: [tags.fiscalite, tags.optimisation, tags.liberal]
  },
  {
    id: "3",
    title: "Comprendre la modulation des charges sociales pour les indépendants",
    excerpt: "Tout ce que vous devez savoir sur la modulation des charges sociales et comment l'appliquer à votre situation.",
    date: "2025-02-10",
    category: "Charges Sociales",
    slug: "articles/modulation-charges-sociales",
    tags: [tags.charges, tags.optimisation, tags.liberal]
  },
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