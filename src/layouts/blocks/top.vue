<script setup lang="ts">
import Content from '../components/content/index.vue'
import Footer from '../components/footer/index.vue'
import Header from '../components/header/index.vue'
</script>

<template>
  <ALayout class=":uno: min-h-screen">
    <Header class="pl-0 pr-4" />
    <Content />
    <Footer />
  </ALayout>
</template>

<style lang="scss" scoped></style>
