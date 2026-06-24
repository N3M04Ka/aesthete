import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Forces Vite to always pull the exact same copy of these packages
    dedupe: ['react', 'react-dom'],
    alias:{
        "@":fileURLToPath(new URL('./src',import.meta.url))
    }
  },
})
