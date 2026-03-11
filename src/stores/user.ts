import type { UserInfo } from '#/api/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo>()

  return { userInfo }
})
