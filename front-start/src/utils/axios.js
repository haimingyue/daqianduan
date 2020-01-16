import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }
  // 获取axios 的 配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }
  // 设置拦截器器
  interceptors (instance) {
    // const instance = axios.create()
    instance.interceptors.request.use((config) => {
      console.log('::', config)
      return config
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })

    instance.interceptors.response.use(res => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, err => {
      errorHandle(err)
      return Promise.reject(err)
    })
  }
  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    console.log('newOptions', newOptions)
    this.interceptors(instance)
    return instance(newOptions)
  }
  // 封装get请求
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  // 封装post请求
  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data
    })
  }
}

export default HttpRequest
