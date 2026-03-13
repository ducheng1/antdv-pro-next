<script setup lang="ts">
const userStore = useUserStore()

if (userStore.isLogin) {
  // 获取用户权限
  userStore.getUserInfo()
}
</script>

<template>
  <UiProvider>
    <RouterView />
  </UiProvider>
</template>

<style scoped lang="scss"></style>
