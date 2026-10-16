import styles from './About.module.css';

// 1. IMPORTA TUS IMÁGENES AQUÍ (Crea una carpeta en assets si no la tienes)
// Ejemplo: import markoImg from '../../assets/team/marko.jpg';
/*import chipIcon from '../../assets/chip.png';*/


import Lider_Marko from '../../assets/COMUNITY DAY CUENCA 05/Markos.jpg'
import Quinde from '../../assets/COMUNITY DAY CUENCA 05/PATRIQUINDE.png'
import Mery from '../../assets/Mery Garcia.jpeg'
import Luigi from '../../assets/Luigi.jpg'
import markoLego from '../../assets/marko_lego.png';
import meetupIcon from '../../assets/Meetup_Logo.png'
/*import markitosxxxx from '../../assets/Markitoss.png'*/


// Array de tu equipo (Puedes agregar a todos los miembros aquí)
const teamMembers = [
  {
    id: 1,
    name: "Marko Rojas",
    role: "Lider Student Builder Group ITB",
    // img: zoeImg, (Descomenta cuando tengas la foto)
    img: Lider_Marko, // Placeholder temporal
    linkedin: "https://www.linkedin.com/in/marko-antonio-rojas-lozado-9851b92a8/?isSelfProfile=true",
    instagram: "https://www.instagram.com/warkorojas/?hl=es",
  },
  {
    id: 2,
    name: "Patricia Quinde",
    role: "Social Media",
    extra: "Marketing ITB",
    img: Quinde,
    linkedin: "https://www.linkedin.com/in/patricia-quinde/?isSelfProfile=false",
    instagram: "https://www.instagram.com/zufiziente/?hl=es",
  },
  {
    id: 3,
    name: "Mery Garcia",
    role: "Logistics",
    extra: "Core Team",
    img: Mery,
    linkedin: "https://www.linkedin.com/in/mery-garcia-a96b91438/?isSelfProfile=true",
    instagram: "https://www.instagram.com/merry30576/?hl=es ",
  },
  {
    id: 4,
    name: "Luiggi España",
    role: "On-site Support",
    extra: "Core Team",
    img: Luigi,
    linkedin: "https://www.linkedin.com/in/luiggi-xavier-espa%C3%B1a-villamar-5b0752276/?isSelfProfile=false",
    instagram: "https://www.instagram.com/luiggi_._.05/?hl=es",
  }
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        
        {/* Columna Izquierda: Contenedor SVG Cuadriculado */}
        <div className={styles.heroVisual}>
          <div className={styles.pixelArtContainer}>
            
            <svg className={styles.pixelSvg} viewBox="0 0 40 40" shapeRendering="crispEdges">
              
              {/* Nube Flotante (AWS) */}
              <g className={styles.floatFast} fill="#FF9900">
                <rect x="22" y="6" width="6" height="2" />
                <rect x="20" y="8" width="10" height="2" />
                <rect x="18" y="10" width="14" height="2" />
                <rect x="22" y="8" width="2" height="2" fill="#FFF" />
              </g>

              <g className={styles.floatSlow}>
                {/* Monitor / Computadora */}
                <rect x="6" y="14" width="24" height="16" fill="#1E293B" />
                <rect x="8" y="16" width="20" height="12" fill="#0F172A" />
                
                {/* Líneas de Código en Pantalla */}
                <rect x="10" y="18" width="6" height="1" fill="#FF57E9" />
                <rect x="10" y="20" width="12" height="1" fill="#34d399" />
                <rect x="10" y="22" width="8" height="1" fill="#facc15" />
                <rect x="10" y="24" width="14" height="1" fill="#a78bfa" />
                <rect x="25" y="24" width="2" height="1" fill="#FFF" className={styles.typingBlink} />

                {/* Base del Monitor */}
                <rect x="16" y="30" width="4" height="2" fill="#475569" />
                <rect x="12" y="32" width="12" height="1" fill="#94A3B8" />
              </g>

              {/* Taza de Café */}
              <g transform="translate(30, 27)">
                <rect x="0" y="0" width="5" height="6" fill="#f43f5e" />
                <rect x="5" y="1" width="2" height="4" fill="none" stroke="#f43f5e" strokeWidth="1" />
                <rect x="1" y="0" width="3" height="1" fill="#78350f" />
                <rect x="2" y="-3" width="1" height="2" fill="#cbd5e1" className={styles.smokeRise} style={{ animationDelay: '0s'}} />
                <rect x="4" y="-2" width="1" height="1" fill="#cbd5e1" className={styles.smokeRise} style={{ animationDelay: '1.5s'}} />
              </g>

            </svg>

            {/* Coordenadas personalizadas */}
            <div className={styles.pixelArtLabels}>
              <span className={styles.coordColor}>const build = true;</span>
              <span className={styles.fileColor}>setup_builders.svg</span>
            </div>
            
          </div>
        </div>

        {/* Columna Derecha: Textos */}
        <div className={styles.heroText}>
          <span className={styles.breadcrumb}>~/inicio / equipo</span>
          <h1 className={styles.heroTitle}>
            El equipo detrás <br />
            de la comunidad<span className={styles.blinkingCursor}></span>
          </h1>
          <p className={styles.heroDesc}>
            AWS Student Builder Group ITB nació con una idea simple: llevar la nube a las aulas de la Facultad Empresarial y crear un espacio donde estudiantes enseñen a estudiantes. Preparamos cada meetup, conseguimos los espacios, y abrimos la puerta a quien quiera aprender AWS en Guayaquil.
          </p>
        </div>

      </section>

      {/* 2. TEAM SECTION */}
      <section className={styles.teamSection}>
        <span className={styles.sectionLabel}>core team</span>
        <h2 className={styles.teamTitle}>Quienes lideran...</h2>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.cardImageWrapper}>
                <img src={member.img} alt={member.name} className={styles.cardImage} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.badges}>
                  <span className={styles.badgeRole}>{member.role}</span>
                  {member.extra && <span className={styles.badgeExtra}>{member.extra}</span>}
                </div>
                
                {/* Iconos de Redes (LinkedIn, Instagram) */}
                <div className={styles.socialLinks}>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className={styles.founderSection}>
        <span className={styles.sectionLabel}>sobre el fundador</span>
        
        <div className={styles.founderBox}>
          
          {/* TÍTULO ALARGADO (Ocupa todo el ancho, por encima de la imagen) */}
          <h2 className={styles.founderTitle}>
            Marko Rojas fundador de AWS Student Builder Group ITB
          </h2>

          {/* CONTENEDOR DIVIDIDO: Textos a la izquierda, Imagen a la derecha */}
          <div className={styles.founderLayout}>
            
            {/* Lado Izquierdo: Textos y botones */}
            <div className={styles.founderContent}>
              <p className={styles.founderDesc}>
                Marko es estudiante de Desarrollo de Software en el ITB y se apasionó por la nube desde el momento en que entendió el potencial de construir soluciones globales desde Guayaquil. Fundó la comunidad con una idea clara: reunir a estudiantes con hambre de aprender.
              </p>
              <p className={styles.founderDesc}>
                Desarrollador móvil especializado en Kotlin y Google Cloud, hoy lidera el capítulo estudiantil organizando talleres, meetups técnicos en La Naval y guiando a nuevos talentos para que inicien su ruta hacia la certificación AWS.
              </p>

              <div className={styles.founderQuote}>
                <p>
                  "La tecnología no solo se consume, se construye. Creamos esta comunidad para que el conocimiento no sea un privilegio, sino una herramienta al alcance de cualquier estudiante dispuesto a aprender."
                </p>
              </div>

              <div className={styles.founderButtons}>
                <a href="#"  rel="noopener noreferrer" className={styles.btnOutline}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                  markorojas.dev
                </a>
                <a href="https://www.linkedin.com/in/marko-antonio-rojas-lozado-9851b92a8/?isSelfProfile=true" target="_blank"  className={styles.btnOutline}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Lado Derecho: Avatar */}
            <div className={styles.founderAvatarInside}>
              <img src={markoLego} alt="Marko Lego Plateado" className={styles.legoImageFaded} />
            </div>

          </div>
        </div>
      </section>




      {/* 4. CTA SECTION (Únete a la comunidad) */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          
          {/* Lado Izquierdo: Textos personalizados */}
          <div className={styles.ctaContent}>
            <span className={styles.ctaCode}>
              <span className={styles.ctaCodeBold}>await</span> comunidad.join("tú")
            </span>
            <h2 className={styles.ctaTitle}>
              Únete a la Comunidad <br />
              AWS Student Builder<br />
              Group De ITB<span className={styles.ctaCursor}></span>
            </h2>
            <p className={styles.ctaDesc}>
              Sé parte del movimiento cloud más activo del país. Conéctate con desarrolladores, comparte proyectos y accede a beneficios exclusivos.
            </p>
          </div>

          {/* Lado Derecho: Botones con imagen de Meetup y SVG de WhatsApp */}
          <div className={styles.ctaButtons}>
            <a 
            href="https://www.meetup.com/aws-sbg-at-bolivarian-uni-higher-inst-of-tech-naval-campus/?eventOrigin=home_groups_you_organize"
            target="_blank" 
            className={styles.btnMeetup}>
            
              {/* Icono de Meetup usando imagen (Asegúrate de importar o colocar tu logo/imagen de Meetup) */}
              <img src={meetupIcon} alt="Meetup Logo" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              Únete en Meetup
            </a>
            
            <a href="https://chat.whatsapp.com/GDrxU8QQVdaEAhvET1fnwt" 
            target="_blank"
            className={styles.btnWhatsapp}>
              {/* SVG oficial de WhatsApp */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Únete al WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}