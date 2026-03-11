import type { UserConfig } from 'vite'
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import turboConsole from 'unplugin-turbo-console/vite'
import components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import vueRouter from 'unplugin-vue-router/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolvePath } from './utils'

export function createVitePlugins(): UserConfig['plugins'] {
  return [
    tsconfigPaths({
      configNames: ['tsconfig.app.json'],
    }),
    // https://uvr.esm.is/
    vueRouter({
      dts: resolvePath('types/generated/typed-router.d.ts'),
      routesFolder: resolvePath('src/pages'),
    }),
    vue(),
    vueJsx(),
    unocss(),
    // https://unplugin.unjs.io/showcase/unplugin-vue-components.html
    components({
      resolvers: [AntdvNextResolver({})],
      dirs: [resolvePath('src/components')],
      dts: resolvePath('types/generated/components.d.ts'),
    }),
    // https://unplugin.unjs.io/showcase/unplugin-auto-import.html
    autoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.vue\.[tj]sx?\?vue/],
      imports: ['vue', '@vueuse/core', 'pinia', VueRouterAutoImports],
      dirs: [resolvePath('src/hooks'), resolvePath('src/stores')],
      dts: resolvePath('types/generated/auto-imports.d.ts'),
      vueTemplate: true,
      vueDirectives: true,
    }),
    // https://utc.yuy1n.io/
    turboConsole(),
  ]
}
