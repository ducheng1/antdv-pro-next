import type { ECharts } from 'echarts/core'
import type { EChartsOption } from '@/plugins'
import { debounce, toMerged } from 'es-toolkit'
import echarts from '@/plugins/echarts'

export interface UseEChartsOptions {
  /**
   * echarts初始化选项
   */
  initOptions?: echarts.EChartsInitOpts
  /**
   * 是否自动调整尺寸
   */
  autoResize?: boolean
  /**
   * 是否开启动画
   */
  animation?: boolean
  /**
   * resize防抖时间
   */
  resizeDebounce?: number
  /**
   * 图表选项
   */
  chartOptions?: EChartsOption
}

export function useECharts(domRef: Ref<HTMLElement | null>, options?: UseEChartsOptions) {
  const {
    initOptions,
    autoResize = true,
    animation = true,
    resizeDebounce = 300,
    chartOptions = {},
  } = options ?? {}

  let chartInst: ECharts | null
  const appStore = useAppStoreHook()

  // 初始化
  function init() {
    if (!domRef.value) {
      console.error('[useECharts] domRef is null')
      return
    }
    chartInst = echarts.init(domRef.value, appStore.isDark ? 'dark' : undefined, initOptions)
    if (chartOptions) {
      nextTick(() => {
        setOption(chartOptions)
      })
    }
  }

  // 设置选项
  function setOption(options: EChartsOption, notMerge?: boolean, lazyUpdate?: boolean) {
    if (!chartInst) {
      console.error('[useECharts] chartInst is not initialized')
      return
    }
    nextTick(() => {
      // @ts-expect-error initialized
      chartInst.setOption(
        toMerged(options, {
          backgroundColor: 'transparent',
        }),
        {
          notMerge,
          lazyUpdate,
          silent: !animation,
        },
      )
    })
  }

  // 自动调整尺寸函数
  const resize = debounce(
    () => {
      if (!chartInst) {
        return
      }
      chartInst.resize({
        animation: animation
          ? {
              duration: 300,
            }
          : undefined,
      })
    },
    resizeDebounce,
    { edges: ['leading', 'trailing'] },
  )

  // 自动调整尺寸
  if (autoResize) {
    useResizeObserver(domRef, resize)
  }

  // 销毁实例
  function destroy() {
    if (chartInst) {
      chartInst?.dispose()
      chartInst = null
    }
  }

  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    destroy()
  })

  watch(
    () => appStore.isDark,
    () => {
      destroy()
      nextTick(() => {
        init()
      })
    },
  )

  return {
    init,
    // @ts-expect-error initialized
    chartInst,
    setOption,
    destroy,
    resize,
  }
}
