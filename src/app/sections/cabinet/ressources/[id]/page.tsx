import { Metadata } from "next";
import Link from "next/link";
import { articles } from "../articlesDatas";
import ArticleContent from "./ArticleContent";
import { notFound } from "next/navigation";

// Types pour les paramètres de la page
type Props = {
  params: { articleId: string }
}

// Générer les métadonnées dynamiquement pour le SEO
export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
  // Trouver l'article correspondant à l'ID
  const article = articles.find(article => article.id === params.articleId);
  
  // Si l'article n'existe pas, retourner des métadonnées par défaut
  if (!article) {
    return {
      title: "Article non trouvé | Cabinet Franck Lebeurre",
      description: "Cet article n'existe pas ou a été déplacé.",
    };
  }

  // Construire les métadonnées basées sur l'article
  return {
    title: `${article.title} | Cabinet Franck Lebeurre`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

// Générer les chemins statiques pour les articles existants
export async function generateStaticParams() {
  return articles.map(article => ({
    articleId: article.id,
  }));
}

export default function ArticlePage({ params }: Props) {
  // Trouver l'article correspondant à l'ID
  const article = articles.find(article => article.id === params.articleId);
  
  // Si l'article n'existe pas, afficher la page 404
  if (!article) {
    notFound();
  }

  return (
    <main className="article-single">
      <div className="article-container">
        <div className="article-header">
          <div className="header-top">
            <Link href="/sections/cabinet/ressources" className="back-button">
              <i className="fas fa-arrow-left"></i> Retour aux articles
            </Link>
            <div className="article-metadata">
              <span className="date">{new Date(article.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          <h1>{article.title}</h1>
        </div>
        
        {/* Composant client pour gérer le contenu dynamique et les interactions */}
        <ArticleContent 
          articleId={params.articleId}
          videoId={article.videoId}
          linkedinUrl={article.linkedinUrl}
          tags={article.tags}
        />
      </div>
    </main>
  );
}