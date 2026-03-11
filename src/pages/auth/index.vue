<script setup lang="ts">
definePage({
  meta: {
    layout: 'pure',
  },
})
</script>

<template>
  <div class=":uno: page-container py-8 size-screen">
    <!-- 国际化切换 -->
    <SwitchLocale class=":uno: right-4 top-1 absolute" />
    <div class=":uno: mx-auto w-400px">
      <div class=":uno: text-center">
        <Logo size="large" />
        <p class=":uno: ant-c-text-secondary">Ant Design 是西湖区最具影响力的 Web 设计规范</p>
      </div>
      <AForm> </AForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  background-image: url(https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
