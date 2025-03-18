import Link from "next/link";

// Types pour les articles
export interface ArticleTag {
  id: string;
  name: string;
  color?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  tags?: ArticleTag[];
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Fonction pour formater la date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <article className="article-card">
      <div className="article-content">
        <div className="article-metadata">
          <span className="date">{formatDate(article.date)}</span>
          <span className="category">{article.category}</span>
        </div>
        
        <h2 className="article-title">{article.title}</h2>
        
        {article.tags && article.tags.length > 0 && (
          <div className="article-tags">
            {article.tags.slice(0, 5).map((tag) => (
              <span 
                key={tag.id} 
                className="article-tag"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
        
        <p className="article-excerpt">{article.excerpt}</p>
        
        <Link href={`/sections/cabinet/ressources/${article.slug}`} className="read-more">
          Lire l&apos;article <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
}