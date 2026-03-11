<script setup lang="ts">
import { theme } from 'antdv-next'
import zhCN from 'antdv-next/locale/zh_CN'

const appStore = useAppStore()
const { colorMode, isDark } = storeToRefs(appStore)
</script>

<template>
  <AConfigProvider
    :locale="zhCN"
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
  >
    <AStyleProvider hash-priority="high">
      <AApp>
        <a-radio-group
          :value="colorMode"
          block
          :options="[
            { label: '自动', value: 'auto' },
            { label: '亮色', value: 'light' },
            { label: '暗色', value: 'dark' },
          ]"
          option-type="button"
          button-style="solid"
          @update:value="appStore.setDarkMode"
        />
        <slot />
      </AApp>
    </AStyleProvider>
  </AConfigProvider>
</template>

<style lang="scss" scoped></style>
