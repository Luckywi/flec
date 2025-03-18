import Head from 'next/head';
import HeaderArticle from './HeaderArticle';
import FooterArticle from './FooterArticle';
import NavArticle from './NavArticle';

interface NavItem {
  id: string;
  title: string;
  level: number;
}

interface ArticleMetadata {
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  youtubeId?: string;
  linkedinPostUrl?: string;
  navItems: NavItem[];
}

interface LayoutArticleProps {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}

export default function LayoutArticle({ metadata, children }: LayoutArticleProps) {
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="article-container">
      <Head>
        {/* SEO Metadata */}
        <title>{metadata.title} | Cabinet Franck Lebeurre</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.tags.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content="Cabinet Franck Lebeurre" />
        {metadata.youtubeId && (
          <meta property="og:image" content={`https://img.youtube.com/vi/${metadata.youtubeId}/maxresdefault.jpg`} />
        )}
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
      </Head>

      <div className="article-layout">
        <HeaderArticle 
          title={metadata.title}
          tags={metadata.tags}
          publishedAt={metadata.publishedAt}
          author={metadata.author}
          youtubeId={metadata.youtubeId}
        />
        
        <div className="article-content-wrapper">
          <aside className="article-sidebar">
            <NavArticle items={metadata.navItems} />
          </aside>
          
          <div className="article-content">
            {children}
          </div>
        </div>
        
        <FooterArticle 
          linkedinPostUrl={metadata.linkedinPostUrl}
          youtubeVideoId={metadata.youtubeId}
          articleUrl={articleUrl}
        />
      </div>
    </article>
  );
}