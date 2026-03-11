<script setup lang="ts">
const open = defineModel<boolean>()
</script>

<template>
  <ADrawer v-model:open="open" destroy-on-hidden :close-icon="false" :width="300">
    <div>
      <h3>风格配置</h3>
    </div>
  </ADrawer>
</template>

<style lang="scss" scoped></style>
