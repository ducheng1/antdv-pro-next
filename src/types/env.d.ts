interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  /** 应用标题 */
  readonly VITE_APP_TITLE: string
  /** Storage前缀 */
  readonly VITE_APP_STORAGE_PREFIX: string
  /** 后端接口地址 */
  readonly VITE_API_BASE_URL: string
  /** 是否开启代理 */
  readonly VITE_API_ENABLE_PROXY: 'true' | string
  /** 是否开启mock */
  readonly VITE_API_ENABLE_MOCK: 'true' | string
  /** 是否使用vue devtools */
  readonly VITE_ENABLE_VUE_DEVTOOLS: 'true' | string
  /** 是否开启sourcemap */
  readonly VITE_BUILD_SOURCEMAP: 'true' | string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
