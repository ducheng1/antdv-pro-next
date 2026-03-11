import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { resolvePath } from './build'

// https://unocss.dev/
export default defineConfig({
  presets: [
    presetWind4({
      dark: 'class',
    }),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'width': '1rem',
        'height': '1rem',
      },
      collections: {
        antd: () => import('@iconify-json/ant-design/icons.json').then((res) => res.default),
        svg: FileSystemIconLoader(resolvePath('src/assets/svg'), (svg) =>
          svg.replace(/#fff/, 'currentColor'),
        ),
      },
    }),
    presetTypography(),
    presetAttributify(),
    presetAnimations(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerCompileClass({
      classPrefix: '--uno',
    }),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    ['flex-c', 'flex justify-center items-center'],
    ['flex-bc', 'flex justify-between items-center'],
    ['flex-col-c', 'flex flex-col justify-center items-center'],
    ['flex-col-bc', 'flex flex-col justify-between items-center'],
  ],
})
