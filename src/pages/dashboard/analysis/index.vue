<script setup lang="ts">
definePage({
  name: 'DashboardAnalysis',
  meta: {
    title: 'routes.dashboard.analysis',
    menu: true,
    menuSort: 1,
  },
})
</script>

<template>
  <div>
    分析页
    <div v-for="item of 100" :key="item">{{ item }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
