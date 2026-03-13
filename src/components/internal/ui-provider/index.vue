<script setup lang="ts">
import { ConfigProvider, message, Modal, notification, theme } from 'antdv-next'
import enUS from 'antdv-next/locale/en_US'
import zhCN from 'antdv-next/locale/zh_CN'
import { getThemeToken } from '@/theme'
import UiProvider from './index.vue'

defineOptions({
  name: 'UiProvider',
})

onMounted(() => {
  ;(ConfigProvider as any).config({ holderRender: UiProvider })
})

onBeforeUnmount(() => {
  ;(ConfigProvider as any).config({ holderRender: undefined })
})

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)

const i18n = useI18n()
const { locale } = i18n

const localeMap = new Map([
  ['zh-CN', zhCN],
  ['en-US', enUS],
])

const [messageApi, MessageContextHolder] = message.useMessage()
const [notificationApi, NotificationContextHolder] = notification.useNotification()
const [modalApi, ModalContextHolder] = Modal.useModal()

window.$message = messageApi
window.$notification = notificationApi
window.$modal = modalApi
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
      <AApp class=":uno: size-full" :message="{ maxCount: 5 }" :notification="{ maxCount: 3 }">
        <MessageContextHolder />
        <NotificationContextHolder />
        <ModalContextHolder />
        <slot />
      </AApp>
    </AStyleProvider>
  </AConfigProvider>
</template>

<style lang="scss" scoped></style>
