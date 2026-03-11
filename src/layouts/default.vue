<script setup lang="ts">
import Header from './components/header/index.vue'

const title = computed(() => import.meta.env.VITE_APP_TITLE)

useAppStore()
</script>

<template>
  <div>
    <Header />
    {{ title }}
    default layout
    <i i-antd-home-outlined></i>
    <i i-svg-vue></i>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
