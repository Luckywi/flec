import { Metadata } from "next";
import Link from "next/link";
import CabinetNav from "@/app/components/CabinetNav";
import { getAllArticles } from "@/app/data/articlesData";
import ArticleList from "@/app/components/articles/ArticleList";

export const metadata: Metadata = {
  title: "Ressources et Actualités | Cabinet Franck Lebeurre | Articles et Conseils",
  description: "Découvrez nos articles, guides et vidéos sur l'actualité comptable, fiscale et entrepreneuriale. Des ressources pratiques pour vous accompagner dans le développement de votre activité.",
};

export default function RessourcesPage() {
  const articles = getAllArticles();

  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <CabinetNav
          activeSection="ressources"
          backgroundImage="/images/fleur11.webp"
          title="Ressources"
        />
      </section>

      <section>
        <div className="section-container">
          <h1>Ressources et Actualités</h1>
          <p>
            Découvrez nos articles, guides et vidéos sur l&apos;actualité comptable, fiscale et entrepreneuriale. 
            Des ressources pratiques pour vous accompagner dans le développement de votre activité.
          </p>
          <Link href="/sections/autres/rdv" className="cta-button">
            Obtenir un rendez-vous<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Liste des articles */}
      <ArticleList articles={articles} />
    </main>
  );
}