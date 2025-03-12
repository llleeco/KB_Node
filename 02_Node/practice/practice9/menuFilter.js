const filterMenuByPrice = function (menu, maxPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menu.filter((menu) => menu.price <= maxPrice));
    }, 2000);
  });
};

module.exports = filterMenuByPrice;
