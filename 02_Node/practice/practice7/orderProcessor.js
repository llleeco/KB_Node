const processOrder = function (order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (order.quantity < 3) {
        resolve(
          console.log(
            `❌ ${order.name} ${order.quantity}인분은 주문 최소 수량 미달입니다.`
          )
        );
      } else {
        resolve(
          console.log(`✅ ${order.name} ${order.quantity}인분 주문 완료!`)
        );
      }
    }, 1000);
  });
};
module.exports = processOrder;
