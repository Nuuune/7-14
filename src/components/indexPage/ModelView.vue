<template>
  <div class="flex full-width ali-center">
    <div class="flex flex-center content-header">
      <span>信息公开</span>
    </div>
    <div class="flex ali-center full-width" style="padding: 0 28px; overflow: hidden">
      <List
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        class="full-width"
        style="height: 85vh; overflow-y: scroll; padding-right: 17px;"
      >
        <InItem v-for="(item, index) in data" :key="index" :data="item" />
      </List>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { List } from 'vant'
import InItem from '../common/InItem'

const fakeData = [
  {img: '/static/img/list_img.png', title: '第四教育署举行第六届小学班主任论坛', tag: '信息公开', time: '2016-05-16'},
  {img: '/static/img/list_img.png', title: '第四教育署举行第六届小学班主任论坛', tag: '信息公开', time: '2016-05-16'},
  {img: '', title: '第四教育署举行第六届小学班主任论坛', tag: '信息公开', time: '2016-05-16'},
  {img: '/static/img/list_img.png', title: '第四教育署举行第六届小学班主任论坛', tag: '信息公开', time: '2016-05-16'},
  {img: '/static/img/list_img.png', title: '第四教育署举行第六届小学班主任论坛', tag: '信息公开', time: '2016-05-16'}
]

export default {
  name: 'In-ModelList',
  components: {
    InItem,
    List
  },
  data () {
    return {
      data: [].concat(fakeData),
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        this.data = this.data.concat(fakeData)
        this.loading = false
        if (this.data.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>
<style scoped>
.van-list {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
}
.van-list::-webkit-scrollbar {
    display: none;
}
.detail-header { margin: 20px 0; }
.detail-header span { font-size: 14px;}
.detail-header span:nth-of-type(2) { margin: 0 30px; }
.detail-content { padding: 0 20px; font-size: 16px; }
.detail-content img { width: 100%; }
.detail-content p { text-align: left; white-space: pre-wrap; word-break: break-all; word-wrap: break-word; padding-top: 10px;}
</style>
