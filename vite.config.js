import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Tecnodespegue', // Aquí va el título que quieres para tu página
          injectScript: `<script src="..."></script>`, // Si necesitas inyectar algún script
          // otros datos que desees inyectar
        },
      },
      minify: true,
    }),
  ],
});
