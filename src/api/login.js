import request from '@/utils/request'
import { BaseUrl } from '@/api/baseHost'

export function login(username, password) {
  return request({
    url: BaseUrl + 'login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

// // 官方login方法
// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: BaseUrl + 'user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: BaseUrl + 'user/logout',
    method: 'post'
  })
}