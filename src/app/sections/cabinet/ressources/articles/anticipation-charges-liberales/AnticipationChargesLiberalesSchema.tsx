const AnticipationChargesLiberalesSchema = () => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Professions libérales : anticipez vos charges dès le départ !",
            "description": "Guide complet pour anticiper et gérer efficacement vos charges sociales et fiscales en tant que profession libérale. Conseils d'expert-comptable pour une gestion sereine de votre trésorerie.",
            "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
            "datePublished": "2025-03-10",
            "dateModified": "2025-03-10",
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
              "@id": "https://www.francklebeurre-expertise.fr/articles/anticipation-charges-liberales"
            },
            "keywords": "charges professions libérales, URSSAF indépendants, charges sociales, fiscalité libérale, trésorerie profession libérale, gestion charges, expert-comptable",
            "articleSection": "Charges & Fiscalité",
            "articleBody": "Vous venez de vous lancer en profession libérale ou vous envisagez de franchir le pas ? L'un des pièges les plus fréquents qui guette les nouveaux indépendants concerne la sous-estimation des charges. Les premières années d'activité bénéficient d'un régime particulier : cotisations calculées sur une base forfaitaire en première et deuxième année, puis régularisation basée sur les revenus réels en troisième année. C'est cette régularisation qui constitue souvent un choc pour les indépendants qui n'ont pas anticipé ce mécanisme.",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
            }
          })
        }}
      />
    );
  };
  
  export default AnticipationChargesLiberalesSchema;