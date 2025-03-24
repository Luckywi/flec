import { Metadata } from "next";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Franck Lebeurre",
  description: "Mentions légales du cabinet d'expertise comptable Franck Lebeurre : informations légales, propriété intellectuelle et conditions d'utilisation.",
  robots: "noindex, follow",

  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/mentions-legales',
  },
  
};

export default function MentionsLegales() {
  // Contenu de l'accordéon pour les mentions légales
  const mentionsItems = [
    {
      id: "item1",
      title: "1 - Édition du site",
      content: (
        <p>
          En vertu de <u>l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004</u> pour la confiance dans l&apos;économie
          numérique, il est précisé aux utilisateurs du site internet <strong>www.francklebeurre-expertise.fr</strong>
          l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi: <br /><br />

          <strong>Propriétaire du site :</strong> Franck Lebeurre <br />
          <strong>Société :</strong> FRANCK LEBEURRE EXPERT COMPTABLE <br />
          <strong>Contact :</strong> f.lebeurre@gmail.com 0698780844 <br />
          <strong>Adresse :</strong> 154 RUE ANDRE DERAIN 71000 MACON.<br />

          <strong>Identification de l&apos;entreprise :</strong> EURL Lebeurre Franck <br />
          <strong>Société : </strong> FRANCK LEBEURRE EXPERT COMPTABLE au capital social de 10 000,00 € <br />
          <strong>SIREN : </strong> 909112179 <br />
          <strong>PRCS : </strong> 909 112 179 R.C.S. Macon <br />
          <strong>Adresse postale : </strong> 154 RUE ANDRE DERAIN 71000 MACON <br />

          <strong>Directeur de la publication : </strong> Lucky Lebeurre - Contact : luckyleb@icloud.com <br />

          <strong>Hébergeur : </strong> HOSTINGER 61 Lordou Vironos Street, 6023 Larnaca, Chypre
          https://www.hostinger.fr/contact<br />

          <strong>Délégué à la protection des données : </strong> Franck Lebeurre - f.lebeurre@gmail.com<br />
        </p>
      ),
    },
    {
      id: "item2",
      title: "2 - Propriété intellectuelle et contrefaçons",
      content: (
        <p>
          <strong>Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE</strong> est propriétaire des droits de propriété
          intellectuelle et détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet,
          notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons. <br /> <br />

          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de
          <strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE</strong>. <br /> <br />

          Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera
          considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles
          <u>L.335-2 et suivants du Code de Propriété Intellectuelle</u>.
        </p>
      ),
    },
    {
      id: "item3",
      title: "3 - Limitations de responsabilité",
      content: (
        <p>
          <strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE </strong>ne pourra être tenu pour responsable des
          dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site
          https://www.francklebeurre-expertise.fr/.<br /><br />

          <strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE </strong>décline toute responsabilité quant à
          l&apos;utilisation qui pourrait être faite des informations et contenus présents sur
          https://www.francklebeurre-expertise.fr/.<br /><br />

          <strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE </strong>s&apos;engage à sécuriser au mieux le site
          https://www.francklebeurre-expertise.fr/, cependant sa responsabilité ne pourra être mise en cause si
          des données indésirables sont importées et installées sur son site à son insu. <br /><br />

          Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs.
          <strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE </strong>se réserve le droit de supprimer, sans mise
          en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation
          applicable en France, en particulier aux dispositions relatives à la protection des données. <br /> <br />

          Le cas échéant,<strong> Lebeurre Franck - Société : FRANCK LEBEURRE EXPERT COMPTABLE </strong>se réserve également la
          possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas
          de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support
          utilisé (texte, photographie …).
        </p>
      ),
    },
    {
      id: "item4",
      title: "4 - CNIL et gestion des données personnelles",
      content: (
        <p>
          Conformément aux dispositions de <u>la loi 78-17 du 6 janvier 1978 modifiée</u>, l&apos;utilisateur du site
          https://www.francklebeurre-expertise.fr/ dispose d&apos;un droit d&apos;accès, de modification et de suppression
          des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection
          des Données : <strong>Lebeurre Franck - f.lebeurre@gmail.com</strong>.<br /><br />

          Pour plus d&apos;informations sur la façon dont nous traitons vos données (type de données, finalité,
          destinataire...), lisez notre politique de confidentialité.
        </p>
      ),
    },
    {
      id: "item5",
      title: "5 - Liens hypertextes et cookies",
      content: (
        <p>
          Le site https://www.francklebeurre-expertise.fr/ contient des liens hypertextes vers d&apos;autres sites et
          dégage toute responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres sites vers
          https://www.francklebeurre-expertise.fr/.<br /><br />

          La navigation sur le site https://www.francklebeurre-expertise.fr/ est susceptible de provoquer
          l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur.<br /><br />

          Un &quot;cookie&quot; est un fichier de petite taille qui enregistre des informations relatives à la navigation
          d&apos;un utilisateur sur un site. Les données ainsi obtenues permettent d&apos;obtenir des mesures de
          fréquentation, par exemple.<br /><br />

          Vous avez la possibilité d&apos;accepter ou de refuser les cookies en modifiant les paramètres de votre
          navigateur. Aucun cookie ne sera déposé sans votre consentement.<br /><br />

          Les cookies sont enregistrés pour une durée maximale de 6 mois.<br /><br />

          Pour plus d&apos;informations sur la façon dont nous faisons usage des cookies, lisez notre
          politique de confidentialité.<br />
        </p>
      ),
    },
    {
      id: "item6",
      title: "6 - Droit applicable et attribution de juridiction",
      content: (
        <p>
          Tout litige en relation avec l&apos;utilisation du site https://www.francklebeurre-expertise.fr/ est soumis
          au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de
          juridiction aux tribunaux compétents de Mâcon.
        </p>
      ),
    },
  ];

  return (
    <main>
      <h1 className="titre-informations">Mentions légales</h1>
      
      {/* Section accordéon */}
      <Accordion items={mentionsItems} />
    </main>
  );
}