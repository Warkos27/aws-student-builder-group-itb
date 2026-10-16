import styles from './PractitionerChallenge.module.css';

import skillBuilderLogo from "../../../assets/skill-builder.png";

import logoCert from '../../../assets/aws-practitioner.webp';

import seccion1 from '../../../assets/seccion1.jpg'

// === IMPORTACIÓN DE TUS ICONOS PIXEL ART (Ajusta la ruta si es necesario) ===
import chipIcon from '../../../assets/chip.png';
import boltIcon from '../../../assets/bolt.png';
import dropIcon from '../../../assets/drop.png';
import trophyIcon from '../../../assets/trophy.png';
import relogIcon from '../../../assets/relog1.png';
import teams from '../../../assets/teams.png';
/*import aws1 from '../../../assets/aws1.png';
import aws2 from '../../../assets/aws2.png';
import aws3 from '../../../assets/aws3.png';*/


import card19  from '../../../assets/car16.png';



// === BASE DE DATOS DE SESIONES ===
interface Session {
  id: number;
  sessionNum: string;
  dateStr: string;
  fullDate: string;
  title: string;
  shortDesc: string; 
  speakerName: string;
  speakerRole: string;
  speakerImg: string; 
  bannerImg: string;
  meetupUrl: string;
  surveyUrl: string;
  isSurveyActive: boolean; // <--- NUEVO INTERRUPTOR
  status: 'active' | 'locked';
  isSurprise?: boolean;
}

const sessionsData: Session[] = [
  {
    id: 1, sessionNum: "SESIÓN 1", dateStr: "15/10/2026 • 18:00", 
    fullDate: "Jueves 15 de octubre de 2026, 6:00 p. m. (GMT-5)",  
    title: "Primer Meetup AWS ITB",
    shortDesc: "INTRODUCCIÓN A LA NUBE Y CONCEPTOS CLAVE", 
    speakerName: "Marko Rojas", 
    speakerRole: "AWS SBG Leader ITB",
    speakerImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    bannerImg: seccion1,
    meetupUrl: "https://www.meetup.com/aws-sbg-at-bolivarian-uni-higher-inst-of-tech-naval-campus/",
    surveyUrl: "https://pulse.amazon/survey/UPCU4UQO",
    isSurveyActive: false, // <--- EL DÍA DEL EVENTO CAMBIA ESTO A true
    isSurprise: true,
    status: "active"
  },
  {
    id: 2, sessionNum: "SESIÓN 2", dateStr: "Por definir", fullDate: "", title: "Próximamente", shortDesc: "Por anunciar", speakerName: "Por confirmar", speakerRole: "Invitado Especial", speakerImg: "", bannerImg: "", meetupUrl: "#", surveyUrl: "#", isSurveyActive: false, status: "locked"
  },
  {
    id: 3, sessionNum: "SESIÓN 3", dateStr: "Por definir", fullDate: "", title: "Próximamente", shortDesc: "Por anunciar", speakerName: "Por confirmar", speakerRole: "Invitado Especial", speakerImg: "", bannerImg: "", meetupUrl: "#", surveyUrl: "#", isSurveyActive: false, status: "locked"
  },
  {
    id: 4, sessionNum: "SESIÓN 4", dateStr: "Por definir", fullDate: "", title: "Próximamente", shortDesc: "Por anunciar", speakerName: "Por confirmar", speakerRole: "Invitado Especial", speakerImg: "", bannerImg: "", meetupUrl: "#", surveyUrl: "#", isSurveyActive: false, status: "locked"
  },
  {
    id: 5, sessionNum: "SESIÓN 5", dateStr: "Por definir", fullDate: "", title: "Próximamente", shortDesc: "Por anunciar", speakerName: "Por confirmar", speakerRole: "Invitado Especial", speakerImg: "", bannerImg: "", meetupUrl: "#", surveyUrl: "#", isSurveyActive: false, status: "locked"
  },
  {
    id: 6, sessionNum: "SESIÓN 6", dateStr: "Por definir", fullDate: "", title: "Próximamente", shortDesc: "Por anunciar", speakerName: "Por confirmar", speakerRole: "Invitado Especial", speakerImg: "", bannerImg: "", meetupUrl: "#", surveyUrl: "#", isSurveyActive: false, status: "locked"
  }
];

