<script setup lang="ts">
const userStore = useUserStore()

if (userStore.isLogin) {
  userStore.getUserInfo()
}
</script>

<template>
  <UiProvider>
    <RouterView />
    <ConfigPanel />
  </UiProvider>
</template>

<style scoped lang="scss"></style>
