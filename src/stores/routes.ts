import type { MenuItemType } from 'antdv-next'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'es-toolkit'
import { routes } from 'vue-router/auto-routes'
import { store } from '@/plugins'

export const useRoutesStore = defineStore('routes', () => {
  const routeTree = ref<RouteRecordRaw[]>([])
  const menuList = ref<MenuItemType[]>([])

  // 生成菜单
  function generateMenu() {
    routeTree.value = convertToRouteTree(routes as RouteRecordRaw[])
    menuList.value = convertToMenu(routeTree.value)
  }

  // 处理路由
  function convertToRouteTree(routes: RouteRecordRaw[], parentPath = ''): RouteRecordRaw[] {
    return cloneDeep(routes).map((route) => {
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

  const userStore = useUserStore()

  // 递归生成菜单
  function convertToMenu(routes: RouteRecordRaw[]): MenuItemType[] {
    return routes
      .filter((route) => {
        // 是否为菜单
        if (route.meta?.menu) {
          // 是否有权限
          if (route.meta?.auth?.length) {
            return userStore.hasPermission(route.meta.auth)
          }
          return true
        }
        return false
      })
      .sort((a, b) => (a.meta?.menuSort || 0) - (b.meta?.menuSort || 0))
      .map((route) => {
        const children = route.children?.length ? convertToMenu(route.children) : undefined
        // 在路由中包含子级
        if (route.children?.length) {
          // 子菜单没有被过滤
          if (children?.length) {
            return {
              type: 'submenu',
              key: route.path,
              label: (route.meta?.title as string) ?? 'common.unnamed-page',
              icon: route.meta?.icon as string,
              children,
            } as MenuItemType
          }
          // 过滤整个菜单
          return undefined as unknown as MenuItemType
        }
        return {
          type: 'item',
          key: route.path,
          label: (route.meta?.title as string) ?? 'common.unnamed-page',
          icon: route.meta?.icon as string,
        } as MenuItemType
      })
      .filter(Boolean)
  }

  // 通过 routeTree 递归获取路由路径数组
  function getRoutePath(targetPath: string): RouteRecordRaw[] {
    const result: RouteRecordRaw[] = []

    // 深度优先遍历，收集匹配路径上的所有路由
    function dfs(routes: RouteRecordRaw[], targetPath: string): boolean {
      for (const route of routes) {
        result.push({ ...route })
        if (route.path === targetPath) return true
        if (route.children) {
          if (dfs(route.children, targetPath)) return true
        }
        result.pop()
      }
      return false
    }

    dfs(routeTree.value, targetPath)

    return result
  }

  // 获取子菜单
  function getChildMenu(path: string) {
    const routePath = getRoutePath(path)
    // @ts-expect-error unknown type
    return menuList.value.find((item) => item!.key === routePath[0].path)?.children ?? []
  }

  return { generateMenu, getRoutePath, menuList, getChildMenu }
})

export const useRoutesStoreHook = () => useRoutesStore(store)
