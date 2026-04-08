<script setup lang="ts">
import RateTabs from './components/rate-tabs.vue'
import StatsCards from './components/stats-cards/index.vue'

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
    <StatsCards />
    <RateTabs />
  </div>
</template>

<style lang="scss" scoped></style>
