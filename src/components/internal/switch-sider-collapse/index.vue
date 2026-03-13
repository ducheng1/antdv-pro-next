<script setup lang="ts">
const appStore = useAppStore()
const { config } = storeToRefs(appStore)
</script>

<template>
  <AButton type="text" @click="appStore.toggleSiderCollapse">
    <template #icon>
      <RenderIcon
        :icon="
          config.layout.siderCollapsed
            ? 'i-ant-design:menu-unfold-outlined'
            : 'i-ant-design:menu-fold-outlined'
        "
        class="size-5"
      />
    </template>
  </AButton>
</template>

<style lang="scss" scoped></style>
