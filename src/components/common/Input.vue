<template>
  <div :class="['my-input', customClass ? customClass : '']">
    <input v-model="value" :placeholder="placeholder" :type="type" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    'placeholder': {
      type: String,
      default: ''
    },
    'type': {
      type: String,
      default: 'text'
    },
    'customClass': {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value: function (n, o) {
      this.$emit('onchange', n)
    }
  }
}
</script>
