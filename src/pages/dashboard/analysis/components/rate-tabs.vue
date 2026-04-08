<script setup lang="ts">
import type { TabsProps } from 'antdv-next'
import type { Dayjs } from 'dayjs'
import type { EChartsOption } from '@/plugins'
import dayjs from 'dayjs'

const items: TabsProps['items'] = [
  {
    key: '销售额',
    label: '销售额',
  },
  {
    key: '访问量',
    label: '访问量',
  },
] as const

const currentTab = ref<(typeof items)[number]['key']>('销售额')

const rangeValue = ref<[Dayjs, Dayjs]>([dayjs().startOf('day'), dayjs().endOf('day')])

const rangeOptions = [
  {
    key: 'today',
    label: '今日',
    onClick: () => {
      rangeValue.value = [dayjs().startOf('day'), dayjs().endOf('day')]
    },
  },
  {
    key: 'week',
    label: '本周',
    onClick: () => {
      rangeValue.value = [dayjs().startOf('week'), dayjs().endOf('week')]
    },
  },
  {
    key: 'month',
    label: '本月',
    onClick: () => {
      rangeValue.value = [dayjs().startOf('month'), dayjs().endOf('month')]
    },
  },
  {
    key: 'year',
    label: '本年',
    onClick: () => {
      rangeValue.value = [dayjs().startOf('year'), dayjs().endOf('year')]
    },
  },
]

const activeRange = computed<(typeof rangeOptions)[number]['key']>(() => {
  if (
    rangeValue.value[0].isSame(dayjs().startOf('day'), 'day') &&
    rangeValue.value[1].isSame(dayjs().endOf('day'))
  ) {
    return 'today'
  }
  if (
    rangeValue.value[0].isSame(dayjs().startOf('week'), 'week') &&
    rangeValue.value[1].isSame(dayjs().endOf('week'), 'week')
  ) {
    return 'week'
  }
  if (
    rangeValue.value[0].isSame(dayjs().startOf('month'), 'month') &&
    rangeValue.value[1].isSame(dayjs().endOf('month'), 'month')
  ) {
    return 'month'
  }
  if (
    rangeValue.value[0].isSame(dayjs().startOf('year'), 'year') &&
    rangeValue.value[1].isSame(dayjs().endOf('year'), 'year')
  ) {
    return 'year'
  }
  return ''
})

const chartRef = useTemplateRef<HTMLDivElement>('chartRef')

const chartOptions = ref<EChartsOption>({
  grid: {
    left: 5,
    right: 5,
    top: 0,
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: Array.from({ length: 12 }).map((_, index) => `${index + 1}月`),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      color: '#2789ff',
      type: 'bar',
      data: Array.from({ length: 12 }).map(() => Math.floor(Math.random() * 1000)),
    },
  ],
})

const { destroy, init } = useECharts(chartRef, {
  chartOptions: chartOptions.value,
})

function onChange() {
  destroy()
  init()
}
</script>

<template>
  <ACard class="mb-6" variant="borderless">
    <template #title>
      <ATabs v-model:active-key="currentTab" :items="items" size="large" @change="onChange" />
    </template>
    <template #extra>
      <AButton
        v-for="item in rangeOptions"
        :key="item.key"
        :type="activeRange === item.key ? 'link' : 'text'"
        @click="item.onClick"
      >
        {{ item.label }}
      </AButton>
      <ARangePicker v-model:value="rangeValue" variant="filled" :clearable="false" />
    </template>
    <ARow class="h-340px">
      <ACol :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
        <div ref="chartRef" class="size-full"></div>
      </ACol>
      <ACol :xl="8" :lg="12" :md="12" :sm="24" :xs="24" class="px-8 pb-7 flex flex-col">
        <div class="mb-6">门店{{ currentTab }}排名</div>
        <div class="flex grow flex-col justify-between">
          <div v-for="index of 7" :key="index" class="flex gap-4 items-center">
            <div
              :class="
                clsx(
                  'font-bold rounded-full flex-c inline-flex size-5',
                  index < 4
                    ? 'bg-black text-white dark:bg-gray-600 dark:text-white'
                    : 'bg-gray-200 dark:bg-gray-800',
                )
              "
            >
              {{ index }}
            </div>
            <div class="flex-bc grow">
              <span>工专路{{ index - 1 }}号店</span>
              <span>323,234</span>
            </div>
          </div>
        </div>
      </ACol>
    </ARow>
  </ACard>
</template>

<style lang="scss" scoped></style>
