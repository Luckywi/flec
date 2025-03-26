const EconomiserFraisBancairesSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Économisez sur vos frais bancaires en libéral !",
          "description": "Découvrez comment économiser sur vos frais bancaires en profession libérale. Compte personnel vs compte professionnel, obligations légales et astuces pour réduire vos coûts bancaires.",
          "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
          "datePublished": "2025-03-08",
          "dateModified": "2025-03-08",
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
            "@id": "https://www.francklebeurre-expertise.fr/articles/economiser-frais-bancaires-liberal"
          },
          "keywords": "frais bancaires professionnel libéral, compte dédié libéral, compte professionnel obligation, économie frais bancaires, banque profession libérale, expert-comptable",
          "articleSection": "Optimisation & Gestion",
          "articleBody": "Les frais bancaires représentent une charge régulière souvent sous-estimée par les professionnels libéraux. Pourtant, ils peuvent atteindre plusieurs centaines d'euros par an. La bonne nouvelle ? Il existe des moyens parfaitement légaux d'optimiser ces coûts. En tant qu'expert-comptable spécialisé dans l'accompagnement des professions libérales, nous observons régulièrement des économies significatives réalisées par nos clients grâce à une meilleure compréhension de leurs obligations réelles en matière bancaire.",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".article-content p:first-of-type", ".article-content h2", ".article-content h3"]
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Est-ce légal d'utiliser un compte personnel pour mon activité libérale ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, c'est parfaitement légal pour la plupart des professions libérales exerçant en entreprise individuelle. La loi exige un compte \"dédié\" à l'activité professionnelle, mais pas nécessairement un compte \"professionnel\". La condition essentielle est que ce compte soit exclusivement utilisé pour votre activité professionnelle, sans aucun mélange avec vos opérations personnelles. En revanche, si vous exercez en société (SELARL, SELAS, etc.), vous devez disposer d'un compte au nom de la société."
              }
            },
            {
              "@type": "Question",
              "name": "Les banques peuvent-elles refuser que j'utilise un compte personnel pour mon activité libérale ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, certaines banques peuvent l'interdire dans leurs conditions générales d'utilisation. Il est donc recommandé de vérifier les CGU de votre banque ou de les informer de votre intention. Si votre banque actuelle refuse, plusieurs banques en ligne acceptent explicitement cette pratique. Dans tous les cas, il est préférable d'être transparent avec votre établissement bancaire pour éviter tout blocage ultérieur de votre compte."
              }
            },
            {
              "@type": "Question",
              "name": "L'administration fiscale peut-elle contester l'utilisation d'un compte personnel comme compte dédié ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non, tant que ce compte est exclusivement utilisé pour votre activité professionnelle. L'administration fiscale s'intéresse à la séparation claire entre vos opérations professionnelles et personnelles, pas à la nature commerciale du produit bancaire. Lors d'un contrôle fiscal, vous devrez simplement démontrer que toutes les opérations sur ce compte sont liées à votre activité professionnelle. La tenue rigoureuse de votre comptabilité sera votre meilleure protection."
              }
            },
            {
              "@type": "Question",
              "name": "Quels services bancaires sont vraiment essentiels pour une profession libérale ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les services véritablement indispensables pour la plupart des professions libérales sont relativement basiques : un compte courant avec RIB, une carte bancaire pour les achats professionnels, des virements et prélèvements, et un accès en ligne pour suivre vos opérations. Les autres services (terminaux de paiement, remises de chèques groupées, assurances spécifiques, etc.) dépendent de votre activité particulière et de votre volume d'opérations. Ne souscrivez qu'aux services dont vous avez réellement besoin."
              }
            },
            {
              "@type": "Question",
              "name": "Comment justifier auprès des clients professionnels que je n'ai pas de compte professionnel ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vos clients ne peuvent pas connaître la nature exacte de votre compte bancaire. Sur vos factures et coordonnées bancaires, seul apparaît le RIB/IBAN qui ne révèle pas s'il s'agit d'un compte personnel ou professionnel. L'important pour vos clients est que vous disposiez d'un compte bancaire dédié à votre activité, permettant des paiements sécurisés et traçables. Si la question se pose, vous pouvez simplement indiquer que vous utilisez un compte bancaire dédié exclusivement à votre activité professionnelle, conformément à la réglementation."
              }
            }
          ]
        })
      }}
    />
  );
};

export default EconomiserFraisBancairesSchema;