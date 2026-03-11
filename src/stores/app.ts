import { store } from '@/plugins'

export const useAppStore = defineStore('app', () => {
  const { system: preferredColorMode, store: colorMode } = useColorMode({
    attribute: 'class',
    initialValue: 'auto',
    storageKey: 'antdv-color-mode',
  })
  // 是否为暗色模式
  const isDark = computed(() =>
    colorMode.value === 'auto' ? preferredColorMode.value === 'dark' : colorMode.value === 'dark',
  )

  // 设置暗色模式
  function setDarkMode(darkMode: 'dark' | 'light' | 'auto') {
    colorMode.value = darkMode
  }

  // 切换暗色模式
  function toggleDarkMode() {
    colorMode.value = isDark.value ? 'light' : 'dark'
  }

  return { colorMode, isDark, setDarkMode, toggleDarkMode }
})

export const useAppStoreHook = () => useAppStore(store)
