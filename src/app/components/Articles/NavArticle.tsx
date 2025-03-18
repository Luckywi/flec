import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  title: string;
  level: number;
}

interface NavArticleProps {
  items: NavItem[];
}

export default function NavArticle({ items }: NavArticleProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Fonction pour scroller vers une section quand on clique sur un élément de navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset pour ne pas coller au haut de l'écran
        behavior: 'smooth'
      });
    }
  };

  // Observer pour détecter quelle section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px'
      }
    );

    // Observer toutes les sections
    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  return (
    <nav className="article-nav">
      <h2 className="nav-title">Dans cet article</h2>
      <ul className="nav-list">
        {items.map(item => (
          <li 
            key={item.id} 
            className={`nav-item level-${item.level} ${activeId === item.id ? 'active' : ''}`}
          >
            <button 
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}