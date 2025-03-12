const processOrder = function (order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(`✅ ${order.menu} ${order.num}인분 주문 처리 완료!`));
    }, 1000);
  });
};

module.exports = processOrder;
