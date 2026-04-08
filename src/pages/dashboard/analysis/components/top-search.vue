<script setup lang="ts">
import type { TableProps } from 'antdv-next'
import type { EChartsOption } from '@/plugins'
import dayjs from 'dayjs'
import RenderIcon from '@/components/internal/render-icon/index.vue'

const data = []
const fakeY2 = [1, 6, 4, 8, 3, 7, 2]
for (let i = 0; i < fakeY2.length; i += 1) {
  data.push({
    x: dayjs(new Date(Date.now() + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  })
}

const chartOptions = ref<EChartsOption>({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    show: false,
    data: data.map((item) => item.x),
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      color: 'rgba(197, 215, 253, 1)',
      type: 'line',
      data: data.map((item) => item.y),
      showSymbol: false,
      smooth: true,
      lineStyle: {
        width: 0,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 1,
          x2: 1,
          y: 0,
          y2: 1,
          colorStops: [
            {
              color: 'rgba(197, 215, 253, 1)',
              offset: 0,
            },
            {
              color: 'rgba(197, 215, 253, 0.2)',
              offset: 0.8,
            },
            {
              color: 'rgba(197, 215, 253, 0)',
              offset: 1,
            },
          ],
        },
      },
    },
  ],
})

const searchChartRef = useTemplateRef<HTMLDivElement>('searchChartRef')
const humanChartRef = useTemplateRef<HTMLDivElement>('humanChartRef')

useECharts(searchChartRef, { chartOptions: chartOptions.value })
useECharts(humanChartRef, { chartOptions: chartOptions.value })

const searchData = []
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  })
}

const tableColumns: TableProps<{
  index: number
  keyword: string
  count: number
  range: number
  status: number
}>['columns'] = [
  {
    key: 'index',
    dataIndex: 'index',
    title: '排名',
  },
  {
    key: 'keyword',
    dataIndex: 'keyword',
    title: '搜索关键词',
    render: (text) => h('a', {}, text),
  },
  {
    key: 'count',
    dataIndex: 'count',
    title: '用户数',
    sorter: (
      a: {
        count: number
      },
      b: {
        count: number
      },
    ) => a.count - b.count,
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (
      a: {
        range: number
      },
      b: {
        range: number
      },
    ) => a.range - b.range,
    render: (text, record) =>
      h(
        'span',
        {
          class: 'inline-flex flex-c',
        },
        [
          h('span', {}, `${text}%`),
          h(RenderIcon, {
            class: clsx('ml-1', record.status === 0 ? 'text-success' : 'text-error'),
            icon:
              record.status === 0
                ? 'i-ant-design:caret-up-filled'
                : 'i-ant-design:caret-down-filled',
          }),
        ],
      ),
  },
]
</script>

<template>
  <ACard title="线上热门搜索" variant="borderless" class="h-full">
    <template #extra>
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
    <ARow class="flex" :gutter="16">
      <ACol :span="12">
        <div class="flex items-center">
          <span class="mr-2">搜索用户数</span>
          <ATooltip title="指标说明">
            <RenderIcon icon="i-ant-design:info-circle-outlined" class="hover:cursor-pointer" />
          </ATooltip>
        </div>
        <div>
          17.1
          <RenderIcon icon="i-ant-design:caret-up-filled" class="size-3" />
        </div>
        <div ref="searchChartRef" class="h-12 w-full"></div>
      </ACol>
      <ACol :span="12">
        <div class="flex items-center">
          <span class="mr-2">人均搜索次数</span>
          <ATooltip title="指标说明">
            <RenderIcon icon="i-ant-design:info-circle-outlined" class="hover:cursor-pointer" />
          </ATooltip>
        </div>
        <div>
          26.2
          <RenderIcon icon="i-ant-design:caret-down-filled" class="size-3" />
        </div>
        <div ref="humanChartRef" class="h-12 w-full"></div>
      </ACol>
    </ARow>
    <ATable
      class="mt-6"
      :data-source="searchData"
      size="small"
      :columns="tableColumns as TableProps['columns']"
      :pagination="{
        pageSize: 5,
      }"
    />
  </ACard>
</template>

<style lang="scss" scoped></style>
