<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{msg}}</div>
      <div v-if="type === 'alert'"><div class="btnCommon success" @click="close()">确定</div></div>
      <div v-else>
        <div class="btnCommon cancel" @click="cancelEvent()">取消</div>
        <div class="btnCommon success" @click="successEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击了确定')
      }
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('点击了取消')
      }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    closeMask () {
      this.close()
    },
    cancelEvent () {
      this.cancel()
    },
    successEvent () {
      this.success()
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-main: #009688;
$btn-dark:darken($btn-main, 5%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background-color: #fff;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, .05);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}
.flex {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnCommon {
  width:105px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  &.success {
    background:$btn-main;
    color: #fff;
    &:hover {
      background:$btn-dark;
    }
  }
}
.mask {
  position: fixed;
  width:100%;
  height: 100%;
  background:rgba(0,0,0,.4);
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 2000;
}
</style>
