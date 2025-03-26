const PEROptimisationFiscaleSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Le PER, une solution d'optimisation fiscale efficace ? L'analyse d'un expert-comptable en 2025",
          "description": "Analyse complète par un expert-comptable du Plan d'Épargne Retraite comme outil d'optimisation fiscale pour 2025. Avantages, inconvénients et stratégies d'utilisation.",
          "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
          "datePublished": "2025-03-19",
          "dateModified": "2025-03-19",
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
            "@id": "https://www.francklebeurre-expertise.fr/articles/per-optimisation-fiscale"
          },
          "keywords": "PER plan épargne retraite, optimisation fiscale, réduction impôts, préparation retraite, fiscalité PER, expert-comptable, comparatif PER, stratégie patrimoniale",
          "articleSection": "Fiscalité & Patrimoine",
          "articleBody": "Le Plan d'Épargne Retraite (PER) est devenu un incontournable des stratégies d'optimisation fiscale depuis sa création par la loi PACTE en 2019. En tant qu'expert-comptable spécialisé dans l'accompagnement patrimonial, nous observons un intérêt croissant pour ce dispositif, tant chez les professionnels libéraux que chez les dirigeants d'entreprise.",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Peut-on cumuler l'avantage fiscal du PER avec d'autres niches fiscales ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, la déduction des versements au PER n'entre pas dans le plafonnement global des niches fiscales (10 000 € par an). Vous pouvez donc cumuler cet avantage avec d'autres dispositifs fiscaux comme l'investissement en FCPI/FIP, les réductions d'impôt liées à l'investissement locatif ou les crédits d'impôt pour l'emploi d'un salarié à domicile."
              }
            },
            {
              "@type": "Question",
              "name": "Est-il préférable d'opter pour un PER bancaire ou un PER assurantiel ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les deux formats présentent des avantages distincts. Le PER bancaire (compte-titres) offre généralement des frais plus modérés et une transparence accrue dans la gestion. Le PER assurantiel (contrat d'assurance) propose quant à lui une gamme de supports d'investissement souvent plus large, incluant des fonds en euros, et offre des options supplémentaires en matière de garanties décès. Le choix dépendra de vos priorités : optimisation des frais ou diversification et protections complémentaires."
              }
            },
            {
              "@type": "Question",
              "name": "Que se passe-t-il si ma TMI baisse l'année où j'effectue mon versement sur le PER ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Si votre TMI baisse de manière inattendue (baisse de revenus, changement de situation familiale), l'avantage fiscal de votre versement sur le PER sera moindre que prévu. Dans ce cas, il peut être judicieux de reporter une partie de votre versement à une année ultérieure où votre TMI sera potentiellement plus élevée. Rappelons que les plafonds de déduction non utilisés peuvent être reportés sur les trois années suivantes."
              }
            },
            {
              "@type": "Question",
              "name": "Comment arbitrer entre PER et remboursement anticipé de crédits ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'arbitrage dépend essentiellement du taux de votre crédit et de votre TMI. Si votre TMI est élevée (41% ou 45%) et que votre taux d'emprunt est relativement bas (inférieur à 3%), l'avantage fiscal du PER peut surpasser l'économie d'intérêts liée au remboursement anticipé. À l'inverse, avec une TMI modérée et un taux d'emprunt élevé, privilégiez le remboursement de vos crédits. Une simulation chiffrée personnalisée est nécessaire pour trancher."
              }
            },
            {
              "@type": "Question",
              "name": "Peut-on transférer un ancien PERP ou contrat Madelin vers un PER ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, c'est tout à fait possible et souvent recommandé. Le transfert d'un ancien dispositif d'épargne retraite (PERP, Madelin, Article 83, PERCO) vers un nouveau PER permet de bénéficier des avantages du PER, notamment la possibilité de sortie en capital. Ce transfert s'effectue sans conséquences fiscales et les droits acquis sont préservés. Attention toutefois aux frais de transfert qui peuvent s'appliquer (limités à 1% pendant les 5 premières années du contrat d'origine, puis gratuits)."
              }
            }
          ]
        })
      }}
    />
  );
};

export default PEROptimisationFiscaleSchema;