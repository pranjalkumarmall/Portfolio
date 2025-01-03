import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Portfolio/',
  build:{
    outDir:'./docs',
  },
  optimizeDeps: {
    include: ['typed.js'], // Include `typed.js` for optimization
  },
});
