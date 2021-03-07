import { coffeeApp } from '../src/coffeApp';

describe("coffeeApp", () => {

  const prices = [
    { "drink_name": "short espresso", "prices": { "small": 3.03 } },
    { "drink_name": "latte", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
    { "drink_name": "flat white", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
    { "drink_name": "long black", "prices": { "small": 3.25, "medium": 3.50 } },
    { "drink_name": "mocha", "prices": { "small": 4.00, "medium": 4.50, "large": 5.00 } },
    { "drink_name": "supermochacrapucaramelcream", "prices": { "large": 5.00, "huge": 5.50, "mega": 6.00, "ultra": 7.00 } }
  ];
    
  const orders = [
    { "user": "coach", "drink": "long black", "size": "medium" },
    { "user": "ellis", "drink": "long black", "size": "small" },
    { "user": "rochelle", "drink": "flat white", "size": "large" },
    { "user": "coach", "drink": "flat white", "size": "large" },
    { "user": "zoey", "drink": "long black", "size": "medium" },
    { "user": "zoey", "drink": "short espresso", "size": "small" }
  ];
    
  const payments = [
    { "user": "coach", "amount": 2.50 },
    { "user": "ellis", "amount": 2.60 },
    { "user": "rochelle", "amount": 4.50 },
    { "user": "ellis", "amount": 0.65 }
  ];

  const balance = [
    { "user": "coach", "order_total": 8.00, "payment_total": 2.50, "balance": 5.50 },
    { "user": "ellis", "order_total": 3.25, "payment_total": 3.25, "balance": 0.00 },
    { "user": "rochelle", "order_total": 4.50, "payment_total": 4.50, "balance": 0.00 },
    { "user": "zoey", "order_total": 6.53, "payment_total": 0.00, "balance": 6.53 }
  ]
  it("should return the empty balance", () => {
    expect(coffeeApp([], [], [])).toEqual([])
  });

  it("should return the Balance with total payment for each userts", () => {
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
    expect(coffeeApp([], [], payments)).toEqual(balance)
  })

  it("should build a complete balance", () => {
    expect(coffeeApp(prices, orders, payments)).toEqual(balance)
  })
});
