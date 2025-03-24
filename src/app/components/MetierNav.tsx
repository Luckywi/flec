import Link from "next/link";

interface ServiceNavProps {
  activeService: "expertise-comptable" | "solutions-sur-mesure" | "professions-liberales" | "gestion-de-patrimoine";
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
          href="/expertise-comptable" 
          className={`nav-item ${activeService === "expertise-comptable" ? "active" : ""}`}
        >
          <i className="fas fa-calculator"></i>
          Expertise comptable
        </Link>
        <Link 
          href="/solutions-sur-mesure" 
          className={`nav-item ${activeService === "solutions-sur-mesure" ? "active" : ""}`}
        >
          <i className="fas fa-chart-line"></i>
          Solutions sur mesure
        </Link>
        <Link 
          href="/professions-liberales" 
          className={`nav-item ${activeService === "professions-liberales" ? "active" : ""}`}
        >
          <i className="fas fa-briefcase"></i>
          Professions libérales
        </Link>
        <Link 
          href="/gestion-de-patrimoine" 
          className={`nav-item ${activeService === "gestion-de-patrimoine" ? "active" : ""}`}
        >
          <i className="fas fa-piggy-bank"></i>
          Gestion de patrimoine
        </Link>
        <h1 className="nav-title">{title}</h1>
      </nav>
    </div>
  );
}