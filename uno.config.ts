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

// https://unocss.dev/
export default defineConfig({
  presets: [
    presetWind4({
      dark: 'class',
    }),
    presetIcons({
      prefix: 'i-',
    }),
    presetTypography(),
    presetAttributify(),
    presetAnimations(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerCompileClass(),
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
