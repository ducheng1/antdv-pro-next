import type { UserInfo } from '#/api/user'
import type { AccountLoginForm } from '#/pages/auth'
import api from '@/api'
import { store } from '@/plugins'

export const useUserStore = defineStore('user', () => {
  const token = useLocalStorage<string>('antdv-token', null)
  const isLogin = computed<boolean>(() => !!token.value)

  const userInfo = ref<UserInfo>()

  // 登录
  async function handleLogin(form: AccountLoginForm) {
    const data = await api.Post<string>('/auth/login', form)
    token.value = data
    getUserInfo()
  }

  // 获取用户信息
  async function getUserInfo() {
    const data = await api.Get<UserInfo>('/user/info')
    userInfo.value = data
  }

  return { token, isLogin, userInfo, handleLogin, getUserInfo }
})

export const useUserStoreHook = () => useUserStore(store)
