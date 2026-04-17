import { defineConfig } from 'vite' // <--- This is the missing line
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})