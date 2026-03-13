import type {
  ColorMode,
  ContentWidth,
  LayoutMode,
  Locale,
  MenuColorMode,
  PrimaryColor,
} from '@/constants/app'

export interface AppConfig {
  /** 主题配置 */
  theme: Theme
  /** 布局配置 */
  layout: Layout
  /** 国际化语言 */
  locale: Locale
}

interface Theme {
  /** 颜色模式 */
  colorMode: ColorMode
  /** 菜单风格 */
  menuColorMode: MenuColorMode
  /** 主题色 */
  primaryColor: PrimaryColor
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
  /** 内容区域宽度 */
  contentWidth: ContentWidth
  /** 是否显示logo */
  logo: boolean
  /** 是否显示面包屑 */
  breadcrumb: boolean
}
