import { Order } from '../src/Order'
import { Balance } from '../src/Balance'
import { balanceFromOrders } from '../src/orders'

const orders = [
  { "user": "coach", "drink": "long black", "size": "medium" },
  { "user": "ellis", "drink": "long black", "size": "small" },
  { "user": "rochelle", "drink": "flat white", "size": "large" },
  { "user": "coach", "drink": "flat white", "size": "large" },
  { "user": "zoey", "drink": "long black", "size": "medium" },
  { "user": "zoey", "drink": "short espresso", "size": "small" }
];
  
const drinkSizePrice = (drink: string, size: string): number => {
  return 1
};
describe("Orders", () => {
  it("should add a balance for a user who ordered", () => {
    const postBalance = [{
      "balance": 1,
      "order_total": 1,
      "payment_total": 0,
      "user": "zoey",
    }
    ];

    const orders = [
      { "user": "zoey", "drink": "short espresso", "size": "small" }
    ];

    expect(balanceFromOrders(orders, drinkSizePrice)).toEqual(postBalance)
  })
  it("should build one balance all users who ordered and paid", () => {
    const postBalance = [{
      "balance": 2,
      "order_total": 2,
      "payment_total": 0,
      "user": "coach"
    }, {
      "balance": 1,
      "order_total": 1,
      "payment_total": 0,
      "user": "ellis",
    }, {
      "balance": 1,
      "order_total": 1,
      "payment_total": 0,
      "user": "rochelle",
    }, {
      "balance": 2,
      "order_total": 2,
      "payment_total": 0,
      "user": "zoey",
    }
    ];

    const orders = [
      { "user": "coach", "drink": "long black", "size": "medium" },
      { "user": "ellis", "drink": "long black", "size": "small" },
      { "user": "rochelle", "drink": "flat white", "size": "large" },
      { "user": "coach", "drink": "flat white", "size": "large" },
      { "user": "zoey", "drink": "long black", "size": "medium" },
      { "user": "zoey", "drink": "short espresso", "size": "small" }
        ];

    expect(balanceFromOrders(orders, drinkSizePrice)).toEqual(postBalance)
  })

})
