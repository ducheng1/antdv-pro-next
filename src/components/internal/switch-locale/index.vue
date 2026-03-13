<script setup lang="ts">
import type { DropdownProps, MenuItemType } from 'antdv-next'
import type { Locale } from '@/constants/app'
import { localeList } from '@/constants/app'

defineOptions({
  name: 'SwitchLocale',
})

const appStore = useAppStore()
const { config } = storeToRefs(appStore)

const items = computed<MenuItemType[]>(() =>
  localeList.map(
    (item) =>
      ({
        key: item.value,
        label: item.label,
        disabled: item.value === config.value.locale,
      }) satisfies MenuItemType,
  ),
)

const handleMenuClick: DropdownProps['onMenuClick'] = (info) => {
  appStore.setLocale(info.key as Locale)
  window.location.reload()
}
</script>

<template>
  <ADropdown :menu="{ items }" @menu-click="handleMenuClick">
    <AButton type="text">
      <template #icon>
        <RenderIcon icon="i-lucide:languages" class="scale-120" />
      </template>
    </AButton>
  </ADropdown>
</template>

<style lang="scss" scoped></style>
