import type { DarkMode, Locale } from '@/constants/app'
import dayjs from 'dayjs'
import { appConfig } from '@/config'
import { i18n, store } from '@/plugins'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const dayjsLocaleMap = new Map([
  ['zh-CN', 'zh-cn'],
  ['en-US', 'en'],
])

export const useAppStore = defineStore('app', () => {
  // 系统配置
  const config = useLocalStorage('antdv-app-config', appConfig, {
    listenToStorageChanges: false,
  })

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

  // 切换国际化语言
  function setLocale(locale: Locale) {
    config.value.locale = locale
    i18n.global.locale = locale
    dayjs.locale(dayjsLocaleMap.get(locale))
    if (document) {
      document.documentElement.lang = locale
    }
  }

  // 设置默认语言
  function setDefaultLocale() {
    setLocale(config.value.locale)
  }

  return { config, colorMode, isDark, setDarkMode, toggleDarkMode, setLocale, setDefaultLocale }
})

export const useAppStoreHook = () => useAppStore(store)
