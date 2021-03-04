import { Payment } from './Payment'
import { Balance } from './Balance'

export function balanceFromPayments(payments: Payment[]): Balance[] {
    const balanceMap = payments.reduce<Map<string, Balance>>((acc, payment) => {
    const payerBalance = {
      user: payment.user,
      order_total: 0,
      payment_total: 0,
      balance: 0
    }
    acc.set(payment.user, payerBalance)
    return acc
  }, new Map())

  return Array.from(balanceMap.values())
}
