import Link from "next/link";

interface CabinetNavProps {
  activeSection: "presentation" | "nos-bureaux" | "notre-equipe" | "ressources";
  backgroundImage: string;
  title: string;
}

export default function CabinetNav({ activeSection, backgroundImage, title }: CabinetNavProps) {
  return (
    <div 
      className="nav-title-container" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')` 
      }}
    >
      <nav className="nav-with-title">
        <Link 
          href="/cabinet/presentation" 
          className={`nav-item ${activeSection === "presentation" ? "active" : ""}`}
        >
          <i className="fas fa-search"></i>
          Présentation
        </Link>
        <Link 
          href="/cabinet/bureaux" 
          className={`nav-item ${activeSection === "nos-bureaux" ? "active" : ""}`}
        >
          <i className="fas fa-home"></i>
          Nos bureaux
        </Link>
        <Link 
          href="/cabinet/equipe" 
          className={`nav-item ${activeSection === "notre-equipe" ? "active" : ""}`}
        >
          <i className="fas fa-users"></i>
          Notre équipe
        </Link>
        <Link 
          href="/ressources" 
          className={`nav-item ${activeSection === "ressources" ? "active" : ""}`}
        >
          <i className="fas fa-lightbulb"></i>
          Ressources
        </Link>
        <h1 className="nav-title">{title}</h1>
      </nav>
    </div>
  );
}