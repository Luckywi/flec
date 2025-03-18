"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/data/articlesData";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Formater la date dans le format français (JJ/MM/AAAA)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <article className="article-preview">
      <Link href={`ressources/${article.slug}`} className="article-link">
        <div className="article-image">
          <Image
            src={article.thumbnailUrl}
            alt={article.title}
            width={450}
            height={250}
            className="thumbnail"
            priority={true}
          />
        </div>
        <div className="article-content">
          <div className="article-metadata">
            <span className="article-date">{formatDate(article.date)}</span>
          </div>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <span className="read-more">
            Lire l&apos;article <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </Link>
    </article>
  );
}