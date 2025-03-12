const orderStatus = {
  samgyeopsal: '주문 대기',
  galbi: '주문 대기',
};

const updateStatus = function (menu, status) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (menu == 'samgyeopsal') {
        orderStatus.samgyeopsal = status;
      } else {
        orderStatus.galbi = status;
      }
      resolve(console.log(`🔄 ${menu}상태가 '${status}'로 변경되었습니다.`));
    }, 1000);
  });
};

module.exports = { orderStatus, updateStatus };
