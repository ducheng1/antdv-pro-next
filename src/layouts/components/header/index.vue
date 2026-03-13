<script setup lang="ts">
import UserProfile from './user-profile/index.vue'
</script>

<template>
  <ALayoutHeader
    class=":uno: border-b bg-op-60 flex-bc left-0 top-0 sticky z-900 backdrop-blur-md border-b-split"
  >
    <div class=":uno: flex-c gap-1 h-full">
      <SwitchSiderCollapse />
    </div>
    <div class=":uno: flex-c gap-1 h-full">
      <SwitchLocale />
      <SwitchColorMode />
      <UserProfile />
    </div>
  </ALayoutHeader>
</template>

<style lang="scss" scoped></style>
