import { extend, localize } from 'vee-validate'

import zh from 'vee-validate/dist/locale/zh_CN.json'

import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'

extend('email', email)
extend('min', min)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码'
  },
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!'
    }
  }
})
