import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080' // A .env fájlodban 8080-as port szerepel [cite: 51]
    }
  }
})