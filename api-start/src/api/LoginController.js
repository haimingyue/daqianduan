import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import {checkCode} from '../common/utils'
import User from '@/model/User'

class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request
    console.log(body)
    try {
      // body.username -> database -> email
      let result = await send({
        code: '1234',
        expire: moment()
          .add(30, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Brian',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {
      console.log(e)
    }
  }
  async login(ctx) {
    let { body } = ctx.request;
    let sid = body.sid;
    let code = body.code;

    let result = await checkCode(sid, code)

    if(result) {
      console.log('checkOk')

      let checkUserPassword = false

      let user = await User.findOne({ username: body.username})
      if (user.password === body.password) {
        checkUserPassword = true
      }
      console.log('checkUserPassword', checkUserPassword)
      if(checkUserPassword) {
        let token = jsonwebtoken.sign({
          _id: 'simoon'
        }, config.JWT_SECRET, { expiresIn: '1h' })
        ctx.body = {
          code: 200,
          token
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '用户名或者密码错误'
        }
      }
      
    } else {
      ctx.body = {
        code: 401,
        msg: '图片验证码不正确，请检查'
      }
    }

    
  }
}

export default new LoginController()
