import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projeto-digital-store/',
  plugins: [react()]
})
