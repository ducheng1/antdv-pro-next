import type { UserInfo } from '#/api/user'
import type { AccountLoginForm } from '#/pages/auth'
import api from '@/api'
import { store } from '@/plugins'

export const useUserStore = defineStore('user', () => {
  const token = useLocalStorage<string>(`${import.meta.env.VITE_APP_STORAGE_PREFIX}token`, null)
  const isLogin = computed<boolean>(() => !!token.value)

  const userInfo = ref<UserInfo>()
  const router = useRouter()

  // 登录
  async function handleLogin(form: AccountLoginForm) {
    const data = await api.Post<string>('/auth/login', form)
    token.value = data
    await getUserInfo()
  }

  // 获取用户信息
  async function getUserInfo() {
    const data = await api.Get<UserInfo>('/user/info')
    userInfo.value = data
  }

  // 退出登录
  function handleLogout() {
    token.value = null
    userInfo.value = undefined
    router.replace('/login')
  }

  // 是否有权限
  function hasPermission(code: string | string[]): boolean {
    if (Array.isArray(code)) {
      return code.some((item) => hasPermission(item))
    }
    if (userInfo.value?.permissions?.includes(code)) {
      return true
    }
    return false
  }

  return { token, isLogin, userInfo, handleLogin, getUserInfo, handleLogout, hasPermission }
})

export const useUserStoreHook = () => useUserStore(store)
