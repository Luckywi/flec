import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inscription Ordre des Experts-Comptables | Cabinet Franck Lebeurre",
  description: "Inscription à l'Ordre des Experts-Comptables de Bourgogne-Franche-Comté du cabinet Franck Lebeurre Expert-Comptable. Vérifiez nos qualifications professionnelles.",
  robots: "noindex, follow",
  alternates: {
    canonical: 'https://www.francklebeurre-expertise.fr/ordre-experts-comptables',
  },
  
};

export default function InscriptionOrdre() {
  return (
    <main className="legal-info-container">
      <h1 className="titre-informations">Inscription à l&apos;Ordre des Experts-Comptables</h1>
      
      <div className="legal-info__order-logo">
        <Image 
          src="/images/Untitled 1 (1).webp" 
          alt="Logo de l'Ordre des Experts-Comptables" 
          className="legal-info__logo"
          width={300}
          height={150}
          priority
        />
      </div>
    
      <section className="legal-info__section">
        <div className="legal-info__order">
          <div className="legal-info__order-text">
            <p className="legal-info__text">
              Franck Lebeurre est inscrit à l&apos;Ordre des Experts-Comptables de Bourgogne-Franche-Comté.
            </p>
            <p className="legal-info__text">
              <strong>Numéro d&apos;inscription :</strong> 06-00003741-01
            </p>
            <p className="legal-info__text">
              <strong>Date d&apos;inscription :</strong> 20/01/2022
            </p>
            <p className="legal-info__text">
              Conformément aux articles 114 et suivants du décret du 30 mars 2012, FRANCK LEBEURRE EXPERT COMPTABLE est couvert par une assurance responsabilité civile professionnelle.
            </p>
            <p className="legal-info__text">
              Pour vérifier cette inscription, vous pouvez consulter le{" "}
              <a 
                href="https://www.experts-comptables.fr/annuaire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="legal-info__link"
              >
                tableau de l&apos;Ordre des Experts-Comptables
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}