<script setup lang="ts">
const props = defineProps<{ size?: 'large' }>()

const i18n = useI18n()
const { t } = i18n
</script>

<template>
  <a class=":uno: flex-c inline-flex shrink-0">
    <i :class="clsx(':uno: i-svg-antdv-next size-8', props.size === 'large' && 'size-16')" />
    <span
      :class="clsx(':uno: text-18px font-bold ml-2 ant-c-text', props.size === 'large' && 'text-8')"
    >
      {{ t('app.title') }}
    </span>
  </a>
</template>

<style lang="scss" scoped></style>
