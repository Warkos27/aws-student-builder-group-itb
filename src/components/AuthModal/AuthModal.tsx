import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebaseConfig';
import relogIcon from '../../assets/relog1.png'; // Usaremos este icono temporalmente

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string; // Mensaje personalizado según de dónde se llame
}

// Estilos en línea para hacerlo rápido (puedes moverlos a un .module.css luego)
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const modalBoxStyle: React.CSSProperties = {
  backgroundColor: '#0d131f',
  border: '1px solid #FF9900',
  borderRadius: '16px',
  padding: '40px',
  maxWidth: '420px',
  textAlign: 'center',
  boxShadow: '0 0 50px rgba(255, 153, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const iconStyle: React.CSSProperties = {
  width: '64px',
  height: '64px',
  imageRendering: 'pixelated',
  animation: 'pulseCert 2s infinite', // Reutilizando tu animación de latido
};

const titleStyle: React.CSSProperties = {
  color: '#fff',
  fontFamily: "'Space Mono', monospace",
  fontSize: '1.5rem',
  margin: 0,
};

const textStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  margin: 0,
};

const btnGoogleStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  color: '#000',
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: '600',
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '1rem',
  transition: 'transform 0.2s',
  marginTop: '10px',
};

const btnCancelStyle: React.CSSProperties = {
  background: 'transparent',
  color: '#64748b',
  border: 'none',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.8rem',
  cursor: 'pointer',
  textDecoration: 'underline',
  marginTop: '10px',
};

export default function AuthModal({ isOpen, onClose, message }: AuthModalProps) {
  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose(); // Cierra el modal automáticamente si el login es exitoso
    } catch (error) {
      console.error("Error en login:", error);
      alert("Hubo un error al iniciar sesión.");
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalBoxStyle}>
        {/* Usamos una animación in-line para simular la tuya */}
        <style>{`@keyframes pulseCert { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }`}</style>
        
        <img src={relogIcon} alt="Bloqueado" style={iconStyle} />
        
        <h3 style={titleStyle}>ACCESO RESTRINGIDO</h3>
        <p style={textStyle}>
          {message || "Para continuar y guardar tu progreso, debes autenticarte primero."}
        </p>

        <button style={btnGoogleStyle} onClick={handleGoogleLogin}>
          {/* SVG del Logo de Google */}
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Iniciar sesión con Google
        </button>

        <button style={btnCancelStyle} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}