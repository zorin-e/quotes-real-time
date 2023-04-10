<script>
import { NumberWithHighlight, PriceWithHightlight } from "@/components/Ticker"

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NumberWithHighlight,
    PriceWithHightlight
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
})
</script>

<template>
    <div
      :class="$style.item"
    >
      <div :class="$style.commonInfo">
        <div>
          <span :class="$style.ticker">{{ item.c }}</span>
        </div>
        <div :class="$style.description">{{ item.ltr }} | {{ item.name }}</div>
      </div>
      <div :class="$style.indicators">
        <PriceWithHightlight :value="item.ltp" :prevValue="item.pp" />
        <div :class="$style.percentChanges">
          <NumberWithHighlight :value="item.chg" />
          <NumberWithHighlight class="ml-5" :value="item.pcp" />
        </div>
      </div>
    </div>
</template>

<style lang='scss' module>
.item {
  border-top: solid 1px #cdcdcd;
  padding: 10px 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.description {
  color: #cdcdcd;
  font-size: 16px;
  margin-top: 8px;
}

.ticker {
  font-size: 20px;
}

.indicators {
  text-align: right;
}

.percentChanges {
  font-size: 16px;
  margin-top: 5px;
}
</style>
