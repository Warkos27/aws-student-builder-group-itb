import { useState } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';





import gal1 from '../../assets/gallery/charla1.jpeg';
import gal2 from '../../assets/gallery/charla2.jpeg';
import gal3 from '../../assets/gallery/charla3.jpeg';
import gal4 from '../../assets/gallery/charla4.jpeg';
import gal5 from '../../assets/gallery/charla5.jpeg';
import gal6 from '../../assets/gallery/charla6.jpeg';
import gal7 from '../../assets/gallery/charla7.jpeg';
import gal8 from '../../assets/gallery/charla8.jpeg';
import gal9 from '../../assets/gallery/charla9.jpeg';
import gal10 from '../../assets/gallery/charla10.jpeg';
import gal11 from '../../assets/gallery/charla11.jpeg';
import gal12 from '../../assets/gallery/charla12.jpeg';
import gal13 from '../../assets/gallery/charla13.jpeg';




// NUEVAS IMÁGENES DE COMMUNITY DAY CUENCA
import day1 from '../../assets/COMUNITY DAY CUENCA 05/day1.jpg';
import day2 from '../../assets/COMUNITY DAY CUENCA 05/day2.jpg';
import day3 from '../../assets/COMUNITY DAY CUENCA 05/day3.jpg';
import day4 from '../../assets/COMUNITY DAY CUENCA 05/day4.jpg';
import day5 from '../../assets/COMUNITY DAY CUENCA 05/day5.jpg';
import day6 from '../../assets/COMUNITY DAY CUENCA 05/day6.jpg';
import day7 from '../../assets/COMUNITY DAY CUENCA 05/day7.jpg';
import day8 from '../../assets/COMUNITY DAY CUENCA 05/day8.jpg';
import day9 from '../../assets/COMUNITY DAY CUENCA 05/day9.jpg';
import day10 from '../../assets/COMUNITY DAY CUENCA 05/day10.jpg';
import day11 from '../../assets/COMUNITY DAY CUENCA 05/day11.jpg';
import day12 from '../../assets/COMUNITY DAY CUENCA 05/day12.jpg';
import day13 from '../../assets/COMUNITY DAY CUENCA 05/day13.jpg';
import day14 from '../../assets/COMUNITY DAY CUENCA 05/day14.jpg';
import day15 from '../../assets/COMUNITY DAY CUENCA 05/day15.jpg';
import day16 from '../../assets/COMUNITY DAY CUENCA 05/day16.jpg';
import day17 from '../../assets/COMUNITY DAY CUENCA 05/day17.jpg';
import day18 from '../../assets/COMUNITY DAY CUENCA 05/day18.jpg';
import day19 from '../../assets/COMUNITY DAY CUENCA 05/day19.jpg';
import day20 from '../../assets/COMUNITY DAY CUENCA 05/day20.jpg';


import days1 from '../../assets/COMUNITY DAY CUENCA 05/days1.jpg';
import days2 from '../../assets/COMUNITY DAY CUENCA 05/days2.jpg';

// (Puedes seguir agregando day7, day8, etc. con el mismo formato)


// 1. Logo central
import chipIcon from '../../assets/chip.png';
import meetupLogo from '../../assets/Meetup_Logo.png';

import cuencaEvents from '../../assets/cuencaEvent.jpg';

// 2. Importamos los PNGs de los servicios (Constelaciones)
import lambdaIcon from '../../assets/Icon/Lamdan.png';
import computeIcon from '../../assets/Icon/Arch-Category_Compute_48.png';
import dynamoIcon from '../../assets/Icon/dynamodb.png';
import securityIcon from '../../assets/Icon/iam.png';
import auroraIcon from '../../assets/Icon/Aurora.png'; 
import networkIcon from '../../assets/Icon/Arch-Category_Networking-Content-Delivery_48.png';
import gamesIcon from '../../assets/Icon/Arch-Category_Games_48.png';
import govIcon from '../../assets/Icon/Arch-Category_Management-Governance_48.png';

// 3. Importamos TODOS los iconos pixel-art para la cinta transportadora
import relog1Icon from '../../assets/relog1.png';
import boltIcon from '../../assets/bolt.png';
import trophyIcon from '../../assets/trophy.png';
import teamsIcon from '../../assets/teams.png';
import ladderIcon from '../../assets/ladder.png';
import dropIcon from '../../assets/drop.png';

