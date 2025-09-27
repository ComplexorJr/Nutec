import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// If VITE_BASE is set (in build:gh script), use it. Otherwise default to "/"
const basePath = process.env.VITE_BASE || '/';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  base: basePath, // ✅ Correct base handling

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-tooltip', 
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs'
          ]
        },
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
  },
  
  define: {
    'global': 'globalThis',
  },

  server: {
    port: 3000,
    open: true,
  },
});
