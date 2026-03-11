<script setup lang="ts">
import { theme } from 'antdv-next'
import zhCN from 'antdv-next/locale/zh_CN'
import { themeToken } from '@/theme'

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
</script>

<template>
  <AConfigProvider
    :locale="zhCN"
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      ...themeToken,
    }"
  >
    <AStyleProvider hash-priority="high">
      <AApp class="--uno size-full">
        <slot />
      </AApp>
    </AStyleProvider>
  </AConfigProvider>
</template>

<style lang="scss" scoped></style>
