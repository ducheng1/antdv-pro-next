<script setup lang="ts">
import RateTabs from './components/rate-tabs.vue'
import SaleCompare from './components/sale-compare.vue'
import StatsCards from './components/stats-cards/index.vue'
import TopSearch from './components/top-search.vue'

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
    <ARow :gutter="24">
      <ACol :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <TopSearch />
      </ACol>
      <ACol :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
        <SaleCompare />
      </ACol>
    </ARow>
  </div>
</template>

<style lang="scss" scoped></style>
