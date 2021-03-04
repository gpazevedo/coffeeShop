import { balanceFromPayments } from '../src/payments'
import { Payment } from '../src/Payment'
import { Balance } from '../src/Balance'

describe("Payments", () => {
  it("should return a empty Balance array for a empty Payment array", () => {
    expect(balanceFromPayments([])).toEqual([])
  })

  it("should return a Balance for the user in the Payment array", () => {
    const payments = [
      { "user": "coach", "amount": 0 },
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
      { "user": "coach", "amount": 0 },
      { "user": "ellis", "amount": 0 },
      { "user": "rochelle", "amount": 0 },
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
      { "user": "coach", "amount": 0 },
      { "user": "ellis", "amount": 0 },
      { "user": "rochelle", "amount": 0 },
      { "user": "ellis", "amount": 0 }
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

  it("should return the Balance with the paid value for a user", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
    ];
    const balance = [{
      "balance": -2.50,
      "order_total": 0,
      "payment_total": 2.50,
      "user": "coach"
    }];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })

  it("should return a Balance with the paid value for each user with single payment", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
      { "user": "ellis", "amount": 2.60 },
      { "user": "rochelle", "amount": 4.50 },
    ];
    const balance = [{
      "balance": -2.50,
      "order_total": 0,
      "payment_total": 2.50,
      "user": "coach"
    }, {
      "balance": -2.60,
      "order_total": 0,
      "payment_total": 2.60,
      "user": "ellis",
    }, {
      "balance": -4.50,
      "order_total": 0,
      "payment_total": 4.50,
      "user": "rochelle",
    }
    ];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })

  it("should return the Balance with total payment for each user with multiples payments", () => {
    const payments = [
      { "user": "coach", "amount": 2.50 },
      { "user": "ellis", "amount": 2.60 },
      { "user": "rochelle", "amount": 4.50 },
      { "user": "ellis", "amount": 0.65 }
    ];
    const balance = [{
      "balance": -2.50,
      "order_total": 0,
      "payment_total": 2.50,
      "user": "coach"
    }, {
      "balance": -3.25,
      "order_total": 0,
      "payment_total": 3.25,
      "user": "ellis",
    }, {
      "balance": -4.50,
      "order_total": 0,
      "payment_total": 4.50,
      "user": "rochelle",
    }
    ];
    expect(balanceFromPayments(payments)).toEqual(balance)
  })
})