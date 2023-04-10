<script>
import { defineComponent, toRefs } from 'vue';
import { computed } from '@vue/reactivity';

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    prevValue: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const { value, prevValue } = toRefs(props)
    const number = computed(() => Number(value.value).toFixed(2))
    const prevNumber = computed(() => Number(prevValue.value).toFixed(2))
    const highlightClass = computed(() => {
      if (number.value > prevNumber.value) return 'Up'
      else if (number.value < prevNumber.value) return 'Down'
      return ''
    })

    return {
      highlightClass,
      number
    }
  }
})
</script>

<template>
  <div :class="[$style.price, $style['price' + highlightClass]]">{{ number }}</div>
</template>

<style lang='scss' module>
.price {
  color: #000;
  border-radius: 4px;
  display: inline-block;
  padding: 3px 5px;
  font-size: 19px;

  &Up {
    color: #fff;
    background: #62d434;
  }

  &Down {
    color: #fff;
    background: #e63535;
  }
}
</style>
