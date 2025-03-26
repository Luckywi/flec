import React from 'react';

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
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Puis-je passer d'un système à l'autre chaque année ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non, la réglementation fiscale impose une certaine stabilité dans vos choix. Si vous inscrivez votre véhicule à l'actif professionnel, vous ne pouvez pas décider l'année suivante d'utiliser le barème kilométrique pour ce même véhicule. Inversement, si vous optez pour les indemnités kilométriques, vous ne pourrez pas inscrire ultérieurement ce véhicule à l'actif de votre activité. Ce choix est donc déterminant et doit être mûrement réfléchi dès l'acquisition du véhicule."
              }
            },
            {
              "@type": "Question",
              "name": "Comment justifier mes kilomètres professionnels auprès de l'administration fiscale ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour sécuriser la déduction des indemnités kilométriques, il est essentiel de tenir un registre détaillé de vos déplacements professionnels. Ce document doit mentionner pour chaque déplacement : la date du déplacement, le lieu de départ et d'arrivée, le motif professionnel du déplacement, et la distance parcourue. Certaines applications mobiles peuvent faciliter cette tâche. En cas de contrôle fiscal, l'administration pourra demander ce registre et éventuellement des justificatifs complémentaires (agendas, rendez-vous, etc.) pour vérifier la réalité de vos déplacements professionnels."
              }
            },
            {
              "@type": "Question",
              "name": "Les frais de stationnement et de péage sont-ils inclus dans le barème kilométrique ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, le barème kilométrique est réputé couvrir tous les frais liés à l'utilisation du véhicule : amortissement, entretien, réparations, carburant, assurance, mais aussi stationnement et péages. Vous ne pouvez donc pas déduire ces frais en complément des indemnités kilométriques. La seule exception concerne les frais de stationnement liés à des déplacements professionnels spécifiques (congrès, formations) qui peuvent parfois être déduits séparément sous certaines conditions strictes et avec justificatifs."
              }
            },
            {
              "@type": "Question",
              "name": "Que se passe-t-il si je vends un véhicule inscrit à l'actif professionnel ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La vente d'un véhicule inscrit à l'actif professionnel génère une plus-value ou une moins-value professionnelle : si le prix de vente est supérieur à la valeur nette comptable (prix d'achat - amortissements déjà pratiqués), vous réalisez une plus-value professionnelle imposable. Si le prix de vente est inférieur, vous constatez une moins-value déductible. Cette plus-value peut bénéficier d'exonérations ou d'abattements selon votre situation (notamment en fonction de votre ancienneté d'activité et du montant de vos recettes). A l'inverse, un véhicule conservé dans le patrimoine privé et utilisé avec le barème kilométrique ne génère aucune conséquence fiscale professionnelle lors de sa revente."
              }
            },
            {
              "@type": "Question",
              "name": "Le barème kilométrique est-il applicable aux deux-roues ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, l'administration fiscale publie également des barèmes spécifiques pour les deux-roues motorisés (motos, scooters) et les vélomoteurs et scooters de faible cylindrée (moins de 50 cm³). Ces barèmes sont généralement très avantageux pour les professionnels utilisant ces modes de transport, particulièrement en milieu urbain. Le principe d'application reste identique à celui des véhicules automobiles : il suffit de multiplier le nombre de kilomètres professionnels par le taux correspondant à la cylindrée."
              }
            }
          ]
        })
      }}
    />
  );
};

export default VoitureOptimisationFiscaleSchema;