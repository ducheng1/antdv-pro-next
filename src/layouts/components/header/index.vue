<script setup lang="ts">
import UserProfile from './user-profile/index.vue'
</script>

<template>
  <ALayoutHeader class="--uno flex-bc left-0 top-0 sticky z-900">
    <Logo />
    <div>
      <UserProfile />
    </div>
  </ALayoutHeader>
</template>

<style lang="scss" scoped></style>
