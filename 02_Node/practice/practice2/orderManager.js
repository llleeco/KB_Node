const orders = [];
const addOrder = function (menu, quantity) {
  orders.push({ menu, quantity });
};

module.exports = { addOrder, orders };
