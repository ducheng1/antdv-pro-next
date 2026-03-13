// 颜色模式
export const darkModeList = [
  {
    // 暗色模式
    label: 'app.color-mode.dark',
    value: 'dark',
  },
  {
    // 亮色模式
    label: 'app.color-mode.light',
    value: 'light',
  },
  {
    // 跟随系统
    label: 'app.color-mode.auto',
    value: 'auto',
  },
] as const
export type DarkMode = (typeof darkModeList)[number]['value']

// 布局模式
export const layoutModeList = [
  {
    label: '侧边栏布局',
    value: 'side',
  },
  {
    label: '顶栏布局',
    value: 'top',
  },
  {
    label: '混合布局',
    value: 'mix',
  },
] as const
export type LayoutMode = (typeof layoutModeList)[number]['value']

// 国际化语言
export const localeList = [
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: '繁體中文',
    value: 'zh-TW',
  },
  {
    label: 'English',
    value: 'en-US',
  },
] as const
export type Locale = (typeof localeList)[number]['value']
