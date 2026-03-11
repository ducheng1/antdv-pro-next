<script setup lang="ts">
import Content from '../components/content/index.vue'
import Header from '../components/header/index.vue'
import Sider from '../components/sider/index.vue'
</script>

<template>
  <ALayout class=":uno: size-full" has-sider>
    <Sider />
    <ALayout>
      <Header />
      <Content />
    </ALayout>
  </ALayout>
</template>

<style lang="scss" scoped></style>
