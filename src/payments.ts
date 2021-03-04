import { Payment } from './Payment'
import { Balance } from './Balance'
import { money } from './money'

export function balanceFromPayments(payments: Payment[]): Balance[] {
  const balanceMap = payments.reduce<Map<string, Balance>>((acc, payment) => {
    const paidAcc = acc.get(payment.user)
    const paid = paidAcc === undefined ? payment.amount : paidAcc.payment_total + payment.amount;

    const payerBalance = {
      user: payment.user,
      order_total: 0,
      payment_total: money (paid),
      balance: money (-paid)
    }
    acc.set(payment.user, payerBalance)
    return acc
  }, new Map())

  return Array.from(balanceMap.values())
}
