import type {
  ColorMode,
  ContentWidth,
  LayoutMode,
  Locale,
  MenuColorMode,
  PrimaryColor,
} from '@/constants/app'
import dayjs from 'dayjs'
import { toMerged } from 'es-toolkit'
import { appConfig } from '@/config'
import { primaryColorList } from '@/constants/app'
import { i18n, store } from '@/plugins'
import { getCommonThemeToken } from '@/theme'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const dayjsLocaleMap = new Map([
  ['zh-CN', 'zh-cn'],
  ['en-US', 'en'],
])

export const useAppStore = defineStore('app', () => {
  // 系统配置
  const config = useLocalStorage(
    `${import.meta.env.VITE_APP_STORAGE_PREFIX}app-config`,
    appConfig,
    {
      listenToStorageChanges: false,
    },
  )

  // 颜色模式
  const { system: preferredColorMode, store: colorMode } = useColorMode({
    attribute: 'class',
    initialValue: config.value.theme.colorMode,
    storageKey: `${import.meta.env.VITE_APP_STORAGE_PREFIX}color-mode`,
    listenToStorageChanges: false,
  })

  // 是否为暗色模式
  const isDark = computed(() =>
    colorMode.value === 'auto' ? preferredColorMode.value === 'dark' : colorMode.value === 'dark',
  )

  const themeToken = ref()

  // 获取theme token
  function mergeThemeToken() {
    const color = primaryColorList.find(
      (item) => item.value === config.value.theme.primaryColor,
    )?.color
    const token = getCommonThemeToken(isDark.value)
    themeToken.value = toMerged(token, { token: { colorPrimary: color } })
  }

  // 设置主题色
  function setPrimaryColor(color: PrimaryColor) {
    config.value.theme.primaryColor = color
    mergeThemeToken()
  }

  // 设置颜色模式
  function setColorMode(mode: ColorMode) {
    colorMode.value = mode
    config.value.theme.colorMode = mode
    mergeThemeToken()
  }

  // 切换暗色模式
  function toggleDarkMode() {
    colorMode.value = isDark.value ? 'light' : 'dark'
    config.value.theme.colorMode = isDark.value ? 'light' : 'dark'
    mergeThemeToken()
  }

  const menuColorMode = computed(() => (isDark.value ? 'dark' : config.value.theme.menuColorMode))

  // 设置菜单颜色模式
  function setMenuColorMode(mode: MenuColorMode) {
    config.value.theme.menuColorMode = mode
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

  // 切换侧边栏折叠状态
  function toggleSiderCollapse() {
    config.value.layout.siderCollapsed = !config.value.layout.siderCollapsed
  }

  // 设置布局模式
  function setLayoutMode(mode: LayoutMode) {
    config.value.layout.mode = mode
  }

  // 设置内容区域宽度
  function setContentWidth(contentWidth: ContentWidth) {
    config.value.layout.contentWidth = contentWidth
  }

  return {
    config,
    colorMode,
    isDark,
    setColorMode,
    toggleDarkMode,
    setLocale,
    setDefaultLocale,
    toggleSiderCollapse,
    themeToken,
    mergeThemeToken,
    setPrimaryColor,
    setLayoutMode,
    menuColorMode,
    setMenuColorMode,
    setContentWidth,
  }
})

export const useAppStoreHook = () => useAppStore(store)
