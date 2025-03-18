import { Metadata } from "next";
import Link from "next/link";
import CabinetNav from "@/app/components/CabinetNav";

export const metadata: Metadata = {
  title: "Ressources et Articles | Cabinet Franck Lebeurre | Expertise Comptable",
  description: "Découvrez nos ressources, articles et conseils pratiques sur la comptabilité, la fiscalité et la gestion de patrimoine. Des informations précieuses pour les professions libérales et entrepreneurs.",
};

// Type pour les articles
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

// Données d'articles
const articles: Article[] = [
  {
    id: "1",
    title: "Nouvelle activité libérale : comment définir sa rémunération ?",
    excerpt: "Guide complet pour déterminer votre rémunération idéale lors du lancement d'une activité libérale en 2025. Conseils d'expert-comptable et stratégies d'optimisation.",
    date: "15 mars 2025",
    category: "Fiscalité & Rémunération",
    slug: "articles/remuneration-activite-liberale"
  },
  {
    id: "2",
    title: "Comment optimiser votre régime fiscal en tant que profession libérale ?",
    excerpt: "Guide pratique pour comprendre et choisir le régime fiscal le plus avantageux pour votre activité.",
    date: "28 février 2025",
    category: "Optimisation",
    slug: "articles/optimisation-regime-fiscal"
  },
  {
    id: "3",
    title: "Comprendre la modulation des charges sociales pour les indépendants",
    excerpt: "Tout ce que vous devez savoir sur la modulation des charges sociales et comment l'appliquer à votre situation.",
    date: "10 février 2025",
    category: "Charges Sociales",
    slug: "articles/modulation-charges-sociales"
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
      <section className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-preview">
            <div className="article-content">
              <div className="article-metadata">
                <span className="date">{article.date}</span>
                <span className="category">{article.category}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <Link href={`/sections/cabinet/ressources/${article.slug}`} className="read-more">
                Lire l&apos;article <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}