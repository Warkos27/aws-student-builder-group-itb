import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'; // Agregamos signOut
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import { auth, db, googleProvider } from '../../firebaseConfig'; 
import styles from './Navbar.module.css';
import chipIcon from '../../assets/chip.png'; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userCount, setUserCount] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el menú desplegable

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const fetchUserCount = async () => {
      try {
        const counterRef = doc(db, 'system', 'stats');
        const counterSnap = await getDoc(counterRef);
        if (counterSnap.exists()) {
          setUserCount(counterSnap.data().totalUsers || 0);
        }
      } catch (error) {
        console.error("Error al cargar contador:", error);
      }
    };
    
    fetchUserCount();
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedUser = result.user;
      
      const userRef = doc(db, 'users', loggedUser.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: loggedUser.displayName,
          email: loggedUser.email,
          createdAt: new Date()
        });
        
        const counterRef = doc(db, 'system', 'stats');
        await updateDoc(counterRef, {
          totalUsers: increment(1)
        }).catch(async () => {
          await setDoc(counterRef, { totalUsers: 1 });
        });
        
        setUserCount(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error iniciando sesión:", error);
    }
  };

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsDropdownOpen(false); // Cierra el menú tras salir
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logoContainer}>
        <img src={chipIcon} alt="AWS SBG Logo" className={styles.logoImg} />
        <div className={styles.logoTextStack}>
          <span className={styles.topText}>AWS Student Builder Group</span>
          <span className={styles.bottomText}>Universidad ITB</span>
        </div>
      </div>

      <button 
        className={styles.hamburger} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>

      
      <div className={`${styles.menuContainer} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
            <ul className={styles.navLinks}>
              <li>
                <NavLink to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/eventos" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Eventos
                </NavLink>
              </li>
              <li>
                <NavLink to="/ruta-certificacion" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Ruta de certificación
                </NavLink>
              </li>
            </ul>
        
        <div className={styles.authContainer}>
            {userCount > 0 && (
              <span className={styles.counterBadge}>
                👥 {userCount} Builders
              </span>
            )}
            
            {user ? (
              /* Contenedor relativo para posicionar el menú desplegable */
              <div className={styles.userMenuContainer}>
                <div 
                  className={styles.userProfile} 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img 
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=ff9900&color=fff`} 
                    alt="Perfil" 
                    className={styles.avatar} 
                    referrerPolicy="no-referrer" 
                  />
                  <span className={styles.greeting}>
                    Hola, <span className={styles.userName}>{user.displayName?.split(' ')[0]}</span>
                  </span>
                  <span className={styles.arrow}>{isDropdownOpen ? '▲' : '▼'}</span>
                </div>
    
                {/* Menú Desplegable */}
                {isDropdownOpen && (
                  <div className={styles.dropdown}>
                    {/* 👇 CAMBIO AQUÍ: Usamos Link en lugar de div 👇 */}
                    <Link
                     
                      to="/perfil" 
                      className={styles.dropdownItem} 
                      onClick={() => setIsDropdownOpen(false)}
                      
                    >
                      Editar perfil
                    </Link>
                    <div className={styles.dropdownItem} onClick={handleLogout}>Salir</div>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={handleGoogleLogin} className={styles.loginBtn}>
                Iniciar sesión
              </button>
            )}
        </div>


      </div>
    </nav>
  );
}