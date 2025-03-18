import LayoutArticle from './LayoutArticle';

interface MDXArticleProps {
  frontmatter: any;
  children: React.ReactNode;
}

export default function MDXArticle({ frontmatter, children }: MDXArticleProps) {
  return (
    <LayoutArticle metadata={frontmatter}>
      {children}
    </LayoutArticle>
  );
}