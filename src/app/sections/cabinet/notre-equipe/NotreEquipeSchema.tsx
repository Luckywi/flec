// src/app/sections/cabinet/notre-equipe/NotreEquipeSchema.tsx

const NotreEquipeSchema = () => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "AccountingService"],
            "@id": "https://www.francklebeurre-expertise.fr/cabinet/equipe",
            "name": "Cabinet Franck Lebeurre Expert-Comptable",
            "description": "Cabinet d'expertise comptable avec une équipe pluridisciplinaire spécialisée dans l'accompagnement des professions libérales, SCI, LMNP et gestion de paie.",
            "url": "https://www.francklebeurre-expertise.fr/cabinet/equipe",
            "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
            "telephone": "+33698780844",
            "email": "contact@fl-ec.fr",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "154 Rue André Derain, ZAC Grand Sud",
              "addressLocality": "Mâcon",
              "postalCode": "71000",
              "addressCountry": "FR"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Franck Lebeurre",
                "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
                "jobTitle": "Expert-Comptable",
                "description": "Expert-comptable et bien plus encore!",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Sophie",
                "image": "https://www.francklebeurre-expertise.fr/images/sophie2.webp",
                "jobTitle": "Cheffe de mission",
                "description": "Omnipotente tendance geek à ses heures.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Priscillia",
                "image": "https://www.francklebeurre-expertise.fr/images/priscillia.webp",
                "jobTitle": "Collaboratrice",
                "description": "Spécialiste des professions libérales et LMNP.",
                "knowsAbout": ["Professions libérales", "LMNP"],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Deborah",
                "image": "https://www.francklebeurre-expertise.fr/images/deborah.webp",
                "jobTitle": "Collaboratrice",
                "description": "Spécialiste des professions libérales et SCI.",
                "knowsAbout": ["Professions libérales", "SCI"],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Annabelle",
                "image": "https://www.francklebeurre-expertise.fr/images/annabelle.webp",
                "jobTitle": "Collaboratrice",
                "description": "Spécialiste des professions libérales et PAIES.",
                "knowsAbout": ["Professions libérales", "Gestion de paie"],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Nicolas",
                "image": "https://www.francklebeurre-expertise.fr/images/nicola.webp",
                "jobTitle": "Chef de mission",
                "description": "Expérimenté et remarquablement adaptable.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              },
              {
                "@type": "Person",
                "name": "Lucky",
                "image": "https://www.francklebeurre-expertise.fr/images/lucky.webp",
                "jobTitle": "Web manager",
                "description": "Le développement de votre activité, c'est lui.",
                "knowsAbout": ["Web marketing", "Développement d'activité"],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cabinet Franck Lebeurre Expert-Comptable"
                }
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Expertises spécialisées",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Expertise professions libérales",
                    "description": "Expertise comptable spécialisée pour les professions libérales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gestion des SCI",
                    "description": "Accompagnement comptable et fiscal pour les Sociétés Civiles Immobilières"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Expertise LMNP",
                    "description": "Expertise comptable pour la Location Meublée Non Professionnelle"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gestion de paie",
                    "description": "Service de gestion des paies pour les entreprises"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement web marketing",
                    "description": "Stratégies de développement et marketing web pour votre activité"
                  }
                }
              ]
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:30"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/in/franck-lebeurre/",
              "https://www.youtube.com/@FranckLebeurreExpert-Comptable"
            ]
          })
        }}
      />
    );
  };
  
  export default NotreEquipeSchema;