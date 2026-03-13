<script setup lang="ts">
import type { BreadcrumbItemType } from 'antdv-next'

const routesStore = useRoutesStore()
const route = useRoute()
const { t } = useI18n()

const breadcrumbList = computed<BreadcrumbItemType[]>(() =>
  routesStore.getRoutePath(route.path).map((item) => ({
    title: item.meta?.title,
    path: item.path,
  })),
)
</script>

<template>
  <ABreadcrumb :items="breadcrumbList">
    <template #itemRender="item">
      <RouterLink
        v-if="item.path !== breadcrumbList[breadcrumbList.length - 1].path"
        :to="item.path as any"
      >
        {{ t(item.title as string) }}
      </RouterLink>
      <span v-else>
        {{ t(item.title as string) }}
      </span>
    </template>
  </ABreadcrumb>
</template>

<style lang="scss" scoped></style>
