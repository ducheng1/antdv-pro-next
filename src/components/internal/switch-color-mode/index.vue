<script setup lang="ts">
import type { DropdownProps, MenuItemType } from 'antdv-next'
import type { DarkMode } from '@/constants/app'
import { darkModeList } from '@/constants/app'

const appStore = useAppStore()
const { colorMode, isDark } = storeToRefs(appStore)

const items = computed<MenuItemType[]>(() =>
  darkModeList.map(
    (item) =>
      ({
        key: item.value,
        label: item.label,
        disabled: item.value === colorMode.value,
      }) satisfies MenuItemType,
  ),
)

function handleViewTransition(cb: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(() => cb())
  } else {
    cb()
  }
}

const handleMenuClick: DropdownProps['onMenuClick'] = (item) => {
  handleViewTransition(() => appStore.setDarkMode(item.key as DarkMode))
}
</script>

<template>
  <ADropdown :menu="{ items }" @menu-click="handleMenuClick">
    <AButton type="text" @click="handleViewTransition(appStore.toggleDarkMode)">
      <template #icon>
        <i :class="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" />
      </template>
    </AButton>
  </ADropdown>
</template>

<style lang="scss" scoped></style>
