// Types pour les articles
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string[];
}

// Fonction pour extraire l'ID de la vidéo YouTube à partir de l'URL
export function getYoutubeId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

// Fonction pour obtenir la miniature YouTube
export function getYoutubeThumbnail(url: string): string {
  const videoId = getYoutubeId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Données des articles
export const articles: Article[] = [
  {
    id: "nouvelle-activite-liberale",
    title: "Nouvelle activité libérale : les conseils d'un expert-comptable !",
    excerpt: "Vous démarrez une activité en libéral ? Découvrez les conseils essentiels d'un expert-comptable pour bien débuter et optimiser votre situation fiscale et sociale.",
    content: `
# Nouvelle activité libérale : les conseils d'un expert-comptable !

Vous envisagez de vous lancer en profession libérale ou vous venez tout juste de commencer ? Ce guide vous apportera les conseils essentiels pour réussir votre démarrage.

## Les fondamentaux à connaître

Lorsque l'on démarre une activité libérale, plusieurs choix s'offrent à vous qui auront un impact significatif sur votre avenir :

- **Le choix du régime fiscal** : micro-BNC ou déclaration contrôlée
- **Le choix du régime social** : travailleur indépendant ou assimilé salarié
- **La structure juridique** : exercice en nom propre ou en société

Ces décisions doivent être prises en fonction de votre situation personnelle, de vos objectifs de revenus et de votre vision à long terme.

## Les erreurs à éviter

Nombreux sont les nouveaux professionnels libéraux qui commettent des erreurs coûteuses par méconnaissance :

1. Choisir le micro-BNC par simplicité sans en mesurer l'impact fiscal
2. Ne pas anticiper les charges sociales et se retrouver en difficulté de trésorerie
3. Mélanger comptes personnels et professionnels
4. Négliger la protection sociale et la prévoyance

## Les conseils d'optimisation

Pour maximiser vos chances de succès :

- Consultez un expert-comptable avant même de commencer votre activité
- Établissez un prévisionnel financier sur 3 ans
- Anticipez vos charges sociales dès le premier mois
- Séparez strictement vos finances personnelles et professionnelles
- Mettez en place un suivi de trésorerie dès le début

## Conclusion

Le démarrage d'une activité libérale nécessite une préparation minutieuse et un accompagnement adapté. N'hésitez pas à vous faire accompagner par un professionnel pour éviter les pièges et optimiser votre situation dès le départ.
    `,
    date: "2024-03-15",
    videoUrl: "https://www.youtube.com/watch?v=VzZ-DZ64-xY&t=2s",
    thumbnailUrl: "",
    tags: ["activité libérale", "création d'entreprise", "fiscalité", "expert-comptable"]
  },
  {
    id: "regime-fiscal-liberal",
    title: "Activité libérale : Quel régime fiscal choisir ?",
    excerpt: "Micro-BNC ou déclaration contrôlée ? Découvrez les avantages et inconvénients de chaque régime fiscal pour votre activité libérale et optimisez votre situation fiscale.",
    content: `
# Activité libérale : Quel régime fiscal choisir ?

Le choix du régime fiscal est une décision cruciale qui aura un impact considérable sur votre activité libérale. Cet article vous aide à comprendre les différentes options et à faire le choix le plus avantageux pour votre situation.

## Les deux principaux régimes fiscaux

### Le régime micro-BNC

Le régime micro-BNC est caractérisé par :
- Une simplicité administrative (pas de comptabilité détaillée à tenir)
- Un abattement forfaitaire de 34% sur vos recettes
- Un plafond de chiffre d'affaires de 77 700 € (2025)
- L'impossibilité de déduire les charges réelles

### La déclaration contrôlée

La déclaration contrôlée implique :
- Une tenue de comptabilité plus rigoureuse
- La déduction des charges réelles de votre activité
- Pas de plafond de chiffre d'affaires
- L'obligation d'adhérer à une AGA (Association de Gestion Agréée) pour éviter une majoration fiscale

## Comment choisir ?

### Le micro-BNC est généralement plus avantageux si :
- Vos charges professionnelles sont inférieures à 34% de vos recettes
- Vous démarrez votre activité et recherchez la simplicité
- Vous exercez une activité à temps partiel ou avec peu de frais professionnels

### La déclaration contrôlée est préférable lorsque :
- Vos charges réelles dépassent 34% de vos recettes
- Vous réalisez des investissements importants
- Vous souhaitez optimiser fiscalement votre activité
- Votre chiffre d'affaires se rapproche du plafond du micro-BNC

## L'impact concret sur votre fiscalité

Prenons l'exemple d'un professionnel libéral qui génère 50 000 € de recettes annuelles :

**Avec le micro-BNC :**
- Abattement forfaitaire de 17 000 € (34% de 50 000 €)
- Bénéfice imposable de 33 000 €

**Avec la déclaration contrôlée :**
- Si les charges réelles s'élèvent à 25 000 €
- Bénéfice imposable de 25 000 €

La différence de 8 000 € sur le bénéfice imposable peut représenter une économie substantielle d'impôt sur le revenu et de charges sociales.

## Conclusion

Le choix du régime fiscal ne doit pas être fait à la légère. Une analyse approfondie de votre situation, idéalement avec l'aide d'un expert-comptable, vous permettra d'opter pour le régime le plus avantageux et adapté à votre activité libérale.
    `,
    date: "2024-01-25",
    videoUrl: "https://www.youtube.com/watch?v=QMNLrH-rHMo",
    thumbnailUrl: "",
    tags: ["régime fiscal", "micro-BNC", "déclaration contrôlée", "fiscalité", "professions libérales"]
  },
  {
    id: "optimisation-frais-bancaires",
    title: "Économisez sur vos frais bancaires en libéral !",
    excerpt: "Compte professionnel ou personnel pour votre activité libérale ? Découvrez les enjeux, obligations et stratégies pour optimiser vos frais bancaires et éviter les pièges.",
    content: `
# Économisez sur vos frais bancaires en libéral !

La gestion de vos comptes bancaires en tant que professionnel libéral est un aspect important qui peut impacter votre trésorerie. Cet article fait le point sur les bonnes pratiques et les optimisations possibles.

## Compte professionnel vs compte personnel

### Les obligations légales

Contrairement aux idées reçues, aucune loi n'oblige formellement les professionnels libéraux à avoir un compte bancaire professionnel distinct. Cependant :
- L'URSSAF recommande fortement cette séparation
- Les règles fiscales imposent une distinction claire entre opérations privées et professionnelles
- Un compte dédié facilite considérablement le contrôle fiscal

### Les avantages d'un compte professionnel

Malgré son coût, un compte professionnel offre plusieurs avantages :
- Une séparation claire qui facilite votre comptabilité
- Des services adaptés aux professionnels (TPE, paiements professionnels)
- Une image professionnelle renforcée
- La possibilité de négocier des prêts professionnels plus facilement

## Comment optimiser vos frais bancaires ?

### 1. Comparer les offres

Les frais bancaires peuvent varier considérablement d'un établissement à l'autre :
- Banques en ligne (généralement moins chères)
- Banques traditionnelles (services plus complets mais plus coûteux)
- Néobanques spécialisées pour les professionnels

### 2. Négocier les tarifs

N'hésitez pas à :
- Demander un package adapté à votre activité
- Négocier les frais de tenue de compte
- Obtenir des réductions sur les services que vous utilisez réellement

### 3. Optimiser l'utilisation de votre compte

Quelques bonnes pratiques :
- Éviter les découverts non autorisés
- Limiter les opérations au guichet souvent facturées
- Privilégier les virements aux chèques
- Revoir annuellement vos besoins et services souscrits

## Solutions innovantes pour les libéraux

De nouvelles solutions bancaires spécialement conçues pour les indépendants et professions libérales ont émergé :
- Comptes professionnels sans frais mensuels fixes
- Solutions de comptabilité intégrées
- Applications de suivi de trésorerie en temps réel
- Cartes bancaires avec catégorisation automatique des dépenses

## Conclusion

Le choix de votre solution bancaire mérite une réflexion approfondie. Une bonne stratégie peut vous permettre d'économiser plusieurs centaines d'euros par an tout en simplifiant votre gestion administrative. N'hésitez pas à consulter votre expert-comptable pour des conseils personnalisés.
    `,
    date: "2023-12-05",
    videoUrl: "https://www.youtube.com/watch?v=xJ8DhYibs5Q",
    thumbnailUrl: "",
    tags: ["frais bancaires", "compte professionnel", "optimisation", "professions libérales", "gestion"]
  }
  // Vous pourrez ajouter d'autres articles ici en suivant le même modèle
];

// Calculer les URLs des miniatures pour chaque article
articles.forEach(article => {
  if (!article.thumbnailUrl) {
    article.thumbnailUrl = getYoutubeThumbnail(article.videoUrl);
  }
});