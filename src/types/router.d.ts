declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题（i18n key） */
    title?: string
    /** 是否未登录可访问 */
    public?: boolean
  }
}

export {}
