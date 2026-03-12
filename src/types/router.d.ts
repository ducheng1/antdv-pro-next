declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题（i18n key） */
    title?: string
    /** 是否未登录可访问 */
    requiresLogin?: boolean
    /** 权限标识 */
    auth?: string[]
    /** 是否生成菜单 */
    menu?: boolean
    /** 菜单排序 */
    menuSort?: number
  }
}

export {}
