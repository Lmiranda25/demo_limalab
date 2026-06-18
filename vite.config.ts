import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Con dominio propio (limalab.medikagency.com) el sitio se sirve desde la
// raíz, por eso base: '/'. Si volvieras a usar la URL de GitHub Pages
// (Lmiranda25.github.io/demo_limalab/), el base debería ser '/demo_limalab/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
