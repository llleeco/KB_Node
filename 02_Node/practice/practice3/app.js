const grillMeat = require('./grill');

async function startGrilling(menu) {
  const grilledmenu = await grillMeat(menu);
  console.log(grilledmenu + '가 다 구워졌습니다!');
  console.log('🍽️ 식사 시작!');
}

startGrilling('삼겹살');
