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
  
  // ID de la vidéo YouTub

  return (
    <div className="article-page">
      {/* Header avec navigation et métadonnées */}
      <header className="article-header">
        <div className="container">
          <div className="article-meta">
            <Link href="/sections/cabinet/ressources" className="back-button">
              <i className="fas fa-arrow-left"></i> Retour aux ressources
            </Link>
            <time dateTime={article.date} className="article-date">
              {formatDate(article.date)}
            </time>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
          
          <div className="article-author">
            <Image 
              src={article.author.avatarUrl} 
              alt={article.author.name}
              width={48}
              height={48}
              className="author-avatar"
            />
            <div className="author-info">
              <span className="author-name">{article.author.name}</span>
              <span className="author-title">{article.author.title}</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Image principale optimisée pour le SEO */}
      <div className="article-featured-image">
        <div className="container">
          <Image
            src={article.thumbnailUrl}
            alt="Optimisation de la rémunération en profession libérale"
            width={1200}
            height={630}
            priority
            className="featured-image"
          />
        </div>
      </div>
      
      {/* Sommaire pour la navigation interne (bon pour le SEO) */}
      <div className="article-table-of-contents">
        <div className="container">
          <h2>Sommaire</h2>
          <nav>
            <ul>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#specificites">Les spécificités de la rémunération en profession libérale</a></li>
              <li><a href="#calculer">Comment calculer sa rémunération optimale</a></li>
              <li><a href="#statuts">Les différents statuts juridiques et leur impact fiscal</a></li>
              <li><a href="#optimiser">Optimiser sa rémunération : stratégies fiscales</a></li>
              <li><a href="#protection">La protection sociale du professionnel libéral</a></li>
              <li><a href="#planifier">Planifier sa rémunération sur le long terme</a></li>
              <li><a href="#erreurs">Erreurs courantes à éviter</a></li>
              <li><a href="#faq">FAQ : Rémunération des professions libérales</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Vidéo YouTube intégrée */}
      <div className="article-video-section">
        <div className="container">
          <h2>Vidéo explicative</h2>
          <p>Découvrez notre explication détaillée en vidéo sur ce sujet important :</p>
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/watch?v=VzZ-DZ64-xY`}
              title="Activité libérale : Comment définir sa rémunération ?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Contenu principal de l&apos;article */}
      <article className="article-content">
        <div className="container">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              Définir sa rémunération lorsqu&apos;on exerce une <strong>profession libérale</strong> est une décision stratégique qui impacte non seulement 
              votre quotidien financier, mais aussi la pérennité de votre activité et votre protection sociale. Que vous soyez médecin, avocat, 
              architecte, consultant ou tout autre <strong>professionnel libéral</strong>, ce guide vous accompagne dans la détermination de votre 
              rémunération idéale en 2025.
            </p>
          </section>

          <section id="specificites">
            <h2>Les spécificités de la rémunération en profession libérale</h2>
            
            <p>
              Contrairement aux salariés, les <strong>professionnels libéraux</strong> bénéficient d&apos;une grande liberté dans la fixation de leur 
              rémunération, mais cette liberté s&apos;accompagne de responsabilités particulières.
            </p>
            
            <h3>Différence entre chiffre d&apos;affaires et rémunération</h3>
            <p>
              Le <strong>chiffre d&apos;affaires</strong> (CA) généré par votre activité libérale n&apos;est pas votre rémunération nette. 
              Votre <strong>revenu professionnel</strong> est ce qui reste après déduction de l&apos;ensemble des charges :
            </p>
            
            <ul>
              <li>Charges professionnelles (loyer, matériel, fournitures, etc.)</li>
              <li><strong>Cotisations sociales</strong> (URSSAF, retraite, prévoyance)</li>
              <li>Impôts professionnels (CFE, CVAE selon les cas)</li>
            </ul>
            
            <div className="info-box">
              <p>
                <strong>Bon à savoir :</strong> En moyenne, les charges représentent entre 40% et 60% du chiffre d&apos;affaires d&apos;un professionnel 
                libéral, selon le secteur d&apos;activité.
              </p>
            </div>
            
            <h3>L&apos;impact du régime fiscal</h3>
            <p>
              Votre <strong>régime fiscal</strong> influence directement votre rémunération :
            </p>
            
            <ul>
              <li><strong>Micro-BNC</strong> : abattement forfaitaire de 34% sur le CA (idéal pour les activités avec peu de charges)</li>
              <li><strong>Déclaration contrôlée</strong> : déduction des charges réelles (plus avantageux quand les charges sont élevées)</li>
            </ul>
          </section>

          <section id="calculer">
            <h2>Comment calculer sa rémunération optimale</h2>
            
            <h3>Étape 1 : Évaluer ses besoins personnels</h3>
            <p>
              Commencez par établir un <strong>budget personnel</strong> comprenant :
            </p>
            <ul>
              <li>Dépenses fixes (loyer/crédit immobilier, assurances, abonnements)</li>
              <li>Dépenses variables (alimentation, loisirs, vacances)</li>
              <li>Épargne personnelle</li>
              <li>Projets futurs (achat immobilier, études des enfants)</li>
            </ul>
            
            <h3>Étape 2 : Analyser le marché et la concurrence</h3>
            <p>
              Votre <strong>rémunération libérale</strong> doit être réaliste par rapport :
            </p>
            <ul>
              <li>Aux <strong>tarifs pratiqués</strong> dans votre secteur</li>
              <li>À votre niveau d&apos;expertise et d&apos;expérience</li>
              <li>À votre zone géographique d&apos;exercice</li>
              <li>À la valeur ajoutée de vos services</li>
            </ul>
            
            <h3>Étape 3 : Calculer le seuil de rentabilité</h3>
            <p>
              Le <strong>point mort</strong> ou <strong>seuil de rentabilité</strong> est le niveau de CA à partir duquel votre activité devient 
              profitable. Pour le calculer :
            </p>
            
            <ol>
              <li>Listez toutes vos <strong>charges fixes</strong> annuelles</li>
              <li>Estimez vos <strong>charges variables</strong> (en % du CA)</li>
              <li>Calculez votre <strong>taux de marge</strong> (1 - % charges variables)</li>
              <li>Appliquez la formule : <strong>Seuil de rentabilité = Charges fixes / Taux de marge</strong></li>
            </ol>
            
            <h3>Étape 4 : Simuler différents scénarios de rémunération</h3>
            <p>
              Utilisez des <strong>outils de simulation fiscale et sociale</strong> pour comparer différents niveaux de rémunération et leurs conséquences sur :
            </p>
            <ul>
              <li>Votre <strong>revenu net disponible</strong></li>
              <li>Vos <strong>cotisations sociales</strong></li>
              <li>Votre <strong>imposition</strong></li>
              <li>Votre <strong>protection sociale</strong></li>
            </ul>
          </section>

          <section id="statuts">
            <h2>Les différents statuts juridiques et leur impact fiscal</h2>
            
            <p>
              Le choix du <strong>statut juridique</strong> pour votre activité libérale a un impact direct sur votre mode de rémunération :
            </p>
            
            <h3>Entreprise individuelle (EI)</h3>
            <ul>
              <li>Pas de distinction juridique entre patrimoine personnel et professionnel</li>
              <li><strong>Imposition à l&apos;IR</strong> dans la catégorie des BNC</li>
              <li>Possibilité d&apos;opter pour le <strong>versement libératoire</strong> en micro-BNC</li>
              <li>La totalité du bénéfice constitue votre rémunération imposable</li>
            </ul>
            
            <h3>EIRL (Entreprise Individuelle à Responsabilité Limitée)</h3>
            <ul>
              <li>Protection du patrimoine personnel grâce au patrimoine d&apos;affectation</li>
              <li>Option possible pour l&apos;<strong>impôt sur les sociétés (IS)</strong></li>
              <li>En cas d&apos;IS, possibilité de se verser un <strong>salaire déductible du résultat</strong></li>
            </ul>
            
            <h3>SELARL ou SELAS (société d&apos;exercice libéral)</h3>
            <ul>
              <li>Structure sociétaire adaptée aux professions réglementées</li>
              <li>Imposition par défaut à l&apos;IS</li>
              <li><strong>Rémunération par salaire</strong> et/ou <strong>dividendes</strong></li>
              <li>Optimisation possible entre salaire (cotisations sociales plus élevées) et dividendes (fiscalité potentiellement avantageuse)</li>
            </ul>
          </section>

          <section id="optimiser">
            <h2>Optimiser sa rémunération : stratégies fiscales</h2>
            
            <h3>Arbitrage entre salaire et dividendes en SEL</h3>
            <p>
              Si vous exercez en société d&apos;exercice libéral, l&apos;arbitrage entre <strong>salaire</strong> et <strong>dividendes</strong> est crucial :
            </p>
            
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Type de revenu</th>
                    <th>Avantages</th>
                    <th>Inconvénients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Salaire</strong></td>
                    <td>
                      <ul>
                        <li>Déductible du résultat fiscal de la société</li>
                        <li>Génère des droits sociaux (retraite, maladie)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Charges sociales élevées (environ 80% du salaire brut)</li>
                        <li>Imposition à l&apos;IR (barème progressif)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Dividendes</strong></td>
                    <td>
                      <ul>
                        <li>Charges sociales réduites (17,2% de CSG-CRDS)</li>
                        <li>Possibilité d&apos;abattement de 40% à l&apos;IR</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Non déductibles du résultat fiscal</li>
                        <li>Moins de droits sociaux constitués</li>
                        <li>Double imposition (IS puis IR)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="info-box">
              <p>
                <strong>Conseil d&apos;expert :</strong> Un mix optimal entre salaire et dividendes permet souvent de maximiser votre revenu net tout en 
                maintenant une protection sociale adéquate.
              </p>
            </div>
            
            <h3>Investissements professionnels déductibles</h3>
            <p>
              Optimisez votre <strong>fiscalité libérale</strong> en investissant dans :
            </p>
            <ul>
              <li>Du <strong>matériel professionnel</strong> (amortissement déductible)</li>
              <li>Des <strong>formations</strong> pour développer vos compétences</li>
              <li>Un <strong>local professionnel</strong> (charges déductibles)</li>
              <li>Des contrats de <strong>prévoyance</strong> et <strong>retraite Madelin</strong> (déductibles dans certaines limites)</li>
            </ul>
          </section>

          <section id="protection">
            <h2>La protection sociale du professionnel libéral</h2>
            
            <h3>Le régime obligatoire des indépendants</h3>
            <p>
              En tant que <strong>professionnel libéral</strong>, vous êtes affilié à :
            </p>
            <ul>
              <li>La <strong>Sécurité sociale des indépendants</strong> (ex-RSI) pour la maladie-maternité</li>
              <li>La <strong>CIPAV</strong> ou une autre caisse spécifique pour la retraite (selon votre profession)</li>
              <li>Un régime de <strong>prévoyance obligatoire</strong> (selon votre profession)</li>
            </ul>
            
            <p>
              Vos cotisations sont calculées sur la base de votre <strong>bénéfice non commercial (BNC)</strong>.
            </p>
            
            <h3>Compléter sa protection</h3>
            <p>
              Pour une protection optimale, envisagez de compléter avec :
            </p>
            <ul>
              <li>Une <strong>mutuelle santé</strong> adaptée aux indépendants</li>
              <li>Une <strong>prévoyance complémentaire</strong> (incapacité, invalidité, décès)</li>
              <li>Une <strong>assurance perte d&apos;exploitation</strong></li>
              <li>Des <strong>contrats Madelin</strong> pour la retraite et la prévoyance</li>
            </ul>
          </section>

          <section id="planifier">
            <h2>Planifier sa rémunération sur le long terme</h2>
            
            <h3>La gestion de la trésorerie</h3>
            <p>
              Un <strong>plan de trésorerie</strong> prévisionnel est essentiel pour anticiper :
            </p>
            <ul>
              <li>Les périodes de forte activité et de creux</li>
              <li>Les échéances fiscales et sociales</li>
              <li>Les investissements futurs</li>
              <li>La constitution d&apos;une réserve de sécurité (idéalement 6 mois de charges fixes)</li>
            </ul>
            
            <h3>Prévoir la retraite dès maintenant</h3>
            <p>
              La <strong>retraite des professions libérales</strong> est souvent moins avantageuse que celle des salariés. Anticipez en :
            </p>
            <ul>
              <li>Maximisant vos versements sur des <strong>plans d&apos;épargne retraite</strong></li>
              <li>Investissant dans l&apos;<strong>immobilier locatif</strong></li>
              <li>Diversifiant vos placements financiers</li>
              <li>Valorisant votre cabinet/clientèle en vue d&apos;une cession</li>
            </ul>
          </section>

          <section id="erreurs">
            <h2>Erreurs courantes à éviter</h2>
            
            <div className="error-box">
              <h3>1. Se verser une rémunération trop élevée au démarrage</h3>
              <p>
                Au lancement de votre activité libérale, privilégiez la prudence et la constitution de réserves. Votre <strong>rémunération de 
                professionnel libéral</strong> pourra augmenter progressivement avec la stabilisation de votre clientèle.
              </p>
            </div>
            
            <div className="error-box">
              <h3>2. Négliger la provision pour charges sociales</h3>
              <p>
                Les <strong>cotisations sociales des indépendants</strong> sont payées avec un décalage par rapport aux revenus. Provisionnez 40-50% 
                de votre bénéfice pour éviter les mauvaises surprises.
              </p>
            </div>
            
            <div className="error-box">
              <h3>3. Confondre chiffre d&apos;affaires et bénéfice</h3>
              <p>
                Le montant que vous pouvez vous verser est le <strong>bénéfice après impôts</strong>, pas le chiffre d&apos;affaires ni même le bénéfice 
                avant impôts.
              </p>
            </div>
            
            <div className="error-box">
              <h3>4. Sous-estimer ses besoins en protection sociale</h3>
              <p>
                Une <strong>couverture prévoyance adaptée</strong> est indispensable : en cas d&apos;arrêt d&apos;activité, vos charges continueront de courir 
                tandis que vos revenus s&apos;arrêteront.
              </p>
            </div>
          </section>

          <section id="faq">
            <h2>FAQ : Rémunération des professions libérales</h2>
            
            <div className="faq-item">
              <h3>Quelle est la différence entre BNC et bénéfice ?</h3>
              <p>
                Le <strong>BNC (Bénéfice Non Commercial)</strong> est le résultat fiscal de votre activité libérale, calculé selon les règles 
                fiscales. Le <strong>bénéfice comptable</strong> peut différer légèrement en raison de certains retraitements comptables.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Puis-je me verser un salaire fixe chaque mois en profession libérale ?</h3>
              <p>
                En entreprise individuelle, vous ne vous versez pas techniquement un &quot;salaire&quot; mais des <strong>prélèvements personnels</strong>. Pour 
                plus de régularité, établissez un budget annuel et divisez-le en prélèvements mensuels constants.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Comment réduire mes cotisations sociales légalement ?</h3>
              <p>
                Plusieurs stratégies existent :
              </p>
              <ul>
                <li>Opter pour une société à l&apos;IS et optimiser l&apos;arbitrage salaire/dividendes</li>
                <li>Adhérer à une <strong>Association de Gestion Agréée</strong> (réduction d&apos;impôt)</li>
                <li>Investir dans des contrats Madelin (déduction fiscale)</li>
                <li>Optimiser vos frais professionnels réels</li>
              </ul>
            </div>
            
            <div className="faq-item">
              <h3>Quel pourcentage du chiffre d&apos;affaires puis-je me verser ?</h3>
              <p>
                Cela dépend entièrement de votre structure de coûts. En moyenne, les professionnels libéraux peuvent se verser entre 30% et 60% de 
                leur CA en rémunération nette.
              </p>
            </div>
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              Définir sa <strong>rémunération en profession libérale</strong> est un exercice d&apos;équilibre entre vos besoins personnels, la pérennité 
              de votre activité et l&apos;optimisation fiscale et sociale. Une approche méthodique et une révision régulière de votre stratégie vous 
              permettront de sécuriser votre situation financière tout en développant sereinement votre cabinet.
            </p>
            
            <p>
              Rappelons qu&apos;une bonne gestion de la rémunération passe par l&apos;anticipation et la planification. N&apos;hésitez pas à consulter un 
              <strong>expert-comptable spécialisé</strong> pour bénéficier de conseils personnalisés adaptés à votre situation spécifique.
            </p>
          </section>
          
          {/* Footer de l&apos;article */}
          <div className="article-footer">
            <p className="article-meta-footer">
              <em>Article rédigé par {article.author.name}, {article.author.title} spécialisé dans les professions libérales.</em><br />
              <em>Dernière mise à jour : Mars 2025</em>
            </p>
            
            <div className="article-cta">
              <h3>Besoin d&apos;un accompagnement personnalisé ?</h3>
              <Link href="/sections/autres/rdv" className="cta-button">
                Prendre rendez-vous avec un expert<i className="far fa-calendar-alt"></i>
              </Link>
            </div>
            
            <div className="article-share">
              <h3>Cet article vous a été utile ? Partagez-le !</h3>
              <div className="share-buttons">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="share-button linkedin">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}`} 
                   className="share-button email">
                  <i className="fas fa-envelope"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}