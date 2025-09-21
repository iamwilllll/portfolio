import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],

    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_debugger: true,
            },
            format: {
                comments: false,
            },
        },
    },
});
