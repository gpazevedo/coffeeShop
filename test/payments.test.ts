import { balanceFromPayments } from '../src/payments'
import { Payment } from '../src/Payment'
import { Balance } from '../src/Balance'

describe("Payments", () => {
  it("should return a empty Balance array for a empty Payment array", () => {
    expect(balanceFromPayments([])).toEqual([])
  })

  it("should return a empty Balance array for a empty Payment array", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
      { "user": "ellis", "amount": 2.60 },
      { "user": "rochelle", "amount": 4.50 },
      { "user": "ellis", "amount": 0.65 }
    ];
    expect(balanceFromPayments([])).toEqual([])
  })

  it("should return a Balance for the user in the Payment array", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
    ];
    const balance = [{
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "coach"
    }];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })

  it("should return a Balance for each user in the Payment array", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
      { "user": "ellis", "amount": 2.60 },
      { "user": "rochelle", "amount": 4.50 },
    ];
    const balance = [{
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "coach"
    }, {
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "ellis",
    }, {
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "rochelle",
    }
    ];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })

  it("should return just one Balance for each user in the Payment array", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
      { "user": "ellis", "amount": 2.60 },
      { "user": "rochelle", "amount": 4.50 },
      { "user": "ellis", "amount": 0.65 }
    ];
    const balance = [{
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "coach"
    }, {
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "ellis",
    }, {
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "rochelle",
    }
    ];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })
})