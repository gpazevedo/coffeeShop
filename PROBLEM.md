# Coffee Shop Espresso

Make sure you read **all** of this document carefully, and follow the guidelines
in it. Pay particular attention to the "What We Care About" section. We also
recommend you read
[9 Essential Tips on How to Tackle a Coding Challenge](https://www.codementor.io/learn-programming/9-essential-tips-tackle-coding-challenge).

## Background

We like coffee.

So we built an app to fetch coffee for people from our favourite barista.

The app keeps track of coffee ordered; what the balance is for each user; what users have paid for already; and what is still owed.

## Data

We've got the following data

- `data/prices.json` - provided by our barista. Has details of what beverages are available, and what their prices are.
- `data/orders.json` - list of beverages ordered by users of the app.
- `data/payments.json` - list of payments made by users paying for items they have purchased.

## Requirements

- Load the list of prices
- Load the orders
  - Calculate the total cost of each user's orders
- Load the payments
  - Calculate the total payment for each user
  - Calculate what each user now owes
- Return a JSON string containing the results of this work.
