import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Forces Vite to always pull the exact same copy of these packages
    dedupe: ['react', 'react-dom'],
  },
})
