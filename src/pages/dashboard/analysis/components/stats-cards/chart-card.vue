<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <ACol :xs="24" :sm="12" :md="12" :lg="12" :xl="6" class="mb-6">
    <ACard
      :title="title"
      variant="borderless"
      :styles="{
        body: {
          padding: '20px 24px 8px',
          height: '182px',
          display: 'flex',
          flexDirection: 'column',
        },
      }"
    >
      <div class="flex-bc">
        <span>{{ title }}</span>
        <ATooltip title="指标说明">
          <RenderIcon icon="i-ant-design:info-circle-outlined" class="hover:cursor-pointer" />
        </ATooltip>
      </div>
      <div class="flex grow flex-col">
        <slot />
      </div>
      <ADivider class="my-2" />
      <slot name="footer" />
    </ACard>
  </ACol>
</template>

<style lang="scss" scoped></style>
