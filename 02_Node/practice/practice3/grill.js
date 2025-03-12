const grillMeat = function (menu) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menu);
    }, 2000);
  });
};

module.exports = grillMeat;
