<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const { t } = useI18n()

const items: MenuItemType[] = [
  {
    label: t('common.logout'),
    key: 'logout',
    icon: 'i-ant-design:logout-outlined',
    onClick: userStore.handleLogout,
  },
]
</script>

<template>
  <ADropdown :menu="{ items }">
    <template #iconRender="item">
      <RenderIcon :icon="item.icon" />
    </template>
    <AButton type="text" size="large">
      <template #icon>
        <AAvatar :src="userInfo?.avatar">
          <template #icon>
            <RenderIcon icon="i-ant-design:user-outlined" />
          </template>
        </AAvatar>
      </template>
      <span class="text-14px">
        {{ userInfo?.nickname ?? userInfo?.username ?? '-' }}
      </span>
    </AButton>
  </ADropdown>
</template>

<style lang="scss" scoped></style>
