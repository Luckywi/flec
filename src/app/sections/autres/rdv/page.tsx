import { Metadata } from "next";
import { Suspense } from "react";
import RdvFormClient from "./RdvFormClient";

export const metadata: Metadata = {
    title: "Prenez Rendez-vous Gratuitement | Analyse Offerte | Cabinet Franck Lebeurre",
    description: "Obtenez une analyse gratuite de votre situation par un expert-comptable en 24h. Rendez-vous en visioconférence, analyse personnalisée et débriefing téléphonique. Accompagnement sur mesure pour votre activité.",
    keywords: "rendez-vous expert-comptable, analyse comptable gratuite, consultation comptable, visioconférence expert-comptable, premier contact cabinet comptable",

    alternates: {
      canonical: 'https://www.francklebeurre-expertise.fr/rendez-vous',
    },  
  };
  
export default function RDV() {
  return (
    <main>
      {/* Titre et description */}
      <section>
        <div className="section-container-rdv">
          <h1 style={{ marginTop: "20px" }}>Obtenez une date de rendez-vous avec un expert-comptable en moins de 24h !</h1>
          <p>
            Préalablement à toute éventuelle mission, <strong>nous vous offrons une analyse GRATUITE de votre situation</strong> par un
            expert-comptable.
          </p>
        </div>
      </section>

      {/* Suspense pour charger le composant client qui contient le carousel et l'iframe */}
      <Suspense fallback={<div className="loading-container">Chargement du formulaire...</div>}>
        <RdvFormClient />
      </Suspense>
    </main>
  );
}