import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '密码位数不正确',
      size: (field, params) => '验证码要求为' + params
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      username: '账号',
      code: '验证码'
    }
  }
}

Validator.localize(dictionary)
