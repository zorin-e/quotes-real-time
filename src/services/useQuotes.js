import { ref } from "vue";

export function useQuotes ({
  url,
  tickers
}) {
  const ws = new WebSocket(url);

  const quotes = ref({})

  const updateTickers = (data) => {
    if (quotes.value[data.c]) quotes.value[data.c] = {...quotes.value[data.c], ...data}
    else quotes.value[data.c] = data
  }

  const init = () => {
    ws.onmessage = function (m) {
      const message = JSON.parse(m.data);
      if (message[0] === 'q') updateTickers(message[1])
    };

    ws.onopen = function () {
      ws.send(JSON.stringify(['quotes', tickers]));
    };
  }
  return {
    init,
    quotes
  }
}
