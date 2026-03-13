<script setup lang="ts">
import type { MenuProps } from 'antdv-next'

const routesStore = useRoutesStore()
const { menuList } = storeToRefs(routesStore)

const appStore = useAppStore()
const { config, isDark } = storeToRefs(appStore)

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
    openKeys.value = pathList
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<template>
  <AMenu
    v-model:open-keys="openKeys"
    :items="menuList"
    mode="inline"
    :theme="isDark ? 'dark' : 'light'"
    :style="{
      border: 'none',
    }"
    :inline-indent="16"
    :selected-keys="[route.path]"
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
