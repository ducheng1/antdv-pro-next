import type { HttpResponse } from '#/api/response'
import type { UserInfo } from '#/api/user'
import { defineMock } from '@alova/mock'

export default defineMock({
  '/user/info': {
    code: 200,
    msg: 'success',
    data: {
      username: 'admin',
      nickname: '管理员',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    },
  } satisfies HttpResponse<UserInfo>,
  '/user/permission': {
    code: 200,
    msg: 'success',
    data: ['test:button', 'test:page'],
  } satisfies HttpResponse<string[]>,
})
