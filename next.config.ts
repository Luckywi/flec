/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
    // OU utiliser remotePatterns pour plus de sécurité
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
  
  // Routes personnalisées pour améliorer le SEO
  async rewrites() {
    return [
      // Pages principales - Le métier
      {
        source: '/expertise-comptable',
        destination: '/sections/metier/expertise-comptable',
      },
      {
        source: '/professions-liberales',
        destination: '/sections/metier/professions-liberales',
      },
      {
        source: '/gestion-de-patrimoine',
        destination: '/sections/metier/gestion-de-patrimoine',
      },
      {
        source: '/solutions-sur-mesure',
        destination: '/sections/metier/solutions-sur-mesure',
      },
      
      // Pages de solutions
      {
        source: '/solutions/cloud',
        destination: '/sections/solutions/cloud',
      },
      {
        source: '/solutions/modulation-charges',
        destination: '/sections/solutions/modulation',
      },
      {
        source: '/solutions/optimisation-fiscale',
        destination: '/sections/solutions/optimisation',
      },
      {
        source: '/solutions/previsionnels',
        destination: '/sections/solutions/previsionnels',
      },
      {
        source: '/solutions/saisie-comptable',
        destination: '/sections/solutions/saisie-des-donnees',
      },
      {
        source: '/solutions/web-marketing',
        destination: '/sections/solutions/web-master',
      },
      
      // Pages du cabinet
      {
        source: '/cabinet/presentation',
        destination: '/sections/cabinet/presentation',
      },
      {
        source: '/cabinet/bureaux',
        destination: '/sections/cabinet/nos-bureaux',
      },
      {
        source: '/cabinet/equipe',
        destination: '/sections/cabinet/notre-equipe',
      },
      {
        source: '/ressources',
        destination: '/sections/cabinet/ressources',
      },
      
      // Articles de blog avec URLs optimisées
      {
        source: '/articles/per-optimisation-fiscale',
        destination: '/sections/cabinet/ressources/articles/per-optimisation-fiscale',
      },
      {
        source: '/articles/anticipation-charges-liberales',
        destination: '/sections/cabinet/ressources/articles/anticipation-charges-liberales',
      },
      {
        source: '/articles/definir-remuneration-liberale',
        destination: '/sections/cabinet/ressources/articles/definir-remuneration-liberale',
      },
      {
        source: '/articles/economiser-frais-bancaires-liberal',
        destination: '/sections/cabinet/ressources/articles/economiser-frais-bancaires-liberal',
      },
      {
        source: '/articles/regime-fiscal-liberal',
        destination: '/sections/cabinet/ressources/articles/regime-fiscal-liberal',
      },
      {
        source: '/articles/remuneration-activite-liberale',
        destination: '/sections/cabinet/ressources/articles/remuneration-activite-liberale',
      },
      {
        source: '/articles/voiture-optimisation-fiscale',
        destination: '/sections/cabinet/ressources/articles/voiture-optimisation-fiscale',
      },
      
      // Pages utiles
      {
        source: '/rendez-vous',
        destination: '/sections/autres/rdv',
      },
      {
        source: '/contact',
        destination: '/sections/autres/rdv',
      },
      
      // Pages légales avec URLs plus courtes mais toujours descriptives
      {
        source: '/mentions-legales',
        destination: '/sections/informations-legales/mentions-legales',
      },
      {
        source: '/politique-de-confidentialite',
        destination: '/sections/informations-legales/politique-de-confidentialite',
      },
      {
        source: '/conditions-utilisation',
        destination: '/sections/informations-legales/cgu',
      },
      {
        source: '/ordre-experts-comptables',
        destination: '/sections/informations-legales/inscription-ordre-experts-comptables',
      },
    ];
  },
};

export default nextConfig;