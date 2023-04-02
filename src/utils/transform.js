export const transformCurrencies = (obj) => {
  return Object.entries(obj).map(([curr, price]) => {
    return { price, curr }
  })
}
