import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* ================= SKYLINE DE LA CIUDAD ================= */}
      <div className={styles.skylineSection}>
        <div className={styles.techGrid}></div>
        <div className={styles.gradientAtmo}></div>
        
        {/* Luna */}
        <div className={styles.moon}>
          <div style={{ position: 'absolute', top: 16, left: 20, width: 16, height: 16, borderRadius: '50%', background: 'rgba(253,224,71,0.5)' }}></div>
          <div style={{ position: 'absolute', bottom: 20, right: 20, width: 24, height: 24, borderRadius: '50%', background: 'rgba(253,224,71,0.4)' }}></div>
        </div>

        {/* SVG de la Ciudad y Cables */}
        <svg className={styles.citySvg} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M 0 320 L 0 210 L 80 210 L 80 180 L 140 180 L 140 230 L 220 230 L 220 160 L 290 160 L 290 240 L 410 240 L 410 190 L 470 190 L 470 230 L 610 230 L 610 150 L 690 150 L 690 220 L 850 220 L 850 170 L 920 170 L 920 230 L 1080 230 L 1080 140 L 1150 140 L 1150 210 L 1300 210 L 1300 170 L 1440 170 L 1440 320 Z" fill="#111827" fillOpacity="0.6"></path>
          <path d="M 0 320 L 0 220 L 50 220 L 70 180 L 120 180 L 140 220 L 190 220 L 190 140 L 250 140 L 250 190 L 320 190 L 350 230 L 420 230 L 440 180 L 490 180 L 530 220 L 630 220 L 630 160 L 690 160 L 710 200 L 780 200 L 780 170 L 860 170 L 880 220 L 960 220 L 990 150 L 1050 150 L 1080 210 L 1180 210 L 1220 160 L 1290 160 L 1320 220 L 1440 220 L 1440 320 Z" fill="#182035"></path>
          <rect x="85" y="195" width="8" height="12" rx="1" fill="#FDE047" fillOpacity="0.85"></rect>
          <rect x="205" y="160" width="9" height="14" rx="1" fill="#FDE047" fillOpacity="0.9"></rect>
          <rect x="225" y="160" width="9" height="14" rx="1" fill="#00E5FF" fillOpacity="0.75"></rect>
          <rect x="455" y="195" width="9" height="12" rx="1" fill="#FDE047" fillOpacity="0.8"></rect>
          <rect x="645" y="175" width="10" height="15" rx="1" fill="#FDE047" fillOpacity="0.9"></rect>
          <rect x="665" y="175" width="10" height="15" rx="1" fill="#FDE047" fillOpacity="0.9"></rect>
          <rect x="800" y="185" width="9" height="14" rx="1" fill="#00E5FF" fillOpacity="0.8"></rect>
          <rect x="1010" y="170" width="9" height="14" rx="1" fill="#FDE047" fillOpacity="0.9"></rect>
          <rect x="1030" y="170" width="9" height="14" rx="1" fill="#FDE047" fillOpacity="0.8"></rect>
          <rect x="1245" y="175" width="9" height="14" rx="1" fill="#FDE047" fillOpacity="0.85"></rect>
          
          <path d="M 0 110 Q 360 165, 720 120 Q 1080 160, 1440 100" fill="none" stroke="#334155" strokeWidth="2.5" opacity="0.85"></path>
          <path d="M 0 135 Q 360 195, 720 150 Q 1080 185, 1440 130" fill="none" stroke="#1E293B" strokeWidth="2" opacity="0.6"></path>
          
          <line x1="210" y1="90" x2="210" y2="280" stroke="#475569" strokeWidth="3" strokeLinecap="round"></line>
          <line x1="195" y1="105" x2="225" y2="105" stroke="#475569" strokeWidth="2.5"></line>
          <circle cx="210" cy="88" r="3" fill="#EF4444" className={styles.glowDot}></circle>
          
          <line x1="1130" y1="80" x2="1130" y2="280" stroke="#475569" strokeWidth="3" strokeLinecap="round"></line>
          <line x1="1115" y1="95" x2="1145" y2="95" stroke="#475569" strokeWidth="2.5"></line>
          <circle cx="1130" cy="78" r="3" fill="#EF4444" className={styles.glowDot}></circle>
        </svg>

        {/* FANTASMAS */}
        <div className={styles.ghostsContainer}>
          <div className={`${styles.ghost} ${styles.ghost1}`}>
            <div className={styles.ghostBody}>
              <div className={styles.hardhat}><div className={styles.hatReflect}></div></div>
              <div className={styles.eyes}><div className={styles.eye}></div><div className={styles.eye}></div></div>
              <div className={styles.skirt}>
                <span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.ghost} ${styles.ghost2}`}>
            <div className={`${styles.ghostBody} ${styles.ghostBodyDark}`}>
              <div className={styles.handLeft}></div><div className={styles.handRight}></div>
              {/* 👇 CAMBIO AQUÍ: Cambia eyeSquare por eye 👇 */}
              <div className={`${styles.eyes} ${styles.eyesUpsideDown}`}>
                <div className={styles.eye}></div>
                <div className={styles.eye}></div>
              </div>
              <div className={styles.blush}></div>
              <div className={styles.skirt}>
                <span className={`${styles.skirtCurve} ${styles.skirtCurveDark}`}></span>
                <span className={`${styles.skirtCurve} ${styles.skirtCurveDark}`}></span>
                <span className={`${styles.skirtCurve} ${styles.skirtCurveDark}`}></span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.ghost} ${styles.ghost3}`}>
            <div className={styles.ghostBody}>
              <div className={styles.hardhat}><div className={styles.hatReflect}></div></div>
              <div className={styles.eyes}><div className={styles.eye}></div><div className={styles.eye}></div></div>
              <div className={styles.skirt}>
                <span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span><span className={styles.skirtCurve}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENIDO INFERIOR ================= */}
      <div className={styles.mainContent}>
        <div className={styles.footerGrid}>
          <div className={styles.colBrand}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" fill="currentColor" fillOpacity="0.2"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>
              </div>
              <div>
                <p className={styles.brandName}>AWS Builder Group ITB</p>
                <p className={styles.brandSub}>Student Community</p>
              </div>
            </div>
            <p className={styles.brandDesc}>La primera comunidad de AWS del Instituto Superior Universitario Bolivariano ITB. Meetups, talleres técnicos y preparación cloud en Guayaquil, Ecuador.</p>
            <div className={styles.footerSocials}>
              <a href="https://www.linkedin.com/company/aws-student-builder-group-itb/posts/?viewAsMember=true" target="_blank" className={styles.socialBox}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://chat.whatsapp.com/GDrxU8QQVdaEAhvET1fnwt" target="_blank" className={styles.socialBox}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
              <a href="https://www.youtube.com/@aws-itb" target="_blank" className={styles.socialBox}>
                <svg width="20" height="20" fill="currentColor" target="_blank" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@aws_itb" target="_blank" className={styles.socialBox}>
                <svg width="20" height="20" fill="currentColor" target="_blank" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.79 3.82-2.19 5.21-1.4 1.39-3.26 2.18-5.23 2.18-1.97 0-3.83-.79-5.23-2.18-1.4-1.39-2.19-3.25-2.19-5.21s.79-3.82 2.19-5.21c1.4-1.39 3.26-2.18 5.23-2.18.47 0 .94.05 1.4.15v4.06c-.46-.1-.92-.15-1.39-.15-1.12 0-2.19.45-2.98 1.24-.79.79-1.24 1.86-1.24 2.98s.45 2.19 1.24 2.98c.79.79 1.86 1.24 2.98 1.24 1.12 0 2.19-.45 2.98-1.24.79-.79 1.24-1.86 1.24-2.98V.02h4.03z"/></svg>
              </a>
              <a href="https://www.instagram.com/aws.itb/?hl=es" target="_blank" className={styles.socialBox}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.meetup.com/aws-sbg-at-bolivarian-uni-higher-inst-of-tech-naval-campus/?eventOrigin=home_groups_you_organize" target="_blank" className={styles.socialBox}>
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 13.91c0-1.57-.99-2.9-2.45-3.32.22-.38.35-.83.35-1.3 0-1.47-1.2-2.67-2.67-2.67-.34 0-.66.07-.95.19-.57-1.12-1.74-1.89-3.08-1.89-1.15 0-2.18.57-2.77 1.44-.45-.29-1-.46-1.58-.46-1.47 0-2.67 1.2-2.67 2.67 0 .21.03.41.08.6-.62.29-1.08.85-1.23 1.54-.78.14-1.39.81-1.39 1.63 0 1.25.79 2.22 2.05 2.53-.13.34-.2.72-.2 1.11 0 1.73 1.41 3.14 3.14 3.14.77 0 1.47-.28 2.01-.73.49.49 1.17.8 1.91.8 1.49 0 2.7-1.21 2.7-2.7 0-.3-.05-.59-.14-.85.74-.23 1.29-.9 1.34-1.72.76-.05 1.35-.69 1.35-1.46 0-.31-.1-.6-.27-.84.77-.38 1.3-.12 1.3-1.01zm-5.71 1.92v1.65c0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87v-3.79c0-.48-.39-.87-.87-.87s-.87.39-.87.87v2.32c0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87v-3.8c0-.48-.39-.87-.87-.87-.48 0-.87.39-.87.87v4.75c0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87V8.53c0-.48.39-.87.87-.87s.87.39.87.87v3.23c.31-.22.68-.35 1.08-.35.83 0 1.53.53 1.78 1.27.32-.42.83-.69 1.4-.69.83 0 1.53.53 1.78 1.27.34-.44.87-.72 1.47-.72.97 0 1.76.79 1.76 1.76v3.53c0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87v-1.65c0-.48-.39-.87-.87-.87s-.87.39-.87.87z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.colLinks2}>
            <h3 className={styles.colTitle}><span>//</span> explora</h3>
            <ul className={styles.linkList}>
              <li><a href="/">Inicio</a></li>
              <li><a href="/eventos">Eventos</a></li>
              <li><a href="/nosotros">Equipo</a></li>
              <li><a href="#">AWS Community Day</a></li>
            </ul>
          </div>

          <div className={styles.colLinks2}>
            <h3 className={styles.colTitle}><span>//</span> participa</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Proponer una charla</a></li>
              <li><a href="#">Ser voluntario</a></li>
              <li><a href="#">Ser sponsor</a></li>
            </ul>
          </div>

          <div className={styles.colLinks3}>
            <h3 className={styles.colTitle}><span>//</span> contacto</h3>
            <a href="mailto:student.awsl.eadersmarko@gmail.com" className={styles.contactBox}>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>✉</span>
                <div>
                  <div className={styles.contactLabel}>Email Oficial</div>
                  <div className={styles.contactValue}>student.awsl.eadersmarko@gmail.com</div>
                </div>
              </div>
            </a>
            <div className={styles.locationBox}>
              <span className={styles.locIcon}>📍</span>
              <div>
                <div className={styles.contactLabel}>Base de operaciones</div>
                <div className={styles.contactValue}>Guayaquil, Ecuador</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.coordRow}>
            <div className={styles.coordLeft}><span className={styles.coordSign}>$</span> lat 2°11'24" S / long 79°53'15" W</div>
            <div className={styles.coordRight}>ecuador</div>
          </div>
          <div className={styles.neonLine}></div>
          <div className={styles.copyRow}>
            <span>© 2026 AWS Student Builder Group ITB - Hecho con 💛 en la Perla del Pacífico.</span>
            <span className={styles.disclaimer}>Comunidad independiente organizada por estudiantes. Amazon Web Services, AWS y sus logotipos son marcas de Amazon.com, Inc. o sus filiales.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}