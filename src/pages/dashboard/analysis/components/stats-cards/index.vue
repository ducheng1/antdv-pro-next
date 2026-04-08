<script setup lang="ts">
import ChartCard from './chart-card.vue'
import PayChart from './pay-chart.vue'
import ViewChart from './view-chart.vue'
</script>

<template>
  <ARow :gutter="24">
    <ChartCard title="总销售额">
      <AStatistic class="mt-1 grow" :value="126560" prefix="¥" />
      <div class="mt-5">
        <span class="mr-4 inline-flex items-center">
          周同比 12%
          <RenderIcon icon="i-ant-design:caret-up-filled" class="text-error ml-0.5 size-3" />
        </span>
        <span class="inline-flex items-center">
          日同比 11%
          <RenderIcon icon="i-ant-design:caret-down-filled" class="text-success ml-0.5 size-3" />
        </span>
      </div>
      <template #footer>
        <div>日销售额 ￥12,423</div>
      </template>
    </ChartCard>
    <ChartCard title="访问量">
      <AStatistic class="mt-1" :value="8846" />
      <ViewChart />
      <template #footer>
        <div>日访问量 1,234</div>
      </template>
    </ChartCard>
    <ChartCard title="支付笔数">
      <AStatistic class="mt-1" :value="6560" />
      <PayChart />
      <template #footer>
        <div>转化率 60%</div>
      </template>
    </ChartCard>
    <ChartCard title="运营活动效果">
      <AStatistic class="mt-1 grow" :value="78" suffix="%" />
      <AProgress
        status="active"
        :percent="78"
        :stroke-color="{
          '0%': '#108ee9',
          '100%': '#87d068',
        }"
      />
      <template #footer>
        <div>
          <span class="mr-4 inline-flex items-center">
            周同比 12%
            <RenderIcon icon="i-ant-design:caret-up-filled" class="text-error ml-0.5 size-3" />
          </span>
          <span class="inline-flex items-center">
            日同比 11%
            <RenderIcon icon="i-ant-design:caret-down-filled" class="text-success ml-0.5 size-3" />
          </span>
        </div>
      </template>
    </ChartCard>
  </ARow>
</template>

<style lang="scss" scoped></style>
