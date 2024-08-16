const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

async function makeBeans() {
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();