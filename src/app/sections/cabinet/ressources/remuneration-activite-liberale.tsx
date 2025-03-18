"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Article } from "@/app/data/articlesData";

interface RemunerationArticleProps {
  article: Article;
}

export default function RemunerationArticle({ article }: RemunerationArticleProps) {
  // Formater la date au format français
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d MMMM yyyy", { locale: fr });
  };

  return (
    <div style={{
      color: "#fff",
      backgroundColor: "#000",
      fontFamily: "'Open Sans', Arial, sans-serif",
      lineHeight: 1.6,
      paddingTop: "60px",
      paddingBottom: "60px",
      minHeight: "100vh"
    }}>
      {/* Header avec navigation et métadonnées */}
      <header style={{
        padding: "40px 0",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            <Link href="/sections/cabinet/ressources" style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
              padding: "8px 16px",
              border: "1px solid #fff",
              borderRadius: "20px",
              fontSize: "0.9rem",
              transition: "all 0.3s ease"
            }}>
              <i className="fas fa-arrow-left" style={{ marginRight: "8px" }}></i> Retour aux ressources
            </Link>
            <time dateTime={article.date} style={{
              fontSize: "0.9rem",
              color: "#aaa"
            }}>
              {formatDate(article.date)}
            </time>
          </div>
          
          <h1 style={{
            fontSize: "2.5rem",
            margin: "0 0 25px",
            lineHeight: 1.2
          }}>{article.title}</h1>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "30px"
          }}>
            {article.tags.map((tag, index) => (
              <span key={index} style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                padding: "5px 15px",
                borderRadius: "20px",
                fontSize: "0.9rem"
              }}>{tag}</span>
            ))}
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px"
          }}>
            <Image 
              src={article.author.avatarUrl} 
              alt={article.author.name}
              width={48}
              height={48}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
            <div style={{ textAlign: "left" }}>
              <span style={{
                display: "block",
                fontWeight: 600,
                fontSize: "1rem"
              }}>{article.author.name}</span>
              <span style={{
                display: "block",
                color: "#aaa",
                fontSize: "0.9rem"
              }}>{article.author.title}</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Image principale */}
      
      
      {/* Sommaire pour la navigation interne */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        padding: "30px 0",
        marginBottom: "40px",
        borderRadius: "10px"
      }}>
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: "20px",
            fontSize: "1.5rem"
          }}>Sommaire</h2>
          <nav>
            <ul style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "10px 20px"
            }}>
              <li style={{ marginBottom: "10px" }}><a href="#introduction" style={{ color: "#fff", textDecoration: "none" }}>Introduction</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#specificites" style={{ color: "#fff", textDecoration: "none" }}>Les spécificités de la rémunération en profession libérale</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#calculer" style={{ color: "#fff", textDecoration: "none" }}>Comment calculer sa rémunération optimale</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#statuts" style={{ color: "#fff", textDecoration: "none" }}>Les différents statuts juridiques et leur impact fiscal</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#optimiser" style={{ color: "#fff", textDecoration: "none" }}>Optimiser sa rémunération : stratégies fiscales</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#protection" style={{ color: "#fff", textDecoration: "none" }}>La protection sociale du professionnel libéral</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#planifier" style={{ color: "#fff", textDecoration: "none" }}>Planifier sa rémunération sur le long terme</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#erreurs" style={{ color: "#fff", textDecoration: "none" }}>Erreurs courantes à éviter</a></li>
              <li style={{ marginBottom: "10px" }}><a href="#faq" style={{ color: "#fff", textDecoration: "none" }}>FAQ : Rémunération des professions libérales</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Vidéo YouTube */}
      <div style={{ marginBottom: "50px" }}>
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            margin: "2rem 0 1rem",
            color: "#fff"
          }}>Vidéo explicative</h2>
          <p style={{
            marginBottom: "1.2rem",
            fontSize: "1.05rem",
            color: "#ddd"
          }}>Découvrez notre explication détaillée en vidéo sur ce sujet important :</p>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%", /* Ratio 16:9 */
            height: 0,
            overflow: "hidden",
            marginTop: "20px",
            borderRadius: "10px",
            backgroundColor: "#111"
          }}>
            <iframe
              src="https://www.youtube.com/embed/VzZ-DZ64-xY"
              title="Activité libérale : Comment définir sa rémunération ?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none"
              }}
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Contenu principal de l'article */}
      <article style={{ marginBottom: "60px" }}>
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <section id="introduction" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Introduction</h2>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Définir sa rémunération lorsqu&apos;on exerce une <strong style={{ color: "#fff", fontWeight: 600 }}>profession libérale</strong> est une décision stratégique qui impacte non seulement 
              votre quotidien financier, mais aussi la pérennité de votre activité et votre protection sociale. Que vous soyez médecin, avocat, 
              architecte, consultant ou tout autre <strong style={{ color: "#fff", fontWeight: 600 }}>professionnel libéral</strong>, ce guide vous accompagne dans la détermination de votre 
              rémunération idéale en 2025.
            </p>
          </section>

          <section id="specificites" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Les spécificités de la rémunération en profession libérale</h2>
            
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Contrairement aux salariés, les <strong style={{ color: "#fff", fontWeight: 600 }}>professionnels libéraux</strong> bénéficient d&apos;une grande liberté dans la fixation de leur 
              rémunération, mais cette liberté s&apos;accompagne de responsabilités particulières.
            </p>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Différence entre chiffre d&apos;affaires et rémunération</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Le <strong style={{ color: "#fff", fontWeight: 600 }}>chiffre d&apos;affaires</strong> (CA) généré par votre activité libérale n&apos;est pas votre rémunération nette. 
              Votre <strong style={{ color: "#fff", fontWeight: 600 }}>revenu professionnel</strong> est ce qui reste après déduction de l&apos;ensemble des charges :
            </p>
            
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Charges professionnelles (loyer, matériel, fournitures, etc.)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}><strong style={{ color: "#fff", fontWeight: 600 }}>Cotisations sociales</strong> (URSSAF, retraite, prévoyance)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Impôts professionnels (CFE, CVAE selon les cas)</li>
            </ul>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #4d9fff"
            }}>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                <strong style={{ color: "#fff", fontWeight: 600 }}>Bon à savoir :</strong> En moyenne, les charges représentent entre 40% et 60% du chiffre d&apos;affaires d&apos;un professionnel 
                libéral, selon le secteur d&apos;activité.
              </p>
            </div>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>L&apos;impact du régime fiscal</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Votre <strong style={{ color: "#fff", fontWeight: 600 }}>régime fiscal</strong> influence directement votre rémunération :
            </p>
            
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}><strong style={{ color: "#fff", fontWeight: 600 }}>Micro-BNC</strong> : abattement forfaitaire de 34% sur le CA (idéal pour les activités avec peu de charges)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}><strong style={{ color: "#fff", fontWeight: 600 }}>Déclaration contrôlée</strong> : déduction des charges réelles (plus avantageux quand les charges sont élevées)</li>
            </ul>
          </section>

          <section id="calculer" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Comment calculer sa rémunération optimale</h2>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Étape 1 : Évaluer ses besoins personnels</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Commencez par établir un <strong style={{ color: "#fff", fontWeight: 600 }}>budget personnel</strong> comprenant :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Dépenses fixes (loyer/crédit immobilier, assurances, abonnements)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Dépenses variables (alimentation, loisirs, vacances)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Épargne personnelle</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Projets futurs (achat immobilier, études des enfants)</li>
            </ul>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Étape 2 : Analyser le marché et la concurrence</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Votre <strong style={{ color: "#fff", fontWeight: 600 }}>rémunération libérale</strong> doit être réaliste par rapport :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Aux <strong style={{ color: "#fff", fontWeight: 600 }}>tarifs pratiqués</strong> dans votre secteur</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>À votre niveau d&apos;expertise et d&apos;expérience</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>À votre zone géographique d&apos;exercice</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>À la valeur ajoutée de vos services</li>
            </ul>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Étape 3 : Calculer le seuil de rentabilité</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Le <strong style={{ color: "#fff", fontWeight: 600 }}>point mort</strong> ou <strong style={{ color: "#fff", fontWeight: 600 }}>seuil de rentabilité</strong> est le niveau de CA à partir duquel votre activité devient 
              profitable. Pour le calculer :
            </p>
            
            <ol style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Listez toutes vos <strong style={{ color: "#fff", fontWeight: 600 }}>charges fixes</strong> annuelles</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Estimez vos <strong style={{ color: "#fff", fontWeight: 600 }}>charges variables</strong> (en % du CA)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Calculez votre <strong style={{ color: "#fff", fontWeight: 600 }}>taux de marge</strong> (1 - % charges variables)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Appliquez la formule : <strong style={{ color: "#fff", fontWeight: 600 }}>Seuil de rentabilité = Charges fixes / Taux de marge</strong></li>
            </ol>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Étape 4 : Simuler différents scénarios</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Utilisez des <strong style={{ color: "#fff", fontWeight: 600 }}>outils de simulation fiscale et sociale</strong> pour comparer différents niveaux de rémunération et leurs conséquences sur :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Votre <strong style={{ color: "#fff", fontWeight: 600 }}>revenu net disponible</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Vos <strong style={{ color: "#fff", fontWeight: 600 }}>cotisations sociales</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Votre <strong style={{ color: "#fff", fontWeight: 600 }}>imposition</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Votre <strong style={{ color: "#fff", fontWeight: 600 }}>protection sociale</strong></li>
            </ul>
          </section>

          <section id="statuts" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Les différents statuts juridiques et leur impact fiscal</h2>
            
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Le choix du <strong style={{ color: "#fff", fontWeight: 600 }}>statut juridique</strong> pour votre activité libérale a un impact direct sur votre mode de rémunération :
            </p>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Entreprise individuelle (EI)</h3>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Pas de distinction juridique entre patrimoine personnel et professionnel</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}><strong style={{ color: "#fff", fontWeight: 600 }}>Imposition à l&apos;IR</strong> dans la catégorie des BNC</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Possibilité d&apos;opter pour le <strong style={{ color: "#fff", fontWeight: 600 }}>versement libératoire</strong> en micro-BNC</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>La totalité du bénéfice constitue votre rémunération imposable</li>
            </ul>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>EIRL (Entreprise Individuelle à Responsabilité Limitée)</h3>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Protection du patrimoine personnel grâce au patrimoine d&apos;affectation</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Option possible pour l&apos;<strong style={{ color: "#fff", fontWeight: 600 }}>impôt sur les sociétés (IS)</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>En cas d&apos;IS, possibilité de se verser un <strong style={{ color: "#fff", fontWeight: 600 }}>salaire déductible du résultat</strong></li>
            </ul>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>SELARL ou SELAS (société d&apos;exercice libéral)</h3>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Structure sociétaire adaptée aux professions réglementées</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Imposition par défaut à l&apos;IS</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}><strong style={{ color: "#fff", fontWeight: 600 }}>Rémunération par salaire</strong> et/ou <strong style={{ color: "#fff", fontWeight: 600 }}>dividendes</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Optimisation possible entre salaire (cotisations sociales plus élevées) et dividendes (fiscalité potentiellement avantageuse)</li>
            </ul>
          </section>

          <section id="optimiser" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Optimiser sa rémunération : stratégies fiscales</h2>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Arbitrage entre salaire et dividendes en SEL</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Si vous exercez en société d&apos;exercice libéral, l&apos;arbitrage entre <strong style={{ color: "#fff", fontWeight: 600 }}>salaire</strong> et <strong style={{ color: "#fff", fontWeight: 600 }}>dividendes</strong> est crucial :
            </p>
            
            <div style={{ 
              overflowX: "auto",
              margin: "30px 0"
            }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse"
              }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontWeight: 600
                    }}>Type de revenu</th>
                    <th style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontWeight: 600
                    }}>Avantages</th>
                    <th style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontWeight: 600
                    }}>Inconvénients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}><strong style={{ color: "#fff", fontWeight: 600 }}>Salaire</strong></td>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                      <ul style={{
                        margin: 0,
                        paddingLeft: "20px"
                      }}>
                        <li style={{ marginBottom: "5px" }}>Déductible du résultat fiscal de la société</li>
                        <li style={{ marginBottom: "5px" }}>Génère des droits sociaux (retraite, maladie)</li>
                      </ul>
                    </td>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                      <ul style={{
                        margin: 0,
                        paddingLeft: "20px"
                      }}>
                        <li style={{ marginBottom: "5px" }}>Déductible du résultat fiscal de la société</li>
                        <li style={{ marginBottom: "5px" }}>Génère des droits sociaux (retraite, maladie)</li>
                      </ul>
                    </td>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                      <ul style={{
                        margin: 0,
                        paddingLeft: "20px"
                      }}>
                        <li style={{ marginBottom: "5px" }}>Charges sociales élevées (environ 80% du salaire brut)</li>
                        <li style={{ marginBottom: "5px" }}>Imposition à l&apos;IR (barème progressif)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}><strong style={{ color: "#fff", fontWeight: 600 }}>Dividendes</strong></td>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                      <ul style={{
                        margin: 0,
                        paddingLeft: "20px"
                      }}>
                        <li style={{ marginBottom: "5px" }}>Charges sociales réduites (17,2% de CSG-CRDS)</li>
                        <li style={{ marginBottom: "5px" }}>Possibilité d&apos;abattement de 40% à l&apos;IR</li>
                      </ul>
                    </td>
                    <td style={{
                      padding: "15px",
                      textAlign: "left",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}>
                      <ul style={{
                        margin: 0,
                        paddingLeft: "20px"
                      }}>
                        <li style={{ marginBottom: "5px" }}>Non déductibles du résultat fiscal</li>
                        <li style={{ marginBottom: "5px" }}>Moins de droits sociaux constitués</li>
                        <li style={{ marginBottom: "5px" }}>Double imposition (IS puis IR)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #4d9fff"
            }}>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                <strong style={{ color: "#fff", fontWeight: 600 }}>Conseil d&apos;expert :</strong> Un mix optimal entre salaire et dividendes permet souvent de maximiser votre revenu net tout en 
                maintenant une protection sociale adéquate.
              </p>
            </div>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Investissements professionnels déductibles</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Optimisez votre <strong style={{ color: "#fff", fontWeight: 600 }}>fiscalité libérale</strong> en investissant dans :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Du <strong style={{ color: "#fff", fontWeight: 600 }}>matériel professionnel</strong> (amortissement déductible)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Des <strong style={{ color: "#fff", fontWeight: 600 }}>formations</strong> pour développer vos compétences</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Un <strong style={{ color: "#fff", fontWeight: 600 }}>local professionnel</strong> (charges déductibles)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Des contrats de <strong style={{ color: "#fff", fontWeight: 600 }}>prévoyance</strong> et <strong style={{ color: "#fff", fontWeight: 600 }}>retraite Madelin</strong> (déductibles dans certaines limites)</li>
            </ul>
          </section>

          <section id="protection" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>La protection sociale du professionnel libéral</h2>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Le régime obligatoire des indépendants</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              En tant que <strong style={{ color: "#fff", fontWeight: 600 }}>professionnel libéral</strong>, vous êtes affilié à :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>La <strong style={{ color: "#fff", fontWeight: 600 }}>Sécurité sociale des indépendants</strong> (ex-RSI) pour la maladie-maternité</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>La <strong style={{ color: "#fff", fontWeight: 600 }}>CIPAV</strong> ou une autre caisse spécifique pour la retraite (selon votre profession)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Un régime de <strong style={{ color: "#fff", fontWeight: 600 }}>prévoyance obligatoire</strong> (selon votre profession)</li>
            </ul>
            
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Vos cotisations sont calculées sur la base de votre <strong style={{ color: "#fff", fontWeight: 600 }}>bénéfice non commercial (BNC)</strong>.
            </p>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Compléter sa protection</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Pour une protection optimale, envisagez de compléter avec :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Une <strong style={{ color: "#fff", fontWeight: 600 }}>mutuelle santé</strong> adaptée aux indépendants</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Une <strong style={{ color: "#fff", fontWeight: 600 }}>prévoyance complémentaire</strong> (incapacité, invalidité, décès)</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Une <strong style={{ color: "#fff", fontWeight: 600 }}>assurance perte d&apos;exploitation</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Des <strong style={{ color: "#fff", fontWeight: 600 }}>contrats Madelin</strong> pour la retraite et la prévoyance</li>
            </ul>
          </section>

          <section id="planifier" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Planifier sa rémunération sur le long terme</h2>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>La gestion de la trésorerie</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              Un <strong style={{ color: "#fff", fontWeight: 600 }}>plan de trésorerie</strong> prévisionnel est essentiel pour anticiper :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Les périodes de forte activité et de creux</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Les échéances fiscales et sociales</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Les investissements futurs</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>La constitution d&apos;une réserve de sécurité (idéalement 6 mois de charges fixes)</li>
            </ul>
            
            <h3 style={{
              fontSize: "1.4rem",
              margin: "1.5rem 0 1rem",
              color: "#fff"
            }}>Prévoir la retraite dès maintenant</h3>
            <p style={{
              marginBottom: "1.2rem",
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.6
            }}>
              La <strong style={{ color: "#fff", fontWeight: 600 }}>retraite des professions libérales</strong> est souvent moins avantageuse que celle des salariés. Anticipez en :
            </p>
            <ul style={{
              margin: "1rem 0 1.5rem",
              paddingLeft: "1.5rem"
            }}>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Maximisant vos versements sur des <strong style={{ color: "#fff", fontWeight: 600 }}>plans d&apos;épargne retraite</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Investissant dans l&apos;<strong style={{ color: "#fff", fontWeight: 600 }}>immobilier locatif</strong></li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Diversifiant vos placements financiers</li>
              <li style={{
                marginBottom: "0.8rem",
                color: "#ddd"
              }}>Valorisant votre cabinet/clientèle en vue d&apos;une cession</li>
            </ul>
          </section>

          <section id="erreurs" style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontSize: "1.8rem",
              margin: "2rem 0 1rem",
              color: "#fff",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}>Erreurs courantes à éviter</h2>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #ff6b6b",
              marginBottom: "20px"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginTop: 0,
                marginBottom: "15px",
                color: "#ff6b6b"
              }}>1. Se verser une rémunération trop élevée au démarrage</h3>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                Au lancement de votre activité libérale, privilégiez la prudence et la constitution de réserves. Votre <strong style={{ color: "#fff", fontWeight: 600 }}>rémunération de 
                professionnel libéral</strong> pourra augmenter progressivement avec la stabilisation de votre clientèle.
              </p>
            </div>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #ff6b6b",
              marginBottom: "20px"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginTop: 0,
                marginBottom: "15px",
                color: "#ff6b6b"
              }}>2. Négliger la provision pour charges sociales</h3>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                Les <strong style={{ color: "#fff", fontWeight: 600 }}>cotisations sociales des indépendants</strong> sont payées avec un décalage par rapport aux revenus. Provisionnez 40-50% 
                de votre bénéfice pour éviter les mauvaises surprises.
              </p>
            </div>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #ff6b6b",
              marginBottom: "20px"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginTop: 0,
                marginBottom: "15px",
                color: "#ff6b6b"
              }}>3. Confondre chiffre d&apos;affaires et bénéfice</h3>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                Le montant que vous pouvez vous verser est le <strong style={{ color: "#fff", fontWeight: 600 }}>bénéfice après impôts</strong>, pas le chiffre d&apos;affaires ni même le bénéfice 
                avant impôts.
              </p>
            </div>
            
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "20px 25px",
              margin: "25px 0",
              borderLeft: "4px solid #ff6b6b",
              marginBottom: "20px"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginTop: 0,
                marginBottom: "15px",
                color: "#ff6b6b"
              }}>4. Sous-estimer ses besoins en protection sociale</h3>
              <p style={{
                marginBottom: "0",
                fontSize: "1.05rem",
                color: "#ddd",
                lineHeight: 1.6
              }}>
                Une <strong style={{ color: "#fff", fontWeight: 600 }}>couverture prévoyance adaptée</strong> est indispensable : en cas d&apos;arrêt d&apos;activité, vos charges continueront de courir 
                tandis que vos revenus s&apos;arrêteront.
              </p>
            </div>
            </section>

