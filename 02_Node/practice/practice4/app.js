const processOrder = require('./orderProcessor');

async function processOrders() {
  await processOrder({ menu: '삽겹살', num: 2 });
  await processOrder({ menu: '목살', num: 3 });
  await processOrder({ menu: '갈비', num: 1 });
  console.log('🍽️ 모든 주문 처리 완료! 식사 시작!');
}

processOrders();