import car1Icon from '../../assets/car1.png'; 
import car2Icon from '../../assets/car2.png'; 
import car3Icon from '../../assets/car3.png';
import car5Icon from '../../assets/car5.png'; 
import car6Icon from '../../assets/car6.png'; 
import car7Icon from '../../assets/car7.png'; 

import car9Icon from '../../assets/car9.png'; 
import car10Icon from '../../assets/car10.png';
import car8Icon from '../../assets/car8.png';  

import car12Icon from '../../assets/car12.png'; 
import car13Icon from '../../assets/car13.png'; 
import car14Icon from '../../assets/car14.png'; 
import car15Icon from '../../assets/car15.png'; 
import car16Icon from '../../assets/car16.png'; 
import car17Icon from '../../assets/car17.png'; 
import car18Icon from '../../assets/car18.png'; 
import car19Icon from '../../assets/car19.png'; 
import car20Icon from '../../assets/car20.png'; 
import car11Icon from '../../assets/car11.png'; 
import car21Icon from '../../assets/car21.png'; 

// Agrupamos todos en una lista ordenada para la cinta
const marqueeIcons = [
  relog1Icon, car1Icon, car2Icon, car3Icon, car5Icon,
  boltIcon, car6Icon, car7Icon, car8Icon, car9Icon, car10Icon,
  dropIcon, car11Icon, car12Icon, car13Icon, car14Icon, car15Icon,
  ladderIcon, car16Icon, car17Icon, car18Icon, car19Icon, car20Icon,
  teamsIcon, car21Icon, trophyIcon
];

export default function Home() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('todos'); // <-- AQUI ES EL CAMBIO

