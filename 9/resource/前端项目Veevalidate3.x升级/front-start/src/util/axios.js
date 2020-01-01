import axios from 'axios'
import errorHandle from './errorHandle'

const instance = axios.create()

instance.interceptors.request.use((config) => {
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

export default instance
