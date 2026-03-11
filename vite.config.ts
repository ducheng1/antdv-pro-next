import * as process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import { createPostcssConfig, createVitePlugins, resolvePath } from './build'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`current mode: ${mode}`)

  const { VITE_API_BASE_URL, VITE_API_ENABLE_PROXY } = loadEnv(mode, process.cwd())

  return {
    server: {
      port: 5500,
      host: true,
      proxy:
        VITE_API_ENABLE_PROXY === 'true'
          ? {
              '/proxy-api': {
                target: VITE_API_BASE_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/proxy-api/, ''),
              },
            }
          : undefined,
    },
    resolve: {
      alias: {
        '@': resolvePath('src'),
        '#': resolvePath('src/types'),
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
    optimizeDeps: {
      include: ['@iconify-json/ant-design', '@iconify-json/lucide'],
    },
  }
})
