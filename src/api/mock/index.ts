import { createAlovaMockAdapter } from '@alova/mock'
import fetchAdapter from 'alova/fetch'
import user from './user'

// https://alova.js.org/zh-CN/resource/request-adapter/alova-mock
export function mockAdapter() {
  return createAlovaMockAdapter([user], {
    enable: true,
    httpAdapter: fetchAdapter(),
    delay: 500,
    mockRequestLogger: true,
  })
}
