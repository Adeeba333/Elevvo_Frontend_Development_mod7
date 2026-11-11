import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query', 'zustand'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})