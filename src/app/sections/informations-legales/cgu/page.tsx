import { Metadata } from "next";
import  Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Cabinet Franck Lebeurre",
  description: "Conditions Générales d'Utilisation du site francklebeurre-expertise.fr : modalités d'utilisation, propriété intellectuelle, protection des données et conditions d'accès.",
  robots: "noindex, follow",
};

export default function CGU() {
  // Contenu de l'accordéon pour les CGU
  const cguItems = [
    {
      id: "item1",
      title: "1 - Objet et acceptation des CGU",
      content: (
        <>
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités d&apos;utilisation du site www.francklebeurre-expertise.fr (ci-après &quot;le Site&quot;), édité par FRANCK LEBEURRE EXPERT COMPTABLE.
          </p>
          <p>
            En accédant au Site, vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce Site.
          </p>
        </>
      ),
    },
    {
      id: "item2",
      title: "2 - Mentions légales",
      content: (
        <>
          <p>
            Le Site est édité par :
          </p>
          <ul>
            <li>EURL Lebeurre Franck</li>
            <li>Société : FRANCK LEBEURRE EXPERT COMPTABLE</li>
            <li>Capital social : 10 000,00 €</li>
            <li>SIREN : 909112179</li>
            <li>PRCS : 909 112 179 R.C.S. Macon</li>
            <li>Adresse : 154 RUE ANDRE DERAIN 71000 MACON</li>
            <li>Directeur de la publication : Lucky Lebeurre - Contact : luckyleb@icloud.com</li>
          </ul>
          <p>
            Hébergeur du Site : HOSTINGER, 61 Lordou Vironos Street, 6023 Larnaca, Chypre
          </p>
        </>
      ),
    },
    {
      id: "item3",
      title: "3 - Services proposés",
      content: (
        <>
          <p>
            Le Site a pour objet de présenter les services d&apos;expertise comptable proposés par FRANCK LEBEURRE EXPERT COMPTABLE.<br /> Il permet aux utilisateurs de :
          </p>
          <ul>
            <li>Consulter des informations sur les services d&apos;expertise comptable</li>
            <li>Prendre contact via un formulaire pour une demande de rendez-vous</li>
          </ul>
          <p>
            Le processus de prise de contact comprend :
          </p>
          <ol>
            <li>Un premier rendez-vous en visioconférence pour prendre connaissance de vos particularités et lister vos attentes.</li>
            <li>La rédaction d&apos;une synthèse mettant en évidence nos solutions, qui vous sera envoyée par email.</li>
            <li>Un deuxième rendez-vous téléphonique pour un débriefing sur les solutions proposées.</li>
          </ol>
        </>
      ),
    },
    {
      id: "item4",
      title: "4 - Propriété intellectuelle",
      content: (
        <>
          <p>
            L&apos;ensemble des éléments du Site (textes, images, logos, etc.) est protégé par le droit de la propriété intellectuelle. Ces éléments sont la propriété exclusive de FRANCK LEBEURRE EXPERT COMPTABLE.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de FRANCK LEBEURRE EXPERT COMPTABLE.
          </p>
        </>
      ),
    },
    {
      id: "item5",
      title: "5 - Protection des données personnelles",
      content: (
        <p>
          Les données personnelles collectées sur le Site sont traitées conformément à notre Politique de Confidentialité, accessible sur le Site. En utilisant le Site, vous consentez à notre Politique de Confidentialité.
        </p>
      ),
    },
    {
      id: "item6",
      title: "6 - Limitation de responsabilité",
      content: (
        <>
          <p>
            FRANCK LEBEURRE EXPERT COMPTABLE s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des informations diffusées sur le Site.<br /> Cependant, FRANCK LEBEURRE EXPERT COMPTABLE ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur le Site.
          </p>
          <p>
            FRANCK LEBEURRE EXPERT COMPTABLE décline toute responsabilité :
          </p>
          <ul>
            <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site ;</li>
            <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations mises à disposition sur le Site ;</li>
            <li>Et plus généralement, pour tous dommages, directs ou indirects, quelles qu&apos;en soient les causes, origines, nature ou conséquences, provoqués à raison de l&apos;accès de quiconque au Site ou de l&apos;impossibilité d&apos;y accéder.</li>
          </ul>
        </>
      ),
    },
    {
      id: "item7",
      title: "7 - Modification des CGU",
      content: (
        <p>
          FRANCK LEBEURRE EXPERT COMPTABLE se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
        </p>
      ),
    },
    {
      id: "item8",
      title: "8 - Droit applicable et juridiction compétente",
      content: (
        <p>
          Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>
      ),
    },
  ];

  return (
    <main>
      <h1 className="titre-informations">Conditions Générales d&apos;Utilisation</h1>
      
      {/* Section accordéon */}
      <Accordion items={cguItems} />
    </main>
  );
}