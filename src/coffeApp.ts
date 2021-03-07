// Define your types (prices, orders, payments and balance)
// 
import { Balance } from './Balance'
import { balanceFromOrders } from './orders'
import { Payment } from './Payment'
import { balanceFromPayments } from './payments'
import { Price } from './Price'
import { makeDrinkSizePrice } from './prices'
import { consolidateBalances} from './balances'

export function coffeeApp(prices: any, orders: any, payments: Payment[]): Balance[] {

  const drinkSizePrice = makeDrinkSizePrice(prices)

  const paymentsBalance = balanceFromPayments(payments)
  const ordersBalance = balanceFromOrders(orders, drinkSizePrice);

  return consolidateBalances(paymentsBalance, ordersBalance)
}
