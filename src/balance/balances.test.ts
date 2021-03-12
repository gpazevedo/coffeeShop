import { consolidateBalances } from './balances'

describe("Balances", () => {
    const balance1 = [{
      "balance": 2.50,
      "order_total": 0,
      "payment_total": 2.50,
      "user": "coach"
    }, {
      "balance": 2.60,
      "order_total": 0,
      "payment_total": 2.60,
      "user": "ellis",
    }, {
      "balance": 4.50,
      "order_total": 0,
      "payment_total": 4.50,
      "user": "rochelle",
    }
    ];
    const balance2 = [{
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
    }, {
      "balance": 0,
      "order_total": 0,
      "payment_total": 0,
      "user": "zoey",
    }
    ];
  const consolidated = [{
    "balance": 2.50,
    "order_total": 0,
    "payment_total": 2.50,
    "user": "coach"
  }, {
    "balance": 2.60,
    "order_total": 0,
    "payment_total": 2.60,
    "user": "ellis",
  }, {
    "balance": 4.50,
    "order_total": 0,
    "payment_total": 4.50,
    "user": "rochelle",
  }, {
    "balance": 0,
    "order_total": 0,
    "payment_total": 0,
    "user": "zoey",
  }
  ];
  it("should consolidate 2 balances", () => {
    expect(consolidateBalances(balance1, balance2)).toEqual(consolidated)
  });
})
