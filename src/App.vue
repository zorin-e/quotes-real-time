<script setup>
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { TickerItem } from "@/components/Ticker"
import { useQuotes } from "@/services/useQuotes"
import Spinner from "@/components/Spinner.vue"

const { init, quotes } = useQuotes({
  url: 'wss://wss.tradernet.ru',
  tickers: ["RSTI", "GAZP", "MRKZ", "RUAL", "HYDR", "MRKS", "SBER", "FEES", "TGKA", "VTBR", "ANH.US", "VICL.US", "BURG.US", "NBL.US", "YETI.US", "WSFS.US", "NIO.US", "DXC.US", "MIC.US", "HSBC.US", "EXPN.EU", "GSK.EU", "SHP.EU", "MAN.EU", "DB1.EU", "MUV2.EU", "TATE.EU", "KGF.EU", "MGGT.EU", "SGGD.EU"]
})
const isQuotes = computed(() => Object.keys(quotes.value).length > 0)

onMounted(() => {
  init()
})
</script>

<template>
  <template v-if="isQuotes">
    <TickerItem
      v-for="{ c, pcp, ltr, name, ltp, chg, pp } in quotes"
      :key="c"
      :item="{ c, pcp, ltr, name, ltp, chg, pp }"
    />
  </template>
  <Spinner v-else />
</template>

