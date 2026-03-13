<script setup lang="ts">
definePage({
  name: 'Permission',
  meta: {
    title: 'routes.permission.index',
    menu: true,
    menuSort: 6,
    icon: 'i-ant-design:user-outlined',
    auth: ['test:page'],
  },
})
</script>

<template>
  <ACard>
    <p>只有拥有<code>test:page</code>权限的用户才能看到这个页面</p>
  </ACard>
</template>

<style lang="scss" scoped></style>
