import { Order } from './Order'
import { Balance } from './Balance'
import { CalcPrice } from './prices'
import { money } from './money'

export function balanceFromOrders(orders: Order[], drinkSizePrice: CalcPrice): Balance[] {

  const balance = orders.reduce<Map<string, Balance>>((acc, order) => {
    const price = drinkSizePrice(order.drink, order.size)
    const userBalance = acc.get(order.user);

    const newBalance = userBalance === undefined ?
      {
        user: order.user,
        order_total: money (price),
        payment_total: 0,
        balance: money(price)
      } : {
        user: order.user,
        order_total: money (userBalance.order_total + price),
        payment_total: money (userBalance.payment_total),
        balance: money (userBalance.balance + price)
      }
    acc.set(order.user, newBalance)
    
    return acc
  }, new Map())

  return Array.from(balance.values())
}
