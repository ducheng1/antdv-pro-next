<script setup lang="ts">
import Layout from './layout.vue'
import Theme from './theme.vue'

defineOptions({
  name: 'ConfigPanelPanel',
})

const open = defineModel<boolean>()
</script>

<template>
  <ADrawer v-model:open="open" destroy-on-hidden :close-icon="false" :size="300">
    <Theme />
    <ADivider />
    <Layout />
  </ADrawer>
</template>

<style lang="scss" scoped>
:deep(.ant-segmented .ant-segmented-item-icon + *) {
  margin-left: 0;
}
</style>
