import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import LayoutArticle from "@/app/components/Articles/LayoutArticle";

// Les types et fonctions restent les mêmes...

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    <LayoutArticle metadata={article.frontmatter}>
      <MDXRemote source={article.content} />
    </LayoutArticle>
  );
}