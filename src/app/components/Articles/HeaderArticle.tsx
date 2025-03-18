import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface HeaderArticleProps {
  title: string;
  tags: string[];
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  youtubeId?: string;
}

export default function HeaderArticle({ 
  title, 
  tags, 
  publishedAt, 
  author, 
  youtubeId 
}: HeaderArticleProps) {
  const formattedDate = format(new Date(publishedAt), 'dd MMMM yyyy', { locale: fr });
  
  return (
    <header className="article-header">
      <h1 className="article-title">{title}</h1>
      
      <div className="article-meta">
        <div className="article-author">
          <Image 
            src={author.image} 
            alt={author.name} 
            width={50} 
            height={50} 
            className="author-image" 
          />
          <span className="author-name">{author.name}</span>
        </div>
        
        <time className="article-date">{formattedDate}</time>
        
        <div className="article-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      
      {youtubeId && (
        <div className="article-video-container">
          <iframe
            className="article-video"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </header>
  );
}