<section id="faq" style={{ marginBottom: "40px" }}>
  <h2 style={{
    fontSize: "1.8rem",
    margin: "2rem 0 1rem",
    color: "#fff",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>FAQ : Rémunération des professions libérales</h2>
  
  <div style={{
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>
    <h3 style={{
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#fff"
    }}>Quelle est la différence entre BNC et bénéfice ?</h3>
    <p style={{
      marginBottom: "1.2rem",
      fontSize: "1.05rem",
      color: "#ddd",
      lineHeight: 1.6
    }}>
      Le <strong style={{ color: "#fff", fontWeight: 600 }}>BNC (Bénéfice Non Commercial)</strong> est le résultat fiscal de votre activité libérale, calculé selon les règles 
      fiscales. Le <strong style={{ color: "#fff", fontWeight: 600 }}>bénéfice comptable</strong> peut différer légèrement en raison de certains retraitements comptables.
    </p>
  </div>
  
  <div style={{
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>
    <h3 style={{
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#fff"
    }}>Puis-je me verser un salaire fixe chaque mois en profession libérale ?</h3>
    <p style={{
      marginBottom: "1.2rem",
      fontSize: "1.05rem",
      color: "#ddd",
      lineHeight: 1.6
    }}>
      En entreprise individuelle, vous ne vous versez pas techniquement un &quot;salaire&quot; mais des <strong style={{ color: "#fff", fontWeight: 600 }}>prélèvements personnels</strong>. Pour 
      plus de régularité, établissez un budget annuel et divisez-le en prélèvements mensuels constants.
    </p>
  </div>
  
  <div style={{
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>
    <h3 style={{
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#fff"
    }}>Comment réduire mes cotisations sociales légalement ?</h3>
    <p style={{
      marginBottom: "1.2rem",
      fontSize: "1.05rem",
      color: "#ddd",
      lineHeight: 1.6
    }}>
      Plusieurs stratégies existent :
    </p>
    <ul style={{
      margin: "1rem 0 1.5rem",
      paddingLeft: "1.5rem"
    }}>
      <li style={{
        marginBottom: "0.8rem",
        color: "#ddd"
      }}>Opter pour une société à l&apos;IS et optimiser l&apos;arbitrage salaire/dividendes</li>
      <li style={{
        marginBottom: "0.8rem",
        color: "#ddd"
      }}>Adhérer à une <strong style={{ color: "#fff", fontWeight: 600 }}>Association de Gestion Agréée</strong> (réduction d&apos;impôt)</li>
      <li style={{
        marginBottom: "0.8rem",
        color: "#ddd"
      }}>Investir dans des contrats Madelin (déduction fiscale)</li>
      <li style={{
        marginBottom: "0.8rem",
        color: "#ddd"
      }}>Optimiser vos frais professionnels réels</li>
    </ul>
  </div>
  
  <div style={{
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>
    <h3 style={{
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#fff"
    }}>Quel pourcentage du chiffre d&apos;affaires puis-je me verser ?</h3>
    <p style={{
      marginBottom: "1.2rem",
      fontSize: "1.05rem",
      color: "#ddd",
      lineHeight: 1.6
    }}>
      Cela dépend entièrement de votre structure de coûts. En moyenne, les professionnels libéraux peuvent se verser entre 30% et 60% de 
      leur CA en rémunération nette.
    </p>
  </div>
</section>

<section id="conclusion" style={{ marginBottom: "40px" }}>
  <h2 style={{
    fontSize: "1.8rem",
    margin: "2rem 0 1rem",
    color: "#fff",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  }}>Conclusion</h2>
  <p style={{
    marginBottom: "1.2rem",
    fontSize: "1.05rem",
    color: "#ddd",
    lineHeight: 1.6
  }}>
    Définir sa <strong style={{ color: "#fff", fontWeight: 600 }}>rémunération en profession libérale</strong> est un exercice d&apos;équilibre entre vos besoins personnels, la pérennité 
    de votre activité et l&apos;optimisation fiscale et sociale. Une approche méthodique et une révision régulière de votre stratégie vous 
    permettront de sécuriser votre situation financière tout en développant sereinement votre cabinet.
  </p>
  
  <p style={{
    marginBottom: "1.2rem",
    fontSize: "1.05rem",
    color: "#ddd",
    lineHeight: 1.6
  }}>
    Rappelons qu&apos;une bonne gestion de la rémunération passe par l&apos;anticipation et la planification. N&apos;hésitez pas à consulter un 
    <strong style={{ color: "#fff", fontWeight: 600 }}> expert-comptable spécialisé</strong> pour bénéficier de conseils personnalisés adaptés à votre situation spécifique.
  </p>
</section>

{/* Footer de l'article */}
<div style={{
  marginTop: "60px",
  paddingTop: "30px",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)"
}}>
  <p style={{
    textAlign: "center",
    color: "#aaa",
    marginBottom: "40px"
  }}>
    <em>Article rédigé par {article.author.name}, {article.author.title} spécialisé dans les professions libérales.</em><br />
    <em>Dernière mise à jour : Mars 2025</em>
  </p>
  
  <div style={{
    textAlign: "center",
    marginBottom: "40px"
  }}>
    <h3 style={{
      marginBottom: "20px",
      fontSize: "1.3rem",
      color: "#fff"
    }}>Besoin d&apos;un accompagnement personnalisé ?</h3>
    <Link href="/sections/autres/rdv" style={{
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: "white",
      color: "black",
      textDecoration: "none",
      padding: "12px 24px",
      borderRadius: "5px",
      fontWeight: 600,
      transition: "all 0.3s ease",
      border: "2px solid white"
    }}>
      Prendre rendez-vous avec un expert<i className="far fa-calendar-alt" style={{ marginLeft: "10px" }}></i>
    </Link>
  </div>
  
  <div style={{
    textAlign: "center",
    marginBottom: "40px"
  }}>
    <h3 style={{
      marginBottom: "20px",
      fontSize: "1.3rem",
      color: "#fff"
    }}>Cet article vous a été utile ? Partagez-le !</h3>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px"
    }}>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        typeof window !== 'undefined' ? window.location.href : ''
      )}`} 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{
           display: "inline-flex",
           alignItems: "center",
           justifyContent: "center",
           gap: "10px",
           padding: "10px 20px",
           borderRadius: "5px",
           color: "#fff",
           textDecoration: "none",
           fontWeight: 500,
           transition: "all 0.3s ease",
           backgroundColor: "#0077b5"
         }}>
        <i className="fab fa-linkedin"></i>
        LinkedIn
      </a>
      <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(
        typeof window !== 'undefined' ? window.location.href : ''
      )}`} 
         style={{
           display: "inline-flex",
           alignItems: "center",
           justifyContent: "center",
           gap: "10px",
           padding: "10px 20px",
           borderRadius: "5px",
           color: "#fff",
           textDecoration: "none",
           fontWeight: 500,
           transition: "all 0.3s ease",
           backgroundColor: "#555"
         }}>
        <i className="fas fa-envelope"></i>
        Email
      </a>
    </div>
  </div>
</div>
</div>
</article>
</div>
)
};