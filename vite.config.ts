import { defineConfig } from 'vite'
import { createPostcssConfig, createVitePlugins, resolvePath } from './build'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`current mode: ${mode}`)

  return {
    server: {
      port: 5500,
    },
    resolve: {
      alias: {
        '@': resolvePath('src'),
        '#': resolvePath('types'),
      },
    },
    plugins: createVitePlugins(),
    css: {
      postcss: createPostcssConfig(),
    },
    build: {
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: ['log', 'table'],
        },
      },
    },
  }
})
