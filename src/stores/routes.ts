import type { MenuItemType } from 'antdv-next'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'es-toolkit'
import { routes } from 'vue-router/auto-routes'
import { store } from '@/plugins'

export const useRoutesStore = defineStore('routes', () => {
  const menuList = ref<MenuItemType[]>([])

  // 生成菜单
  function generateMenu() {
    convertToRouteTree(cloneDeep(routes) as RouteRecordRaw[])
    // menu.value = transformToMenu(routes)
  }

  // 处理路由
  function convertToRouteTree(routes: RouteRecordRaw[], parentPath = '') {
    return routes.map((route) => {
      // 处理当前路由的完整路径
      const fullPath = route.path.startsWith('/')
        ? route.path
        : `${parentPath}${parentPath.endsWith('/') ? '' : '/'}${route.path}`
      // 处理当前路由
      const processedRoute = { ...route, path: fullPath }

      // 如果有子路由，递归处理
      if (processedRoute.children && processedRoute.children.length > 0) {
        // 处理子路由
        const processedChildren: RouteRecordRaw[] = []

        processedRoute.children.forEach((child) => {
          // 递归处理子路由
          const flattenedChild = convertToRouteTree([child], processedRoute.path)[0]

          if (child.path === '') {
            // 如果子路由路径为空，将其属性合并到父路由
            Object.assign(processedRoute, {
              name: flattenedChild.name || processedRoute.name,
              redirect: flattenedChild.redirect || processedRoute.redirect,
              meta: { ...processedRoute.meta, ...flattenedChild.meta },
            })

            // 如果有子路由，添加到processedChildren
            if (flattenedChild.children && flattenedChild.children.length > 0) {
              processedChildren.push(...flattenedChild.children)
            }
          } else {
            // 否则，直接添加处理后的子路由
            processedChildren.push(flattenedChild)
          }
        })

        // 更新父路由的children
        processedRoute.children = processedChildren.length > 0 ? processedChildren : undefined
      }

      return processedRoute
    })
  }

  return { generateMenu, menuList }
})

export const useRoutesStoreHook = () => useRoutesStore(store)
