import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Añadimos esta configuración para engañar al SDK de AWS
  define: {
    global: 'window',
  },
})