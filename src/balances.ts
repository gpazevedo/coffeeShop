import { Balance } from './Balance'
import { money } from './money'

export function consolidateBalances(balance1: Balance[], balance2: Balance[]): Balance[] {
  const balance1Map: Map<string, Balance> = mapBalance(new Map(), balance1)
  return Array.from(mapBalance(balance1Map, balance2).values())
}

function mapBalance(base: Map<string, Balance>, balance: Balance[]): Map<string, Balance> {
  return balance.reduce<Map<string, Balance>>((acc, balance) => {
    const balanceAcc = acc.get(balance.user)

    const thisBalance = balanceAcc === undefined ? 
      {
        user: balance.user,
        order_total: money(balance.order_total),
        payment_total: money(balance.payment_total),
        balance: money(balance.balance)
    } : {
      user: balanceAcc.user,
      order_total: money(balanceAcc.order_total+ balance.order_total ),
      payment_total: money(balanceAcc.payment_total + balance.payment_total),
      balance: money(balanceAcc.balance + balance.balance)
    }
    acc.set(thisBalance.user, thisBalance)

    return acc
  }, base)
}
