// src/app/components/SchemaOrg.tsx

const SchemaOrg = () => {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "AccountingService"],
              "@id": "https://www.francklebeurre-expertise.fr",
              "name": "Cabinet Franck Lebeurre Expert-Comptable",
              "legalName": "FRANCK LEBEURRE EXPERT COMPTABLE",
              "description": "Cabinet d'expertise comptable spécialisé dans l'accompagnement des professions libérales et entrepreneurs. Solutions personnalisées, conseils fiscaux et suivi digital à partir de 62€/mois.",
              "url": "https://www.francklebeurre-expertise.fr",
              "image": "https://www.francklebeurre-expertise.fr/images/franck.webp",
              "telephone": "+33698780844",
              "email": "contact@fl-ec.fr",
              "priceRange": "€€",
              "openingHours": "Mo-Fr 08:00-18:30",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "154 Rue André Derain, ZAC Grand Sud",
                "addressLocality": "Mâcon",
                "postalCode": "71000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.3007,
                "longitude": 4.8225
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Mâcon"
                },
                {
                  "@type": "City",
                  "name": "Lyon"
                },
                {
                  "@type": "City",
                  "name": "Bourg en Bresse"
                },
                {
                  "@type": "City",
                  "name": "Paris"
                },
                {
                  "@type": "City",
                  "name": "Nice"
                },
                {
                  "@type": "City",
                  "name": "Marseille"
                },
                {
                  "@type": "City",
                  "name": "Strasbourg"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/franck-lebeurre/",
                "https://www.youtube.com/@FranckLebeurreExpert-Comptable"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services d'expertise comptable",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Expertise comptable",
                      "description": "Services d'expertise comptable pour assurer la pérennité de votre activité",
                      "url": "https://www.francklebeurre-expertise.fr/expertise-comptable"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Professions libérales",
                      "description": "Accompagnement comptable dédié aux professions libérales à partir de 62€/mois",
                      "url": "https://www.francklebeurre-expertise.fr/professions-liberales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gestion de patrimoine",
                      "description": "Conseil en gestion et optimisation de patrimoine pour entrepreneurs",
                      "url": "https://www.francklebeurre-expertise.fr/gestion-de-patrimoine"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solutions sur mesure",
                      "description": "Solutions d'expertise comptable personnalisées selon vos besoins spécifiques",
                      "url": "https://www.francklebeurre-expertise.fr/solutions-sur-mesure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud comptable",
                      "description": "Digitalisation et accès à distance à vos données comptables",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/cloud"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Saisie des données",
                      "description": "Solution de saisie comptable simplifiée avec matrices personnalisées",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/saisie-comptable"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Prévisionnels",
                      "description": "Prévisions financières précises pour une visibilité optimale de votre activité",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/previsionnels"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Modulation",
                      "description": "Gestion optimisée des charges sociales et fiscales avec acomptes ajustés",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/modulation-charges"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Optimisation fiscale",
                      "description": "Stratégies légales d'optimisation fiscale et sociale pour réduire vos charges",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/optimisation-fiscale"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web marketing",
                      "description": "Solutions webmarketing pour développer la visibilité en ligne de votre activité",
                      "url": "https://www.francklebeurre-expertise.fr/solutions/web-marketing"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Franck Lebeurre",
                "jobTitle": "Expert-Comptable"
              },
              "foundingDate": "2022-01-02",
              "vatID": "FR62909112179",
              "taxID": "909 112 179 R.C.S. Macon",
              "isicV4": "69.20Z",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "5"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "EURL, entreprise unipersonnelle à responsabilité limitée",
                "legalName": "FRANCK LEBEURRE EXPERT COMPTABLE"
              }
            })
          }}
        />
        <link rel="canonical" href="https://www.francklebeurre-expertise.fr" />
      </>
    );
  };
  
  export default SchemaOrg;