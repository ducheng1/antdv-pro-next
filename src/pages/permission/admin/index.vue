<script setup lang="ts">
definePage({
  name: 'PermissionAdmin',
  meta: {
    title: 'routes.permission.admin',
    menu: true,
    menuSort: 1,
    auth: ['admin'],
  },
})
</script>

<template>
  <div>只有管理员能看到这个页面</div>
</template>

<style lang="scss" scoped></style>
