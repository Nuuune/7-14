<template>
  <div class="flex full-width ali-center">
    <div class="flex flex-center content-header">
      <span>用户登录</span>
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
      <button @click="login" type="button" class="btn full-width fcolor-white bg-primary">登 陆</button>
    </div>
  </div>
</template>

<script>
import InputDropDown from '@/components/common/InputDropDown'
import Input from '@/components/common/Input'

export default {
  name: 'In-Login',
  components: {
    InputDropDown,
    Input
  },
  data () {
    return {
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
    },
    login: function () {
      if (this.company && this.account && this.pwd) {
        this.$router.replace('/index/InBannerDetail/1')
      } else {
        this.$toast('表单未填完')
      }
    }
  }
}
</script>
<style scoped>
.login-container{width: 80%; max-width: 500px; margin-top: 150px;}
</style>
