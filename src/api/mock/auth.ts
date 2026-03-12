import type { HttpResponse } from '#/api/response'
import type { AccountLoginForm } from '#/pages/auth'
import { defineMock } from '@alova/mock'
import mockjs from 'mockjs'

const { t } = useGlobalI18n()

export default defineMock({
  '[POST]/auth/login': ({ data }: { data: AccountLoginForm }) => {
    if (data.username !== 'admin' || data.password !== 'ant.design') {
      return {
        code: 400,
        msg: t('auth.username-or-password-incorrect'),
      } satisfies HttpResponse<string>
    }
    return {
      code: 200,
      msg: 'success',
      data: mockjs.Random.string(32),
    } satisfies HttpResponse<string>
  },
})
