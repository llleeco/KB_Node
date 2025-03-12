const order = require('./order');

function o(name) {
  for (let i = 0; i < order.length; i++) {
    if (name == order[i].menu) {
      console.log(order[i].menu + ' 주문 수량: ' + order[i].num + '인분');
      return;
    }
  }
  console.log(name + '은 주문 내역에 없습니다.');
}

o('삼겹살');
