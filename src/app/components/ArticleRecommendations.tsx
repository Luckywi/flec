// src/app/components/ArticleRecommendations.tsx
import Link from "next/link";

// Interface pour la structure d'une recommandation d'article
interface ArticleRecommendation {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

// Interface pour les props du composant
interface ArticleRecommendationsProps {
  recommendations: ArticleRecommendation[];
  sectionTitle?: string;
}

const ArticleRecommendations: React.FC<ArticleRecommendationsProps> = ({ 
  recommendations, 
  sectionTitle = "Articles recommandés" 
}) => {
  return (
    <section>
      <div className="section-container">
        <h3 style={{ color: "white", marginBottom: "25px"}}>
          {sectionTitle}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
          {recommendations.map((recommendation, index) => (
            <div 
              key={index} 
              style={{ 
                border: "2px solid white", 
                borderRadius: "10px", 
                padding: "20px", 
                width: "80%", 
                margin: "auto"
              }}
            >
              <h4 style={{ color: "white", marginTop: "0" }}>
                {recommendation.title}
              </h4>
              <h5 style={{ color: "white" }}>
                {recommendation.description}
              </h5>
              <Link 
                href={recommendation.link} 
                style={{
                  color: "white", 
                  textDecoration: "none", 
                  padding: "10px", 
                  display: "flex", 
                  width: "fit-content", 
                  margin: "auto", 
                  border: "2px solid white", 
                  borderRadius: "10px"
                }}
              >
                {recommendation.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleRecommendations;