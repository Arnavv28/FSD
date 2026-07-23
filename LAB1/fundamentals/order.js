import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`Order received: #${order.id} for ${order.customerName}`);
    console.log("Saving order to database");
    this.emit("orderPlaced", order);
  }
}

const orderObj = new OrderSystem();

// Sending email
orderObj.on("orderPlaced", (order) => {
  console.log(`Sending confirmation email to ${order.email}`);
});

// Inventory service
orderObj.on("orderPlaced", (order) => {
  order.items.forEach((item) => {
    console.log(`Reducing stock of ${item.name} by ${item.qty}`);
  });
});

// Shipping service
orderObj.on("orderPlaced", (order) => {
  console.log(`Creating shipping label for order #${order.id}`);
});

// Logging
orderObj.on("orderPlaced", (order) => {
  console.log(`Logging order ${order.id} - total ₹${order.total}`);
});

// Error
orderObj.on("error", (err) => {
  console.log(`Error in order: ${err.message}`);
});

orderObj.placeOrder({
  id: "ORD10001",
  customerName: "Ramesh Solanki",
  email: "ramesh.sol27@gmail.com",
  items: [
    { name: "Wireless Mouse", qty: 1 },
    { name: "Wireless Headset", qty: 2 },
  ],
  total: 2399,
});
