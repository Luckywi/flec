const RemunerationArticleSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Nouvelle activité libérale : comment définir sa rémunération ? Les conseils d'un expert-comptable en 2025",
          "description": "Guide complet par un expert-comptable sur la définition de votre rémunération lors du lancement d'une activité libérale en 2025. Stratégies, optimisation fiscale et conseils pratiques.",
          "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
          "datePublished": "2025-03-15",
          "dateModified": "2025-03-15",
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
            "@id": "https://www.francklebeurre-expertise.fr/articles/remuneration-activite-liberale"
          },
          "keywords": "rémunération profession libérale, nouvelle activité libérale, expert-comptable, optimisation fiscale, protection sociale indépendant, statut juridique profession libérale",
          "articleSection": "Fiscalité & Rémunération",
          "articleBody": "Le lancement d'une activité libérale représente une étape exaltante, mais soulève rapidement une question cruciale : comment définir sa rémunération ? En tant qu'expert-comptable spécialisé dans l'accompagnement des professions libérales, nous constatons que cette décision stratégique impacte non seulement votre quotidien financier, mais aussi la pérennité de votre activité et votre protection sociale...",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quel revenu puis-je espérer la première année ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La première année est généralement consacrée à la constitution de la clientèle. Prévoyez une rémunération équivalente à 30-50% de votre objectif à terme."
              }
            },
            {
              "@type": "Question",
              "name": "Comment gérer l'irrégularité des revenus au démarrage ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Constituez un \"matelas de sécurité\" avant de vous lancer, puis lissez vos prélèvements personnels en fonction d'un budget annuel divisé par 12."
              }
            },
            {
              "@type": "Question",
              "name": "Faut-il opter pour le régime micro-BNC au démarrage ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le micro-BNC est avantageux si vos charges réelles sont inférieures à 34% de votre CA. Pour une activité nécessitant des investissements initiaux importants, la déclaration contrôlée sera souvent plus intéressante."
              }
            },
            {
              "@type": "Question",
              "name": "Comment déterminer mes tarifs pour assurer une rémunération décente ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Analysez le marché local, calculez votre point mort, puis déterminez le volume d'activité nécessaire. Vos tarifs doivent permettre d'atteindre ce seuil de rentabilité avec un volume réaliste de clients."
              }
            }
          ]
        })
      }}
    />
  );
};

export default RemunerationArticleSchema;