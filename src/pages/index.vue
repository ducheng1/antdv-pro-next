<script setup lang="ts">
import type { UserInfo } from '#/api/user'
import api from '@/api'

definePage({
  name: 'Home',
  meta: {
    title: 'routes.dashboard.index',
    menu: true,
    menuSort: 1,
  },
})

const { data, loading } = useRequest(api.Get<UserInfo>('/user/info'))
const { t } = useI18n()
</script>

<template>
  <div>
    {{ loading }}
    {{ data?.username }}
    {{ t('common.cancel') }}
    <div v-for="index of 200" :key="index">page</div>
  </div>
</template>

<style lang="scss" scoped></style>
