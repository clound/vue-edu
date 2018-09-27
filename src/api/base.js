import request from '@/utils/request'
// 公共post请求方法
export function commonPost(url, data) {
  return request({
    url,
    method: 'post',
    data
  })
}
// 公共get请求方法
export function commonGet(url, data) {
  return request({
    url,
    method: 'get',
    params: data
  })
}
