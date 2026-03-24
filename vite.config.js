import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // El teu repositori: https://github.com/jormarllor/questudiar-cat
  base: '/questudiar-cat/',
})
