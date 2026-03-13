// 颜色模式
export const colorModeList = [
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
export type ColorMode = (typeof colorModeList)[number]['value']

// 布局模式
export const layoutModeList = [
  {
    label: 'app.layout.side',
    value: 'side',
  },
  {
    label: 'app.layout.top',
    value: 'top',
  },
  {
    label: 'app.layout.mix',
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

// 主题色
export const primaryColorList = [
  {
    label: 'app.primary-color.default',
    color: '#1677ff',
    value: 'default',
  },
  {
    label: 'app.primary-color.awake',
    color: '#1890ff',
    value: 'awake',
  },
  {
    label: 'app.primary-color.mourning',
    color: '#f5222d',
    value: 'mourning',
  },
  {
    label: 'app.primary-color.volcano',
    color: '#fa541c',
    value: 'volcano',
  },
  {
    label: 'app.primary-color.sunset',
    color: '#faad14',
    value: 'sunset',
  },
  {
    label: 'app.primary-color.morning',
    color: '#13c2c2',
    value: 'morning',
  },
  {
    label: 'app.primary-color.green',
    color: '#52c41a',
    value: 'green',
  },
  {
    label: 'app.primary-color.geek',
    color: '#2f54eb',
    value: 'geek',
  },
  {
    label: 'app.primary-color.purple',
    color: '#722ed1',
    value: 'purple',
  },
] as const
export type PrimaryColor = (typeof primaryColorList)[number]['value']

// 菜单颜色模式
export const menuColorModeList = [
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
] as const
export type MenuColorMode = (typeof menuColorModeList)[number]['value']

// 内容区域宽度
export const contentWidthList = [
  {
    // 流式
    label: 'app.content-width.fluid',
    value: 'fluid',
  },
  {
    // 定宽
    label: 'app.content-width.fixed',
    value: 'fixed',
  },
] as const
export type ContentWidth = (typeof contentWidthList)[number]['value']
