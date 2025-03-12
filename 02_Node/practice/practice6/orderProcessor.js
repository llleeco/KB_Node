let totalquantity = [
  { name: '삼겹살', quantity: 0 },
  { name: '목살', quantity: 0 },
  { name: '갈비', quantity: 0 },
];

const calculateTotal = function (orderList) {
  let sam = 0;
  let mok = 0;
  let gal = 0;

  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].name == '삼겹살') {
      totalquantity[0].quantity += orderList[i].quantity;
      sam += orderList[i].quantity;
    } else if (orderList[i].name == '목살') {
      totalquantity[1].quantity += orderList[i].quantity;
      mok += orderList[i].quantity;
    } else if (orderList[i].name == '갈비') {
      totalquantity[2].quantity += orderList[i].quantity;
      gal += orderList[i].quantity;
    }
  }

  return {
    삼겹살: sam,
    목살: mok,
    갈비: gal,
  };
  //   return totalquantity;
};

const isTopMenu = function (menu) {
  let max = totalquantity[0].quantity;
  Topmenu = totalquantity[0].name;
  if (totalquantity[1].quantity > max) {
    max = totalquantity[1].quantity;
    Topmenu = totalquantity[1].name;

    if (totalquantity[2].quantity > max) {
      max = totalquantity[1].quantity;
      Topmenu = totalquantity[2].name;
    }
  }
  return menu == Topmenu;
};

module.exports = { calculateTotal, isTopMenu };
