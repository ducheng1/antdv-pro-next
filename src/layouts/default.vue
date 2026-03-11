<script setup lang="ts">
import Content from './components/content/index.vue'
import Header from './components/header/index.vue'
import Sider from './components/sider/index.vue'
</script>

<template>
  <ALayout class="--uno size-full">
    <Header />
    <ALayout has-sider>
      <Sider />
      <Content />
    </ALayout>
  </ALayout>
</template>

<style lang="scss" scoped></style>
