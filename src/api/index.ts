import type { HttpResponse } from '#/api/response'
import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import vueHook from 'alova/vue'
import { mockAdapter } from './mock'

const api = createAlova({
  baseURL:
    import.meta.env.VITE_API_ENABLE_PROXY === 'true'
      ? '/proxy-api'
      : import.meta.env.VITE_API_BASE_URL,
  requestAdapter: import.meta.env.VITE_API_ENABLE_MOCK === 'true' ? mockAdapter() : adapterFetch(),
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
  responded: {
    onSuccess: async (response) => {
      const data: HttpResponse = await response.json()
      if (data.code === 200) {
        return data.data
      }
      window.$message.error(data.msg)
      throw new Error(data.msg)
    },
    onError: (error) => {
      window.$message.error(error.message)
    },
  },
})

export default api
