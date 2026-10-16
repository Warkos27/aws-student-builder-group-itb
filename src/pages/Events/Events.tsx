import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import AuthModal from '../../components/AuthModal/AuthModal';


import styles from './Events.module.css';

// =========================================================
// 0. BASE DE DATOS ESTÁTICA
// =========================================================

const rutaCertificacion = [
  {
    id: "cert-01",
    badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    level: "NIVEL 01 // GRUPO DE ESTUDIO",
    title: "AWS Certified Cloud Practitioner",
    status: "active",
    buttonText: "VER DETALLES",
    // === NUEVOS DATOS TIPO "PRÓXIMAMENTE" ===
    eventTag: "Próximamente",
    eventModality: "Por definir",
    eventSubTitle: "Detalles del evento en construcción 🚧",
    eventDesc: "Estamos planiacion de las fechas y el contenido para nuestro primer grupo de estudio oficial. ¡Mantente atento a las próximas actualizaciones de la comunidad!",
    dateMystery: "???",
    timeMystery: "???",
    locationMystery: "???",
    pill1: "👥 Práctica Real",
    pill2: "✅ Builder Center",
    organizer: "AWS Student Builder Group",
    meetupLink: "#"
  }
];

const comingSoon = [
  {
    id: "cs-01",
    badgeUrl: "https://cdn-icons-png.flaticon.com/512/2083/2083213.png", 
    level: "COMPETENCIA INTERNA // PREPARACIÓN",
    title: "Torneo de Builder Cars en la Facultad",
    status: "locked",
    buttonText: "PRÓXIMAMENTE"
  }
];

const workshops = [
  {
    id: "wk-01",
    badgeUrl: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
    level: "LABORATORIOS // PLANIFICACIÓN",
    title: "Taller Práctico: Despliegue Serverless",
    status: "locked",
    buttonText: "PRÓXIMAMENTE"
  }
];

