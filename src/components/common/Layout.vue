<template>
  <div class="container-fluid full-screen">
    <div class="row full-height">
      <!-- 左边屏-S -->
      <div class="clear-padding flex" style="flex: 1; max-width: 410px;">
        <div class="header">
          <slot name="headerL">左屏头</slot>
        </div>
        <div class="flex-i-full">
          <slot name="contentL">左屏身</slot>
        </div>
      </div>
      <!-- 左边屏-E -->
      <!-- 右边屏-S -->
      <div class="col-8 clear-padding r-col flex" style="flex: 2;">
        <div class="header">
          <slot name="headerR">右屏头</slot>
        </div>
        <div class="flex-i-full">
          <slot name="contentR">右屏身</slot>
        </div>
      </div>
      <!-- 右边屏-E -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r-col {
  padding-left: 4px !important;
  max-width: 100%;
}
.full-height {
  height: 100%;
}
.full-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.header {
  height: 44px;
  background-color: #00a6ef;
  color: #fff;
}
</style>
