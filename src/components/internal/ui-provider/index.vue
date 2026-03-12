<script setup lang="ts">
import { theme } from 'antdv-next'
import enUS from 'antdv-next/locale/en_US'
import zhCN from 'antdv-next/locale/zh_CN'
import { getThemeToken } from '@/theme'

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)

const i18n = useI18n()
const { locale } = i18n

const localeMap = new Map([
  ['zh-CN', zhCN],
  ['en-US', enUS],
])
</script>

<template>
  <AConfigProvider
    :locale="localeMap.get(locale)"
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      ...getThemeToken(isDark),
    }"
  >
    <AStyleProvider hash-priority="high">
      <AApp class=":uno: size-full">
        <slot />
      </AApp>
    </AStyleProvider>
  </AConfigProvider>
</template>

<style lang="scss" scoped></style>
