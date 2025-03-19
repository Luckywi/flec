import { Metadata } from "next";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cabinet Franck Lebeurre",
  description: "Politique de confidentialité du cabinet d'expertise comptable Franck Lebeurre : protection des données et respect du RGPD.",
  robots: "noindex, follow",
};

export default function PolitiqueConfidentialite() {
  // Formater la date actuelle au format français
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Contenu de l'accordéon pour la politique de confidentialité
  const confidentialiteItems = [
    {
      id: "item1",
      title: "1 - Collecte des informations",
      content: (
        <>
          <p>
            Nous collectons les informations suivantes via notre formulaire de demande de contact :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Code postal</li>
            <li>Message (précisions sur vos besoins et votre situation professionnelle)</li>
          </ul>
          <p>
            Ces informations sont recueillies uniquement lorsque vous utilisez le formulaire de demande de
            contact sur notre site.
          </p>
          <p>
            De plus, nous utilisons Google Analytics, qui collecte des informations anonymes sur votre
            utilisation de notre site, telles que :
          </p>
          <ul>
            <li>Pages visitées</li>
            <li>Durée de la visite</li>
            <li>Type de navigateur et d&apos;appareil utilisé</li>
            <li>Pays d&apos;origine de la connexion</li>
          </ul>
        </>
      ),
    },
    {
      id: "item2",
      title: "2 - Utilisation et conservation des informations",
      content: (
        <>
          <p>
            Les informations que nous collectons via le formulaire de contact sont utilisées pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de renseignements</li>
            <li>Vous contacter pour un premier rendez-vous en visioconférence</li>
            <li>Préparer une synthèse personnalisée de nos solutions</li>
            <li>Organiser un deuxième rendez-vous téléphonique pour un débriefing</li>
            <li>Vous fournir des informations sur nos services d&apos;expertise comptable adaptés à votre
                situation</li>
          </ul>
          <p>
            Ces informations sont conservées dans notre base de données interne et notre circuit administratif
            privé, qui sont sécurisés et protégés contre tout accès non autorisé. Nous conservons ces données
            uniquement pour la durée nécessaire au traitement de votre demande et à la gestion de notre relation
            professionnelle.
          </p>
          <p>
            Nous ne partageons en aucun cas vos informations personnelles avec des tiers, sauf si la loi
            l&apos;exige.
          </p>
          <p>
            Les données collectées par Google Analytics sont utilisées de manière anonyme pour analyser le
            trafic sur notre site et améliorer nos services. Ces données ne sont pas liées à vos
            informations personnelles.
          </p>
        </>
      ),
    },
    {
      id: "item3",
      title: "3 - Protection des informations",
      content: (
        <>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos
            informations personnelles contre tout accès non autorisé, modification, divulgation ou
            destruction. L&apos;accès à ces informations est strictement limité aux employés qui en ont besoin
            pour traiter vos demandes et fournir nos services d&apos;expertise comptable.
          </p>
          <p>
            Nos systèmes de sécurité sont régulièrement mis à jour pour assurer la protection continue de
            vos données.
          </p>
        </>
      ),
    },
    {
      id: "item4",
      title: "4 - Cookies et technologies similaires",
      content: (
        <>
          <p>
            Notre site utilise des cookies, notamment pour Google Analytics. Ces cookies nous aident à
            analyser l&apos;utilisation du site et à améliorer votre expérience. Vous pouvez configurer votre
            navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
          </p>
          <p>
            Google Analytics utilise ses propres cookies pour générer des rapports sur l&apos;utilisation du
            site. Google peut transférer ces informations à des tiers en cas d&apos;obligation légale ou lorsque
            ces tiers traitent les informations pour le compte de Google. Nous avons activé l&apos;anonymisation
            de l&apos;IP dans Google Analytics pour assurer la collecte anonyme des adresses IP.
          </p>
        </>
      ),
    },
    {
      id: "item5",
      title: "5 - Droits des utilisateurs",
      content: (
        <>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits
            suivants concernant vos données personnelles :
          </p>
          <ul>
            <li>Droit d&apos;accès et de rectification de vos données</li>
            <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif,
            vous pouvez nous contacter à l&apos;adresse suivante : f.lebeurre@gmail.com
          </p>
        </>
      ),
    },
    {
      id: "item6",
      title: "6 - Modifications de notre politique de confidentialité",
      content: (
        <>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
            modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à
            consulter régulièrement cette page pour rester informé de tout changement concernant la
            protection de vos données personnelles.
          </p>
          <p>
            Cette politique de confidentialité a été mise à jour le {currentDate}.
          </p>
        </>
      ),
    },
  ];

  return (
    <main>
      <h1 className="titre-informations">Politique de confidentialité</h1>
      
      {/* Section accordéon */}
      <Accordion items={confidentialiteItems} />
    </main>
  );
}