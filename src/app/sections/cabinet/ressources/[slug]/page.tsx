import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/app/data/articlesData";
import RemunerationArticle from "@/app/sections/cabinet/ressources/remuneration-activite-liberale";

// Définissez tous les articles disponibles pour la génération statique
export function generateStaticParams() {
  return [
    { slug: "remuneration-activite-liberale" },
    // Ajoutez d'autres slugs au fur et à mesure que vous créez des articles
  ];
}

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Générer les métadonnées de page dynamiquement pour le SEO
export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  // Accédez directement au slug sans destruction
  const slug = params?.slug;
  
  // Vérifier si l'article existe
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas ou a été déplacé."
    };
  }

  return {
    title: `${article.title} | Cabinet Franck Lebeurre`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: article.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnailUrl],
    },
  };
}

export default async function ArticlePage(
  { params }: ArticlePageProps
) {
  // Accédez directement au slug sans destruction
  const slug = params?.slug;
  
  // Vérifier si l'article existe
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  // Rendu du composant d'article approprié basé sur le slug
  switch (slug) {
    case "remuneration-activite-liberale":
      return <RemunerationArticle article={article} />;
    default:
      notFound();
  }
}