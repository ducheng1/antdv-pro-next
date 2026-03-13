import type { DarkMode, LayoutMode, Locale } from '@/constants/app'

export interface AppConfig {
  /** 主题配置 */
  theme: Theme
  /** 布局配置 */
  layout: Layout
  /** 国际化语言 */
  locale: Locale
}

interface Theme {
  /** 暗色模式 */
  darkMode: DarkMode
}

interface Layout {
  /**
   * 布局模式
   * - side: 侧边栏布局
   * - header: 顶栏布局
   * - mix: 混合布局
   */
  mode: LayoutMode
  /** 是否折叠侧边栏 */
  siderCollapsed: boolean
}
