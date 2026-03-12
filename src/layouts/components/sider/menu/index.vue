<script setup lang="ts">
const routesStore = useRoutesStore()
const { menuList } = storeToRefs(routesStore)

const i18n = useGlobalI18n()
const { t } = i18n
</script>

<template>
  <AMenu :items="menuList">
    <template #labelRender="item">
      <span>{{ t(item.label) }}</span>
    </template>
  </AMenu>
</template>

<style lang="scss" scoped></style>
