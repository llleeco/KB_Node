const { addOrder, orders } = require('./orderManager');

addOrder('삼겹살', 3);
addOrder('목살', 2);

function print() {
  if (orders.length <= 0) {
    console.log('❌ 주문 내역이 없습니다.');
  } else {
    console.log('✅ 현재 주문 내역: ');
    for (let i = 0; i < orders.length; i++) {
      console.log(`${orders[i].menu}: ${orders[i].quantity}인분`);
    }
  }
}

print();
