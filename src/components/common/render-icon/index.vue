<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'RenderIcon',
})

const props = defineProps<{
  name: string
  class?: HTMLAttributes['class']
}>()

const outputType = computed(() => {
  if (!props.name) {
    return ''
  }
  if (/i-[^:]+:[^:]+/.test(props.name)) {
    return 'unocss'
  } else if (props.name.includes(':')) {
    return 'iconify'
  }
  return ''
})
</script>

<template>
  <i
    v-if="outputType"
    :class="
      clsx(
        'relative size-[1em] flex-inline items-center justify-center fill-current leading-[1em]',
        props.class,
      )
    "
  >
    <i v-if="outputType === 'unocss'" class="shrink-0 size-inherit" :class="name" />
    <Icon v-else-if="outputType === 'iconify'" :icon="name" class="shrink-0 size-inherit!" />
  </i>
</template>

<style lang="scss" scoped></style>
