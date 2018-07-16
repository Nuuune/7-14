<template>
  <div class="flex full-width ali-center">
    <div class="flex flex-center content-header">
      <span>详情</span>
      <span @click="goBack" class="left fcolor-primary" style="font-size: 13px; padding: 0 16px"><i class="fas fa-angle-left" style="padding-right: 8px;"></i>返回</span>
    </div>
    <div class="flex ali-center full-width" style="padding: 0 28px">
      <div class="flex ali-center detail-header">
        <h4>门户改版政务公开等页面设想</h4>
        <div class="fcolor-des full-width flex flex-row flex-center ali-center">
          <span>时间：2016-04-11</span>
          <span>发布人：龚路中心小学</span>
          <span>浏览次数：30</span>
        </div>
      </div>
      <div class="flex ali-center full-width detail-content">
        <img src="../../assets/banner_1.jpg" />
        <p>       “有了好课堂，才会成就好学校。” 龚路中心小学连续六年“有了好课堂，才会成就好学校。” 龚路中心小学连续六年“有了好课堂，才会成就好学校。” 龚路中心小学连续六年“有了好课堂，才会成就好学校。” 龚路中心小学连续六年“有了好课堂，才会成就好学校。” 龚路中心小学连续六年</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'In-BannerDetail',
  data () {
    return {

    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/index/InBannerDetail/1')
    }
  }
}
</script>
<style scoped>
.detail-header { margin: 20px 0; }
.detail-header span { font-size: 14px;}
.detail-header span:nth-of-type(2) { margin: 0 30px; }
.detail-content { padding: 0 20px; font-size: 16px; }
.detail-content img { width: 100%; }
.detail-content p { text-align: left; white-space: pre-wrap; word-break: break-all; word-wrap: break-word; padding-top: 10px;}
</style>
