<script setup lang="ts">
import SwitchLocale from './switch-locale/index.vue'
import UserProfile from './user-profile/index.vue'

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
</script>

<template>
  <ALayoutHeader
    class="--uno flex-bc left-0 top-0 sticky z-900"
    :class="{
      '--uno bg-white': !isDark,
    }"
  >
    <div class="--uno flex-c h-full">
      <SwitchLocale />
      <UserProfile />
    </div>
  </ALayoutHeader>
</template>

<style lang="scss" scoped></style>
