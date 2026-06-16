import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// El base debe coincidir con el nombre del repo en GitHub Pages:
// https://Lmiranda25.github.io/demo_limalab/  ->  base: '/demo_limalab/'
export default defineConfig({
  plugins: [react()],
  base: '/demo_limalab/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