export default function Events() {

  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  // =========================================================
  // 1. ZONA DE LÓGICA Y ESTADOS
  // =========================================================
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  // === NUEVO ESTADO: Controla qué tarjeta está desplegada ===
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const todosLosEventos = [...rutaCertificacion, ...comingSoon, ...workshops];
  const cantidadActivos = todosLosEventos.filter(evento => evento.status === 'active').length;

  // Estados del formulario
  const [status, setStatus] = useState(""); 
  const [desc, setDesc] = useState(""); 
  const MAX_CHARS = 500; 
  const [phone, setPhone] = useState(""); 
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
    setPhone(onlyNums);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); 
        setDesc("");  
        setPhone("");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  // Función para abrir/cerrar detalles de la tarjeta
  const toggleCard = (id: string, status: string) => {
    if (status !== 'active') return; // No hace nada si está bloqueada

    // 👇 1. NUEVA LÓGICA DE BLOQUEO POR SESIÓN 👇
    // Reemplaza "usuarioLogueado" por la variable real que uses para tu sesión de Google (ej: user, currentUser, isAuthenticated)
    if (!user) {
      setAuthModalOpen(true); // Abre el modal si no está logueado
      return; 
    }
    // 👆 FIN DE LA NUEVA LÓGICA 👆

    setExpandedId(expandedId === id ? null : id);
  };

  // === RENDERIZADO DINÁMICO DE TARJETAS MODIFICADO ===
  const renderCards = (dataArray: any[]) => {
    if (dataArray.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#101624', border: '1px dashed #29364d', borderRadius: '12px' }}>
          <p style={{ color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', margin: 0 }}>
            No hay eventos activos en esta categoría por el momento.
          </p>
        </div>
      );
    }

    return dataArray.map((item) => {
      const isExpanded = expandedId === item.id;

      return (
        <div 
          key={item.id} 
          className={`${styles.certCardWrap} ${item.status === 'active' ? styles.certCardActive : styles.certCardLocked}`}
        >
          {/* Cabecera de la tarjeta (Siempre visible) */}
          <div 
            className={styles.certCardHeader} 
            onClick={() => toggleCard(item.id, item.status)}
            style={{ cursor: item.status === 'active' ? 'pointer' : 'default' }}
          >
            <div className={styles.certLeft}>
              <img 
                src={item.badgeUrl} 
                alt={`${item.title} Icon`} 
                className={styles.certBadge} 
                style={item.status === 'locked' ? { filter: 'grayscale(100%)' } : {}} 
              />
              <div className={styles.certInfo}>
                <span className={item.status === 'active' ? styles.certLevelActive : styles.certLevelLocked}>
                  {item.level}
                </span>
                <h2 className={styles.certTitle}>{item.title}</h2>
              </div>
            </div>
            
            {/* Botón dinámico: Cambia si está abierto o cerrado */}
            <button 
              className={item.status === 'active' ? (isExpanded ? styles.btnCerrar : styles.btnIniciar) : styles.btnProximamente} 
              disabled={item.status === 'locked'}
            >
              {item.status === 'active' && isExpanded ? 'CERRAR' : item.buttonText}
            </button>
          </div>

          {/* === NUEVA SECCIÓN: Contenido Desplegable === */}
          <div className={`${styles.certCardDetails} ${isExpanded ? styles.detailsOpen : ''}`}>
            <div className={styles.detailsContent}>
              
              {/* Contenedor principal en Grid/Flex para separar las dos columnas */}
              <div className={styles.eventLayoutGrid}>
                
                {/* COLUMNA IZQUIERDA: Cuadro tipo póster con candado */}
                <div className={styles.posterBox}>
                  <div className={styles.posterTag}>AWS SBG • SOON</div>
                  <div className={styles.posterCenterIcon}>
                    {/* Icono de Candado */}
                    <svg width="28" height="28" fill="#FF9900" viewBox="0 0 24 24">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm7 13H8v-8h8v8z"/>
                    </svg>
                  </div>
                  <div className={styles.posterBottomText}>MUY PRONTO</div>
                </div>

                {/* COLUMNA DERECHA: Información y Detalles */}
                <div className={styles.infoColumn}>
                  <div className={styles.topTags}>
                    <span className={styles.tagOrange}>{item.eventTag}</span>
                    <span className={styles.tagDark}>{item.eventModality}</span>
                  </div>

                  <h3 className={styles.innerTitle}>{item.eventSubTitle}</h3>
                  <p className={styles.innerDesc}>{item.eventDesc}</p>

                  {/* Fechas en Modo Misterio con sus Iconos */}
                  <div className={styles.eventMetaInfo}>
                    <p>
                      <span className={styles.metaIcon}>📅</span> 
                      <strong>Fecha:</strong> <span className={styles.mysteryText}>{item.dateMystery}</span>
                    </p>
                    <p>
                      <span className={styles.metaIcon}>⏰</span> 
                      <strong>Hora:</strong> <span className={styles.mysteryText}>{item.timeMystery}</span>
                    </p>
                    <p>
                      <span className={styles.metaIcon}>📍</span> 
                      <strong>Lugar:</strong> <span className={styles.mysteryText}>{item.locationMystery}</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer inferior */}
              <div className={styles.innerFooter}>
                <span className={styles.organizerText}>Organizado por <strong>{item.organizer}</strong></span>
                <button className={styles.btnProximamenteLocked} disabled>
                  🔒 PRÓXIMAMENTE
                </button>
              </div>

            </div>
          </div>

        </div>
      );
    });
  };

  // =========================================================
  // 2. ZONA DE RENDERIZADO VISUAL
  // =========================================================
  return (
    <div className={styles.pageContainer}>
      
      <main className={styles.mainContent}>
        
        {/* === HERO === */}
        <section className={styles.heroSection}>
          <div className={styles.heroHeader}>
            <div className={styles.clockIconBox}>
              <svg className={styles.clockIcon} fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 3a1 1 0 011 1v4.414l3.293 3.293a1 1 0 01-1.414 1.414l-3.586-3.586A1 1 0 0110 12V8a1 1 0 011-1z" fillRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h1 className={styles.heroTitle}>Próximos eventos</h1>
              <p className={styles.heroDesc}>
                Estos eventos se cargan directo desde nuestro <a className={styles.heroLink} href="https://www.meetup.com/aws-sbg-at-bolivarian-uni-higher-inst-of-tech-naval-campus/?eventOrigin=home_groups_you_organize" target="_blank" rel="noreferrer">
                  Meetup oficial
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </a>. Esta página no lo reemplaza, solo enlaza y cataloga cada sesión técnica comunitaria.
              </p>
            </div>
          </div>

          {/* FILTROS */}
          <div className={styles.filtersContainer} style={{ borderBottom: '1px solid #1a2336', paddingBottom: '16px' }}>
            <div className={styles.filterPills}>
              <button onClick={() => setActiveFilter('Todos')} className={activeFilter === 'Todos' ? styles.pillActive : styles.pillDefault}>
                <span>Todos</span>
                {activeFilter === 'Todos' && <span className={styles.pillBadge}>{cantidadActivos}</span>}
              </button>
              <button onClick={() => setActiveFilter('Ruta de Certificación')} className={activeFilter === 'Ruta de Certificación' ? styles.pillActive : styles.pillDefault}>
                Ruta de Certificación
              </button>
              <button onClick={() => setActiveFilter('Coming Soon')} className={activeFilter === 'Coming Soon' ? styles.pillActive : styles.pillDefault}>
                Coming Soon
              </button>
              <button onClick={() => setActiveFilter('Workshops & Labs')} className={activeFilter === 'Workshops & Labs' ? styles.pillActive : styles.pillDefault}>
                Workshops & Labs
              </button>
            </div>
          </div>
        </section>

        {/* === LISTA DE TARJETAS (Cambia según el filtro) === */}
        <div className={styles.eventList}>
          {activeFilter === 'Todos' && renderCards([...rutaCertificacion, ...comingSoon, ...workshops])}
          {activeFilter === 'Ruta de Certificación' && renderCards(rutaCertificacion)}
          {activeFilter === 'Coming Soon' && renderCards(comingSoon)}
          {activeFilter === 'Workshops & Labs' && renderCards(workshops)}
        </div>

        {/* === CALL TO ACTION (CALL FOR SPEAKERS) === */}
        <section className={styles.cfpBanner}>
          <div className={styles.cfpContent}>
            <span className={styles.cfpTag}>Call For Speakers 🎤</span>
            <h3 className={styles.cfpTitle}>¿Quieres dar una charla o liderar un workshop?</h3>
            <p className={styles.cfpDesc}>La comunidad está abierta para todos los estudiantes apasionados por Cloud, Serverless, DevSecOps o Inteligencia Artificial.</p>

            <div className={styles.cfpFormWrap}>
              {status === "SUCCESS" ? (
                <div className={styles.successMessage}>
                  <h4>¡Propuesta enviada con éxito! 🚀</h4>
                  <p>Revisaremos tu postulación y te contactaremos pronto.</p>
                  <button onClick={() => setStatus("")} className={styles.cfpBtn}>
                    Enviar otra propuesta
                  </button>
                </div>
              ) : (
                <form action="https://formspree.io/f/xyekjlnn" method="POST" className={styles.speakerForm} onSubmit={handleSubmit}>
                  
                  <div className={styles.formRow}>
                    <input type="text" name="nombre" placeholder="Tu Nombre" required className={styles.formInput} />
                    <input type="email" name="correo" placeholder="Correo electrónico" required className={styles.formInput} />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.phoneInputWrap}>
                      <select name="codigoPais" className={styles.countrySelect} defaultValue="+593">
                        <option value="+593">🇪🇨 +593</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+52">🇲🇽 +52</option>
                      </select>
                      <input 
                        type="tel" 
                        name="telefono" 
                        placeholder="Número personal" 
                        required 
                        className={styles.phoneInput}
                        value={phone}
                        onChange={handlePhoneChange} 
                        maxLength={15}
                      />
                    </div>
                    <input type="text" name="tema" placeholder="Tema propuesto" required className={styles.formInput} />
                  </div>
                  
                  <div className={styles.textareaWrap}>
                    <textarea 
                      name="descripcion" 
                      placeholder="Breve descripción de tu charla o lab..." 
                      required 
                      rows={4} 
                      className={styles.formArea}
                      maxLength={MAX_CHARS}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <span className={styles.charCount}>{desc.length}/{MAX_CHARS}</span>
                  </div>
                  
                  <button type="submit" className={styles.cfpSubmitBtn}>
                    <span>Enviar Propuesta</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </button>
                  
                  {status === "ERROR" && <p className={styles.errorMessage}>Hubo un error al enviar. Inténtalo de nuevo.</p>}
                </form>
              )}
            </div>
          </div>
        </section>

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setAuthModalOpen(false)} 
          message="¡Hola Builder! Para ver los detalles del evento, primero debes Iniciar Sesión con Google."
        />
      </main>

      {/* FOOTER */}
    </div>
  );
}