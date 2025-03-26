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
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Comment fonctionnent les cotisations sociales pour un professionnel libéral qui débute ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les premières années d'activité bénéficient d'un régime particulier : en première année, les cotisations sont calculées sur une base forfaitaire généralement assez faible ; en deuxième année, elles sont toujours calculées sur une base forfaitaire légèrement réévaluée ; en troisième année intervient une régularisation basée sur les revenus réels de la première année, plus les cotisations provisionnelles, ce qui peut créer un 'effet falaise' avec des appels de cotisations multipliés par 3 ou 4 par rapport aux années précédentes."
              }
            },
            {
              "@type": "Question",
              "name": "Quelle est la règle des 50% recommandée pour les professions libérales ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La règle des 50% est une stratégie de provisionnement recommandée pour éviter les mauvaises surprises : sur chaque encaissement, provisionnez immédiatement 50% pour les charges sociales et fiscales ; placez cette somme sur un compte d'épargne dédié (livret professionnel ou compte courant secondaire) ; considérez cet argent comme déjà dépensé. Ce pourcentage peut paraître élevé, mais il permet de couvrir l'ensemble des charges sociales et fiscales, y compris la régularisation de la troisième année. Si vous êtes dans une tranche marginale d'imposition élevée, ce taux peut même être porté à 60%."
              }
            },
            {
              "@type": "Question",
              "name": "Comment éviter l'effet falaise des cotisations en troisième année d'activité ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour lisser l'impact de la régularisation en troisième année, plusieurs options s'offrent à vous : demander une modulation des cotisations si vous anticipez des revenus supérieurs à la base forfaitaire ; effectuer des versements libératoires réguliers tout au long de l'année ; pratiquer l'auto-régularisation anticipée en calculant vous-même l'écart et en commençant à le provisionner sans attendre la régularisation officielle. L'application de la 'règle des 50%' dès le début de votre activité est également un moyen efficace d'anticiper cette régularisation."
              }
            },
            {
              "@type": "Question",
              "name": "Quelles sont les charges fiscales spécifiques aux professions libérales ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "En tant que professionnel libéral, vos bénéfices sont soumis à l'impôt sur le revenu (IR) dans la catégorie des Bénéfices Non Commerciaux (BNC). Vous devrez vous acquitter d'acomptes d'impôt trimestriels ou mensuels (prélèvement à la source) et du solde lors de la déclaration annuelle des revenus. La Cotisation Foncière des Entreprises (CFE) est également due par la plupart des professions libérales, avec une exonération pour la première année civile d'activité, puis une base minimale dès la deuxième année, même en l'absence de bénéfices. Cette taxe, souvent oubliée par les nouveaux indépendants, peut représenter plusieurs centaines d'euros."
              }
            },
            {
              "@type": "Question",
              "name": "Quelles erreurs courantes faut-il éviter dans la gestion de ses charges en libéral ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les erreurs courantes à éviter sont : confondre chiffre d'affaires et bénéfice (vos cotisations et impôts sont calculés sur votre bénéfice, mais le montant à provisionner doit être calculé sur vos encaissements) ; ne pas anticiper les variations saisonnières (beaucoup de professions libérales connaissent des cycles d'activité, il faut donc provisonner en fonction de votre activité réelle) ; sous-estimer le coût réel de son activité (au-delà des charges sociales et fiscales, il faut intégrer les assurances professionnelles, cotisations ordinales, formation continue, frais de déplacement, matériel professionnel et son renouvellement)."
              }
            }
          ]
        })
      }}
    />
  );
};

export default AnticipationChargesLiberalesSchema;