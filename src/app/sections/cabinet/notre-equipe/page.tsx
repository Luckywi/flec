import { Metadata } from "next";
import CabinetNav from "@/app/components/CabinetNav";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Notre Équipe d'Experts Comptables | Expertise Multiple | Cabinet Franck Lebeurre",
    description: "Découvrez l'équipe du cabinet Franck Lebeurre : experts-comptables, chefs de mission et collaborateurs spécialisés. Une équipe disponible et réactive, experte en professions libérales, SCI, LMNP et paie. Accompagnement personnalisé digital.",
    keywords: "équipe expert-comptable, expertise comptable spécialisée, collaborateurs comptables, expertise SCI, comptabilité LMNP, gestion paie",
  };
  
export default function NotreEquipe() {
  return (
    <main>
      {/* Navigation avec titre */}
      <section>
        <CabinetNav
          activeSection="notre-equipe"
          backgroundImage="/images/fleur12.webp"
          title="Notre équipe"
        />
      </section>

      {/* Section description */}
      <section>
        <div className="section-container">
          <h1>Une équipe disponible, réactive et à l&apos;écoute de vos besoins</h1>
          <p>
            Notre équipe aux compétences transversales et complémentaires s&apos;engage à offrir un accompagnement de proximité, 
            en privilégiant une relation cordiale et continue avec chacun de nos clients. Toujours à l&apos;écoute, nous mettons un point d&apos;honneur 
            à rester disponibles et réactifs pour répondre à vos besoins au quotidien.
          </p>
          <Link href="/rendez-vous" className="cta-button">
            Obtenir un rendez-vous<i className="far fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      {/* Section équipe */}
      <section className="equipe-section">
        <div className="team-grid">
          <div className="team-member">
            <Image 
              src="/images/franck.webp" 
              alt="Franck" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Franck</div>
              <div className="member-role">Expert-Comptable</div>
              <p className="member-description">Expert-comptable et bien plus encore!</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/sophie2.webp" 
              alt="Sophie" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Sophie</div>
              <div className="member-role">Cheffe de mission</div>
              <p className="member-description">Omnipotente tendance geek à ses heures.</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/priscillia.webp" 
              alt="Priscillia" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Priscillia</div>
              <div className="member-role">Collaboratrice</div>
              <p className="member-description">Spécialiste des professions libérales et LMNP.</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/deborah.webp" 
              alt="Deborah" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Deborah</div>
              <div className="member-role">Collaboratrice</div>
              <p className="member-description">Spécialiste des professions libérales et SCI.</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/annabelle.webp" 
              alt="Annabelle" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Annabelle</div>
              <div className="member-role">Collaboratrice</div>
              <p className="member-description">Spécialiste des professions libérales et PAIES.</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/nicola.webp" 
              alt="Nicolas" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Nicolas</div>
              <div className="member-role">Chef de mission</div>
              <p className="member-description">Expérimenté et remarquablement adaptable.</p>
            </div>
          </div>
          
          <div className="team-member">
            <Image 
              src="/images/lucky.webp" 
              alt="Lucky" 
              width={250} 
              height={250} 
              className="member-photo" 
            />
            <div className="member-info">
              <div className="member-name">Lucky</div>
              <div className="member-role">Web manager</div>
              <p className="member-description">Le développement de votre activité, c&apos;est lui.</p>
            </div>
          </div>
          
          <div className="team-member">
            <h1 className="member-cv">Et pourquoi pas vous ?</h1>
            <div className="member-info">
              <div className="member-name">Envoyez votre candidature (CV et lettre de motivation) à f.lebeurre@gmail.com.</div>
              <p className="member-description">
                Nous cherchons des talents motivés en comptabilité et fiscalité. Si vous souhaitez évoluer 
                dans un environnement professionnel stimulant, envoyez-nous votre candidature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}