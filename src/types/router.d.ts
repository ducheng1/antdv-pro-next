declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题（i18n key） */
    title?: string
    /** 是否需要登录，默认true */
    requiresLogin?: boolean
    /** 权限标识 */
    auth?: string[]
    /** 是否生成菜单 */
    menu?: boolean
    /** 菜单排序 */
    menuSort?: number
    /** 菜单图标 */
    icon?: string
  }
}

export {}
