<script setup lang="ts">
import Content from '../components/content/index.vue'
import Footer from '../components/footer/index.vue'
import Header from '../components/header/index.vue'
import Sider from '../components/sider/index.vue'
</script>

<template>
  <ALayout class=":uno: size-full" has-sider>
    <Header has-sider />
    <ALayout>
      <Sider />
      <Content />
      <Footer />
    </ALayout>
  </ALayout>
</template>

<style lang="scss" scoped></style>
