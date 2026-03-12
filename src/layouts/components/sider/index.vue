<script setup lang="ts">
const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
</script>

<template>
  <ALayoutSider
    class=":uno: border-r h-screen top-0 sticky z-900 ant-border"
    :theme="isDark ? 'dark' : 'light'"
    :width="256"
    :collapsed-width="64"
    collapsible
  >
    <Logo class=":uno: flex-c h-16 w-full" />
    <div class=":uno: grow h-full overflow-y-auto">
      <div v-for="i of 100" :key="i">{{ i }}</div>
    </div>
  </ALayoutSider>
</template>

<style lang="scss" scoped>
:deep(.ant-layout-sider-children) {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
