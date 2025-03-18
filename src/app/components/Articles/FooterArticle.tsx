import Link from 'next/link';

interface FooterArticleProps {
  linkedinPostUrl?: string;
  youtubeVideoId?: string;
  articleUrl: string;
}

export default function FooterArticle({ 
  linkedinPostUrl, 
  youtubeVideoId, 
  articleUrl 
}: FooterArticleProps) {
  // Fonction pour partager l'article
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: articleUrl,  // Utilisation de l'URL fournie en prop
      }).catch(err => {
        console.error('Erreur lors du partage:', err);
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(articleUrl)  // Utilisation de l'URL fournie en prop
        .then(() => {
          alert('Lien copié dans le presse-papier !');
        })
        .catch(err => {
          console.error('Erreur lors de la copie du lien:', err);
        });
    }
  };

  return (
    <footer className="article-footer">
      <div className="article-actions">
        <button 
          onClick={shareArticle} 
          className="share-button" 
          aria-label="Partager cet article"
        >
          <i className="fas fa-share-alt"></i> Partager
        </button>

        {linkedinPostUrl && (
          <Link 
            href={linkedinPostUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-button"
            aria-label="Voir le post LinkedIn associé"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </Link>
        )}

        {youtubeVideoId && (
          <Link 
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="youtube-button"
            aria-label="Voir la vidéo YouTube"
          >
            <i className="fab fa-youtube"></i> YouTube
          </Link>
        )}
      </div>
    </footer>
  );
}