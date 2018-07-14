<template>
  <Layout>

    <div class="flex flex-row ali-center full-height" slot="headerL">
      <div class="logo"></div>
      <span class="logo-font">鼎创科技</span>
    </div>

    <div class="flex flex-row flex-end ali-center full-height" slot="headerR">
      <span class="header-btn"><i class="fas fa-times"></i></span>
      <span class="header-btn"><i class="fas fa-times"></i></span>
      <span class="header-btn"><i class="fas fa-times"></i></span>
    </div>

    <div class="flex ali-center full-height" slot="contentL">
      <div class="login-photo">
        <img src="../assets/login_photo.png" />
      </div>
      <div class="login-container">
        <div class="lab">
          <span>单位：</span>
        </div>
        <InputDropDown btnName="选择单位" @optionChange="onSelected" :options="options" />
        <div class="lab">
          <span>用户登录：</span>
        </div>
        <Input @onchange="setAccount" />
        <Input @onchange="setPwd" type="password" />
        <div class="lab text-right">
          <span class="fcolor-primary text-normal">忘记密码？</span>
        </div>
        <button type="button" class="btn full-width fcolor-white bg-primary">登 陆</button>
      </div>
    </div>

    <div class="flex ali-center full-height" style="background: #f7ffff" slot="contentR">
      <div class="login-right-font flex">
        <span>云效通</span>
        <span>专为教育打造的移动办公平台</span>
      </div>
      <div style="width: 567px; height: 300px;">
        <img src="../assets/login_right_photo.png" style="width:100%; height: 100%;" />
      </div>
    </div>

  </Layout>
</template>

<script>
import Layout from './common/Layout.vue'
import InputDropDown from './common/InputDropDown.vue'
import Input from './common/Input.vue'

export default {
  name: 'Login',
  components: {
    Layout,
    InputDropDown,
    Input
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: [
        {value: 'xx小学1', text: 'xx小学1'},
        {value: 'xx小学2', text: 'xx小学2'},
        {value: 'xx小学3', text: 'xx小学3'},
        {value: 'xx小学4', text: 'xx小学4'}
      ],
      company: '',
      account: '',
      pwd: ''
    }
  },
  methods: {
    onSelected: function (val) {
      this.company = val
    },
    setAccount: function (val) {
      this.account = val
    },
    setPwd: function (val) {
      this.pwd = val
    }
  }
}
</script>
<style scoped>
.login-right-font {
  width: 100%;
  height: 108px;
  margin-top: 70px;
  margin-bottom: 50px;
  color: #319cd6;
  font-weight: 600;
}
.login-right-font > span:first-child {
  font-size: 52px;
}
.login-right-font > span {
  font-size: 30px;
}
.login-container {
  width: 100%;
  padding: 0 46px;
}
.login-photo {
  width: 108px;
  height: 108px;
  margin-top: 70px;
  margin-bottom: 50px;
}
.login-photo > img {
  width: 100%;
  height: 100%;
}
.logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: #e01974;
}
.logo-font {
  font-size: 17px;
  line-height: 17px;
}
.header-btn {
  width: 28px;
  height: 28px;
  font-size: 19px;
  line-height: 28px;
}
.header-btn:hover {
  cursor: pointer;
}
</style>
