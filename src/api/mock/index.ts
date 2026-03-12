import { createAlovaMockAdapter } from '@alova/mock'
import fetchAdapter from 'alova/fetch'
import auth from './auth'
import user from './user'

// https://alova.js.org/zh-CN/resource/request-adapter/alova-mock
export function mockAdapter() {
  return createAlovaMockAdapter([auth, user], {
    enable: true,
    httpAdapter: fetchAdapter(),
    delay: 500,
    mockRequestLogger: true,
  })
}
