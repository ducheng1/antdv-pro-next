<script setup lang="ts">
import Footer from './components/footer/index.vue'
</script>

<template>
  <ALayout>
    <ALayoutContent class=":uno: flex flex-col size-screen">
      <RouterView class="grow" />
      <Footer class="shrink-0" />
    </ALayoutContent>
  </ALayout>
</template>

<style lang="scss" scoped></style>
