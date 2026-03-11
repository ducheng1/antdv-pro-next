import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import vueHook from 'alova/vue'

const api = createAlova({
  requestAdapter: adapterFetch(),
  statesHook: vueHook,
  // 超时时间 30s
  timeout: 30 * 1000,
  // 禁用缓存
  cacheFor: {
    get: 0,
    post: 0,
    put: 0,
    delete: 0,
  },
})

export default api
