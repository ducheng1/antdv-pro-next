<script setup lang="ts">
const title = computed(() => import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <div>
    {{ title }}
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
