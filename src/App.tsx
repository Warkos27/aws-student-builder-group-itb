import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmailConsentModal from './components/EmailConsentModal/EmailConsentModal'; // Importamos tu nuevo modal

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Certification from './pages/Certification/Certification';
import Profile from './pages/Profile/Profile';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [showConsentModal, setShowConsentModal] = useState(false);

  useEffect(() => {
    // Escuchamos los cambios de sesión de Firebase
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Consultamos el documento del usuario en Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            // Si el campo de consentimiento no ha sido marcado o no existe, mostramos el modal
            if (!data.emailConsentPromptShown) {
              setShowConsentModal(true);
            }
          } else {
            // Si por alguna razón el documento aún no existe en Firestore, lo mostramos
            setShowConsentModal(true);
          }
        } catch (error) {
          console.error("Error verificando el consentimiento del usuario:", error);
        }
      } else {
        // Si el usuario cierra sesión, aseguramos que el modal esté cerrado
        setShowConsentModal(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/ruta-certificacion" element={<Certification />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>

      <Footer />

      {/* Modal condicional para usuarios nuevos */}
      {showConsentModal && user && (
        <EmailConsentModal 
          user={user} 
          onClose={() => setShowConsentModal(false)} 
        />
      )}
    </BrowserRouter>
  );
}