export default function PractitionerChallenge() {

// Guardamos qué actividades ha completado el usuario por ID de sesión
const [userProgress, setUserProgress] = useState<Record<number, { quiz: boolean, survey: boolean }>>({});

// Estado para el modal (ahora sirve para los quizzes de cada sesión y el simulador)
  const [modalData, setModalData] = useState({ isOpen: false, type: '', sessionId: 0, title: '', desc: '' });


  // === ESTADOS DE PROGRESO Y MODAL ===
  const [tasks, setTasks] = useState({ sim: false, quiz: false, survey: false });

  // Cálculos de la barra de progreso
  const completedCount = Object.values(tasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 3) * 100);

  // Manejador genérico del Modal
  const openModal = (type: string, title: string, desc: string, sessionId: number = 0) => {
    setModalData({ isOpen: true, type, sessionId, title, desc });
  };


  const handleConfirmAction = () => {
    if (modalData.type === 'sim') {
      alert("El simulador oficial de AWS Student Builder Group ITB estará disponible tras nuestro primer evento presencial. ¡Mantente atento!");
    } else if (modalData.type === 'quiz') {
      // Simulación de éxito de código PIN para una sesión específica
      setUserProgress(prev => ({
        ...prev,
        [modalData.sessionId]: { ...prev[modalData.sessionId], quiz: true }
      }));
    }
    setModalData({ isOpen: false, type: '', sessionId: 0, title: '', desc: '' });
  };

    const handleSurveyClick = (sessionId: number, url: string) => {
    window.open(url, '_blank');
    // Marcamos la encuesta como completada
    setUserProgress(prev => ({
      ...prev,
      [sessionId]: { ...prev[sessionId], survey: true }
    }));
  };

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'popIn 0.3s ease forwards' }}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className={styles.pageContainer}>
      
      {/* ================= MODAL ================= */}
      {modalData.isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <img src={boltIcon} alt="Acción" className={styles.modalIcon} />
            <h3>{modalData.title}</h3>
            <p>{modalData.desc}</p>
            {modalData.type === 'quiz' && (
               <input type="text" placeholder="Ingresa el PIN dictado en la charla" className={styles.pinInput} style={{marginBottom: '16px', width: '100%', boxSizing: 'border-box'}} />
            )}
            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setModalData({ ...modalData, isOpen: false })}>Cancelar</button>
              
              {/* Cambiamos el comportamiento dependiendo del tipo de modal */}
              {modalData.type === 'quiz' ? (
                <button className={styles.btnUpcoming} disabled>
                  ⏳ Próximamente
                </button>
              ) : (
                <button className={styles.btnConfirm} onClick={handleConfirmAction}>Confirmar</button>
              )}
            </div>
          </div>
        </div>
      )}

      <main className={styles.mainContent}>
        
        {/* ================= HERO SECTION (Insignia en la esquina superior derecha) ================= */}
        <section className={styles.heroSection}>
          
          {/* Insignia posicionada a la derecha */}
          <div className={styles.heroBadgeRight}>
            <div className={styles.badgeGlowEffect}>
              <img src={logoCert} alt="AWS Certified Cloud Practitioner" className={styles.cornerBadgeImg} />
            </div>
          </div>

          <div className={styles.breadcrumb}>
            <span>Aula Virtual</span> / <span>Certificaciones</span> / <span>Nivel 01</span>
          </div>
          <h1 className={styles.heroTitle}>AWS Certified Cloud Practitioner</h1>
          <p className={styles.heroDesc}>
            Bienvenido a tu Entorno Virtual de Aprendizaje (EVAS) del <strong>AWS Student Builder Group ITB</strong>. 
            Completa las actividades prácticas de este módulo para sumar progreso y desbloquear tu credencial comunitaria.
          </p>
          <div className={styles.courseProgress}>
            <div className={styles.progressText}>
              <span>Progreso Práctico del Módulo</span>
              <span>{progressPercent}% Completado</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progressPercent === 0 ? 3 : progressPercent}%` }}></div>
            </div>
          </div>
        </section>

        <div className={styles.scrollDownContainer}>
              <button 
                className={styles.scrollArrowBtn}
                onClick={() => {
                  document.getElementById('calendario-charlas')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Ir al Calendario de Charlas"
              >
                {/* SVG de flecha hacia abajo */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </button>
              <span className={styles.scrollText}>Ver Calendario</span>
        </div>

        {/* ================= MÓDULO 1: SYLLABUS INTEGRADO (Diseño Fluido) ================= */}
        <section className={styles.moduleSection}>
          <div className={styles.moduleHeader}>
            <span className={styles.moduleTag}>// MÓDULO 01</span>
            <h2>Syllabus y Contexto de la Certificación</h2>
          </div>

          <div className={styles.syllabusPaper}>
            
            <div className={styles.syllabusBlock}>
              <div className={styles.syllabusTitleWrap}>
                <img src={chipIcon} alt="Chip" className={styles.pixelIcon} />
                <h3>¿Qué es y qué evalúa este examen?</h3>
              </div>
              
             <p>
                La <a href="https://aws.amazon.com/es/certification/certified-cloud-practitioner/" target="_blank" rel="noreferrer" className={styles.inlineLinkOrange}>
                  AWS Certified Cloud Practitioner (CLF-C02)
                  <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a> es el punto de entrada oficial al ecosistema de Amazon Web Services. Está diseñada para validar tu comprensión global de la nube de AWS, independientemente de tu perfil técnico o de programación.
              </p>


              <p>
                A lo largo de tu preparación, dominarás 4 dominios clave dictados por AWS: <strong>1. Conceptos de la Nube (24%)</strong>, <strong>2. Seguridad y Conformidad (30%)</strong>, <strong>3. Tecnología e Infraestructura (34%)</strong>, y <strong>4. Facturación y Precios (12%)</strong>. Entenderás servicios clave como EC2, S3, RDS, IAM y el modelo de responsabilidad compartida.
              </p>
            </div>

            <div className={styles.syllabusDivider}></div>

            <div className={styles.syllabusBlock}>
              <div className={styles.syllabusTitleWrap}>
                <img src={trophyIcon} alt="Trophy" className={styles.pixelIcon} />
                <h3>Costos y Voucher 100% Gratis para Estudiantes</h3>
              </div>
            <p>
                El costo estándar mundial de este examen (rendido vía Pearson VUE) es de <strong>$100 USD</strong>. Sin embargo, a través del programa oficial <a href="https://builder.aws.com/student-rewards" target="_blank" rel="noreferrer" className={styles.inlineLinkOrange}>
                  AWS Student Rewards
                  <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>, puedes conseguirlo totalmente gratis.
            </p>
              <ul className={styles.syllabusList}>
                <li><strong>Verificación SheerID:</strong> Debes registrarte en el <strong>AWS Builder Center</strong> y verificar tu estatus de estudiante universitario utilizando tu correo institucional o documentos oficiales a través de la <a href="https://builder.aws.com/content/3IbJTnQH9DLSbGKQ28YpgK4mRu6/how-to-verify-for-aws-student-rewards-full-signup-and-sheerid-guide" target="_blank" rel="noreferrer" className={styles.inlineLinkGreen}>
                  Guía de verificación de SheerID
                  <svg className={styles.linkIconSvg} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>.</li>
                <li><strong>Desafío de las 21 Insignias:</strong> Una vez verificado tu perfil, debes mantener actividad en la comunidad de Builder Center comentando, publicando y aprendiendo.</li>
                <li><strong>Recompensa Final:</strong> Al acumular exactamente <strong>21 badges (insignias)</strong>, desbloqueas un voucher automático que cubre el <strong>100% del costo del examen Foundational</strong>.</li>
              </ul>
            </div>

            <div className={styles.syllabusDivider}></div>

            <div className={styles.syllabusBlock}>
              <div className={styles.syllabusTitleWrap}>
                <img src={teams} alt="Bolt" className={styles.pixelIcon} />
                <h3>Oportunidades Laborales y Perfil</h3>
              </div>
              <p>
                    Obtener esta insignia global te posiciona estratégicamente en el mercado. Sirve como base para roles como Cloud Support Junior, Especialista en Ventas de TI, Analista de Datos en la Nube, o como desarrollador Junior (como tú en Android/Web) que busca integrar arquitecturas en la nube en sus proyectos.              </p>
            </div>

          </div>
        </section>

        {/* ================= MÓDULO 2: HERRAMIENTAS INTERACTIVAS (Con estado) ================= */}
        <section className={styles.moduleSection}>
          <div className={styles.moduleHeader}>
            <span className={styles.moduleTag}>// MÓDULO 02</span>
            <h2>Recursos de Preparación</h2>
            <p className={styles.subtext}>Herramientas clave para dominar el examen oficial de AWS.</p>
          </div>

          <div className={styles.lmsToolsGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            
            {/* 1. Simulador */}
            <div className={styles.lmsToolCard}>
              <div className={styles.toolIconWrap}>
                <img src={dropIcon} alt="Rayo" className={styles.toolPixelIcon} />
              </div>
              <h3>Simulador Oficial</h3>
              <p>Practica con preguntas cronometradas formato Pearson VUE.</p>
              <button 
                className={styles.btnToolPrimary} 
                onClick={() => openModal('sim', 'Ingresar al Simulador', '¿Estás listo para iniciar el test de 65 preguntas cronometradas?')}
              >
                Ingresar al Simulador
              </button>
            </div>

            {/* 2. AWS Skill Builder */}
            <div className={styles.lmsToolCard}>
              <img 
                src={skillBuilderLogo} 
                alt="AWS Skill Builder" 
                className={styles.skillLogo} 
              />
              <h3>AWS Skill Builder</h3>
              <p>Accede a la plataforma oficial de entrenamiento y cursos gratuitos de Amazon.</p>
              <button 
                className={styles.btnToolOutline}
                onClick={() => window.open('https://skillbuilder.aws/?utm_source=copilot.com', '_blank')}
              >
                Ir a Skill Builder
              </button>
            </div>

          </div>
        </section>

        {/* ================= MÓDULO 3: CERTIFICADO COMUNITARIO ================= */}
        <section className={styles.certificateBanner}>
          <div className={styles.certBannerLeft}>
            <img src={card19} alt="Certificado" className={styles.hugeIcon} />
            <div>
              <h3>Certificado de Finalización Comunitaria</h3>
              <p>
                Al completar el simulador, asistir a los eventos y llenar las encuestas, podrás extraer tu certificado digital avalado por el AWS Student Builder Group <span id="calendario-charlas">ITB.</span>
              </p>
            </div>
          </div>
          <button className={styles.btnClaimLocked} disabled>
            🔒 Reclamar Certificado
          </button>
        </section>


      </main>


      {/* ================= MÓDULO 4: LAS 6 SESIONES (En su propio contenedor amplio) ================= */}
      <div className={styles.wideSessionsWrapper}>
        <div className={styles.moduleHeader}>
          <span  className={styles.moduleTag}>// MÓDULO 03</span>
          <h2 className={styles.ITBAU}>Calendario <span className={styles.THE}>de Charlas</span></h2>
          <p className={styles.subtext}>Una ruta de 6 sesiones del AWS Student Builder Group ITB para prepararte hacia la certificación.</p>
        </div>

        <div className={styles.sessionsGrid}>


          {sessionsData.map((session) => (
            <div key={session.id} className={`${styles.sessionCard} ${session.status === 'locked' ? styles.cardLocked : ''}`}>


                {/* === NUEVA CORTINA DE SORPRESA === */}
              {session.isSurprise && (
                <div className={styles.surpriseOverlay}>
                  <img src={relogIcon} alt="Trabajando" className={styles.surpriseIcon} />
                  <h3 className={styles.surpriseTitle}>¡Casi listo!</h3>
                  <p className={styles.surpriseDesc}>Estamos preparando el lanzamiento oficial de nuestro primer evento.</p>
                </div>
              )}
              
              {session.status === 'active' ? (
                <>
                  {/* HEADER: aws | ITB */}
                  <div className={styles.sessionHeaderBar}>
                    <span className={styles.awsText}>aws <span className={styles.itbText}>| ITB</span></span>
                    <span className={styles.dateText}>{session.dateStr}</span>
                  </div>

                  {/* AQUÍ VA TU IMAGEN DE PHOTOSHOP */}
                  <div className={styles.photoshopBannerWrapper}>
                    <img src={session.bannerImg} alt={session.title} className={styles.photoshopBannerImg} />
                  </div>

                  {/* CUERPO PRINCIPAL */}
                  <div className={styles.sessionBody}>
                    <div className={styles.sessionNumAndCounter}>
                      <span className={styles.sessionNumTag}>{session.sessionNum}</span>
                      <span className={styles.sessionCounterTag}>01 / 06</span>
                    </div>
                    
                    <h3 className={styles.sessionTitle}>{session.title}</h3>
                    <p className={styles.sessionDescLight}>{session.speakerName} — {session.speakerRole}</p>
                    
                    <div className={styles.sessionDateLine}>
                      <span>📅</span> {session.fullDate}
                    </div>

                    <a href={session.meetupUrl} target="_blank" rel="noreferrer" className={styles.inlineMeetupLink}>
                      Ver en Meetup →
                    </a>
                  </div>
                  
                  {/* ====== ACCIONES ====== */}
                  <div className={styles.techActionsContainer}>
                    
                    {/* 1. QUIZ EN VIVO */}
                    <div className={styles.techActionRow}>
                      <div className={styles.actionLabelGroup}>
                        <div className={`${styles.dotIndicator} ${!userProgress[session.id]?.quiz ? styles.pending : ''}`}></div>
                        <div className={styles.actionTextColumn}>
                          <span className={`${styles.actionLabelText} ${!userProgress[session.id]?.quiz ? styles.pending : ''}`}>Quiz en vivo</span>
                          <span className={`${styles.actionLabelSub} ${!userProgress[session.id]?.quiz ? styles.pending : ''}`}>(Obligatorio)</span>
                        </div>
                      </div>
                      
                      {userProgress[session.id]?.quiz ? (
                        <span className={`${styles.btnTextLink} ${styles.completed}`}><CheckIcon/> Listo</span>
                      ) : (
                        <button className={styles.btnTextLink} onClick={() => openModal('quiz', 'Ingresar PIN', 'Coloca el código del meetup.', session.id)}>Entrar con código ↗</button>
                      )}
                    </div>

                    {/* 2. ENCUESTA AWS (Con interruptor de bloqueo) */}
                    <div className={styles.techActionRow}>
                      <div className={styles.actionLabelGroup}>
                        <div className={`${styles.dotIndicator} ${!userProgress[session.id]?.survey ? styles.pending : ''}`}></div>
                        <div className={styles.actionTextColumn}>
                          <span className={`${styles.actionLabelText} ${!userProgress[session.id]?.survey ? styles.pending : ''}`}>Encuesta AWS</span>
                          <span className={`${styles.actionLabelSub} ${!userProgress[session.id]?.survey ? styles.pending : ''}`}>(Obligatorio)</span>
                        </div>
                      </div>
                      
                      {userProgress[session.id]?.survey ? (
                        <span className={`${styles.btnTextLink} ${styles.completed}`}><CheckIcon/> Listo</span>
                      ) : session.isSurveyActive ? (
                        <button className={styles.btnTextLink} onClick={() => handleSurveyClick(session.id, session.surveyUrl)}>Llenar encuesta ↗</button>
                      ) : (
                        <span className={styles.btnTextLinkDisabled}>🔒 Bloqueado</span>
                      )}
                    </div>

                  </div>
                </>
              ) : (
                <div className={styles.lockedBody}>
                    <img src={relogIcon} alt="Bloqueado" className={styles.lockIcon} />
                    <span className={styles.sessionNumTagLocked}>{session.sessionNum}</span>
                    <h3 className={styles.sessionTitleLocked}>Próximamente</h3>
                    <p className={styles.lockedDesc}>Los detalles se anunciarán pronto.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* --- FOOTER CORPORATIVO CON ILUSTRACIÓN --- */}

    </div>
  );
}