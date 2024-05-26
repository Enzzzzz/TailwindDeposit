import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base URL para a sua aplicação
  build: {
    outDir: 'dist', // Diretório de saída
  },
});

