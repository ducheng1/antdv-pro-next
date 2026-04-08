<script setup lang="ts">
import type { EChartsOption } from '@/plugins'
import dayjs from 'dayjs'

const data = ref<{ x: string; y: number }[]>([])

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
for (let i = 0; i < fakeY.length; i += 1) {
  data.value.push({
    x: dayjs().subtract(i, 'day').format('YYYY-MM-DD'),
    y: fakeY[i],
  })
}

const chartOption = ref<EChartsOption>({
  grid: {
    left: 5,
    right: 5,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    show: false,
    boundaryGap: false,
    data: data.value.map((item) => item.x),
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      color: '#2789ff',
      type: 'bar',
      data: data.value.map((item) => item.y),
    },
  ],
})
const chartContainer = useTemplateRef<HTMLDivElement>('chartRef')

useECharts(chartContainer, {
  chartOptions: chartOption.value,
})
</script>

<template>
  <div ref="chartRef" class="grow size-full"></div>
</template>

<style lang="scss" scoped></style>
