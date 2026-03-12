<script setup lang="ts">
const userStore = useUserStore()

if (userStore.isLogin) {
  userStore.getUserInfo()
}
</script>

<template>
  <UiProvider>
    <RouterView />
  </UiProvider>
</template>

<style scoped lang="scss"></style>
