import type { DarkMode } from '@/constants/app'

export interface AppConfig {
  /** 主题配置 */
  theme: Theme
  /** 布局配置 */
  layout: Layout
}

interface Theme {
  /** 暗色模式 */
  darkMode: DarkMode
}

interface Layout {
  /**
   * 布局模式
   *
   * - sider: 侧边栏布局
   * - header: 顶部布局
   * - mix: 混合布局
   */
  mode: 'sider' | 'header' | 'mix'
}
