<script setup lang="ts">
import type { DropdownProps, MenuItemType } from 'antdv-next'
import type { DarkMode } from '@/constants/app'
import { darkModeList } from '@/constants/app'

const appStore = useAppStore()
const { colorMode, isDark } = storeToRefs(appStore)
const { t } = useI18n()

function getColorModeIcon(mode: DarkMode) {
  switch (mode) {
    case 'dark':
      return 'i-ant-design:moon-outlined'
    case 'light':
      return 'i-ant-design:sun-outlined'
    case 'auto':
      return 'i-ant-design:sync-outlined'
  }
}

const items = computed<MenuItemType[]>(() =>
  darkModeList.map(
    (item) =>
      ({
        icon: getColorModeIcon(item.value),
        key: item.value,
        label: t(item.label),
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
    <template #iconRender="item">
      <RenderIcon :icon="item.icon" class="scale-120" />
    </template>
    <AButton type="text" @click="handleViewTransition(appStore.toggleDarkMode)">
      <template #icon>
        <RenderIcon
          :icon="isDark ? 'i-ant-design:sun-outlined' : 'i-ant-design:moon-outlined'"
          class="scale-120"
        />
      </template>
    </AButton>
  </ADropdown>
</template>

<style lang="scss" scoped></style>
