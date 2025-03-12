const filterMenuByPrice = require('./menuFilter');
const menu = require('./menu');

async function showAffordableMenu() {
  const afforedmenu = await filterMenuByPrice(menu, 18000);
  for (let i = 0; i < afforedmenu.length; i++) {
    console.log(`${afforedmenu[i].name}: ${afforedmenu[i].price} 원`);
  }
}
console.log('✅ 선택 가능한 메뉴:');
showAffordableMenu();
