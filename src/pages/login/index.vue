<script setup lang="ts">
import type { TabsProps } from 'antdv-next'
import AccountLoginForm from './components/account-login-form.vue'

definePage({
  name: 'Login',
  meta: {
    title: 'routes.login',
    layout: 'pure',
    requiresLogin: false,
  },
})

const i18n = useI18n()
const { t } = i18n

const tabs = computed<TabsProps['items']>(() => [
  {
    key: 'account',
    label: t('auth.account-login'),
  },
  {
    key: 'phone',
    label: t('auth.phone-login'),
  },
])

const activeKey = ref<'account' | 'phone'>('account')
const componentsMap = new Map([['account', AccountLoginForm]])
</script>

<template>
  <div class=":uno: page-container py-8">
    <!-- 国际化切换 -->
    <SwitchLocale class=":uno: right-4 top-1 absolute" />
    <!-- 表单 -->
    <div class=":uno: py-6 w-full">
      <div class=":uno: mb-8 text-center">
        <Logo size="large" />
        <p class=":uno: ant-c-text-secondary">{{ t('auth.banner') }}</p>
      </div>
      <div class=":uno: mx-auto w-80">
        <ATabs v-model:active-key="activeKey" :items="tabs" centered />
        <component :is="componentsMap.get(activeKey)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  // background-image: url(https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr);
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
}
</style>
