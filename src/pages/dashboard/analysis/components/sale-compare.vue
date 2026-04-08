<script setup lang="ts">
import type { EChartsOption } from '@/plugins'

const data: Record<string, string | number>[] = [
  {
    label: '家用电器',
    total: 4544,
    online: 3321,
    store: 1223,
  },
  {
    label: '食用酒水',
    total: 3321,
    online: 2812,
    store: 578,
  },
  {
    label: '个护健康',
    total: 3113,
    online: 1928,
    store: 1185,
  },
  {
    label: '服饰箱包',
    total: 2341,
    online: 121,
    store: 1223,
  },
  {
    label: '母婴产品',
    total: 1231,
    online: 842,
    store: 429,
  },
  {
    label: '其他',
    total: 1231,
    online: 614,
    store: 617,
  },
] as const

const type = ref<string>('')
const chartRef = useTemplateRef<HTMLDivElement>('chartRef')

const { setOption } = useECharts(chartRef, { chartOptions: getOptions() })

function getOptions(): EChartsOption {
  return {
    tooltip: {},
    series: [
      {
        type: 'pie',
        label: {
          formatter: (params) => `${params.name}: ${params.value}`,
        },
        data:
          type.value === ''
            ? data.map((item) => ({
                value: item.total as number,
                name: item.label,
              }))
            : data.map((item) => ({
                value: item[type.value] as number,
                name: item.label,
              })),
        radius: ['50%', '70%'],
      },
    ],
  }
}

function onChange() {
  setOption(getOptions())
}
</script>

<template>
  <ACard
    title="销售额类别占比"
    class="h-full"
    variant="borderless"
    :styles="{
      body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
    }"
  >
    <template #extra>
      <ASegmented
        v-model:value="type"
        :options="[
          { value: '', label: '全部渠道' },
          { value: 'online', label: '线上' },
          { value: 'store', label: '门店' },
        ]"
        class="mr-2"
        @update:value="onChange"
      />
      <ADropdown
        :menu="{
          items: [
            { key: 1, label: '操作一' },
            { key: 2, label: '操作二' },
          ],
        }"
      >
        <AButton type="text">
          <template #icon>
            <RenderIcon icon="i-ant-design:more-outlined" />
          </template>
        </AButton>
      </ADropdown>
    </template>
    <div>销售额</div>
    <div ref="chartRef" class="grow size-full"></div>
  </ACard>
</template>

<style lang="scss" scoped></style>
