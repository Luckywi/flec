import Link from "next/link";

interface ServiceNavProps {
  activeService: "cloud" | "saisie-des-donnees" | "previsionnels" | "modulation" | "optimisation" | "web-master" ;
  backgroundImage: string;
  title: string;
}

export default function ServiceNav({ activeService, backgroundImage, title }: ServiceNavProps) {
  return (
    <div 
      className="nav-title-container" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')` 
      }}
    >
      <nav className="nav-with-title">
        <Link 
          href="/sections/solutions/cloud" 
          className={`nav-item ${activeService === "cloud" ? "active" : ""}`}
        >
          <i className="fas fa-cloud"></i>
          Cloud
        </Link>
        <Link 
          href="/sections/solutions/saisie-des-donnees" 
          className={`nav-item ${activeService === "saisie-des-donnees" ? "active" : ""}`}
        >
          <i className="fas fa-keyboard"></i>
          Saisie des données
        </Link>
        <Link 
          href="/sections/solutions/previsionnels" 
          className={`nav-item ${activeService === "previsionnels" ? "active" : ""}`}
        >
          <i className="fas fa-chart-line"></i>
          Prévisionnels
        </Link>
        <Link 
          href="/sections/solutions/modulation" 
          className={`nav-item ${activeService === "modulation" ? "active" : ""}`}
        >
          <i className="fas fa-sliders-h"></i>
          Modulation
        </Link>
        <Link 
          href="/sections/solutions/optimisation" 
          className={`nav-item ${activeService === "optimisation" ? "active" : ""}`}
        >
          <i className="fas fa-rocket"></i>
          Optimisation
        </Link>
        <Link 
          href="/sections/solutions/web-master" 
          className={`nav-item ${activeService === "web-master" ? "active" : ""}`}
        >
          <i className="fas fa-code"></i>
          Web master
        </Link>
        <h1 className="nav-title">{title}</h1>
      </nav>
    </div>
  );
}