// src/data/articlesData.ts
export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    thumbnailUrl: string;
    tags: string[];
    author: {
      name: string;
      title: string;
      avatarUrl: string;
    };
  }
  
  export const articles: Article[] = [
    {
        slug: "remuneration-activite-liberale",
        title: "Activité libérale : Comment définir sa rémunération ? Guide complet 2025",
        excerpt: "Découvrez comment optimiser votre rémunération en tant que professionnel libéral et trouver le juste équilibre entre revenus immédiats et pérennité de votre activité.",
        date: "2025-03-15",
        thumbnailUrl: "/images/fleur12.webp", // Utilisez une image existante
        tags: ["Professions libérales", "Fiscalité", "Optimisation", "Rémunération"],
        author: {
          name: "Franck Lebeurre",
          title: "Expert-comptable",
          avatarUrl: "/images/franck.webp"
        }
      }
    // Vous pourrez ajouter d'autres articles ici par la suite
  ];
  
  export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
  }
  
  export function getAllArticles(): Article[] {
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
    return articles
      .filter(article => article.slug !== currentSlug)
      .sort(() => 0.5 - Math.random())
      .slice(0, limit);
  }