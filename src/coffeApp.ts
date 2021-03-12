// Define your types (prices, orders, payments and balance)
// 
import { Balance } from './balance'
import { balanceFromOrders } from './order'
import { Payment } from './payment'
import { balanceFromPayments } from './payment/payments'
import { makeDrinkSizePrice } from './prices'
import { consolidateBalances} from './balance/balances'

export function coffeeApp(prices: any, orders: any, payments: Payment[]): Balance[] {

  const drinkSizePrice = makeDrinkSizePrice(prices)

  const paymentsBalance = balanceFromPayments(payments)
  const ordersBalance = balanceFromOrders(orders, drinkSizePrice);

  return consolidateBalances(paymentsBalance, ordersBalance)
}
