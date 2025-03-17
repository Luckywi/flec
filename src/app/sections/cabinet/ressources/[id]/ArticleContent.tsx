// src/app/sections/cabinet/ressources/[articleId]/ArticleContent.tsx
"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface ArticleContentProps {
    articleId: string;
    videoId: string;
    linkedinUrl: string;
    tags: string[];
}

export default function ArticleContent({ articleId, videoId, linkedinUrl, tags }: ArticleContentProps) {
    const [content, setContent] = useState < string > ("");
    const [loading, setLoading] = useState < boolean > (true);

    useEffect(() => {
        // Fonction pour charger le contenu Markdown de l'article
        const fetchArticleContent = async () => {
            try {
                setLoading(true);
                // On charge le contenu depuis un fichier Markdown stocké dans le dossier public
                const response = await fetch(`/articles/${articleId}.md`);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Erreur lors du chargement de l'article:", error);
                setContent("# Erreur\n\nDésolé, nous n'avons pas pu charger le contenu de cet article.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticleContent();
    }, [articleId]);

    // Fonction pour remplacer les liens spéciaux dans le Markdown
    const processContent = (content: string): string => {
        // Supprimer les lignes de sommaire - nous les gérerons différemment
        let processedContent = content.replace(/## Sommaire[\s\S]*?(?=## [^S])/, '');

        // Remplacer les tags de video placeholder par le vrai embed YouTube
        processedContent = processedContent.replace(
            /\[Insérer ici l'embed de votre vidéo YouTube.*?\]/g,
            ''
        );

        // Remplacer les call-to-action génériques
        processedContent = processedContent.replace(
            /\[Insérer ici un call-to-action.*?\]/g,
            ''
        );

        return processedContent;
    };

    // Générer un TOC (Table of Contents) à partir du contenu Markdown
    const generateTOC = (content: string) => {
        const headings = content.match(/## ([^\n]+)/g) || [];
        return headings.map(heading => heading.replace(/^## /, ''));
    };

    const tableOfContents = generateTOC(content);
    const processedContent = processContent(content);

    return (
        <>
            {loading ? (
                <div className="loading">Chargement de l&apos;article...</div>
            ) : (
                <>
                    {/* Vidéo YouTube */}
                    <div className="video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Table des matières */}
                    <div className="article-toc">
                        <h2>Sommaire</h2>
                        <ul>
                            {tableOfContents.map((heading, index) => (
                                <li key={index}>
                                    <a href={`#${heading.toLowerCase().replace(/[^\w]+/g, '-')}`}>
                                        {heading}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contenu de l'article */}
                    <div className="article-content">
                        <ReactMarkdown>{processedContent}</ReactMarkdown>
                    </div>

                    {/* Tags */}
                    <div className="article-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag-pill">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Boutons de partage */}
                    <div className="social-share">
                        <h3>Cet article vous a plu ? Partagez-le !</h3>
                        <div className="share-buttons">
                            <a
                                href={`https://www.youtube.com/watch?v=${videoId}`}
                                className="share-button youtube-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube"></i> Voir sur YouTube
                            </a>
                            <a
                                href={linkedinUrl}
                                className="share-button linkedin-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i> Suivez-nous sur LinkedIn
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}