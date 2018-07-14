<template>
  <div class="flex flex-row ali-center item-box">
    <div v-if="data.img" class="img">
      <img :src="data.img" />
    </div>
    <div class="flex flex-between font-wrap">
      <span class="title">{{data.title}}</span>
      <div class="flex flex-row ali-center">
        <span class="primary-tag">{{data.tag}}</span>
        <span class="fcolor-des">{{data.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InList',
  props: {
    'data': {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
.font-wrap .fcolor-des, .font-wrap .fcolor-des { font-size: 14px; }
.font-wrap {
  width: 500px;
  height: 80px;
  padding: 0 8px;
}
.title { text-align: left; width: 100%; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; height: 34px; line-height: 34px; font-size: 18px;}
.item-box {
  padding: 14px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
}
.img > img {
  width: 106px;
  height: 80px;
}
</style>
