//코드 다시 보기
const { calculateTotal, isTopMenu } = require('./orderProcessor');

const orderList = require('./orderList');
console.log(`✅ 총 주문 수량: `);
const result = calculateTotal(orderList);
console.log(result);

function topmenu(menu) {
  let answer = '';
  if (isTopMenu(menu)) {
    answer = '네!';
  } else {
    answer = '아니오!';
  }
  console.log(`🥩 ${menu}이 가장 인기 메뉴인가요? ${answer}`);
}

topmenu('삼겹살');
topmenu('목살');
