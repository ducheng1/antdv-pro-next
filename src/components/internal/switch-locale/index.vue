<script setup lang="ts">
import type { DropdownProps, MenuItemType } from 'antdv-next'
import type { Locale } from '@/constants/app'
import { localeList } from '@/constants/app'

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
}
</script>

<template>
  <div>
    <ADropdown :menu="{ items }" @menu-click="handleMenuClick">
      <AButton type="text">
        <template #icon>
          <i class=":uno: i-lucide-languages" />
        </template>
      </AButton>
    </ADropdown>
  </div>
</template>

<style lang="scss" scoped></style>
