<script setup lang="ts">
defineOptions({
  name: 'Logo',
})

const props = defineProps<{ size?: 'large'; iconOnly?: boolean }>()

const { t } = useI18n()
</script>

<template>
  <span
    class=":uno: flex-c inline-flex shrink-0 whitespace-nowrap text-ellipsis overflow-hidden hover:cursor-pointer"
    @click="$router.push('/')"
  >
    <RenderIcon
      icon="i-svg:antdv-next "
      :class="clsx(':uno: size-8', props.size === 'large' && 'size-16')"
    />
    <span
      v-if="!iconOnly"
      :class="clsx(':uno: text-18px font-bold ml-2 ant-c-text', props.size === 'large' && 'text-8')"
    >
      {{ t('app.title') }}
    </span>
  </span>
</template>

<style lang="scss" scoped></style>
