<script setup lang="ts">
import type { UserInfo } from '#/api/user'
import api from '@/api'

const { data, loading } = useRequest(api.Get<UserInfo>('/user/info'))
</script>

<template>
  <div>
    {{ loading }}
    {{ data?.username }}
    {{ $t('common.cancel') }}
    <div v-for="index of 200" :key="index">page</div>
  </div>
</template>

<style lang="scss" scoped></style>
