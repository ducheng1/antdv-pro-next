import type { MenuItemType } from 'antdv-next'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'es-toolkit'
import { routes } from 'vue-router/auto-routes'
import { store } from '@/plugins'

export const useRoutesStore = defineStore('routes', () => {
  const menuList = ref<MenuItemType[]>([])
  // 生成菜单
  function generateMenu() {
    convertToRoutes(cloneDeep(routes) as RouteRecordRaw[])
    // menu.value = transformToMenu(routes)
  }

  function convertToRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
    return routes
  }

  return { generateMenu, menuList }
})

export const useRoutesStoreHook = () => useRoutesStore(store)
