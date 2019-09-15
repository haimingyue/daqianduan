<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="username"
              v-model.trim="username"
              v-validate="'required|email'"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid">{{errors.first('username')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              v-model="password"
              v-validate="'required|min:6'"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid">{{errors.first('password')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="code"
              v-model="code"
              v-validate="'required|size:6'"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid">{{errors.first('code')}}</div>
          <div @click="getCaptcha" class="layui-form-mid svg" v-html="svg"></div>
        </div>
        <button type="button" class="layui-btn">点击登陆</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      svg: '',
      username: '',
      password: '',
      code: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/captcha').then((res) => {
        if (res.status === 200) {
          let obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.svg {
  position: relative;
  top: -15px;
}
.error {
  color: red;
}
</style>
