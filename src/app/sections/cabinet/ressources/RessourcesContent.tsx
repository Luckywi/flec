"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { articles } from "./articlesDatas";

export default function ResourcesContent() {
  // Formater la date dans le format français (JJ-MM-AAAA)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // État pour un éventuel filtre par tag (fonctionnalité que vous pourriez vouloir ajouter plus tard)
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Filtrer les articles si un tag actif est sélectionné
  const filteredArticles = activeTag 
    ? articles.filter(article => article.tags.includes(activeTag))
    : articles;

  return (
    <>
      {/* En-tête et description */}

      {/* Grille d'articles */}
      <section className="articles-grid">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article-preview">
            <div className="article-image">
              <Image
                src={article.thumbnailUrl}
                alt={article.title}
                width={450}
                height={250}
                priority={true}
              />
            </div>
            <div className="article-content">
              <div className="article-metadata">
                <span className="date">{formatDate(article.date)}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="article-tags">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`tag-pill ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href={`/sections/cabinet/ressources/${article.id}`} 
                className="read-more"
              >
                Lire l&apos;article <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <style jsx>{`
        .resources-header {
          padding: 40px 20px;
          text-align: center;
          background-color: #000;
          color: white;
        }

        .resources-header h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .description {
          max-width: 800px;
          margin: 0 auto;
        }

        .description p {
          margin-bottom: 15px;
        }

        .cta-container {
          margin-top: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          color: black;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 5px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #333;
          color: white;
          transform: translateY(-2px);
        }

        .cta-button i {
          margin-left: 10px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          padding: 40px;
          background-color: #000;
        }

        .article-preview {
          background: #000;
          border: 2px solid white;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .article-preview:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }

        .article-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .article-metadata {
          display: flex;
          gap: 15px;
          margin-bottom: 10px;
        }

        .date {
          font-size: 0.9rem;
          color: #888;
        }

        .article-content h2 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: white;
          line-height: 1.4;
        }

        .article-content p {
          color: #aaa;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tag-pill {
          background-color: transparent;
          border: 1px solid white;
          color: white;
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tag-pill:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .tag-pill.active {
          background-color: white;
          color: black;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-weight: 500;
          margin-top: auto;
        }

        .read-more i {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .read-more:hover i {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .resources-header h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}