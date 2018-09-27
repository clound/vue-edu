import axios from 'axios'
// import { removeUserInfo } from 'utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response
    return res
  },
  error => {
    // console.log(error.response)// for debug
    let err = error.response
    alert('请求出错', err)
    return Promise.reject(error)
  }
)

export default service
