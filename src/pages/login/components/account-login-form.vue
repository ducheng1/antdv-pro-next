<script setup lang="ts">
import type { FormProps } from 'antdv-next'
import type { AccountLoginForm } from '@/types/pages/auth'

const { t } = useI18n()

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const formRules: FormProps['rules'] = {
  username: [{ required: true, message: t('auth.username-required') }],
  password: [{ required: true, message: t('auth.password-required') }],
}

const formModel = reactive<AccountLoginForm>({
  username: '',
  password: '',
  remember: true,
})

const loading = ref<boolean>(false)

async function handleSubmit() {
  try {
    loading.value = true
    await userStore.handleLogin(formModel)
    window.$message.success(t('auth.login-success'))
    router.replace((route.query.redirect as string) || '/')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AForm size="large" class="w-full" :model="formModel" :rules="formRules" @finish="handleSubmit">
    <AFormItem name="username">
      <AInput v-model:value="formModel.username" :placeholder="t('auth.username')">
        <template #prefix>
          <RenderIcon icon="i-ant-design:user-outlined" class="size-5" />
        </template>
      </AInput>
    </AFormItem>
    <AFormItem name="password">
      <AInputPassword v-model:value="formModel.password" :placeholder="t('auth.password')">
        <template #prefix>
          <RenderIcon icon="i-ant-design:lock-outlined" class="size-5" />
        </template>
      </AInputPassword>
    </AFormItem>
    <div class="flex-bc">
      <AFormItem name="remember">
        <ACheckbox v-model:checked="formModel.remember">{{ t('auth.remember-me') }}</ACheckbox>
      </AFormItem>
      <AFormItem>
        <AButton color="default" variant="link" size="small">
          {{ t('auth.forget-password') }}
        </AButton>
      </AFormItem>
    </div>
    <AFormItem>
      <AButton :loading type="primary" block html-type="submit">{{ t('auth.login') }}</AButton>
    </AFormItem>
    <ASpace>
      <span>{{ t('auth.third-party') }}</span>
      <RenderIcon
        icon="i-ant-design:alipay-circle-filled"
        class=":uno: size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
      <RenderIcon
        icon="i-ant-design:taobao-circle-filled"
        class=":uno: size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
      <RenderIcon
        icon="i-ant-design:weibo-circle-filled"
        class=":uno: size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
    </ASpace>
  </AForm>
</template>

<style lang="scss" scoped></style>
