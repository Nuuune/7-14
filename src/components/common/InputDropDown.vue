<template>
  <div class="my-input z-top-2">
    <input v-model="value" type="text" />
    <span @click="_toggleOptions">{{btnName}}</span>
    <ul class="options" v-show="isShow">
      <li v-for="(item, index) in options" :key="index">
        <span @click="_select(index)">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InputDropDown',
  props: {
    'btnName': String,
    'options': {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      isShow: false,
      value: ''
    }
  },
  methods: {
    _select: function (index) {
      this.value = this.options[index].text
      this.isShow = false
    },
    _toggleOptions: function () {
      this.isShow = !this.isShow
    }
  },
  watch: {
    value: function (n, o) {
      let i
      for (i = 0; i < this.options.length; i++) {
        if (this.options[i].text === n) {
          this.$emit('optionChange', this.options[i].value)
          break
        }
      }
    }
  }
}
</script>

<style>
.options {
  position: absolute;
  width: 75%;
  padding: 5px 0;
  top: 0;
  left: 0;
  max-height: 100px;
  overflow-y: scroll;
  border: 1px solid #dbdbdb;
  background: #fff;
  box-sizing: border-box;

}
.options > li:hover{
  cursor: default;
  background: #3ac4ff;
}
.options > li {
  padding: 5px 0;
}
.z-top-2 {
  z-index: 2;
}
</style>
