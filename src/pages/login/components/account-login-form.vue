<script setup lang="ts">
import type { FormProps } from 'antdv-next'
import type { AccountLoginForm } from '@/types/pages/auth'
import { message } from 'antdv-next'

const i18n = useI18n()
const { t } = i18n

const userStore = useUserStore()
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
    message.success(t('auth.login-success'))
    router.replace('/')
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
          <i class="i-ant-design-user-outlined" />
        </template>
      </AInput>
    </AFormItem>
    <AFormItem name="password">
      <AInputPassword v-model:value="formModel.password" :placeholder="t('auth.password')">
        <template #prefix>
          <i class="i-ant-design-lock-outlined" />
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
      <i
        class=":uno: i-ant-design:alipay-circle-filled size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
      <i
        class=":uno: i-ant-design:taobao-circle-filled size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
      <i
        class=":uno: i-ant-design:weibo-circle-filled size-6 transition-color ant-c-text-quat hover:cursor-pointer hover:ant-c-primary"
      />
    </ASpace>
  </AForm>
</template>

<style lang="scss" scoped></style>
