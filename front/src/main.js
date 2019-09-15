import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
// import zh from 'vee-validate/dist/locale/zh_CN'
// method1 to zh-cn
// const validator = new Validator()
// validator.localize('zh-CN')
// Vue.use(VeeValidate)
// Validator.localize('zh-CN', zh)

// methos2

import './local/index'

Vue.use(VeeValidate)

const validator = new Validator()
validator.localize('zh-CN')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
