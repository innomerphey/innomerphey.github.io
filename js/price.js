import { randFloat } from './utils'

const BID_SELECTOR = '[data-bid]'
const ASK_SELECTOR = '[data-ask]'

const MIN_PRICE = 1200
const MAX_PRICE = 4599
const MAX_SPREAD = 0.8

function updateDOM(bid, ask) {
  document.querySelector(BID_SELECTOR).innerText = bid
  document.querySelector(ASK_SELECTOR).innerText = ask
}

// eslint-disable-next-line import/prefer-default-export
export function update() {
  const bid = randFloat(MIN_PRICE, MAX_PRICE)
  const ask = bid + randFloat(0, MAX_SPREAD)
  updateDOM(bid.toFixed(2), ask.toFixed(2))
}
