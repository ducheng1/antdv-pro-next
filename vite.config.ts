import * as process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import { createPostcssConfig, createVitePlugins, resolvePath } from './build'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`current mode: ${mode}`)

  const env = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv

  return {
    server: {
      port: 5500,
      host: true,
      proxy:
        env.VITE_API_ENABLE_PROXY === 'true'
          ? {
              '/proxy-api': {
                target: env.VITE_API_BASE_URL,
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
      tsconfigPaths: true,
    },
    plugins: createVitePlugins(env),
    css: {
      postcss: createPostcssConfig(),
    },
    build: {
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
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
