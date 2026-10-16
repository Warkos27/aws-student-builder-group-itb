import { useState, useEffect } from 'react'; // Agrega useEffect
import { onAuthStateChanged } from 'firebase/auth'; // Escuchar estado de sesión
import { auth } from '../../firebaseConfig'; // Tu archivo de config
import AuthModal from '../../components/AuthModal/AuthModal'; // El nuevo modal


import styles from './Certification.module.css';
import PractitionerChallenge from './PractitionerChallenge/PractitionerChallenge';
// Importa tu imagen aquí (ajusta la ruta si es necesario)
import awsPractitionerBadge from '../../assets/aws-practitioner.webp';
import awsAIBadge from '../../assets/awsIA.webp';
import awsSolutionsBadge from '../../assets/solucion.webp'; 


export default function Certification() {



  const [viewChallenge, setViewChallenge] = useState(false);

  // 👇 NUEVOS ESTADOS 👇
  const [user, setUser] = useState<any>(null); // Guardará si el usuario está logueado
  const [isAuthModalOpen, setAuthModalOpen] = useState(false); // Controla el modal

  // Escucha si hay una sesión activa de Google al cargar la página
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Si existe, user se llena; si no, es null
    });
    return () => unsubscribe();
  }, []);


  // Si el usuario hizo clic en "INICIAR", mostramos el reto de las 6 sesiones
  if (viewChallenge) {
    return (
      <div>
        {/* Opcional: Un botoncito discreto arriba para regresar a la vista de niveles */}
        <div style={{ backgroundColor: '#0b0f19', padding: '10px 20px', display: 'flex', justifyContent: 'flex-end', maxWidth: '1200px', margin: '0 auto' }}>
          <button 
            onClick={() => setViewChallenge(false)} 
            style={{
              backgroundColor: '#1a2336',
              color: '#FF9900',
              border: '1px solid #FF9900',
              padding: '6px 14px',
              borderRadius: '6px',
              fontFamily: "'JetBrains Mono', monospace",
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.8rem'
            }}
          >
            ← Volver a Niveles
          </button>
        </div>
        <PractitionerChallenge />
      </div>
    );
  }
  
  return (
    <div className={styles.pageContainer}>
      
      <main className={styles.mainContent}>
        
        {/* ================= HERO: REDISEÑO TOTAL (Pixel Art & Tech Vibe) ================= */}
        <section className={styles.heroSection}>
          
          <div className={styles.pixelArtWrapper}>
            {/* SVG PIXEL ART GIGANTE: Servidor Cloud AWS */}
            <svg viewBox="0 0 100 100" className={styles.pixelSvg} shapeRendering="crispEdges">
              <defs>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Sombra base */}
              <rect x="20" y="85" width="60" height="5" fill="#000000" opacity="0.5" />
              
              {/* Chasis del Servidor */}
              <rect x="25" y="10" width="50" height="75" fill="#1e293b" />
              <rect x="30" y="15" width="40" height="65" fill="#0f172a" />
              
              {/* Rack 1 (Procesamiento) */}
              <rect x="35" y="25" width="30" height="12" fill="#334155" />
              <rect x="40" y="29" width="4" height="4" fill="#38bdf8" className={styles.blinkFast} filter="url(#neonGlow)" />
              <rect x="48" y="29" width="4" height="4" fill="#ff9900" />
              <rect x="56" y="29" width="4" height="4" fill="#ff9900" />
              
              {/* Rack 2 (Almacenamiento) */}
              <rect x="35" y="45" width="30" height="12" fill="#334155" />
              <rect x="40" y="49" width="4" height="4" fill="#ff9900" className={styles.blinkSlow} filter="url(#neonGlow)" />
              <rect x="48" y="51" width="12" height="2" fill="#94a3b8" />
              
              {/* Rack 3 (Conexión Activa AWS) */}
              <rect x="35" y="65" width="30" height="12" fill="#334155" />
              <rect x="40" y="69" width="4" height="4" fill="#10b981" filter="url(#neonGlow)" />
              <rect x="48" y="69" width="12" height="4" fill="#ff9900" filter="url(#neonGlow)" />
              
              {/* Cable de datos pixelado */}
              <rect x="75" y="70" width="15" height="4" fill="#ff9900" />
              <rect x="86" y="74" width="4" height="26" fill="#ff9900" />
            </svg>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>NEXO CLOUD</h1>
            <p className={styles.description}>
              Inicia tu entrenamiento táctico en la infraestructura web. Un programa inmersivo de <strong>6 niveles prácticos</strong> donde dominarás simuladores de arquitectura cloud. Completa la matriz de aprendizaje y extrae tu insignia oficial certificada por el <strong>AWS Student Builder Group ITB</strong>.
            </p>
          </div>
          
        </section>

        {/* ================= RUTAS: LISTA HORIZONTAL COMPACTA ================= */}
        <section className={styles.routesContainer}>
          
          {/* Tarjeta 1: Activa (CON LA IMAGEN DE LA INSIGNIA) */}
          <div className={`${styles.routeRow} ${styles.rowActive}`}>
            <div className={styles.routeLeft}>
              {/* Contenedor de insignia más ancho y grande */}
              <div className={styles.badgeImageContainer}>
                <img 
                  src={awsPractitionerBadge} 
                  alt="AWS Certified Cloud Practitioner" 
                  className={styles.badgeImage} 
                />
              </div>
              <div className={styles.routeInfo}>
                <span className={styles.routeLabel}>NIVEL 01 // DESBLOQUEADO</span>
                <h3 className={styles.routeName}>AWS Certified Cloud Practitioner</h3>
              </div>
            </div>
            <button 
                // 👇 AQUÍ ESTÁ EL CAMBIO: Cambiar btnIniciar por actionBtn 👇
                className={styles.actionBtn} 
                onClick={(e) => {
                  e.preventDefault(); 
                  if (!user) {
                    setAuthModalOpen(true);
                  } else {
                    setViewChallenge(true); 
                  }
                }}
              >
                INICIAR
            </button>
          </div>

          {/* Tarjeta 2: Bloqueada */}
          <div className={`${styles.routeRow} ${styles.rowLocked}`}>
            <div className={styles.routeLeft}>
              <div className={styles.lockedBadgeWrapper}>
                <img 
                  src={awsAIBadge} 
                  alt="AWS Certified AI Practitioner Locked" 
                  className={styles.lockedBadgeImage} 
                />
                <div className={styles.lockOverlay}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <div className={styles.routeInfo}>
                <span className={styles.routeLabelLocked}>NIVEL 02 // RESTRINGIDO</span>
                <h3 className={styles.routeNameLocked}>AWS Certified AI Practitioner</h3>
              </div>
            </div>
            <span className={styles.badgeLocked}>PRÓXIMAMENTE</span>
          </div>

          {/* Tarjeta 3: Bloqueada */}
          <div className={`${styles.routeRow} ${styles.rowLocked}`}>
            <div className={styles.routeLeft}>
              <div className={styles.lockedBadgeWrapper}>
                <img 
                  src={awsSolutionsBadge} 
                  alt="AWS Certified Solutions Architect Locked" 
                  className={styles.lockedBadgeImage} 
                />
                <div className={styles.lockOverlay}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <div className={styles.routeInfo}>
                <span className={styles.routeLabelLocked}>NIVEL 03 // RESTRINGIDO</span>
                <h3 className={styles.routeNameLocked}>AWS Certified Solutions Architect – Associate</h3>
              </div>

            </div>
            <span className={styles.badgeLocked}>PRÓXIMAMENTE</span>
          </div>

        </section>

        {/* Modal de Autenticación */}
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setAuthModalOpen(false)} 
          message="Debes Iniciar Sesión con Google para acceder al Entorno Virtual de Aprendizaje (EVAS)."
        />

      </main>

      {/* ================= FOOTER OFICIAL ================= */}
    </div>
  );
}