<script setup lang="ts">
import Sider from './blocks/sider.vue'

const appStore = useAppStore()
const { config } = storeToRefs(appStore)

const layoutMap = new Map([['sider', Sider]])
</script>

<template>
  <ConfigPanel />
  <component :is="layoutMap.get(config.layout.mode)" />
</template>

<style lang="scss" scoped></style>
