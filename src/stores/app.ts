import type { DarkMode } from '@/constants/app'
import { appConfig } from '@/config'
import { store } from '@/plugins'

export const useAppStore = defineStore('app', () => {
  // 系统配置
  const config = useLocalStorage('antdv-app-config', appConfig)

  // 颜色模式
  const { system: preferredColorMode, store: colorMode } = useColorMode({
    attribute: 'class',
    initialValue: config.value.theme.darkMode,
    storageKey: 'antdv-color-mode',
  })
  // 是否为暗色模式
  const isDark = computed(() =>
    colorMode.value === 'auto' ? preferredColorMode.value === 'dark' : colorMode.value === 'dark',
  )

  // 设置暗色模式
  function setDarkMode(darkMode: DarkMode) {
    colorMode.value = darkMode
  }

  // 切换暗色模式
  function toggleDarkMode() {
    colorMode.value = isDark.value ? 'light' : 'dark'
  }

  return { config, colorMode, isDark, setDarkMode, toggleDarkMode }
})

export const useAppStoreHook = () => useAppStore(store)
