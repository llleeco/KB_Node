const processOrder = require('./orderProcessor');

const orderList = [
  { name: '삼겹살', quantity: 2 },
  { name: '목살', quantity: 3 },
  { name: '갈비', quantity: 1 },
  { name: '항정살', quantity: 4 },
  { name: '목살', quantity: 5 },
];

async function processAllOrders() {
  for (order of orderList) {
    await processOrder(order);
  }
}
processAllOrders();
