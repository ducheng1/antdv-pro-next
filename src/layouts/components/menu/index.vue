<script setup lang="ts">
import type { MenuItemType, MenuProps } from 'antdv-next'

const props = defineProps<{
  split?: boolean
  isTop?: boolean
}>()

const routesStore = useRoutesStore()
const { menuList } = storeToRefs(routesStore)

const appStore = useAppStore()
const { config, menuColorMode } = storeToRefs(appStore)

const { t } = useI18n()

const route = useRoute()
const router = useRouter()

const onMenuSelect: MenuProps['onSelect'] = (item) => {
  router.push(item.key)
}

const openKeys = ref<string[]>([])

watch(
  () => [route.path, config.value.layout.siderCollapsed],
  () => {
    const pathList = routesStore.getRoutePath(route.path).map((item) => item.path)
    pathList.pop()
    openKeys.value = props.isTop ? [] : pathList
  },
  {
    immediate: true,
    deep: true,
  },
)

const selectedKeys = computed<string[]>(
  () =>
    (props.isTop ? routesStore.getRoutePath(route.path).map((item) => item.path) : [route.path]) ??
    [],
)

const menuItems = computed<MenuItemType[]>(() => {
  // 是否拆分（在 mix 模式下）
  if (props.split) {
    // 顶部菜单，只显示一级
    if (props.isTop) {
      return menuList.value.map(
        (item) =>
          ({
            ...item,
            children: undefined,
          }) as MenuItemType,
      )
    }
    // 获取子菜单
    return routesStore.getChildMenu(route.path)
  }
  return menuList.value
})
</script>

<template>
  <AMenu
    v-model:open-keys="openKeys"
    :items="menuItems"
    :mode="props.isTop ? 'horizontal' : 'inline'"
    :theme="menuColorMode"
    :style="{
      border: 'none',
    }"
    :inline-indent="16"
    :selected-keys
    @select="onMenuSelect"
  >
    <template #labelRender="item">
      <span>{{ t(item.label) }}</span>
    </template>
    <template #iconRender="item">
      <RenderIcon :icon="item.icon" class="size-4"></RenderIcon>
    </template>
  </AMenu>
</template>

<style lang="scss" scoped></style>
