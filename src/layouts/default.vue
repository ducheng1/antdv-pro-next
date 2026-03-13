<script setup lang="ts">
import type { Component } from 'vue'
import type { LayoutMode } from '@/constants/app'
import Mix from './blocks/mix.vue'
import Side from './blocks/side.vue'

const appStore = useAppStore()
const { config } = storeToRefs(appStore)

const layoutMap = new Map<LayoutMode, Component>([
  ['side', Side],
  ['mix', Mix],
])
</script>

<template>
  <ConfigPanel />
  <component :is="layoutMap.get(config.layout.mode) ?? Side" />
</template>

<style lang="scss" scoped></style>
