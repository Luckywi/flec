const VoitureOptimisationFiscaleSchema = () => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "La voiture, un bon outil d'optimisation fiscale ?",
            "description": "Voiture à l'actif ou indemnités kilométriques ? Découvrez l'option la plus avantageuse fiscalement pour votre véhicule en profession libérale. Analyse comparative et conseils d'expert-comptable.",
            "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
            "datePublished": "2025-03-12",
            "dateModified": "2025-03-12",
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
              "@id": "https://www.francklebeurre-expertise.fr/articles/voiture-optimisation-fiscale"
            },
            "keywords": "voiture profession libérale, optimisation fiscale véhicule, indemnités kilométriques, frais réels automobile, amortissement voiture libéral, expert-comptable, avantage en nature",
            "articleSection": "Fiscalité & Optimisation",
            "articleBody": "La voiture représente un poste de dépenses significatif pour la plupart des professionnels libéraux. Naturellement, beaucoup s'interrogent sur la meilleure stratégie pour optimiser fiscalement ces frais. Faut-il inscrire son véhicule à l'actif professionnel ou opter pour le système des indemnités kilométriques ?",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
            }
          })
        }}
      />
    );
  };
  
  export default VoitureOptimisationFiscaleSchema;