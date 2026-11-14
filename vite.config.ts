import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Sin `define` de claves: GEMINI_API_KEY solo se usa en api/oracle.ts (servidor).
export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
