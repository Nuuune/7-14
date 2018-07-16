<template>
  <Layout>

    <!-- <div class="flex flex-row ali-center full-height" slot="headerL">
      <div class="logo"></div>
      <span class="logo-font">鼎创科技 沐勇</span>
    </div>

    <div class="flex flex-row flex-end ali-center full-height" slot="headerR">
      <span class="header-btn"><i class="fas fa-times"></i></span>
      <span class="header-btn"><i class="fas fa-times"></i></span>
      <span class="header-btn"><i class="fas fa-times"></i></span>
    </div> -->

    <div class="flex ali-center full-height index-bg" slot="contentL">
      <div class="flex flex-center content-header">
        <span>首页</span>
        <span class="right fcolor-primary" style="font-size: 13px; padding: 0 16px">切换单位</span>
      </div>
      <!-- 轮播图开始 -->
      <div class="full-width">
        <swiper
          :options="swiperOption">
         <swiper-slide><div @click="toDetail(1)"><img style="width: 100%; height: 165px;" src="../assets/banner_1.jpg" /><div class="banner-des">门户改版政务公开等页面设想</div></div></swiper-slide>
         <swiper-slide><div @click="toDetail(2)"><img style="width: 100%; height: 165px;" src="../assets/banner_1.jpg" /><div class="banner-des">门户改版政务公开等页面设想</div></div></swiper-slide>
         <swiper-slide><div @click="toDetail(3)"><img style="width: 100%; height: 165px;" src="../assets/banner_1.jpg" /><div class="banner-des">门户改版政务公开等页面设想</div></div></swiper-slide>
         <swiper-slide><div @click="toDetail(4)"><img style="width: 100%; height: 165px;" src="../assets/banner_1.jpg" /><div class="banner-des">门户改版政务公开等页面设想</div></div></swiper-slide>
         <div class="swiper-pagination" style="text-align: right; padding-right: 10px; bottom: 6px;" slot="pagination"></div>
       </swiper>
      </div>
      <!-- 轮播图结束 -->

      <div class="icon-group flex full-width">
        <div class="flex flex-row flex-around">
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
        </div>
        <div class="icon-group flex flex-row flex-around">
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
          <div @click="toModel" class="flex ali-center icon-btn">
            <div class="icon-img"></div>
            <span>学校介绍</span>
          </div>
        </div>
      </div>

      <div class="full-width" style="background: #fafafa; height: 12px;"></div>

      <div class="full-width" style="font-size: 14px; border-bottom: 1px solid #ebebeb;">
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div class="list-title">最新新闻</div>
          <div @click="toNews" class="list-des">更多 <i class="fas fa-angle-right"></i></div>
        </div>
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div><span class="red-tag">最新</span>我校庆祝第30届教师节</div>
          <div class="list-des">7-04</div>
        </div>
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div><span class="red-tag">最新</span>我校庆祝第30届教师节</div>
          <div class="list-des">7-04</div>
        </div>
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div>我校庆祝第30届教师节</div>
          <div class="list-des">7-04</div>
        </div>
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div>我校庆祝第30届教师节</div>
          <div class="list-des">7-04</div>
        </div>
        <div class="flex flex-row flex-between full-width ali-center" style="padding: 12px; border-top: 1px solid #ebebeb">
          <div>我校庆祝第30届教师节</div>
          <div class="list-des">7-04</div>
        </div>
      </div>

      <div class="flex flex-between flex-row full-width" style="background: #fafafa; padding: 4px 5px;">
        <div @click="toLogin" class="flex flex-row ali-center">
          <img src="../assets/login_photo.png" style="width:46px; height:46px" />
          <span class="fcolor-primary">请登录</span>
        </div>
        <div class="flex flex-row">
          <button type="button" class="btn full-width fcolor-white bg-primary">进入系统</button>
        </div>
      </div>

    </div>

    <div class="flex ali-center full-height" style="background: #fff" slot="contentR">
      <router-view />
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
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
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
    toModel: function () {
      this.$router.push('/index/modelList')
    },
    toNews: function () {
      this.$router.push('/index/newsList')
    },
    toDetail: function (id) {
      this.$router.push(`/index/InBannerDetail/${id}`)
    },
    toLogin: function () {
      this.$router.push('/index/login')
    }
  }
}
</script>
<style scoped>
.list-title {
  border-left: 3px solid #009aec;
  padding-left: 5px;
  font-size: 18px;
}
.list-des {
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  color: #b7b7b7;
}
.icon-group{
  margin: 10px 0;
}
.icon-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #93a9e0;
}
.icon-btn > span {
  font-size: 14px;
  text-align: center;
}
.banner-des {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: left;
  height: 34px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  font-size: 14px;
  padding-left: 10px;
  color: #fff;
  line-height: 34px;
}
</style>
