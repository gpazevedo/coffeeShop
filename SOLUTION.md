# Reasonings

A barista offers beverages, his users order them and make payments.
This app gets all the beverages, the orders, and payments and produces a balance for each user.

Here we describe the evolution of my thinking about this problem and my solution for the proposed problem.

## Problem Destilled

### Data Inputs

The problem specifies 3 data inputs ("prices.json", "orders.json", "payments.json") and asks a derived data output: "balances.json".

The "prices.json" data input provides the available beverages details:

- Beverage name
- Beverage sizes and corresponding prices

The "orders.json" data input provides a flux of orders. For each order: the "user" ("who ordered"), the beverage ("drink") and the "size".

The "payments.json" data input provides a flux of payments. What users have already paid. For each payment: the "user" and the "amount" paid.

### Data Output

The balance output: for each "user" the cost of the coffee ordered ("order_total"), what users have paid for already ("payment_total") and what is still owed ("balance").

## Solution

### Architecture Design

![Architecture](./Modules.jpg "Components Diagram")

### Development, step by step

1) Setup a running application, able to be tested and returning an empty array
2) It returns an empty Balance array
3) payments: Builds a Balance with the payers
4) payments: Builds a Balance with the total paid by each payer
5) coffeeApp: Builds a Balance with the total paid by each payer
6) orders module: Builds a balance with the users that ordered
7) orders module: Builds a balance with the orders with unique price
8) balances module: Consolidates 2 balances
9) Consolidated Balance with real prices
