import { Price } from './Price'

export type CalcPrice = (drink: string, size: string) => number;

export function makeDrinkSizePrice(prices: Price[]) {

  const key = (drink: string, size: string): string => drink + "+*^" + size;

  const priceMap = prices.reduce<Map<string, number>>((acc, price) => {
    const prices = Object.entries(price.prices)

    prices.forEach((size) => {
      const value = size[1]
      if (value) {
        acc.set(key(price.drink_name, size[0]), value)
      } 
    })
    return acc
  }, new Map())

  const drinkSizePrice = (drink: string, size: string): number => {
    const cost = priceMap.get(key(drink, size))
    return cost === undefined ? 0 : cost
  };

  return drinkSizePrice;
}