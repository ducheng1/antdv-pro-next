// 暗色模式
export const darkModeList = [
  {
    label: '暗色模式',
    value: 'dark',
  },
  {
    label: '亮色模式',
    value: 'light',
  },
  {
    label: '跟随系统',
    value: 'auto',
  },
] as const
export type DarkMode = (typeof darkModeList)[number]['value']

// 布局模式
export const layoutList = [
  {
    label: '侧边栏布局',
    value: 'sider',
  },
] as const
export type Layout = (typeof layoutList)[number]['value']

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
