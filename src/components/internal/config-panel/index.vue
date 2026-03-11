<script setup lang="ts">
import Panel from './panel.vue'

const open = ref<boolean>(false)
</script>

<template>
  <div
    class=":uno: text-white p-3 right-0 top-1/3 fixed ant-bg-primary rounded-l hover:cursor-pointer"
    @click="open = true"
  >
    <i
      class=":uno: size-6"
      :class="{
        ':uno: i-antd-setting-outlined': !open,
        ':uno: i-antd-close-outlined': open,
      }"
    />
  </div>
  <Panel v-model="open" />
</template>

<style lang="scss" scoped></style>
