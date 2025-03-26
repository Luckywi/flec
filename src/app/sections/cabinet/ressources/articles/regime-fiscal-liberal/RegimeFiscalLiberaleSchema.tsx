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
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Peut-on cumuler activité libérale et salariat avec des régimes fiscaux différents ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, c'est tout à fait possible. Si vous exercez une activité libérale en complément d'un emploi salarié, vous pouvez opter pour le régime micro-BNC pour votre activité indépendante tout en étant imposé normalement sur vos salaires. Les deux revenus seront additionnés pour déterminer votre tranche marginale d'imposition, mais chacun conserve ses règles propres de détermination du revenu imposable. Attention toutefois à l'effet de cumul qui peut vous faire passer dans une tranche d'imposition supérieure."
              }
            },
            {
              "@type": "Question",
              "name": "Comment calculer précisément mon taux de charges réelles pour choisir entre micro-BNC et déclaration contrôlée ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour déterminer votre taux de charges réelles : Listez toutes vos dépenses professionnelles sur une année complète (loyers professionnels, déplacements, fournitures, formation, cotisations sociales obligatoires, etc.). Divisez ce montant total par vos recettes annuelles. Multipliez par 100 pour obtenir le pourcentage. Si ce taux est supérieur à 34%, la déclaration contrôlée sera généralement plus avantageuse. N'oubliez pas d'inclure dans votre calcul les amortissements des investissements professionnels et les cotisations facultatives Madelin, qui sont déductibles uniquement en déclaration contrôlée."
              }
            },
            {
              "@type": "Question",
              "name": "Le passage du micro-BNC à la déclaration contrôlée est-il définitif ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non, l'option pour la déclaration contrôlée est exercée pour une période d'un an, renouvelable tacitement chaque année. Vous pouvez donc revenir au régime micro-BNC (si vos recettes le permettent) en dénonçant cette option avant le 1er février de l'année de retour au micro-BNC. Toutefois, cette réversibilité doit être utilisée avec prudence : des changements trop fréquents peuvent attirer l'attention de l'administration fiscale et complexifier votre gestion administrative. Il est généralement recommandé de changer de régime uniquement lorsque votre situation professionnelle évolue significativement."
              }
            },
            {
              "@type": "Question",
              "name": "Quels sont les seuils exacts de TVA et comment s'articulent-ils avec le choix du régime fiscal ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les seuils de franchise en base de TVA (dispense de facturation de TVA) pour les professions libérales en 2025 sont : Seuil principal de 36 800 € de recettes annuelles et seuil de tolérance de 39 100 € (dépassement unique autorisé). Ces seuils sont indépendants de ceux du régime micro-BNC (77 700 €). Vous pouvez donc être au régime réel BNC tout en bénéficiant de la franchise en base de TVA, ou inversement être au micro-BNC et être assujetti à la TVA. L'assujettissement à la TVA implique de facturer la TVA à vos clients (si applicable à votre activité) mais vous permet aussi de récupérer la TVA sur vos achats professionnels, ce qui peut être avantageux en cas d'investissements importants."
              }
            },
            {
              "@type": "Question",
              "name": "L'exercice en société est-il toujours fiscalement plus avantageux pour les revenus élevés ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pas systématiquement. L'avantage fiscal de l'exercice en société avec option à l'IS dépend de nombreux facteurs dont : la politique de distribution de dividendes envisagée, la situation familiale (quotient familial impactant l'IR), les autres revenus du foyer fiscal, et les projets de réinvestissement dans l'activité. L'exercice en société devient généralement intéressant à partir de 80 000-100 000 € de bénéfice annuel, particulièrement si une partie significative des profits peut être conservée dans la société pour financer son développement. Une simulation personnalisée est indispensable pour quantifier précisément l'avantage potentiel."
              }
            }
          ]
        })
      }}
    />
  );
};

export default RegimeFiscalLiberaleSchema;