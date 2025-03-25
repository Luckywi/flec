const RegimeFiscalLiberaleSchema = () => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Activité libérale : Quel régime fiscal choisir ?",
            "description": "Guide complet pour choisir le régime fiscal optimal pour votre activité libérale. Comparez micro-BNC, déclaration contrôlée et options d'imposition à l'IS. Conseils d'expert-comptable 2025.",
            "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
            "datePublished": "2025-03-01",
            "dateModified": "2025-03-01",
            "author": {
              "@type": "Person",
              "name": "Franck Lebeurre",
              "jobTitle": "Expert-Comptable",
              "url": "https://www.francklebeurre-expertise.fr/cabinet/equipe"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cabinet Franck Lebeurre Expert-Comptable",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.francklebeurre-expertise.fr/images/franck.webp"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.francklebeurre-expertise.fr/articles/regime-fiscal-liberal"
            },
            "keywords": "régime fiscal libéral, micro-BNC vs réel, fiscalité profession libérale, BNC déclaration contrôlée, imposition libéral, expert-comptable, optimisation fiscale",
            "articleSection": "Fiscalité & Optimisation",
            "articleBody": "Le choix du régime fiscal constitue l'une des décisions les plus stratégiques pour tout professionnel libéral, que ce soit au lancement de son activité ou lors d'une réorientation de sa pratique. Ce choix impacte directement la rentabilité de votre activité, la complexité de vos obligations déclaratives et vos possibilités d'optimisation fiscale.",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
            }
          })
        }}
      />
    );
  };
  
  export default RegimeFiscalLiberaleSchema;