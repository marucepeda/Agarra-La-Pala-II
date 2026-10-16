import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Las rutas relativas permiten servir la app desde GitHub Pages, aun cuando
// el sitio viva dentro de /nombre-del-repositorio/.
export default defineConfig({ base: './', plugins: [react()] });