// NUEVO: Estado para el acordeón de Preguntas Frecuentes
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // NUEVO: Datos de las preguntas frecuentes (Adaptados al ITB)
  const faqData = [
    {
      question: "¿Necesito saber programar para unirme?",
      answer: "No. Tenemos rutas para todos los niveles. Muchos miembros empiezan sin experiencia técnica y terminan construyendo proyectos en la nube. Lo único que necesitas es curiosidad."
    },
    {
      question: "¿Es solo para estudiantes de Ingeniería de Sistemas?",
      answer: "Para nada. La nube toca todas las disciplinas: salud, negocios, ciencia de datos, diseño. Tenemos miembros de más de 10 carreras diferentes."
    },
    {
      question: "¿Cuánto tiempo debo dedicarle?",
      answer: "Tú decides tu ritmo. Hacemos eventos cada 2-3 semanas que duran entre 1 y 3 horas. Puedes participar en lo que más te interese sin compromisos rígidos."
    },
    {
      question: "¿Puedo obtener certificaciones de AWS?",
      answer: "Sí. Te ayudamos a prepararte para certificaciones oficiales como AWS Cloud Practitioner y Solutions Architect. Varios miembros ya están certificados."
    },
    {
      question: "¿Cómo me uno?",
      answer: "Nuestra página oficial es Meetup. Solo síguenos ahí y ya eres parte — así de fácil. No hay proceso de admisión, entrevista ni formularios. Un clic y estás dentro."
    },
    {
      question: "¿Hacen eventos presenciales?",
      answer: "Sí, hacemos eventos presenciales en el ITB (Campus La Naval). Pero también tenemos una fuerte presencia virtual: workshops online, sesiones por Meet y contenido que puedes consumir desde donde estés."
    }
  ];  


  return (
    <div className={styles.homeContainer}>
      
      {/* --- SECCIÓN HERO (Exclusiva para la primera pantalla) --- */}
      <section className={styles.heroSection}>
        <div className={styles.gridCyber}></div>
        <div className={styles.glowTop}></div>
        <div className={styles.glowLeft}></div>
        <div className={styles.glowRight}></div>

        {/* Constelaciones Flotantes */}
        <div className={styles.constellations}>
          <div className={`${styles.floatingCard} ${styles.pos1} ${styles.animSlow}`}>
            <img src={lambdaIcon} alt="AWS Lambda" className={styles.awsIcon} />
            <span className={styles.textYellow}>AWS Lambda</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos2} ${styles.animReverse}`}>
            <img src={computeIcon} alt="Amazon EC2" className={styles.awsIcon} />
            <span className={styles.textWhite}>Amazon EC2</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos3} ${styles.animFast}`}>
            <img src={dynamoIcon} alt="Amazon DynamoDB" className={styles.awsIcon} />
            <span className={styles.textGray}>Amazon DynamoDB</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos4} ${styles.animSlow}`}>
            <img src={securityIcon} alt="AWS IAM" className={styles.awsIcon} />
            <span className={styles.textGray}>AWS IAM</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos5} ${styles.animReverse}`}>
            <img src={auroraIcon} alt="Amazon Aurora" className={styles.awsIcon} />
            <span className={styles.textWhite}>Amazon Aurora</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos6} ${styles.animFast}`}>
            <img src={networkIcon} alt="VPC" className={styles.awsIcon} />
            <span className={styles.textYellow}>VPC Networking</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos8} ${styles.animReverse}`}>
            <img src={gamesIcon} alt="GameLift" className={styles.awsIcon} />
            <span className={styles.textWhite}>GameLift</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.pos9} ${styles.animFast}`}>
            <img src={govIcon} alt="CloudWatch" className={styles.awsIcon} />
            <span className={styles.textYellow}>CloudWatch</span>
          </div>
        </div>

        <main className={styles.heroCenter}>
          <div className={styles.chipWrapper}>
            <div className={styles.chipGlow}></div>
            <img src={chipIcon} alt="AWS Builder Chip" className={styles.chipImg} />
          </div>

          <div className={styles.chapterTag}>
            <span className={styles.pingDot}></span>
            <span className={styles.chapterText}>
              🚀 AWS Student Builder Group • Ecuador Chapter (ITB)
            </span>
          </div>

          <h1 className={styles.mainTitle}>
            ¡Bienvenido al <br />
            <span className={styles.fireText}>AWS Student Builder Group ITB</span>!
          </h1>

          <p className={styles.subtitle}>
            Somos la comunidad estudiantil de AWS del Instituto Bolivariano ITB aprendemos, construimos y crecemos juntos. Explora rutas de certificación, participa en encuentros y retos técnicos, y prepárate con laboratorios reales y cupones oficiales<strong className={styles.textWhite}> desde Cloud Practitioner hasta certificaciones Associate y más. </strong> 
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.btnPrimary} 
              onClick={() => navigate('/ruta-certificacion')} 
            >
              Practitioner Challenge ➔
            </button>
            
            {/* 👇 AQUÍ ESTÁ EL CAMBIO 👇 */}
            <button 
              className={styles.btnSecondary}
              onClick={() => navigate('/eventos')}
            >
              📅 Próximos eventos
            </button>
          </div>
        </main>

        {/* Cinta infinita */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeGroup}>
              {marqueeIcons.map((icon, index) => (
                <img key={`g1-${index}`} src={icon} alt="icon" className={styles.mqIcon} />
              ))}
            </div>
            <div className={styles.marqueeGroup}>
              {marqueeIcons.map((icon, index) => (
                <img key={`g2-${index}`} src={icon} alt="icon" className={styles.mqIcon} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN SECCIÓN HERO --- */}

{/* --- SECCIÓN 1: ¿Qué es el Builder Group? --- */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>¿Qué es un <span>AWS Student Builder Group</span>?</h2>
        <p className={styles.sectionSubtitle}>
          Es una comunidad universitaria del Instituto Tecnológico Bolivariano ITB en Guayaquil, respaldada por Amazon Web Services, donde estudiantes aprenden, construyen y se certifican en tecnología cloud. Somos el puente entre la academia y la industria.
        </p>

        <div className={styles.gridCards}>
          
          {/* Tarjeta 1: Aprendizaje (Violeta) */}
          <div className={`${styles.card} ${styles.cardViolet}`}>
            <div className={styles.cardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Aprendizaje práctico</h3>
            <p className={styles.cardText}>Workshops, labs y proyectos reales usando servicios AWS. No solo teoría, sino hands-on desde el primer día construyendo arquitectura cloud.</p>
          </div>

          {/* Tarjeta 2: Comunidad (Naranja) */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={styles.cardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Comunidad ITB</h3>
            <p className={styles.cardText}>Un espacio local en Guayaquil para conectar con otros estudiantes apasionados por la tecnología, la innovación y el desarrollo de software.</p>
          </div>

          {/* Tarjeta 3: Respaldo (Turquesa) */}
          <div className={`${styles.card} ${styles.cardTeal}`}>
            <div className={styles.cardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Respaldo Oficial</h3>
            <p className={styles.cardText}>Formamos parte del programa oficial de Amazon Web Services, obteniendo acceso a recursos, créditos cloud, mentores de la industria y certificaciones.</p>
          </div>

        </div>
      </section>


      {/* --- SECCIÓN: Evento Full Width con Escáner --- */}
      <section className={styles.fullWidthEvent}>
        {/* Línea animada del escáner */}
        <div className={styles.scannerLine}></div>
        
        {/* Imagen de fondo */}
        <img src={cuencaEvents} alt="AWS Community Day Cuenca" className={styles.fullWidthImage} />
        
        {/* Barra inferior de información */}
        <div className={styles.eventBottomBar}>
          <span className={styles.eventDot}></span>
          <span className={styles.eventTextHighlight}>AWS Community Day Ecuador</span>
          <span className={styles.eventText}>Cuenca, Ecuador</span>
          <span className={styles.eventText}>05 de septiembre del 2026</span>
        </div>
      </section>







      {/* --- NUEVO HERO ESTILO AWS ECUADOR (ADAPTADO AL ITB) --- */}
      <section className={styles.customHeroSection}>
        
        {/* Columna Izquierda: Textos y Métricas */}
        <div className={styles.heroContentLeft}>
          
          
          <div className={styles.codeTerminal}>
            <span className={styles.codeIf}>if </span>
            <span className={styles.codeVar}>building: </span>
            <span className={styles.codeFunc}>start_here</span>
            <span className={styles.codePunct}>(</span>
            <span className={styles.codeString}>"itb"</span>
            <span className={styles.codePunct}>)</span>
          </div>
          
         <h1 className={styles.customTitle}>
            La <span className={styles.textPurple}>comunidad</span> de <span className={styles.textPurple}>AWS</span><br/>
            en la <span className={styles.textPurple}>ITB</span>
            <span className={styles.blinkingCursor}></span>
          </h1>
          
          <p className={styles.customDesc}>
            <strong className={styles.textBoldWhite}>Somos AWS Student Builder Group ITB, la comunidad universitaria</strong> que lleva la nube a la Facultad Empresarial. Aquí aprendemos Amazon Web Services junto a quienes construyen el futuro: dinámicas, talleres, certificaciones y eventos presenciales y virtuales en La Naval.
          </p>
          
          {/* Grupo de botones con el nuevo botón animado de Meetup */}
          <div className={styles.customButtonGroup}>
            <a 
              href="https://www.meetup.com/aws-sbg-at-bolivarian-uni-higher-inst-of-tech-naval-campus/?eventOrigin=home_groups_you_organize" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.btnMeetup}
            >
              <img src={meetupLogo} alt="Logo Meetup" className={styles.meetupImg} />
              Únete en Meetup
            </a>
            <button 
              className={styles.btnOutlineGray}
              onClick={() => navigate('/eventos')}
            >
              Ver eventos →
            </button>
          </div>

          {/* Cuadrícula de Métricas */}
          <div className={styles.metricsGridBox}>
            <div className={styles.metricCell}>
              <span className={styles.metricNumPurple}>+15</span>
              <span className={styles.metricLabel}>miembros_core_team</span>
            </div>
            <div className={styles.metricCell}>
              <span className={styles.metricNumPink}>3</span>
              <span className={styles.metricLabel}>dias_de_reunion</span>
            </div>
            <div className={styles.metricCell}>
              <span className={styles.metricNumWhite}>+120</span>
              <span className={styles.metricLabel}>fotos_de_eventos</span>
            </div>
            <div className={styles.metricCell}>
              <span className={styles.metricTextWhite}>ITB - <br/>Facultad <br/>Empresarial</span>
              <span className={styles.metricLabel}>la_naval</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Pixel Art Hemiciclo de la Rotonda en SVG Puro */}
        <div className={styles.heroContentRight}>
          <div className={styles.pixelArtContainer}>
            
            {/* SVG PURO: Hemiciclo de la Rotonda Pixel-Art */}
            <svg className={styles.pixelSvg} viewBox="0 0 40 40" shapeRendering="crispEdges">
              
              {/* --- ESTRELLAS Y LUCES ANIMADAS (Como en el video) --- */}
              <g className={styles.starBlink1} fill="#FF9900">
                <rect x="7" y="6" width="3" height="1" />
                <rect x="8" y="5" width="1" height="3" />
              </g>
              <g className={styles.starBlink2} fill="#FF57E9">
                <rect x="30" y="9" width="3" height="1" />
                <rect x="31" y="8" width="1" height="3" />
              </g>
              <g className={styles.starBlink3} fill="#2BD47D">
                <rect x="33" y="27" width="3" height="1" />
                <rect x="34" y="26" width="1" height="3" />
              </g>
              {/* Puntos de luz */}
              <rect x="5" y="16" width="1" height="1" fill="#3AB0FF" className={styles.starBlink1} />
              <rect x="35" y="19" width="1" height="1" fill="#AEB6C2" className={styles.starBlink2} />
              <rect x="9" y="26" width="1" height="1" fill="#AEB6C2" className={styles.starBlink3} />

              {/* --- EL MONUMENTO --- */}
              <g className={styles.monumentFloat}>
                
                {/* Columnas Traseras (Profundidad) */}
                <g fill="#475569">
                  <rect x="9" y="18" width="2" height="12" />
                  <rect x="14" y="18" width="2" height="12" />
                  <rect x="24" y="18" width="2" height="12" />
                  <rect x="29" y="18" width="2" height="12" />
                </g>

                {/* Base y Escaleras */}
                <rect x="4" y="34" width="32" height="1" fill="#1E293B" />
                <rect x="5" y="33" width="30" height="1" fill="#475569" />
                <rect x="6" y="32" width="28" height="1" fill="#64748B" />
                <rect x="8" y="31" width="24" height="1" fill="#94A3B8" />
                <rect x="10" y="30" width="20" height="1" fill="#CBD5E1" />

                {/* Columnas Frontales */}
                <g fill="#E2E8F0">
                  <rect x="6" y="18" width="2" height="14" />
                  <rect x="11" y="18" width="2" height="12" />
                  <rect x="16" y="18" width="2" height="12" />
                  <rect x="22" y="18" width="2" height="12" />
                  <rect x="27" y="18" width="2" height="12" />
                  <rect x="32" y="18" width="2" height="14" />
                </g>

                {/* Sombras de las Columnas */}
                <g fill="#94A3B8">
                  <rect x="7" y="18" width="1" height="14" />
                  <rect x="12" y="18" width="1" height="12" />
                  <rect x="17" y="18" width="1" height="12" />
                  <rect x="23" y="18" width="1" height="12" />
                  <rect x="28" y="18" width="1" height="12" />
                  <rect x="33" y="18" width="1" height="14" />
                </g>

                {/* Techo y Pedestal Central */}
                <rect x="4" y="17" width="32" height="1" fill="#94A3B8" />
                <rect x="5" y="16" width="30" height="1" fill="#CBD5E1" />
                <rect x="15" y="15" width="10" height="1" fill="#94A3B8" />
                <rect x="16" y="14" width="8" height="1" fill="#CBD5E1" />

                {/* Estatua de Bronce (Bolívar y San Martín) */}
                <g fill="#78350F">
                  <rect x="17" y="12" width="1" height="2" />
                  <rect x="20" y="12" width="1" height="2" />
                  <rect x="22" y="11" width="1" height="2" />
                  <rect x="17" y="10" width="6" height="2" />
                  <rect x="22" y="8" width="2" height="2" />
                  <rect x="18" y="7" width="2" height="3" />
                  <rect x="19" y="6" width="1" height="1" />
                </g>
                <g fill="#B45309">
                  <rect x="18" y="10" width="4" height="1" />
                  <rect x="19" y="7" width="1" height="2" />
                  <rect x="23" y="8" width="1" height="1" />
                </g>

                {/* Astas de las Banderas */}
                <g fill="#94A3B8">
                  <rect x="5" y="10" width="1" height="6" />
                  <rect x="34" y="10" width="1" height="6" />
                </g>

                {/* Banderas de Ecuador/Guayaquil */}
                <g fill="#FBBF24">
                  <rect x="1" y="10" width="4" height="1" />
                  <rect x="35" y="10" width="4" height="1" />
                </g>
                <g fill="#3B82F6">
                  <rect x="1" y="11" width="4" height="1" />
                  <rect x="35" y="11" width="4" height="1" />
                </g>
                <g fill="#EF4444">
                  <rect x="1" y="12" width="4" height="1" />
                  <rect x="35" y="12" width="4" height="1" />
                </g>

                {/* Antorchas de Fuego Frontales */}
                <g fill="#CBD5E1">
                  <rect x="4" y="28" width="3" height="4" />
                  <rect x="33" y="28" width="3" height="4" />
                </g>
                <g fill="#F97316" className={styles.fireFlicker}>
                  <rect x="4" y="26" width="3" height="2" />
                  <rect x="33" y="26" width="3" height="2" />
                </g>
                <g fill="#FEF08A" className={styles.fireFlicker}>
                  <rect x="5" y="25" width="1" height="2" />
                  <rect x="34" y="25" width="1" height="2" />
                </g>

              </g>
            </svg>

            {/* Coordenadas personalizadas */}
            <div className={styles.pixelArtLabels}>
              <span className={styles.coordColor}>lat -2°90'52"</span>
              <span className={styles.fileColor}>itb_la_naval.png</span>
            </div>
          </div>
        </div>

      </section>




      {/* --- SECCIÓN: ¿Por qué unirte? (Beneficios) --- */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>
          <span className={styles.benefitsTag}># lo_que_ganas</span>
          <h2 className={styles.benefitsTitle}>¿Por qué unirte?</h2>
          <p className={styles.benefitsDesc}>
            No necesitas experiencia previa ni pagar nada. Solo ganas de aprender y construir cosas increíbles en la nube.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {/* Tarjeta 1 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconYellow}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Aprende tecnología cloud real</h4>
              <p>Workshops prácticos con servicios AWS reales: Lambda, S3, EC2, RDS y más. Aprendizaje aplicado desde el primer día.</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconOrange}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Certifícate con AWS</h4>
              <p>Prepárate para certificaciones AWS con guías, simulacros y la experiencia de miembros ya certificados.</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconOrange}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Construye tu red profesional</h4>
              <p>Conecta con estudiantes apasionados, profesores, empresas y la comunidad AWS de Guayaquil y Ecuador.</p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconYellow}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Proyectos reales en la nube</h4>
              <p>Participa en proyectos grupales que usan AWS para resolver problemas reales del ITB y la región.</p>
            </div>
          </div>

          {/* Tarjeta 5 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconYellow}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Hackathons y competencias</h4>
              <p>Compite en hackathons internos y externos, gana premios y demuestra tus habilidades al mundo.</p>
            </div>
          </div>

          {/* Tarjeta 6 */}
          <div className={styles.benefitCard}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconOrange}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>Oportunidades laborales</h4>
              <p>Accede a ofertas de trabajo, pasantías y becas en empresas tecnológicas que buscan talento con habilidades AWS.</p>
            </div>
          </div>

          {/* Tarjeta Ancho Completo */}
          <div className={`${styles.benefitCard} ${styles.benefitFullCard}`}>
            <div className={`${styles.benefitIconWrapper} ${styles.iconPurple}`}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className={styles.benefitContent}>
              <h4>100% gratuito y abierto</h4>
              <p>Solo necesitas ser estudiante del Instituto Tecnológico Bolivariano ITB. No importa tu carrera, semestre o nivel técnico.</p>
            </div>
          </div>
        </div>
      </section>


      {/* --- SECCIÓN: GALERÍA DE MOMENTOS --- */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryTitleBox}>
            <span className={styles.momentosTag}>// momentos</span>
            <h2 className={styles.galleryTitle}>Eventos, Community Days y crecimiento del equipo</h2>
          </div>
          <p className={styles.galleryDesc}>
            Más de 100 momentos de nuestra comunidad: eventos presenciales y virtuales, Community Days, dinámicas de preparación, certificaciones alcanzadas y el crecimiento de nuestro equipo semana a semana.
          </p>
        </div>

        <div className={styles.galleryTabs}>
          {['todos', 'community-day', 'eventos-virtuales', 'eventos-presenciales', 'crecimiento-equipo'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeFilter === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              # {tab}
            </button>
          ))}
        </div>

        {/* --- BLOQUE 1: #todos (Mezcla de ambas carpetas) --- */}
        {activeFilter === 'todos' && (
          <div className={styles.galleryGrid}>


            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={day1} alt="Community Day Principal" />
              <span className={styles.imgLabel}>Apertura del Evento</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={gal1} alt="Charla Principal" />
              <span className={styles.imgLabel}>Charla AWS ITB</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day2} alt="Actividad" />
              <span className={styles.imgLabel}>Charlas Técnicas</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={gal2} alt="Laboratorio" />
              <span className={styles.imgLabel}>Taller Práctico</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day3} alt="Comunidad" />
              <span className={styles.imgLabel}>Explicación Builder Card</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day4} alt="Stands" />
              <span className={styles.imgLabel}>AWS BuilderCards</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal4} alt="Preparación" />
              <span className={styles.imgLabel}>Ruta de Certificación</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemWide}`}>
              <img src={day5} alt="Staff" />
              <span className={styles.imgLabel}>Equipo ITB en Cuenca</span>
            </div>

            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={gal3} alt="Networking" />
              <span className={styles.imgLabel}>Encuentro Presencial</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={gal5} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day6} alt="Cierre" />
              <span className={styles.imgLabel}>Foto con la speaker Andrea</span>
            </div>
            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={gal6} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day7} alt="Cierre" />
              <span className={styles.imgLabel}>Speakers Internacionales</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal7} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day8} alt="Cierre" />
              <span className={styles.imgLabel}>Líderes Student Builder Group</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal8} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day9} alt="Cierre" />
              <span className={styles.imgLabel}>Foto con los User Group</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal9} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day10} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal10} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day11} alt="Cierre" />
              <span className={styles.imgLabel}>Presentación del Decano</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal11} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day12} alt="Cierre" />
              <span className={styles.imgLabel}>Foto de Líderes</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemLarge}`}>
              <img src={gal12} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day13} alt="Cierre" />
              <span className={styles.imgLabel}>Foto loca de Recuerdo</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal13} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day14} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemWide}`}>
              <img src={day15} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={days1} alt="Cierre" />
              <span className={styles.imgLabel}>Inauguración de Community Day</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={days2} alt="Stand ITB" />
              <span className={styles.imgLabel}>Stand ITB</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day17} alt="Cierre" />
              <span className={styles.imgLabel}>Stand Listo ITB</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day18} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            
            <div className={styles.galleryItem}>
              <img src={day19} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            
          </div>
        )}

        {/* --- BLOQUE 2: #community-day (Solo carpeta COMUNITY DAY CUENCA 05) --- */}
        {activeFilter === 'community-day' && (
          <div className={styles.galleryGrid}> 


            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={day1} alt="Community Day Principal" />
              <span className={styles.imgLabel}>Apertura del Evento</span>
            </div>


            <div className={`${styles.galleryItem} ${styles.itemWide}`}>
              <img src={day3} alt="Comunidad" />
              <span className={styles.imgLabel}>Explicacion Builder Card</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day2} alt="Actividad" />
              <span className={styles.imgLabel}>Charlas Técnicas</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={days1} alt="Cierre" />
              <span className={styles.imgLabel}> Inauguración de Community Day</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day5} alt="Staff" />
              <span className={styles.imgLabel}>Equipo ITB en Cuenca</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day6} alt="Cierre" />
              <span className={styles.imgLabel}>Foto con la speaker Andrea</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day7} alt="Cierre" />
              <span className={styles.imgLabel}>Speaker Internacionales</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day8} alt="Cierre" />
              <span className={styles.imgLabel}>Lideres Student Builder Group</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day9} alt="Cierre" />
              <span className={styles.imgLabel}>Foto con Los User Group</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day10} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>


            <div className={styles.galleryItem}>
              <img src={day11} alt="Cierre" />
              <span className={styles.imgLabel}>Presentacion Del Decano</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={day12} alt="Cierre" />
              <span className={styles.imgLabel}>Foto de Lideres</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={day13} alt="Cierre" />
              <span className={styles.imgLabel}>Foto loca de Recuerdo</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={day14} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>
            <div className={`${styles.galleryItem} ${styles.itemWide}`}>
              <img src={day15} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>

            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={days2} alt="Stand ITB " />
              <span className={styles.imgLabel}>Stand ITB</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day17} alt="Cierre" />
              <span className={styles.imgLabel}>STAND LISTO ITB</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day18} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={day19} alt="Cierre" />
              <span className={styles.imgLabel}>Cierre del Evento</span>
            </div>

            

            <div className={styles.galleryItem}>
              <img src={day4} alt="Stands" />
              <span className={styles.imgLabel}>AWS BuilderCards</span>
            </div>

          </div>  
        )}

        {/* --- BLOQUE 3: #eventos-presenciales (Solo carpeta gallery) --- */}
        {activeFilter === 'eventos-presenciales' && (
          <div className={styles.galleryGrid}>


            <div className={`${styles.galleryItem} ${styles.itemLarge}`}>
              <img src={gal1} alt="Charla Principal" />
              <span className={styles.imgLabel}>Charla AWS ITB</span>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={gal3} alt="Networking" />
              <span className={styles.imgLabel}>Encuentro Presencial</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal4} alt="Preparación" />
              <span className={styles.imgLabel}>Ruta de Certificación</span>
            </div>
            <div className={`${styles.galleryItem} ${styles.itemLarge}`}>
              <img src={gal5} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={`${styles.galleryItem} ${styles.itemTall}`}>
              <img src={gal6} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal7} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal8} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal9} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={gal10} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>

            <div className={styles.galleryItem}>
              <img src={gal2} alt="Laboratorio" />
              <span className={styles.imgLabel}>Taller Práctico</span>
            </div>

            <div className={`${styles.galleryItem} ${styles.itemWide}`}>
              <img src={gal11} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal12} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>
            <div className={styles.galleryItem}>
              <img src={gal13} alt="Equipo" />
              <span className={styles.imgLabel}>Reunión Core Team</span>
            </div>

            
          </div>
        )}

        {/* --- BLOQUE 4: LAS DEMÁS ETIQUETAS ("MUY PRONTO") --- */}
        {(activeFilter === 'eventos-virtuales' || activeFilter === 'crecimiento-equipo') && (
          <div className={styles.soonContainer}>
            <span className={styles.soonText}>🛠️ Muy pronto añadiremos fotos aquí...</span>
          </div>
        )}

      </section>

{/* --- SECCIÓN FAQ (PREGUNTAS FRECUENTES) --- */}
      <section className={styles.faqSection}>
        <div className={styles.faqGrid}>
          
          {/* Lado Izquierdo: Títulos y Contexto */}
          <div className={styles.faqLeft}>
            <span className={styles.faqTag}># dudas_resueltas</span>
            <h2 className={styles.faqTitle}>
              Cosas que te <br />
              estarás <br />
              <span className={styles.textPurple}>preguntando</span>
            </h2>
            <p className={styles.faqDesc}>
              Las respuestas cortas a lo que todos quieren saber antes de dar el primer paso.
            </p>
            <div className={styles.faqCount}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              6 respuestas rápidas
            </div>
          </div>

          {/* Lado Derecho: Acordeón Animado */}
          <div className={styles.faqRight}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}
              >
                <button 
                  className={styles.faqHeader} 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className={styles.faqIcon}>
                    {/* SVG Dinámico: Cambia de + a X según el estado */}
                    {openFaq === index ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    )}
                  </span>
                  {faq.question}
                </button>
                
                {/* Contenedor con animación CSS para deslizar la respuesta */}
                <div className={styles.faqAnswerWrapper}>
                  <div className={styles.faqAnswerInner}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}