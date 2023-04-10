<script>
import { defineComponent, toRefs } from 'vue';
import { computed } from '@vue/reactivity';

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const { value } = toRefs(props)
    const number = computed(() => Number(value.value).toFixed(2))
    const highlightClass = computed(() => {
      if (number.value > 0) return 'up'
      else if (number.value < 0) return 'down'
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
  <span :class="$style[highlightClass]">{{ number }}</span>
</template>

<style module>
.up {
  color: #62d434;
}

.down {
  color: #e63535;
}
</style>
