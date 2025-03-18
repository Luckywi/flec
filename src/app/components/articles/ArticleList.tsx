"use client";

import { useState } from "react";
import { Article } from "@/app/data/articlesData";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Filtrer les articles si un tag actif est sélectionné
  const filteredArticles = activeTag 
    ? articles.filter(article => article.tags.includes(activeTag))
    : articles;

  // Collecter tous les tags uniques pour le filtre
  const allTags = [...new Set(articles.flatMap(article => article.tags))];

  return (
    <section className="articles-section">
      {/* Filtre par tags */}
      {allTags.length > 1 && (
        <div className="articles-filter">
          <span className="filter-label">Filtrer par thème:</span>
          <div className="filter-tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grille d'articles */}
      <div className="articles-grid">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {/* Message si aucun article ne correspond au filtre */}
      {filteredArticles.length === 0 && (
        <div className="no-articles">
          <p>Aucun article ne correspond à ce filtre.</p>
          <button className="reset-filter" onClick={() => setActiveTag(null)}>
            Réinitialiser le filtre
          </button>
        </div>
      )}
    </section>
  );
}