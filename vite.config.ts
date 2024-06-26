import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  resolve: {
    alias: {
      '@/core': resolve(__dirname, './src/core'),
      '@/presentation': resolve(__dirname, './src/presentation'),
    },
  },
  server: {
    port: 3000
  }
})
