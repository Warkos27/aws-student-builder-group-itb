import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto le dice al navegador que suba a la coordenada X:0, Y:0
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que el 'pathname' (la ruta) cambia

  return null; // Este componente no dibuja nada en la pantalla
}